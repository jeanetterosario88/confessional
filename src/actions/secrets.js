//action object creator function
//dispatch takes in atction send to store, to reducer
//with connect, you get a dispatch function automicatlly, that's w you send actions to recducers


// Asynchronous action creators
// export const login = credentials => {
//     return dispatch => {
//        return fetch("http://localhost:3000/api/v1/login",
//            { credentials: "include",
//              method: "POST",
//              headers: { "Content-Type": "application/json" },
//              body: JSON.stringify(credentials)
//            })
       
//      .then(r => r.json())
//      .then(user => {
//         if (user.error) {
//            alert(user.error)
//         } else {
//           dispatch(setCurrentUser(user))
//           dispatch(getMyToys(user))
//         }
//      })
//    }
//  }


export const getSecrets = () => {
    dispatch => {
        dispatch({type: "LOADING_SECRETS"})
        fetch("/secrets")
        .then(res => res.json())
        .then(secrets => dispatch({type: "SECRETS_LOADED", payload: secrets }))
    }
}

export const addSecret = (secret) => {
    dispatch => {
        dispatch({type: "ADD_SECRET"})
        fetch("/secrets", {
            method: "POST",
            body: JSON.stringify(secret),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(secret => dispatch({type: "SECRET_ADDED", payload: secret }))
    }
}