import API from "../utils/API";

export const GET_COMMENTS_REQUESTED = "GET_COMMENTS_REQUESTED";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";
export function getComments() {
    return dispatch => {
        dispatch({ type: GET_COMMENTS_REQUESTED });
        const request = API.get("/comments");
        request
            .then(response => dispatch({ type: GET_COMMENTS_SUCCESS, data: response.data }))
            .catch(error => dispatch({ type: GET_COMMENTS_FAILURE, data: error }));
        return request;
    };
}
