import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
// import asyncComponent from '../../hoc/asyncComponent'


const NewPost = React.lazy(() => import('./NewPost/NewPost'))
// const AsyncNewPost =  asyncComponent(() => {
//     return import('./NewPost/NewPost');
// })

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} /> */}
                <Switch>
                    {/* <Route path='/new-post' exact component={AsyncNewPost} /> */}
                    <Route path='/new-post' exact render={() => <Suspense fallback={<div>Loading...</div>}>
                        <NewPost />
                    </Suspense>} />
                    <Route path='/posts' component={Posts} />
                    
                </Switch>
                {/* <Route path='/' exact component={Posts} /> */}
            </div>
        );
    }
}

export default Blog;