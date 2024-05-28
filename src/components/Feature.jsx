import people from '../images/people.png';
import location from '../images/location.png'
import shopping from '../images/shopping.png';
import event from '../images/event.png';

function Feature() {
  return <>
      <div className="container">
          <div className="container mt-5">
              <div className="row justify-content-center">
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center ">
                      <div className="custom-div d-flex flex-column hover-div">
                          <div className="icons ms-5 mt-4 d-flex align-items-center ">
                              <i className="people-group"> <img src={people} alt="peoople group icon"/> </i>
                              <p className="fw-bold ms-3 mb-0">People</p>
                          </div>

                          <div className="icons mt-4 mx-5 d-flex align-items-center ">
                              <p className="fs-6">
                                  Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                              </p>
                          </div>

                          <div className="icons mt-4 mt-md-0 mx-5 d-flex align-items-center ">
                              <button type="submit" className="btn-2 btn-primary mt-3">Connect</button>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                      <div className="custom-div d-flex flex-column">
                          <div className="icons ms-5 mt-4 d-flex align-items-center ">
                              <i className="people-group"> <img src={location} alt="peoople group icon"/> </i>
                              <p className="fw-bold ms-3 mb-0">Place</p>
                          </div>

                          <div className="icons mt-4 mx-5 d-flex align-items-center ">
                              <p className="fs-6">
                                  Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                              </p>
                          </div>

                          <div className="icons mt-4 mt-md-0 mx-5 d-flex align-items-center ">
                              <button type="submit" className="btn-2 btn-primary mt-3">Meet up</button>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                      <div className="custom-div d-flex flex-column">
                          <div className="icons ms-5 mt-4 d-flex align-items-center ">
                              <i className="people-group"> <img src={shopping} alt="peoople group icon"/> </i>
                              <p className="fw-bold ms-3 mb-0">Product</p>
                          </div>

                          <div className="icons mt-4 mx-5 d-flex align-items-center ">
                              <p className="fs-6">
                                  Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                              </p>
                          </div>

                          <div className="icons mt-4 mt-md-0 mx-5 d-flex align-items-center ">
                              <button type="submit" className="btn-2 btn-primary mt-3">Get it</button>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                      <div className="custom-div d-flex flex-column">
                          <div className="icons ms-5 mt-4 d-flex align-items-center ">
                              <i className="people-group"> <img src={event} alt="peoople group icon"/> </i>
                              <p className="fw-bold ms-3 mb-0">Program</p>
                          </div>

                          <div className="icons mt-4 mx-5 d-flex align-items-center ">
                              <p className="fs-6">
                                  Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                              </p>
                          </div>

                          <div className="icons mt-4 mx-5 d-flex align-items-center ">
                              <button type="submit" className="btn-2 btn-primary mt-3">Attend</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </>;
}

export default Feature;
