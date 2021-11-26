import React from 'react'
import { useDispatch } from 'react-redux'
import { setPosts } from '../redux/slices/postSlice'
import { requestPageAble } from './connections/Requests'

import './Pagination.css'
const Pagination = () => {
  const dispatch = useDispatch()
  //const [currentPage, setCurrentPage] = useState(0);
  //const posts = useSelector(state => state.posts.posts)
//  Array.apply(null, Array(5)).map(function () {})

  const handleSubmit = (e) => {
    
    console.log(e.target)
    console.log(e.target.innerText)
    requestPageAble(e.target.innerText).then(response => {
      console.log(response)
        dispatch(setPosts(response.data))
    })
  }
    return (
        <div>
            <div class="pagination-wrapper" style={{paddingLeft:70}}>
  <div class="pagination">
    <a class="prev page-numbers" >prev</a>
    <span aria-current="page" class="page-numbers current" onClick={handleSubmit}>1</span>
    <a class="page-numbers" onClick={handleSubmit} >2</a>
    <a class="page-numbers" onClick={handleSubmit} >3</a>
    <a class="page-numbers"onClick={handleSubmit}>4</a>
    <a class="page-numbers" onClick={handleSubmit}>5</a>
    <a class="page-numbers" onClick={handleSubmit}>6</a>
    <a class="page-numbers"onClick={handleSubmit}>7</a>
    <a class="page-numbers" href="/home">8</a>
    <a class="page-numbers" href="/home">9</a>
    <a class="page-numbers" href="/home">10</a>
    <a class="next page-numbers" href="/home">next</a>
  </div>
</div>
        </div>
    )
}

export default Pagination
