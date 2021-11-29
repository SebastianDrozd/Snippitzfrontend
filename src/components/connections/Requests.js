import axios from 'axios'
export const savePost = (post,token) => {
  
    const headers = {
        'Authorization': 'Bearer ' + token
      }
    return axios.post('https://snippitzio.herokuapp.com/api/posts', post, {
        headers: headers}
    )
}
export const getAllPosts = () => {
   return  axios.get('https://snippitzio.herokuapp.com/api/posts')
    
}

export const getPostsByType = (type) => {
    console.log(type)
    console.log(`https://snippitzio.herokuapp.com/api/posts/${type}`)
    return  axios.get(`https://snippitzio.herokuapp.com/api/posts/search/${type}`)
}

export const getPost = (id) => {
    return axios.get(`https://snippitzio.herokuapp.com/api/posts/${id}`)
    //#5863F8
}

export const registerUser = (user) => {
    return axios.post('https://snippitzio.herokuapp.com/api/test/users/register',user)
}

export const loginUser = (user) => {
    return axios.post(`https://snippitzio.herokuapp.com/api/test/users/login`,user)
}

export const getAllComments = (postId) => {
    console.log("id",postId.id)
        return axios.get(`https://snippitzio.herokuapp.com/api/comments/${postId.id}`)
}
export const getAllComments2 = (postId) => {
    console.log("id",postId.id)
        return axios.get(`https://snippitzio.herokuapp.com/api/comments/${postId}`)
}

export const postComment = (comment,id) => {
    console.log("comment",comment, "id: ", id)
;
return axios.post(`https://snippitzio.herokuapp.com/api/posts/${id}/comments`,comment).then(response => console.log(response.data))}


export const likePost = (id) => {
    console.log()
    return axios.get(`https://snippitzio.herokuapp.com/api/posts/${id}/like`)
}

export const deletePost= (id) =>{
    console.log("this is id",id.id)
    return axios.delete(`https://snippitzio.herokuapp.com/api/posts/${id.id}`)
}
export const deletePos2t= (id) =>{
    console.log("this is id",id.id)
    return axios.delete(`https://snippitzio.herokuapp.com/api/posts/${id}`)
}
export const updatePost = (id,post) => {
    console.log('sending this', post)
    return axios.put(`https://snippitzio.herokuapp.com/api/posts/${id}`,post).then(reponse => console.log(reponse))
}

export const verifyToken = (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token
      }
    return axios.post(`https://snippitzio.herokuapp.com/api/test/user/verify`,{}, {
        headers: headers}
    )
}

export const updateComment = (id,comment) => {
    console.log(id, comment)
    return axios.put(`https://snippitzio.herokuapp.com/api/comments/${id}`,comment)
}
export const deleteComment = (id) => {
    return axios.delete(`https://snippitzio.herokuapp.com/api/comments/${id}`)
}
export const requestPageAble= (pageNumber) => {
    console.log("this is page number", pageNumber)
    return axios.get(`https://snippitzio.herokuapp.com/api/posts/query?pageSize=12&pageNo=${pageNumber}`)
}

export const getUser = (username) => {
    return axios.get(`https://snippitzio.herokuapp.com/api/test/users/${username}`)
}