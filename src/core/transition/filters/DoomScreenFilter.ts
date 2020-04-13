import { ITransition } from '../ITransition';
import { AbstractFilter } from './AbstractFilter';


export interface DoomScreenFilterUniforms {
        resolution: number;
        previousTexture: vf.RenderTexture;
        progress: number;
        barWidth: number;
        amplitude: number;
        noise: number;
        frequency: number;
    }

export class DoomScreenFilter extends vf.Filter implements ITransition {

        private static readonly linearblurUniforms = {
            resolution:      vf.settings.RESOLUTION,
            previousTexture: null,
            progress:        0.0,
            barWidth:        10,
            amplitude:       2.0,
            noise:           0.1,
            frequency:       1.0,
        };

        private static readonly fragmentSrc: string = `
            #ifdef GL_ES
            precision highp float;
            #endif
            
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            uniform float resolution;
            
            uniform int barWidth;
            uniform float amplitude;
            uniform float noise;
            uniform float frequency;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            float rand(int num) {
                return fract(mod(float(num) * 67123.313, 12.0) * sin(float(num) * 10.3) * cos(float(num)));
            }
            
            float wave(int num) {
                float fn = float(num) * frequency * 0.1  * float(barWidth);
                return cos(fn * 0.5) * cos(fn * 0.13) * sin((fn+10.0) * 0.3) / 2.0 + 0.5;
            }
            
            float pos(int num) {
                return noise == 0.0 ? wave(num) : mix(wave(num), rand(num), noise);
            }
            
            void main() {
                int bar = int(vFilterCoord.x) / barWidth;
                float scale = 1.0 + pos(bar) * amplitude;
                float phase = progress * scale;
                float posY = vFilterCoord.y / resolution;
                vec2 p;
                vec4 c;
                if (phase + posY < 1.0) {
                    p = vec2(vFilterCoord.x, vFilterCoord.y + mix(0.0, resolution, phase)) / resolution;
                    c = texture2D(previousTexture, p);
                } else {
                    p = vTextureCoord.xy / resolution;
                    c = texture2D(uSampler, p);
                }
                gl_FragColor = c;
            }
        `;

        private target?: vf.DisplayObject;
        constructor() {
            super(AbstractFilter.vertexSrc, DoomScreenFilter.fragmentSrc, DoomScreenFilter.linearblurUniforms);
            this.padding = 0;
        }

        /**
         * @param {vf.FilterManager} filterManager
         * @param {vf.RenderTarget} input
         * @param {vf.RenderTarget} output
         * @override
         */
        public apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture) {
            const maskMatrix = new vf.Matrix();
            // filterManager.calculateNormalizedScreenSpaceMatrix(maskMatrix);
            this.uniforms.filterMatrix = maskMatrix;
            this.uniforms.resolution = vf.settings.RESOLUTION;
            super.apply(filterManager, input, output, false);
        }

        /**
         * 设置前置纹理
         * @param value
         */
        public setPreviousTexture(value: any): void {
            this.uniforms.previousTexture = value;
        }

        /**
         * 设置变化进度
         * @param {number} value
         */
        public setProgress(value: number): void {
            value = Math.min(1, value);
            value = Math.max(0, value);
            this.uniforms.progress = value;
        }
        public set progress(value: number) {
            value = Math.min(1, value);
            value = Math.max(0, value);
            this.uniforms.progress = value;
        }
        public get progress(): number {
            return this.uniforms.progress;
        }

        public applyTranisition(target: vf.DisplayObject): void {
            this.target = target;
            this.target.filters = [this];
        }
        public dispose(): void {
            if (this.target) {
                this.target.filters = [];
            }
        }
    }
    

