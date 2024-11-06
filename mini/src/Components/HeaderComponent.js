import { Link } from 'react-router-dom';


import '../HeaderComponent.css';
function HeaderComponent() {
  

    return (
        <div className="container bg-color position-sticky">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-grow-1 justify-content-end align-items-center">
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign" className="nav-link">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
