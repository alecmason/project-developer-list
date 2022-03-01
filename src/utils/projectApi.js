import tokenService from "./tokenService"

const BASE_URL = '/api/projects/'

export function create(postInfoFromTheForm) {
    // Make a post request to the server
    return fetch(BASE_URL, {
        method: 'POST',
        // We are sending over a picture
        // multipart/form-data < - is the content type
        body: postInfoFromTheForm, // <- postInfoFromTheForm has to be formData
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        // Valid login if we have a status of 2xx (res.ok)
        if (res.ok) return res.json();
        throw new Error('Error submitting the Form! Hey Check the Express Terminal');
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Problem Fetching Get All')
        })
}


export function getOne(projectId) {
    return fetch(`${BASE_URL}/${projectId}`, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Problem Fetching Get All')
        })
}


export function deleteProject(projectId) {
    return fetch(`${BASE_URL}/${projectId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken() // <- the jwt contains the user who is sending the like
        }
    }).then(res => {
        console.log(res.ok, " <- res.ok")
        if (res.ok) return res.json();
        throw new Error('Error in deleting the like, check your express terminal!')
    })
}