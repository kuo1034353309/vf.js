import { AbstractFilter } from './AbstractFilter';

export class CircleFadeFilter extends AbstractFilter {

        private static readonly fragmentSrc: string = `
            precision mediump float;
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;

            uniform highp vec4 inputSize;
            uniform highp vec4 outputFrame;

            varying vec2 vFilterCoord;
            varying vec2 vTextureCoord;

            void main()
            {
                float m = outputFrame.z / 2000.0;
                float t = inputSize.y / inputSize.x;
                vec2 circle = vFilterCoord - 0.5;
                circle.y = circle.y * t;
                float d = length(circle);
                float p2 = progress * progress;
                if(d > p2) {
                    gl_FragColor = texture2D(previousTexture, vFilterCoord);
                } else {
                    gl_FragColor = texture2D(uSampler, vTextureCoord);
                }
                gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
            }
        `;

        constructor() {
            super('', CircleFadeFilter.fragmentSrc);
        }
    }

