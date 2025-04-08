import './Dashboard.css';
import Biryani from '../assets/biryani1-1.png';
import Idly from '../assets/idly.png';
import Dosa from '../assets/dosa.png';
import Noodles from '../assets/noodles.png';
import FR from '../assets/friedrice.png';
import Meals from '../assets/meals.png';
import Manchu from '../assets/machu.png';
import Navbar from './Navbar';

function Dashboard() {
    return (
        <div className='main'>
            <Navbar />

            <div className="container text-center mt-3 pt-3">
                {/* Welcome Section */}
                <div className='section1'>
                    <h3 className="fw-bold">Welcome to Our Canteen</h3>
                    <div className='content-sec1 d-flex'>
                        <div className="my-3 biryani">
                            <img src={Biryani} alt="special dish" className="canteen-img" />
                        </div>
                        <div className='pt-2 text-start'>
                            <p className="intro-text fw-semibold">
                                <strong>Hey</strong>, have you ever thought about how<br />
                                canteens are like the art of any community?
                            </p>
                            <div className="d-flex justify-content-center gap-2 mt-3">
                                <button className="btn btn-dark rounded-button">Menu</button>
                                <button className="btn highlight-btn rounded-button">Book a table</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specials Section */}
                <div className="mt-4">
                    <h4 className="fw-bold fs-1">Our Special Dishes</h4>
                    <p className="text-muted fs-6">You know what makes canteen awesome!</p>
                    <p>
                        It’s not just the food—it’s the special dishes that everyone raves about.
                        You know, the ones that make you skip classes just to get a taste.
                    </p>
                    <div className="special-images">
                        {[Idly, Dosa, Meals, Noodles, FR, Manchu].map((dish, index) => (
                            <img
                                key={index}
                                src={dish}
                                alt={`dish-${index}`}
                                className="dish-img"
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="footer-section mt-5 py-4">
                    <div className="container text-light">
                        <div className="row text-start">
                            <div className="col-md-4 mb-3">
                                <h6 className="fw-bold">Opening Hours</h6>
                                <p className="mb-1">Monday–Saturday<br />8:00 AM–6:00PM</p>
                                <p className="mb-1">Sunday<br />Closed</p>
                                <p>Visakhapatnam, Duvvada–530046</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h6 className="fw-bold">Navigation</h6>
                                <ul className="list-unstyled">
                                    <li>Menu</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Main dishes</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h6 className="fw-bold">Dishes</h6>
                                <ul className="list-unstyled">
                                    <li>Idly & Sambar</li>
                                    <li>Dosa</li>
                                    <li>Meals</li>
                                    <li>Noodles</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="text-light" />
                        <div className="text-center">
                            <p className="mb-1">Follow us on</p>
                            <div className="d-flex justify-content-center gap-3">
                                <i className="bi bi-facebook fs-4"></i>
                                <i className="bi bi-instagram fs-4"></i>
                                <i className="bi bi-twitter-x fs-4"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Bottom Navigation - Mobile Only */}
            <nav className="footer-nav fixed-bottom d-flex justify-content-around align-items-center bg-white shadow-sm py-2">
                <div className="nav-icon text-center">
                    <i className="bi bi-house-door-fill fs-5"></i>
                    <div className="small-text">Home</div>
                </div>
                <div className="nav-icon text-center">
                    <i className="bi bi-cart-fill fs-5"></i>
                    <div className="small-text">Order</div>
                </div>
                <div className="nav-icon text-center">
                    <i className="bi bi-clock-history fs-5"></i>
                    <div className="small-text">History</div>
                </div>
                <div className="nav-icon text-center">
                    <i className="bi bi-person-fill fs-5"></i>
                    <div className="small-text">Account</div>
                </div>
            </nav>
        </div>
    );
}

export default Dashboard;
