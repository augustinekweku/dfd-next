import React from "react";

const contact = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <div
              className="overlay-bg"
              style={{
                backgroundImage: "url('images/banner-6.jpeg')",
                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container" data-aos="fade-up">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div>
                      <h1 className="mb-4 mt-5 pt-5">
                        <span className="d-block font-weight-bold text-white">
                          Contact us
                        </span>
                      </h1>
                      <p
                        className="mb-4 text-white"
                        style={{ fontSize: "24px" }}
                      >
                        Feel free to contact us for any inquiries or questions
                        you may have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-grey bg-light">
        <div className="container bg-white p-5">
          <div className="block">
            <div className="row justify-content-center">
              <div
                className="col-md-12 col-lg-12 pb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="service-2 no-shadow link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      {/* <!-- /.icon --> */}
                      <div className="service-contents">
                        <p>
                          Unit 29 Highcroft Industrial Estate, Enterprise Rd,
                          Waterlooville PO8 0BT
                        </p>
                      </div>
                      {/* <!-- /.service-contents--> */}
                    </div>
                    {/* <!-- /.service --> */}
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="service-2 no-shadow link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                      </div>
                      {/* <!-- /.icon --> */}
                      <div className="service-contents">
                        <p>info@dryliningfinishers.co.uk</p>
                      </div>
                      {/* <!-- /.service-contents--> */}
                    </div>
                    {/* <!-- /.service --> */}
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="service-2 no-shadow link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay="0"
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                      </div>
                      {/* <!-- /.icon --> */}
                      <div className="service-contents">
                        <p>+44 07476614867</p>
                      </div>
                      {/* <!-- /.service-contents--> */}
                    </div>
                    {/* <!-- /.service --> */}
                  </div>
                </div>

                <form action="https://submit-form.com/pMzgdJCef">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name=""
                      required
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area" id="map-canvas">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2785073687483!2d-1.0016984223718202!3d50.918564853547196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48744418bbc29731%3A0xdee342bc0e34f1da!2sHighcroft%20Industrial%20Estate!5e0!3m2!1sen!2sgh!4v1716897824119!5m2!1sen!2sgh"
          style={{
            border: 0,
            width: "100%",
            height: "450px",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;
