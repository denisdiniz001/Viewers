import React, { PureComponent } from 'react';

import ToolbarButton from '../../viewer/ToolbarButton';

export class OverlapButton extends PureComponent {
  static defaultProps = {
    dropdownVisible: false,
  };

  state = {};

  onClick = () => {
    let log = 'clicou as vera';
    if (!log) {
      return;
    }
    print(log);
  };

  render() {
    return (
      <div className="btn-group">
        <ToolbarButton
          isActive={this.state.dropdownVisible}
          label={'Overlap'}
          icon="th"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default OverlapButton;
