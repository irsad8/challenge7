import React, { useState, useEffect, useRef, Children } from "react";

function Layout({ children }) {
  // const [addClass, setAddClass] = useState(false);
  // const toggle = useRef(null);

  // const handleClick = () => {
  //   setAddClass(true);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (toggle.current && !toggle.current.contains(event.target)) {
  //       setAddClass(false);
  //     }
  //   };

  //   // Add event listener when addClass is true
  //   if (addClass) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  //   // Cleanup
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [addClass]);

  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-truck-moving"></i>
          </div>
          <div className="sidebar-brand-text mx-3">BINAR Car Rental</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <a className="nav-link" href="/list">
            <i className="fas fa-fw fa-car"></i>
            <span>List Cars</span>
          </a>
        </li>
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow mx-1">
                <button
                  className="nav-link dropdown-toggle"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell fa-fw"></i>
                </button>
                <div
                  className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in`}
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 12, 2019
                      </div>
                      <span className="font-weight-bold">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 7, 2019
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 2, 2019
                      </div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-envelope fa-fw"></i>
                </a>
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 className="dropdown-header">Message Center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_1.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi?
                      </div>
                      <div className="small text-gray-500">
                        Emily Fowler · 58m
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="./img/undraw_profile_2.svg"
                        alt="..."
                      />
                      <div className="status-indicator"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi?
                      </div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_3.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi?
                      </div>
                      <div className="small text-gray-500">
                        Morgan Alvarez · 2d
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi?
                      </div>
                      <div className="small text-gray-500">
                        Chicken the Dog · 2w
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Read More Messages
                  </a>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Admin
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="./img/undraw_profile.svg"
                    alt="Admin Profile"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    data-toggle="modal"
                    data-target="#formModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h5 mb-0 text-gray-800">
                <b>Cars &gt; </b>List car
              </h1>
              <div>
                <button
                  className="btn btn-success float-right"
                  data-toggle="modal"
                  data-target="#formModal"
                >
                  <i className="fas fa-plus-circle"></i> tambah mobil
                </button>
              </div>
            </div>
            <div className="row">
              {/* ini isi content */}
              {children}
            </div>
          </div>
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; synrgy binar 2024</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
