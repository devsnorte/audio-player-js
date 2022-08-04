/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DnNextButton {
        "label": string;
    }
    interface DnPlayer {
    }
    interface DnPrevButton {
    }
    interface DnSlider {
    }
}
export interface DnNextButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnNextButtonElement;
}
export interface DnPrevButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnPrevButtonElement;
}
export interface DnSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnSliderElement;
}
declare global {
    interface HTMLDnNextButtonElement extends Components.DnNextButton, HTMLStencilElement {
    }
    var HTMLDnNextButtonElement: {
        prototype: HTMLDnNextButtonElement;
        new (): HTMLDnNextButtonElement;
    };
    interface HTMLDnPlayerElement extends Components.DnPlayer, HTMLStencilElement {
    }
    var HTMLDnPlayerElement: {
        prototype: HTMLDnPlayerElement;
        new (): HTMLDnPlayerElement;
    };
    interface HTMLDnPrevButtonElement extends Components.DnPrevButton, HTMLStencilElement {
    }
    var HTMLDnPrevButtonElement: {
        prototype: HTMLDnPrevButtonElement;
        new (): HTMLDnPrevButtonElement;
    };
    interface HTMLDnSliderElement extends Components.DnSlider, HTMLStencilElement {
    }
    var HTMLDnSliderElement: {
        prototype: HTMLDnSliderElement;
        new (): HTMLDnSliderElement;
    };
    interface HTMLElementTagNameMap {
        "dn-next-button": HTMLDnNextButtonElement;
        "dn-player": HTMLDnPlayerElement;
        "dn-prev-button": HTMLDnPrevButtonElement;
        "dn-slider": HTMLDnSliderElement;
    }
}
declare namespace LocalJSX {
    interface DnNextButton {
        "label"?: string;
        "onNextButtonClick"?: (event: DnNextButtonCustomEvent<any>) => void;
    }
    interface DnPlayer {
    }
    interface DnPrevButton {
        "onPrevButtonClick"?: (event: DnPrevButtonCustomEvent<any>) => void;
    }
    interface DnSlider {
        "onSliderChange"?: (event: DnSliderCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "dn-next-button": DnNextButton;
        "dn-player": DnPlayer;
        "dn-prev-button": DnPrevButton;
        "dn-slider": DnSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dn-next-button": LocalJSX.DnNextButton & JSXBase.HTMLAttributes<HTMLDnNextButtonElement>;
            "dn-player": LocalJSX.DnPlayer & JSXBase.HTMLAttributes<HTMLDnPlayerElement>;
            "dn-prev-button": LocalJSX.DnPrevButton & JSXBase.HTMLAttributes<HTMLDnPrevButtonElement>;
            "dn-slider": LocalJSX.DnSlider & JSXBase.HTMLAttributes<HTMLDnSliderElement>;
        }
    }
}
