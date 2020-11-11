import {ADD, REMOVE, LOAD, EDIT, COMMENT, DELETECOMMENT, LOADCOMMENTS} from './actionTypes'
import { comment } from './actionCreators';

const INITIAL_STATE = { comments: [] };

function commentsReducer( state = INITIAL_STATE, action) {
    switch(action.type){

        case COMMENT:
            console.log(action.payload);
            return {
                ...state,
                comments:
                [...state.comments, action.payload]
            }
        case DELETECOMMENT:
            console.log(action.payload);
            return {
                ...state,
                    comments : [...state.comments.filter(
                         comment => comment.id !== action.payload
                         )]
            }

        case LOADCOMMENTS:
            return {
                ...state,
                comments: 
                [...action.payload]
            }
        default:
            return state;
    }
}

export default commentsReducer;