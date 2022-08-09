import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dn-play-button',
})
export class PlayButton {
  render() {
    return (
      <Host>
        <slot>
          <h1>Olá</h1>
        </slot>
      </Host>
    );
  }
}
