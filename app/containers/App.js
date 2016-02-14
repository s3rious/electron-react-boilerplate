/* @flow */
import React, { Component } from 'react';
import DevTools from './DevTools.js';

type Props = {
  children: ReactElement
}

export default class App extends Component {
  props: Props;

  render(): ReactElement {
    return (
      <div>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              // CommonJS exports of "./DevTools.js". This type is incompatible with ReactClass
              // const DevTools = require('./DevTools.js');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
