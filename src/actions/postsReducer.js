import {ADD, REMOVE, LOAD, EDIT, LOADPOST} from './actionTypes'
import { comment } from './actionCreators';

const INITIAL_STATE = { posts: [], post : {}};

function postsReducer( state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch(action.type){
        case ADD:
            return {
                ...state,
                posts:
                {...state.posts, [state.posts.length] : action.payload}
            }
        case EDIT:
            return {
                ...state,
                posts:
                {...state.posts,  ...action.payload}
            }
        case LOADPOST:
            return {
                ...state,
                post: {...action.payload}
            }

        case LOAD:
            return {
                ...state,
                posts: 
                {...action.payload}
            }
        case REMOVE:
            return {
                ...state,
                posts:
                {}
            }
        default:
            return state;
    }
}

export default postsReducer;