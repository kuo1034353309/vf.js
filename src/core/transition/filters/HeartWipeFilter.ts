import { AbstractFilter } from './AbstractFilter';


export interface HeartWipeFilterUniforms {
        filterMatrix: PIXI.Matrix;
        resolution: number;
        previousTexture: PIXI.RenderTexture;
        progress: number;
        strength: number;
    }

export class HeartWipeFilter extends AbstractFilter {

        private static readonly linearBlurUniforms = {
            filterMatrix:    PIXI.Matrix.TEMP_MATRIX,
            resolution:      PIXI.settings.RESOLUTION,
            previousTexture: null,
            progress:        0.0,
        };

        private static readonly fragmentSrc: string = `
            #ifdef GL_ES
            precision highp float;
            #endif
            
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            uniform float resolution;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            bool inHeart (vec2 p, vec2 center, float size) {
                if (size == 0.0) return false;
                vec2 o = (p-center)/(1.6*size);
                return pow(o.x*o.x+o.y*o.y-0.3, 3.0) < o.x*o.x*pow(o.y, 3.0);
            }
            
            void main() {
                vec2 p1 = vFilterCoord.xy / resolution;
                vec2 p2 = vTextureCoord.xy / resolution;
                float m = inHeart(p1, vec2(0.5, 0.4), progress) ? 1.0 : 0.0;
                gl_FragColor = mix(texture2D(previousTexture, p1), texture2D(uSampler, p2), m);
            }
        `;

        constructor() {
            super(AbstractFilter.vertexSrc, HeartWipeFilter.fragmentSrc, HeartWipeFilter.linearBlurUniforms);
        }
    }

