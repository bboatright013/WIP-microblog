import {ADD, REMOVE, EDIT, LOAD, COMMENT, DELETECOMMENT, LOADCOMMENTS, LOADPOST} from './actionTypes';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/posts"
// "/api/posts/:post_id/comments"

export function getPosts() {

    return async function(dispatch) {
        let res = await axios.get(API_URL);
        console.log(res);
        dispatch(load(res.data))
    }
}
export function getPost(postId){
    return async function(dispatch){
        let res = await axios.get(`${API_URL}/${postId}`);
        console.log(res);
        dispatch(loadPost(res.data));
    }
}

export function addPost(data){

    return async function(dispatch){
        let res = await axios.post(API_URL,data);
        dispatch(add(res.data));
    }
}

export function editPost(postId, data){
    return async function(dispatch){
        let res = await axios.put(`${API_URL}/${postId}`, data);
        dispatch(edit(res.data))
    }
}

export function deletePost(postId){
    return async function(dispatch){
        let res = await axios.delete(`${API_URL}/${postId}`);
        console.log(res);
    }
}

export function vote(postId, vote){
    return async function(dispatch){
        let res = await axios.post(`${API_URL}/${postId}/vote/${vote}`);
        dispatch(edit(res.data))
    }
}

export function getComments(postId){
    return async function(dispatch) {
        let res = await axios.get(`${API_URL}/${postId}/comments`);
        console.log(res);
        dispatch(loadComments(res.data))
    }
}

export function deleteComments(postId, commentId){
    return async function(dispatch){
        let res = await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
        dispatch(deleteComment(commentId));
    }
}

export function addComments(postId, text){
    return async function(dispatch){
        let res = await axios.post(`${API_URL}/${postId}/comments`, {text: text});
        console.log(res);
        dispatch(comment(res.data));
    }
}

export function add(payload){
    return {
        type: ADD,
        payload
    }
}

export function remove(payload){
    return {
        type: REMOVE,
        payload
    }
}

export function edit(payload){
    return {
        type: EDIT,
        payload
    }
}

export function load(payload){
    return {
        type: LOAD,
        payload
    }
}

export function comment(payload){
    return {
        type: COMMENT,
        payload
    }
}

export function deleteComment(payload){
    return {
        type: DELETECOMMENT,
        payload
    }
}

export function loadComments(payload){
    return {
        type: LOADCOMMENTS,
        payload
    }
}

export function loadPost(payload){
    return {
        type: LOADPOST,
        payload
    }
}