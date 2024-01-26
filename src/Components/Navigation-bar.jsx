import PropTypes from "prop-types";

const Navigation = ({ cartQuantity }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 px-lg-5">
      <div className="container-fluid  px-4 px-lg-5">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <li className="nav-item" style={{ listStyleType: "none" }}>
        <div className="notification-box">
          <li className="nav-item" style={{ listStyleType: "none" }}></li>
          <a className="nav-link" href="#">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ marginRight: "5px" }}
            ></i>
            Cart
            <span className="badge badge-danger">{cartQuantity}</span>
          </a>
        </div>
      </li>
    </nav>
  );
};

Navigation.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};

export default Navigation;
