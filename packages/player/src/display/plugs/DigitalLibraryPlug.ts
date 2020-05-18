import { VFStage } from '../VFStage';
import {Plug } from './Plug';

/**
 * 数字图书馆
 * @author yangxiao
 */
export class DigitalLibraryPlug extends Plug {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(className: string, parent: VFStage) {
        super(className, parent);
        console.log(className);
    }

    protected onLoad(): void {
        const { parent } = this;
        // eslint-disable-next-line no-undef
        const interaction = (parent.app?.renderer as vf.Renderer).plugins.interaction as vf.interaction.InteractionManager;

        interaction.autoPreventDefault = false;
    }

    protected onRelease(): void {
        //
    }
}
