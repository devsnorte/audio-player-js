import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'dn-slider',
  styleUrl: 'Slider.styles.css',
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

  @Prop()
  className: string;

  render() {
    return <input type="range" class={this.className || 'slider'} onChange={this.sliderChange.emit}></input>;
  }
}
