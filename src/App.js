import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import Home from './containers/Home';
import Article from './containers/Article';
import update from 'react-addons-update';

import 'normalize.css';
import './styles/App.css';

import './styles/Blog.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            selectedTag: {},
        }
    }
    componentDidMount() {
        this._loadTags();
    }
    _loadTags() {
        Axios.get('/blog/api/tag')
            .then(res => {
                let defaultSelectedTag = res.data.result[0];
                this.setState({
                    selectedTag: { id: defaultSelectedTag._id, tag: defaultSelectedTag.tag },
                    tags: res.data.result.map( item => ({ id: item._id, tag: item.tag, subtags: item.subtags })),
                })
            })
    }
    tagChange(id) {
        if ( id === this.state.selectedTag.id ) return;
        else {
            this.setState({
                selectedTag: this.state.tags.find( item => item.id === id )
            })
        }
    }
    render() {
        return (
            <Router>
                <div className="blog">
                    <Switch>
                        <Route path="/blog/article" component={Article} />
                        <Route path="/blog/"  render={ () => <Home tags={this.state.tags} selectedTag={this.state.selectedTag} tagChange={this.tagChange.bind(this)} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

