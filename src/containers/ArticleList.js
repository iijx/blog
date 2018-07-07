
import React, { Component } from 'react';
import Axios from 'axios';
import ArticleList from '../components/ArticleList';

import '../styles/ArticleList.css';
import queryString from 'query-string';

class ArticleListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            curTag: props.selectedTag,
            curSubtag: {},
            isLoading: false,
        }
    }
    componentDidMount() {
        this._updateArticleList();
    }
    componentWillReceiveProps(props) {
        const { selectedTag, selectedSubtag } = props;
        if ( selectedTag === this.state.curTag && selectedSubtag.id === this.state.curSubtag.id ) {
            return;
        } else {
            this.setState({
                curTag: selectedTag,
                curSubtag: selectedSubtag
            }, this._updateArticleList)
            
        }

    }
    _updateArticleList() {
        console.log('update', this.state)
        if ( !this.state.curTag.id || this.state.isLoading) return;
        this.setState({ isLoading: true });
        const tagId = this.state.curTag.id;
        const subtagId = this.state.curSubtag;
        const params = queryString.stringify({ tagId, subtagId });
        Axios.get(`/blog/api/article?${params}`)
            .then(res => {
                this.setState({ isLoading: false });
                this.setState({
                    articles: res.data.result
                })
            })
    }

    render() {
        return (
            <ArticleList articles={this.state.articles}/>
        );
    }
}

export default ArticleListContainer;
