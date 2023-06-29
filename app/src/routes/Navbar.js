export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblue">
      <a className="navbar-brand">
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul className="navbar-nav border-bottom border-dark text-dark">
          <li className="nav-item active ps-2 pe-2">
            <a className="nav-link text-dark">
              Home
            </a>
          </li>
          <li className="nav-item ps-2 pe-2">
            <a className="nav-link text-dark">
              Appetizers
            </a>
          </li>
          <li className="nav-item ps-2 pe-2">
            <a className="nav-link text-dark">
              Lunch
            </a>
          </li>
          <li className="nav-item ps-2 pe-2">
            <a className="nav-link text-dark">
              Dinner
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
