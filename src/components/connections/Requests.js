import axios from 'axios'
export const savePost = (post) => {
    axios.post('http://localhost:8080/api/posts', post).then(response => console.log(response))
}
export const getAllPosts = () => {
   return  axios.get('http://localhost:8080/api/posts')
    
}

export const getPostsByType = (type) => {
    console.log(type)
    console.log(`http://localhost:8080/api/posts/${type}`)
    return  axios.get(`http://localhost:8080/api/posts/search/${type}`)
}

export const getPost = (id) => {
    return axios.get(`http://localhost:8080/api/posts/${id}`)
    //#5863F8
}

export const registerUser = (user) => {
    console.log(user)
    return axios.post('http://localhost:8080/api/users/register',user).then(reponse => console.log(reponse))
}

export const getAllComments = (postId) => {
    console.log("id",postId.id)
        return axios.get(`http://localhost:8080/api/comments/${postId.id}`)
}

export const postComment = (comment,id) => {
    console.log("comment",comment, "id: ", id)
;
return axios.post(`http://localhost:8080/api/posts/${id}/comments`,comment).then(response => console.log(response.data))}


export const likePost = (id) => {
    console.log()
    return axios.get(`http://localhost:8080/api/posts/${id}/like`)
}

export const deletePost= (id) =>{
    console.log("this is id",id.id)
    return axios.delete(`http://localhost:8080/api/posts/${id.id}`)
}
export const updatePost = (id,post) => {
    console.log('sending this', post)
    return axios.put(`http://localhost:8080/api/posts/${id}`,post).then(reponse => console.log(reponse))
}