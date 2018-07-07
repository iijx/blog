import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/Tag.css';


class Tags extends Component {
    
    handleTagClick(id) {
        this.props.tagChange(id);
    }
    render() {
        return (
            <div className="category">
                {
                    this.props.tags.map(item => {
                        return <div className={`item ${this.props.selectedTag.id === item.id ? 'selected' : ''}`} key={item.id} onClick={this.handleTagClick.bind(this, item.id)}>{item.tag}</div>
                    })
                }
            </div>
        );
    }
}

export default withRouter(Tags);
