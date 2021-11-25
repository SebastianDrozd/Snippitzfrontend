import React from 'react'
import './Pagination.css'
const Pagination = () => {
    return (
        <div>
            <div class="pagination-wrapper" style={{paddingLeft:70}}>
  <div class="pagination">
    <a class="prev page-numbers" href="/home">prev</a>
    <span aria-current="page" class="page-numbers current">1</span>
    <a class="page-numbers" href="/home">2</a>
    <a class="page-numbers" href="/home">3</a>
    <a class="page-numbers" href="/home">4</a>
    <a class="page-numbers" href="/home">5</a>
    <a class="page-numbers" href="/home">6</a>
    <a class="page-numbers" href="/home">7</a>
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
