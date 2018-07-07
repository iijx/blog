import React, { Component } from 'react';

import Tag from './Tag';
import '../../styles/Header.css';

class Header extends Component {
  render() {
    return (
        <div>
            <header className="header">
              <Tag  {...this.props}/>
            </header>
            <div className="triangle"></div>
        </div>
    );
  }
}

export default Header;
