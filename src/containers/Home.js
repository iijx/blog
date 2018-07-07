
import React, { Component } from 'react';
import Subtags from './subTags';
import Header from './Header/Header';

import ArticleList from './ArticleList';
import '../styles/Content.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            selectedSubtag: '',
            selectedTag: {}
            
        }
    }
    handleSelectedSubtagChange(subtagName) {
        if (subtagName === this.state.selectedSubtag) return;
        this.setState({
            selectedSubtag: subtagName
        })
    }
    handleTagClick(id) {
        if ( id === this.state.selectedTag.id ) return;
        else {
            this.setState({
                selectedTag: this.state.tags.find( item => item.id === id )
            })
        }
    }
   
    render() {
        const selectedTag = this.props.selectedTag || {};
        const subtags = ( () => {
            if (selectedTag.id) {
                return this.props.tags.find( item => item.id === selectedTag.id).subtags;
            } else return []
        })();
        return (
            <section>
                <Header {...this.props}/>
                <div className="content">
                    {/* <Subtags subtags={subtags} selectedSubtag={this.state.selectedSubtag} onClick={this.handleSelectedSubtagChange.bind(this)}/>                 */}
                    <ArticleList selectedSubtag={this.state.selectedSubtag} selectedTag={this.props.selectedTag} />
                </div>
            </section>
        );
    }
}

export default Home;
