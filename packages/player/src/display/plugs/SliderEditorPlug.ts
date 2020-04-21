// eslint-disable-next-line no-unused-vars
import { VFStage } from '../VFStage';
import { Plug } from './Plug';
import { EventLevel } from '../../event/EventLevel';
/**
 * 基于互动课件slider业务的特殊插件，用于解决穿透，鼠标事件等问题
 * @author yangxiao
 */
export class SliderEditorPlug extends Plug {
    private dom?: HTMLElement | null;
    private observer?: MutationObserver;

    constructor(className: string, parent: VFStage) {
        super(className, parent);

        let element = document.getElementById('drawCanvas');

        // eslint-disable-next-line no-eq-null
        if (element == null) {
            const canvasContainer = document.getElementsByClassName('canvas-container')[0];

            if (canvasContainer && canvasContainer.children[1]) {
                element = canvasContainer.children[1] as HTMLElement;
            }
        }
        // eslint-disable-next-line no-eq-null
        if (element == null) {
            // 无法找到画线，可能是回放模式
            this.parent.systemEvent.emitError('E0002', ['drawCanvas|canvas-container'], EventLevel.WARNING);

            return;
        }
        this.dom = element;
    }

    protected onLoad(data: any) {
        if (this.dom === undefined) {
            return;
        }

        const element = this.dom as HTMLElement;

        const { parent } = this;

        // tslint:disable-next-line: max-line-length
        const MutationObserver = window.MutationObserver || (window as any).WebKitMutationObserver || (window as any).MozMutationObserver;
        // eslint-disable-next-line no-undef
        const interaction = (parent.app?.renderer as vf.Renderer).plugins.interaction;

        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    const node = mutation.target as any;
                    const currentCursorMode = interaction.currentCursorMode;

                    if (node.dataset.cursor !== node.style.cursor) {
                        if (currentCursorMode === 'pointer') {
                            node.style.cursor = 'pointer';
                            node.dataset.cursor = node.style.cursor;

                            return;
                        }
                        node.dataset.cursor = node.style.cursor;
                    }
                }
            });
        });
        this.observer.observe(element, {
            attributes: true, // configure it to listen to attribute changes,
            attributeFilter: ['style'],
        });

        const defaultCursor = element.style.cursor;

        interaction.setTargetElement(element, parent.app?.renderer.resolution);
        const cursorStyles: any = interaction.cursorStyles;

        cursorStyles.default = defaultCursor;

        element.style.display = 'none';

        setTimeout(() => {
            // BUG 边检检查
            if (element) { element.style.display = ''; }
        }, 60);

        return;
    }

    protected onRelease() {
        this.observer?.disconnect();
        this.dom = null;
    }
}
