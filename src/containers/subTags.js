import React, { Component } from 'react';

import '../styles/SubTag.css';

class Tags extends Component {

  render() {
    const subtags = this.props.subtags || [];
    // console.log('subtag props', this.props)
    return (
        <div className="tags">
            {
                subtags.map(item => {
                    return (<div className={`item ${this.props.selectedSubtag === item ? 'selected' : ''}`} key={item} onClick={e => this.props.onClick(item, e)}>{item}</div>)
                })
            }
            
        </div>
    );
  }
}

export default Tags;
