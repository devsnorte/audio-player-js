import { Component, h, Host, Event, EventEmitter } from '@stencil/core';
import Feather from 'feather-icons';

@Component({
  tag: 'dn-prev-button',
})
export class PrevButton {
  @Event({
    eventName: 'prevButtonClick',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  prevButtonClick: EventEmitter;

  componentDidRender() {
    Feather.replace();
  }
  render() {
    return <Host onClick={this.prevButtonClick.emit} />;
  }
}
