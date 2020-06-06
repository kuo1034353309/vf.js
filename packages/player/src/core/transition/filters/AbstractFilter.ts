import { ITransition } from '../ITransition';


export interface AbstractFilterUniforms {
        filterMatrix: vf.Matrix;
        resolution: number;
        previousTexture: vf.RenderTexture;
        progress: number;
    }

export class AbstractFilter extends vf.Filter implements ITransition {

        public static readonly vertexSrc: string = `
            precision highp float;
            
            attribute vec2 aVertexPosition;
            attribute vec2 aTextureCoord;
            attribute vec4 aColor;
            
            uniform mat3 projectionMatrix;
            uniform mat3 filterMatrix;
            uniform vec4 inputSize;
            uniform vec4 outputFrame;
            uniform float resolution;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            void main(void){
                gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
                // filterMatrix.xy = ((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw;
                vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy / resolution;
                // vFilterCoord = (((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw) * aTextureCoord / resolution;
                vTextureCoord = aTextureCoord ;
            }
        `;

        private static readonly crossFadeUniforms = {
            filterMatrix: vf.Matrix.TEMP_MATRIX,
            resolution: vf.settings.RESOLUTION,
            previousTexture:  null,
            progress: 0.0,
        };

        private target?: vf.DisplayObject;

        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any) {
            super(
                vertexSrc   || AbstractFilter.vertexSrc,
                fragmentSrc,
                uniforms    || AbstractFilter.crossFadeUniforms,
            );
        }

        public apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture) {
            const maskMatrix = new vf.Matrix();
            (filterManager as any).calculateNormalizedScreenSpaceMatrix(maskMatrix);
            this.uniforms.filterMatrix = maskMatrix;
            this.uniforms.resolution = vf.settings.RESOLUTION;
            // super.apply(filterManager, input, output, false); // 这样写ipad下会报错
            filterManager.applyFilter(this, input, output, undefined || false);
        }

        public setPreviousTexture(value: any): void {
            this.uniforms.previousTexture = value;
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

