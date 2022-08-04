import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dn-next-button',
})
export class NextButton {
  // Indicate that name should be a public property on the component
  @Prop() label: string;

  @Event({
    eventName: 'nextButtonClick',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  nextButtonClick: EventEmitter;

  render() {
    return <Host onClick={() => this.nextButtonClick.emit()} />;
    // (
    //   <button type="button" >
    //     <i data-feather="skip-forward"></i>
    //   </button>
    // );
  }
}
