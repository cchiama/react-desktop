import React, { Component } from 'react';
import { parseDimension } from '../../styleHelper';
import { themeContextTypes } from '../../style/theme';

const styles = {
  pane: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '0 0 320px',
    width: '320px'
  },

  paneDark: {
  }
};

class Pane extends Component {
  static contextTypes = {
    ...themeContextTypes
  };

  render() {
    const { children, style, ...props } = this.props;

    let componentStyle = { ...styles.pane, ...style };

    if (this.props.width) {
      componentStyle.width = parseDimension(this.props.width);
      componentStyle.flex = '0 0 ' + parseDimension(this.props.width);
    }

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.paneDark };
    }

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Pane;
