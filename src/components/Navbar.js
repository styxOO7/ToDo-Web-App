import React from 'react'
import Dues from './Dues'

// giving dues on right side 
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="/" style={{ fontWeight: "Bold" }}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container" style={{paddingLeft:"1270px"}}>
                        <Dues/>
                    </div>
                </div>
            </nav>
        </>
    )
}

