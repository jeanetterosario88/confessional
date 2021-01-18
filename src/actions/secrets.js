//action object creator function
//dispatch takes in atction send to store, to reducer
//with connect, you get a dispatch function automicatlly, that's w you send actions to recducers

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
    console.log(secret);
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