import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Editpost({ editPost, posts }) {
    const { id } = useParams()
    let ans = posts.find(e => e.id === parseInt(id))

    const [title, settitle] = useState(ans.title)
    const [discription, setdiscription] = useState(ans.discription)
    const [image, setImage] = useState(ans.img);

    const navigate = useNavigate()

    function editPostthis(e) {
        e.preventDefault();
        editPost(ans.id, title, discription, image)
        navigate('/')
    }
    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }
    return (
        <div>
            <div>

                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">EDIT POST HERE</h3>
                                        <form onSubmit={editPostthis}>

                                            <div className="row">
                                                <div className="col-md-12 mb-4">

                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="firstName">Add Title</label>
                                                        <input type="text" className="form-control form-control-lg" value={title} onChange={(e) => settitle(e.target.value)} />
                                                    </div><br />
                                                    <div data-mdb-input-init className="form-outline">
                                                        <label className="form-label" htmlFor="firstName">Add Description</label>
                                                        <textarea className='form-control form-control-lg' value={discription} onChange={(e) => setdiscription(e.target.value)}></textarea>
                                                    </div><br />
                                                    <div>
                                                        <input
                                                            type="file"
                                                            className="form-control form-control-lg"
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 pt-2 text-center">
                                                <button className="btn btn-primary btn-lg" type='submit'> Edit Post</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Editpost
