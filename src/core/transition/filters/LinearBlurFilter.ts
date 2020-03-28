import { AbstractFilter } from './AbstractFilter';


export interface LinearBlurFilterUniforms {
        filterMatrix: PIXI.Matrix;
        resolution: number;
        previousTexture: PIXI.RenderTexture;
        progress: number;
        intensity: number;
    }

export class LinearBlurFilter extends AbstractFilter {

        private static readonly linearBlurUniforms = {
            filterMatrix:    PIXI.Matrix.TEMP_MATRIX,
            resolution:      PIXI.settings.RESOLUTION,
            previousTexture: null,
            progress:        0.0,
            intensity:       0.1,
        };

        private static readonly fragmentSrc: string = `
            #ifdef GL_ES
            precision highp float;
            #endif
            
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            uniform float resolution;
            uniform float intensity;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            const int PASSES = 8;
            
            void main() {
                vec2 p1 = vFilterCoord.xy;
                vec2 p2 = vTextureCoord.xy;
                vec4 c1 = vec4(0.0), c2 = vec4(0.0);
                float disp = intensity*(0.5-distance(0.5, progress));
                for (int xi=0; xi<PASSES; ++xi) {
                        float x = float(xi) / float(PASSES) - 0.5;
                    for (int yi=0; yi<PASSES; ++yi) {
                        float y = float(yi) / float(PASSES) - 0.5;
                        vec2 v = vec2(x,y);
                        float d = disp;
                        c1 += texture2D(previousTexture, p1 + d*v);
                        c2 += texture2D(uSampler, p2 + d*v);
                    }
                }
                c1 /= float(PASSES*PASSES);
                c2 /= float(PASSES*PASSES);
                gl_FragColor = mix(c1, c2, progress);
            }
        `;

        constructor() {
            super(AbstractFilter.vertexSrc, LinearBlurFilter.fragmentSrc, LinearBlurFilter.linearBlurUniforms);
        }
    }

