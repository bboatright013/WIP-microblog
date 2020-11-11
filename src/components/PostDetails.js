import React, {useState, useEffect} from 'react';
import PostForm from './PostForm';
import { Button } from 'reactstrap';
import AddComment from './AddComment';
import CommentSection from './CommentSection';
import {useParams, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { editPost, getComments , getPost, deletePost, getPosts, vote} from '../actions/actionCreators';

const PostDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getPost(postId));
        dispatch(getComments(postId))
    }, [dispatch])


    const {postId} = useParams();
    const post = useSelector(store => store.posts.post);
    console.log(post);
    console.log(post.comments);

    const comments = useSelector(store => store.comments.comments);
    
    const [editState, setEditState] = useState(false);
    const toggleEdit = evt => {
        evt.preventDefault();
        setFormData({
            title: post.title,
            description : post.description,
            body: post.body
        });
        console.log(formData);
        setEditState(!editState);
    }

    const [formData, setFormData] = useState({

        title: "",
        description : "",
        body: ""
    });
    console.log(formData);

    const handleChange = evt =>{
        const {name, value} = evt.target;
        setFormData( fData => ({
            ...fData,
            [name] : value
        }));
    }

    const handleEditPost = evt =>{
        evt.preventDefault();
        console.log("ATTEMPTING TO EDIT POST");
        dispatch(editPost(postId,formData));
        setEditState(!editState);
    }

    const handleDelete = evt => {
        evt.preventDefault();
        dispatch(deletePost(postId));
        dispatch(getPosts())
        history.push("/");
    }

    const handleUpVote = evt => {
        evt.preventDefault();
        dispatch(vote(postId, "up"))
    }

    const handleDownVote = evt => {
        evt.preventDefault();
        dispatch(vote(postId, "down"))
    }

    return (
        <div className="PostDetails">
            <Button color="success" onClick={toggleEdit}>Edit</Button>
            <Button color="danger" onClick={handleDelete}>Delete</Button>
            { editState 
            ? <PostForm formData={formData} action={handleEditPost} handleChange={handleChange} />
            : <>
                <p>Title: {post.title}</p>
                <div className="upVote" onClick={handleUpVote}>UP</div>
            <div className="downVote" onClick={handleDownVote}>DOWN</div>
            <div>Votes: {post.votes}</div>
              <p>Description: {post.description}</p>
              <p>{post.body}</p>
                <CommentSection postId={postId} comments={comments} />
                <AddComment postId={postId} />
              </>
            }

        </div>
    )
}

export default PostDetails;