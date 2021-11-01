import React from 'react'

export default function HomeBody() {
    return (
    <div>
        <div className="container content">
            <div className="row align-items-center justify-content-center isi">
            <div className="col-xl-4">
                <div className="text-center">
                <img alt="women" className="rounded-circle img-prof" width={300} src="img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" />
                </div>
            </div>
            <div className="col-6 content text-start">
                <h4 style={{fontSize: '18px'}}>Hi, my name is</h4>
                <h1 className="fw-bold fs-80">Anne Sullivan</h1>
                <h3>I build things for the web</h3>
                <button className="btn btn-primary rounded-pill btn-orange">
                Get In Touch
                </button>
            </div>
            </div>
        </div>
    </div>
    )
}
