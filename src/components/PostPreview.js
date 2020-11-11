import React from 'react';
import {Link} from 'react-router-dom';
import {vote} from '../actions/actionCreators';
import {useSelector, useDispatch} from 'react-redux';


const PostPreview = ({title, description, id, votes}) => {
    const dispatch = useDispatch();
    const handleUpVote = evt => {
        evt.preventDefault();
        dispatch(vote(id, "up"))
    }

    const handleDownVote = evt => {
        evt.preventDefault();
        dispatch(vote(id, "down"))
    }

const url = `/${id}`;
console.log(title, description, id)
    return (
        <div className="PostPreview">
            <Link to={url} >
                <div>{title}</div> 
            </Link> 
            <div>
                {description}
            </div>
            <div className="upVote" onClick={handleUpVote}>UP</div>
            <div className="downVote" onClick={handleDownVote}>DOWN</div>
            <div>Votes: {votes}</div>
        </div>
    )
}

export default PostPreview;