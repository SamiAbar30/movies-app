import React from 'react';

const NavBar = () => {
    return (
        <>
        <nav className=' navbar navbar-light bg-light d-flex justify-content-around' style={
            {
                height: "100px",

            }
        }>
            <form >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

            </form>
            <div className='me-5'>

                <p className="text-red-700 h1 "> 
                    FILMSPEDIA
                </p>
            </div>
            <div className=" " id="navbarSupportedContent">
                <button className="btn btn-light" type="submit">Log in</button>
                <button className="btn btn-primary" type="submit">Sign in</button>
            </div>
        </nav>
        </>
    );
};

export default NavBar;