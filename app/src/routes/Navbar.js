export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-lightblue">
      <a class="navbar-brand">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav border-bottom border-dark text-dark">
          <li class="nav-item active ps-2 pe-2">
            <a class="nav-link text-dark">
              Home
            </a>
          </li>
          <li class="nav-item ps-2 pe-2">
            <a class="nav-link text-dark">
              Appetizers
            </a>
          </li>
          <li class="nav-item ps-2 pe-2">
            <a class="nav-link text-dark">
              Lunch
            </a>
          </li>
          <li class="nav-item ps-2 pe-2">
            <a class="nav-link text-dark">
              Dinner
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
