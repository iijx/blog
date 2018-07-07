import React, { Component } from 'react';
import queryString from 'query-string';
import '../styles/Article.css';
import Axios from 'axios';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            article: {
                title: '',
                body:''
            }
        }
    }
    componentDidMount() {
        let params = queryString.parse(window.location.search);
        if (params.id) {
            Axios.get(`/blog/api/article?id=${params.id}`)
                .then(res => {
                    console.log(res);
                    let article = res.data.result;
                    this.setState({
                        article: {
                            title: article.title,
                            body: article.html,
                        }
                    })
                })
        } else {
            console.log('文章不存在，或者已经删除');
        }
    }
    render() {
        const articleHtml = () => {
            return {__html: this.state.article.body};
        }
        return (
            <div className="article">
                <div className="article-title">{this.state.article.title}</div>
                <article className="article-body" dangerouslySetInnerHTML={articleHtml()}></article>
            </div>
        )
    }
}

export default Article;
