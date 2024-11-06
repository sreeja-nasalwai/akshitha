import { Link } from 'react-router-dom';

function HeaderComponent() {
  const token = localStorage.getItem('token');

  return (
    <div className="container-fluid bg-light position-sticky top-0 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold">WorkForce</h5>
        <ul className="nav d-flex flex-grow-1 justify-content-end">
          <li className="nav-item">
            <Link to="/home" className="nav-link text-dark">
              Home
            </Link>
          </li>
          {!token && (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-dark">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign" className="nav-link text-dark">
                  SignUp
                </Link>
              </li>
            </>
          )}
          {token && (
            <>
              <li className="nav-item">
                <Link to="/admin" className="nav-link text-dark">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link text-dark">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;