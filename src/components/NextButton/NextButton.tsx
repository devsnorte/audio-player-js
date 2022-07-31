import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'dn-next-button',
})
export class NextButton {
  // Indicate that name should be a public property on the component
  @Prop() label: string;

  render() {
    return (
      <Host>
        <button type="button">
          <i data-feather="skip-forward"></i>
        </button>
      </Host>
    );
  }
}
