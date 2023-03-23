import { Blink } from '@pharos-lab/blink';
import React from 'react';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.trigger = React.createRef();
    this.popper = React.createRef();
  }

  componentDidMount() {
    Blink.create(this.trigger.current, this.popper.current, { arrow: true });
  }

  render() {
    return (
      <>
        <span ref={this.trigger}>{this.props.children}</span>
        <div className="popper" ref={this.popper}>
          {this.props.label}
        </div>
      </>
    );
  }
}
