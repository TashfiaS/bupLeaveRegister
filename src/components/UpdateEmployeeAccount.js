import React from "react";

const UpdateEmployeeAccount = (props) => {
  return (
    <>
      <div id="main">
        <nav class="navbar navbar-header navbar-expand navbar-light">
          <div onClick={() => props.updateSidebarState()} className="sidebar-toggler" style={{ cursor: "pointer" }}>
            <span className="navbar-toggler-icon"></span>
          </div>
          <button
            class="btn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex align-items-center navbar-light ms-auto">
              <li class="dropdown">
                <a href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div class="avatar me-1">
                    <img src="assets/images/admin.png" alt="" />
                  </div>
                  <div class="d-none d-md-block d-lg-inline-block">Hi, Employee</div>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="update.html">
                    <i data-feather="user"></i> Account
                  </a>
                  <a class="dropdown-item" href="update_password.html">
                    <i data-feather="settings"></i> Settings
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="login.html">
                    <i data-feather="log-out"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div class="main-content container-fluid">
          <div class="page-title">
            <div class="row">
              <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Update Profile</h3>
              </div>
              <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html" class="text-success">
                        Dashboard
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Update Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- // Basic multiple Column Form section start --> */}
          <section id="multiple-column-form">
            <div class="row match-height">
              <div class="col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <form class="form">
                        <div class="row">
                          <div class="col-md-6 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">ID Number</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="id number" id="first-name-icon" value="123456" />
                                <div class="form-control-icon">
                                  <i class="fa fa-hash"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Gender</label>
                              <div class="position-relative">
                                <fieldset class="form-group">
                                  <select class="form-select" id="basicSelect">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </fieldset>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">First Name</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="first name" id="first-name-icon" value="John" />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Middle Name</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="middle name" id="first-name-icon" value="M." />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Last Name</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="last name" id="first-name-icon" value="Doe" />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Age</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="age" id="first-name-icon" value="24" />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Email</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="email" id="first-name-icon" value="john@gmail.com" />
                                <div class="form-control-icon">
                                  <i class="fa fa-envelope"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Contact</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="contact" id="first-name-icon" value="091234567898" />
                                <div class="form-control-icon">
                                  <i class="fa fa-phone"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Profile</label>
                              <div class="position-relative">
                                <input type="file" class="form-control" placeholder="" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group">
                              <label for="country-floating">Deapartment</label>
                              <fieldset class="form-group">
                                <select class="form-select" id="basicSelect">
                                  <option>IT</option>
                                  <option>ENGINEERING</option>
                                  <option>HR</option>
                                  <option>FINANCE</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group">
                              <label for="company-column">Designation</label>
                              <fieldset class="form-group">
                                <select class="form-select" id="basicSelect">
                                  <option>IT</option>
                                  <option>MANAGER</option>
                                  <option>SUPERVISOR</option>
                                  <option>ENGINEER</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Username</label>
                              <div class="position-relative">
                                <input type="text" class="form-control" placeholder="username" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Password</label>
                              <div class="position-relative">
                                <input type="password" class="form-control" placeholder="passsword" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary me-1 mb-1">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- // Basic multiple Column Form section end --> */}
        </div>
      </div>
    </>
  );
};

export default UpdateEmployeeAccount;
