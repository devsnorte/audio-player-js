import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'dn-slider',
})
export class Slider {
  // Indicate that name should be a public property on the component

  render() {
    return (
      <Host>
        <input type="range"></input>
      </Host>
    );
  }
}
