import { Component, h, Host, Listen } from '@stencil/core';
import Feather from 'feather-icons';

@Component({
  tag: 'dn-player',
})
export class Player {
  @Listen('nextButtonClick')
  nextButtonClick() {
    console.log('next button click');
  }

  @Listen('prevButtonClick')
  prevButtonClick() {
    console.log('prev button click');
  }

  componentDidRender() {
    Feather.replace();
  }
  render() {
    return <Host />;
  }
}
