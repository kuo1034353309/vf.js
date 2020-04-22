import { AbstractFilter } from './AbstractFilter';

export class CrossFadeFilter extends AbstractFilter {

        private static readonly fragmentSrc: string = `
            precision mediump float;
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            varying vec2 vFilterCoord;
            varying vec2 vTextureCoord;
            void main()
            {
                vec4 col = texture2D(previousTexture, vFilterCoord);
                vec4 col2 = texture2D(uSampler, vTextureCoord);
                gl_FragColor = vec4(mix(col, col2, progress));
            }
        `;

        constructor() {
            super('', CrossFadeFilter.fragmentSrc);
        }
    }

