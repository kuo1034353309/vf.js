import { AbstractFilter } from './AbstractFilter';

export class ToTearFilter extends AbstractFilter {

        private static readonly fragmentSrc: string = `
            precision highp float;
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            
            void main() {
                vec4 displacement1 = texture2D( previousTexture, vTextureCoord);
                vec4 displacement2 = texture2D( uSampler, vFilterCoord);
                vec4 displacement = mix(displacement1, displacement2, vec4(progress));
                vec2 mixTexture = mix(displacement.xy, vTextureCoord.xy, vec2(progress));
                vec2 testPos1 = mixTexture + (1.0 - progress) * displacement.xy * 0.5;
                vec2 testPos = mix(testPos1, vec2(1.0), vec2(1.0 - progress));
                vec2 distUv = vec2(testPos.x, vTextureCoord.y);
                vec4 color = texture2D(uSampler, distUv);
                vec4 color1 = texture2D(previousTexture, distUv);
                gl_FragColor = vec4(mix(color, vec4(vec3(color1), 0.0), 0.18));
            }
        `;

        constructor() {
            super('', ToTearFilter.fragmentSrc);
            this.padding = 0;
        }
    }

