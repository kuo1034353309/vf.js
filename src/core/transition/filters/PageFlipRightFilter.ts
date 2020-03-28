import { AbstractFilter } from './AbstractFilter';


export interface PageFlipRightFilterUniforms {
        filterMatrix: PIXI.Matrix;
        resolution: number;
        previousTexture: PIXI.RenderTexture;
        progress: number;
    }

export class PageFlipRightFilter extends AbstractFilter {

        private static readonly uniforms = {
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
            
            const float PI = 3.141592653589793;
            const float MIN_ANGLE = PI / 4.0;
            const float MAX_ANGLE = PI / 2.0;
            const float MIN_X = 0.5;
            const float MAX_X = 0.95;
            const float sharpness = 3.0;
            const float scale = 512.0;

            // float easeProgress = ( pow((progress - 1.0), 3.0) + 1.0 );
            // float easeProgress = (progress == 1.0) ? 1.0 : -pow(2.0, -10.0 * progress) + 1.0;
            float p = progress > 0.99 ? 0.99 : progress;
            float easeProgress =  sqrt(1.0 - pow((p - 1.0), 2.0));
            float curX = (1.0 - easeProgress) * (MAX_X - MIN_X) + MIN_X;
            float angle = (easeProgress) * (MAX_ANGLE - MIN_ANGLE) + MIN_ANGLE;
                     
            float distanceToLine(vec2 point)
            {
                vec2 p0 = vec2(curX, 1.0);
                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);
                float a = p1.y - p0.y;
                float b = p0.x - p1.x;
                float c = p1.x * p0.y - p0.x * p1.y;
                return abs(a * point.x + b * point.y + c) / sqrt(a * a + b * b);
            }

            vec4 antiAlias(vec4 color1, vec4 color2, float distanc)
            {
                distanc *= scale;
                if (distanc < 0.0) return color2;
                if (distanc > 2.0) return color1;
                float dd = pow(1.0 - distanc / 2.0, sharpness);
                return ((color2 - color1) * dd) + color1;
            }

            vec2 getMirro(vec2 point ) 
            {
                vec2 p0 = vec2(curX, 1.0);
                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);
                float a = p1.y - p0.y;
                float b = p0.x - p1.x;
                float c = p1.x * p0.y - p0.x * p1.y;
                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);
                vec2 p2 = vec2(point.x + k * a, point.y + k * b);
                return p2;
            }

            vec4 curPageBack(vec2 point)
            {
                vec2 mirror = getMirro(point);
                vec4 color = texture2D(uSampler, vec2(1.0 - mirror.x, mirror.y));
                return color;
            }

            vec4 curPage(vec2 point)
            {
                vec4 color = texture2D(previousTexture, point);
                float d = distanceToLine(point);
                vec4 shadow = vec4(1.0, 0.0, 0.0, 1.0);
                // return shadow;
                // if(d < 0.2) {
                //     float c = (0.1 - (0.02 - d)) * (10.0 + progress * 1.5);
                //     return vec4(color.r * c, color.g * c, color.b * c, 1.0);
                // };
                return color;
            }
            vec4 nextPage(vec2 point)
            {
                vec4 color = texture2D(uSampler, point);
                float d = distanceToLine(point);
                vec4 shadow = vec4(1.0, 0.0, 0.0, d);
                if(d < 0.02) {
                    float c = (0.1 - (0.02 - d)) * (10.0 + progress * 1.5);
                    return vec4(color.r * c, color.g * c, color.b * c, 1.0);
                };
                return color;
            }
            bool isNextPage(vec2 point) 
            {
                vec2 p0 = vec2(curX, 1.0);
                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);
                vec2 p2 = vec2(point.x - p0.x, point.y - p0.y);
                vec2 p3 = vec2(point.x - p1.x, point.y - p1.y);
                return p2.x * p3.y - p3.x * p2.y > 0.0;
            }
            bool isCurPageBack(vec2 point)
            {
                vec2 p0 = vec2(curX, 1.0);
                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);
                float a = p1.y - p0.y;
                float b = p0.x - p1.x;
                float c = p1.x * p0.y - p0.x * p1.y;
                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);
                vec2 p2 = vec2(point.x + k * a, point.y + k * b);
                return p2.x > 0.0 && p2.x < 1.0 && p2.y > 0.0 && p2.y < 1.0;
            }
            
            
            void main()
            {
            
                vec4 color = vec4(1.0, 0.0, 0.0, 1.0);
                if (isNextPage(vTextureCoord)) {
                    color = nextPage(vTextureCoord);
                } else if (isCurPageBack(vTextureCoord)) {
                    color = curPageBack(vTextureCoord);
                } else {
                    color = curPage(vTextureCoord);
                }
                gl_FragColor = color;
            }
        `;

        constructor() {
            super(AbstractFilter.vertexSrc, PageFlipRightFilter.fragmentSrc, PageFlipRightFilter.uniforms);
        }
    }

