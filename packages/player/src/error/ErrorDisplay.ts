import Config from '../core/Config';
import {EventType} from '../event/EventType';
/**
 * 显示错误信息
 * TODO:
 *  1、仅处理影响运行/使用的Error。
 *  2、支持国际化显示Error信息。
 *  3、可配置不使用内置Error，外部可根据API抛出的异常自定义显示Error信息。
 */
export default class ErrorDisplay {
    private _config: Config;
    private _errPanel: HTMLElement;
    private _showCode: string;
    constructor(config:Config){
        this._config = config;
        this._showCode = '';
        this._errPanel = document.createElement("div");
        this._errPanel.style.background = 'rgba(0,0,0,0.8)';
        this._errPanel.style.position = 'absolute';
        this._errPanel.style.width = '100%';
        this._errPanel.style.height = '100%';
        this._errPanel.style.zIndex = '8088';
        this._errPanel.style.display = 'none';
        let _span = document.createElement("span");
        _span.style.display = 'table-cell';
        _span.style.verticalAlign = 'middle';
        _span.style.textAlign = 'center';
        _span.style.color = '#eee';
        this._errPanel.appendChild(_span);
        this._config.container.appendChild(this._errPanel);
        this._config.i18n.addListener(EventType.STATE, this.onChange, this);
    }

    public setMessage(code: string, data?: string[]): void {
        // mark: need check code is supported
        if(code) {
            this._showCode = code;
            this._errPanel.style.display = 'table';
            let _span = this._errPanel.children[0];
            if(_span.hasChildNodes()){
                _span.removeChild(_span.childNodes[0]);
            }
            let _text = document.createTextNode(this.getText(code, data));
            _span.appendChild(_text);
        }
    }

    public getText(code: string, data?: string[]) {
        
        return this._config.i18n.t(code,data) + ' #' + code;
    }

    public close() {
        this._showCode = '';
        this._errPanel.style.display = 'none';
    }


    private onChange(evt: any) {
        if(this._showCode && evt.code === 'I18N.Property.Changed') {
            this.setMessage(this._showCode);
        }
    }
}