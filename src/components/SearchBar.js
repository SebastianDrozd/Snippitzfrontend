import React from 'react'

const SearchBar = () => {
    return (
        <div >
          <br />
          <br />
              <div class="input-group " style={{ width: '60%', marginLeft: '15em'}}>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            
            aria-expanded="false"
            style={{ color: "rgb(102, 133, 255)",height: '2.3em' }}
          >
            Search
          </button>
        </div>
        </div>
    )
}

export default SearchBar
