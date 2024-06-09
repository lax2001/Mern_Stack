import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
        <>
            <div className="header row">
                <div className='col-5 p-4'> <h1>Skills Mentor</h1></div>
                <div className='col-4 p-4'><h6>Need help | Call us</h6>
                    <span> <b>+91 8767847894</b></span>
                    <span><b>+91 8767847894</b></span>
                </div>
                <div className='col-3 p-4' ><button type="button" className="btn btn-warning p-2">Apply Now</button></div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;