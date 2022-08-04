import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dn-slider',
})
export class Slider {
  // Indicate that name should be a public property on the component
  @Event({
    eventName: 'sliderChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sliderChange: EventEmitter;
  render() {
    return <input type="range" onChange={this.sliderChange.emit}></input>;
  }
}
