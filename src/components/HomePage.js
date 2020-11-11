import React, {useEffect} from 'react';
import PostPreview from './PostPreview';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../actions/actionCreators';

const HomePage = () => {
// const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(getPosts())
// }, [dispatch])

const  postsObj  = useSelector(store => store.posts.posts);
console.log(postsObj);
const postsArr = Object.values(postsObj);
console.log(postsArr);

return (
    <div className="HomePage">
        {postsArr.map(post => {
            console.log("mapping: ", post);
           return <PostPreview title={post.title} description={post.description} key={post.id} id={post.id} votes={post.votes} />
        })}
        <p>List of posts here</p>
    </div>
)
}

export default HomePage;