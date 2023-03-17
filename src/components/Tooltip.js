import { Blink } from '@pharos-lab/blink';
import React from 'react';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.trigger = React.createRef();
    this.popper = React.createRef();
  }

  componentDidMount() {
    Blink.create(trigger.current, popper.current);
  }

  render() {
    return (
      <span>
        <span ref={this.trigger}>{props.children}</span>
        <div ref={this.popper}>{props.label}</div>
      </span>
    );
  }
}
