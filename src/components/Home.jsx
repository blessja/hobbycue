import homeImage from '../images/home.png';


function Home() {
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col mt-5 d-flex justify-content-center ">
                      <div style={{width: "707px", height: "578px"}} >
                          <h3 className="fs-1 fw-bold fst-italic">Explore your <span
                              style={{color: "#0096C8"}}>hobby</span> or passion</h3>
                          <div style={{width: "100%", height: "120px"}}>
                              <p className="text-start pt-2">Sign-in to interact with a community of fellow hobbyists
                                  and an
                                  eco-system of experts,
                                  teachers, suppliers, classes, workshops, and places to practice, participate or
                                  perform. Your hobby may be about visual or performing arts, sports, games, gardening,
                                  model making, cooking, indoor or outdoor activities…
                              </p>
                          </div>
                          <div className="mt-3 mt-md-0" style={{width: "100%", height: "120px"}}>
                              <p className="text-start pt-4 pt-md-0">If you are an expert or a seller, you can Add your Listing
                                  and promote yourself, your students, products, services or events. Hop on your
                                  hobbyhorse and enjoy the ride.
                              </p>
                          </div>
                          <div className="container">
                              <div className="row">
                                  <div className="col-12" style={{maxWidth: "697px"}}>
                                      <img className="img-fluid" src={homeImage} alt="Home"/>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className="col mt-5 d-flex justify-content-center">
                      <div>
                          <div className="button-group-container">
                          <button className="btn btn-custom2 fs-5 fw-bold">Sign In</button>
                              <button className="btn btn-custom2 fs-5 fw-bold">Join In</button>
                          </div>

                          <div className="button-group-container2 mt-4">
                              <button className="btn-1 fs-5">
                                  <i className="fab fa-google google-icon"></i>
                                  <span className="button-text">Continue with Google</span>
                              </button>
                              <button className="btn-1 fs-5">
                                  <i className="fab fa-facebook-f facebook-icon"></i>
                                  <span className="button-text">Continue with Facebook</span>
                              </button>
                          </div>

                          <div className="mt-5">
                              <div style={{width: "410px", height: "16px"}} className="d-flex col ">
                                  <div style={{width: "140px", height: "2px", border: "1px solid #CED4DA"}} className="content-1"></div>
                                  <div className="fw-light text-custom mx-auto mb-5 fw-bold">Or connect with</div>
                                  <div style={{width: "140px", height: "2px", border: "1px solid #CED4DA"}} className="content-1"></div>
                              </div>
                          </div>

                          <div className="container mt-3 p-0">
                              <form>
                                  <div className="form-group">

                                      <input type="email" className="form-control" id="exampleInputEmail1"
                                             aria-describedby="emailHelp" placeholder="Enter email"/>

                                  </div>
                                  <div className="form-group mt-3">

                                      <input type="password" className="form-control" id="exampleInputPassword1"
                                             placeholder="Password"/>
                                  </div>
                                  <div className="form-group form-check mt-3 d-flex justify-content-between">
                                      <div>
                                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                      </div>

                                      <div><i className="fas fa-eye-slash"></i> Forgot password?</div>
                                  </div>
                                  <button type="submit" className="btn-1 btn-primary mt-3">Continue</button>
                              </form>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </>
  );
}

export default Home;
