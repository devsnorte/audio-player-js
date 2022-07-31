import { Component, h, Host } from '@stencil/core';
import Feather from 'feather-icons';

@Component({
  tag: 'dn-player',
})
export class Player {
  componentDidRender() {
    Feather.replace();
  }
  render() {
    return (
      <Host>
        <dn-prev-button />
        <dn-next-button />
        <dn-slider />
      </Host>
    );
  }
}
