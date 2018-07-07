
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleList.css';


class ArticleList extends Component {
    render() {
        return (
            <div className="article-list-wrap">
                <div className="article-list">
                    {
                        this.props.articles.map(article => {
                            return <Link to={'/blog/article?id=' + article._id} key={article._id} className="item">{article.title}</Link>
                        })
                    }
                    <div className="item no-more">...</div>
                    <div className="item no-more">没有更早的了</div>
                </div>
            </div>
        );
    }
}

export default ArticleList;
