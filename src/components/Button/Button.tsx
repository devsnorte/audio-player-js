import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
})
export class Button {
  // Indicate that name should be a public property on the component
  @Prop() label: string;

  render() {
    return <button type="button">{this.label}</button>;
  }
}
