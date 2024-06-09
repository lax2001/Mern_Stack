import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your CSS file for custom styling

function Home() {
    return (
        <>
            <div className="carousel-container"> {/* Wrap the carousel in a container */}
                <div id="carouselExampleControls" className="carousel slide bg-info" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/holding-notebooks-group-people-business-conference-modern-classroom-daytime_146671-16403.jpg" className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="Third slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="w-100 mb-5" style={{ height: '350px' }} id="regg">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Enquiry Now</h4>
                                </div>
                                <div className="card-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" name="name" className="form-control" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="text" id="phone" name="mobileno" className="form-control" pattern="^(0|91)?[6-9][0-9]{9}$" required />
                                        </div>
                                        <button type="submit" className="btn btn-warning p-2 mt-3" name="sub">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
}
export default Home;

