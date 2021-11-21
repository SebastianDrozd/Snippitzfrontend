import React from 'react'
import './Pagination.css'
const Pagination = () => {
    return (
        <div>
            <div class="pagination-wrapper" style={{paddingLeft:70}}>
  <div class="pagination">
    <a class="prev page-numbers" href="javascript:;">prev</a>
    <span aria-current="page" class="page-numbers current">1</span>
    <a class="page-numbers" href="javascript:;">2</a>
    <a class="page-numbers" href="javascript:;">3</a>
    <a class="page-numbers" href="javascript:;">4</a>
    <a class="page-numbers" href="javascript:;">5</a>
    <a class="page-numbers" href="javascript:;">6</a>
    <a class="page-numbers" href="javascript:;">7</a>
    <a class="page-numbers" href="javascript:;">8</a>
    <a class="page-numbers" href="javascript:;">9</a>
    <a class="page-numbers" href="javascript:;">10</a>
    <a class="next page-numbers" href="javascript:;">next</a>
  </div>
</div>
        </div>
    )
}

export default Pagination
