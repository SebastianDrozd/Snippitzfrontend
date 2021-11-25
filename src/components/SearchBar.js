import React from 'react'

const SearchBar = () => {
    return (
        <div style={{display: 'inline'}}>
              <div class="input-group " style={{ width: '40%', float: 'right',marginBottom: '2em' }}>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            
            aria-expanded="false"
            style={{ color: "#bbbfff" }}
          >
            Search
          </button>
        </div>
        </div>
    )
}

export default SearchBar
