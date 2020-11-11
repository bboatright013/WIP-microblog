import React from 'react';
import { Button } from 'reactstrap';
import {useDispatch} from 'react-redux';
import {deleteComments, getComments} from '../actions/actionCreators';


const CommentSection = ({comments, postId}) => {
    console.log(comments);

    const dispatch = useDispatch();

    const handleDeleteComment = evt => {
       const {parentNode} = evt.target;
       console.log(postId, parentNode.id);
       dispatch(deleteComments(postId, parentNode.id));
        dispatch(getComments(postId));
    }

    return (
        <div className="CommentSection">
            {comments.map(comment => <div id={comment.id} key={comment.id}><span onClick={handleDeleteComment}>X</span> {comment.text} </div>)}
        </div>
    )
}

export default CommentSection;