//action object creator function
//dispatch takes in action send to store, to reducer
//with connect, you get a dispatch function automicatlly, that's how you send actions to reducers

export const getSecret = (id) => {
    return dispatch => {
        dispatch({type: "LOADING_SECRET"})
        fetch(`/secrets/${id}`)
        .then(res => res.json())
        .then(secret => dispatch({type: "SECRET_LOADED", payload: secret }))
    }
}

export const getSecrets = () => {
    return dispatch => {
        dispatch({type: "LOADING_SECRETS"})
        fetch("/secrets")
        .then(res => res.json())
        .then(secrets => dispatch({type: "SECRETS_LOADED", payload: secrets }))
    }
}

export const addSecret = (secret) => {
    return dispatch => {
        dispatch({type: "ADDING_SECRET"})
        fetch("/secrets", {
            method: "POST",
            body: JSON.stringify(secret),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch( {type: "SECRET_ADDED", payload: data})
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }
}

export const addLike = (secret) => {
    return dispatch => {
        fetch(`/secrets/${secret.id}`, {
            method: "PUT",
            body: JSON.stringify(secret),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch( {type: "SECRET_ADDED", payload: data})
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }
}

export const addComment = (newComment) => {
    return dispatch => {
        fetch(`/secrets/${newComment.secret_id}/comments`, {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(() => {
            dispatch(getSecret(newComment.secret_id))
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }
}