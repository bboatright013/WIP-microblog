import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {addPost, getPosts} from '../actions/actionCreators';
import {useDispatch} from "react-redux";
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';

const NewPost = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        description : "",
        body: ""
    })

    const handleChange = evt =>{
        const {name, value} = evt.target;
        setFormData( fData => ({
            ...fData,
            [name] : value
        }));
    }


    const handleAddPost = evt =>{
        evt.preventDefault();
        console.log("ATTEMPTING TO ADD POST");
        // const post = { ...formData, comments: [] }
        // const key = {uuid()};
        dispatch(addPost(formData));
        dispatch(getPosts());
    }


    return (
        <div className="NewPost">
          <PostForm action={handleAddPost} handleChange={handleChange} formData={formData}/>
        </div>
    )
}

export default NewPost;