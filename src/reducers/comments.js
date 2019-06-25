import * as types from "../actions/comments";

const initialState = {
    commentsLoading: false,
    commentsError: null,
    commentList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Get comments
        case types.GET_COMMENTS_REQUESTED:
            return {
                ...state,
                commentsLoading: true
            };
        case types.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                commentsLoading: false,
                commentList: action.data
            };
        case types.GET_COMMENTS_FAILURE:
            return {
                ...state,
                commentsLoading: false,
                commentsError: action.data
            };
        default :
            return state;
    }
}