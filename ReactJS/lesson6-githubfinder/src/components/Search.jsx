import React, { useState } from 'react'

const Search = ({ sendkeyword }) => {
    const [keyword, setKeyword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if (!keyword) {
            alert("please, fill input")
        } else {
            sendkeyword(keyword);
            setKeyword("");
        }
    }
    return (
        <form onSubmit={submitHandler} className='d-flex align-items-center justify-content-center'>
            <div className="col-5">
                <div className="input-group mt-3">
                    <input value={keyword} onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
                    <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search