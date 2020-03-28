import { AbstractFilter } from './AbstractFilter';


export interface WindFilterUniforms {
        filterMatrix: PIXI.Matrix;
        resolution: number;
        previousTexture: PIXI.RenderTexture;
        progress: number;
        size: number;
    }

export class WindFilter extends AbstractFilter {

        private static readonly linearBlurUniforms = {
            filterMatrix:    PIXI.Matrix.TEMP_MATRIX,
            resolution:      PIXI.settings.RESOLUTION,
            previousTexture: null,
            progress:        0.0,
            size:            0.2,
        };

        private static readonly fragmentSrc: string = `
            #ifdef GL_ES
            precision highp float;
            #endif
            
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            uniform float resolution;
            uniform float size;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            float rand (vec2 co) {
                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
            }
            
            void main() {
                float r = rand(vec2(0, vTextureCoord.y));
                float m = smoothstep(0.0, -size, vTextureCoord.x*(1.0-size) + size*r - (progress * (1.0 + size)));
                gl_FragColor = mix(texture2D(previousTexture, vFilterCoord), texture2D(uSampler, vTextureCoord), m);
            }
        `;

        constructor() {
            super(AbstractFilter.vertexSrc, WindFilter.fragmentSrc, WindFilter.linearBlurUniforms);
        }
    }

