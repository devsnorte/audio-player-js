import { Component, h, Host } from '@stencil/core';
import Feather from 'feather-icons';

@Component({
  tag: 'dn-prev-button',
})
export class PrevButton {
  componentDidRender() {
    Feather.replace();
  }
  render() {
    return (
      <Host>
        <button>
          <i data-feather="skip-back"></i>
        </button>
      </Host>
    );
  }
}
