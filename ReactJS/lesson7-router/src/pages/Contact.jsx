import React from 'react'

const Contact = () => {
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='my-5'>Contact</h1>
            <div className="col-6">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                        </div>

                    </div>

                    <button type="submit" className="btn btn-dark">Send</button>
                </form>
            </div>


        </div>
    )
}

export default Contact