import React, { useEffect, useState } from 'react';
import axios from "../../../axios";
import { Route, NavLink, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post'
import styles from './Posts.module.css'
import FullPost from '../FullPost/FullPost'
const Posts = props => {

    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const postSelectedHandler = (id) => {
        props.history.push('/posts/' + id)
    }

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                // console.log('axios', response);
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'harshit'
                    }
                })
                setPosts(updatedPost);
            })
    }, [])

    const myPosts = posts.map(post => {
        return (
            // <Link key={post.id} to={props.match.url + '/' +post.id} exact>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => postSelectedHandler(post.id)}
                />
            // </Link>
        );
    })

    return (
        <div>
            <section className={styles.Posts}>
            {myPosts}
            </section>
            <Route path={props.match.url + '/:id'} exact component={FullPost} />
        </div>
    );
}
export default Posts;