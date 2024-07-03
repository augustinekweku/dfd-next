import { useRouter } from "next/router";
import React from "react";

const JobDetails = () => {
  const { job } = useRouter().query;
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
                          {job}
                        </span>
                      </h1>
                      <p
                        className="mb-4 text-white"
                        style={{ fontSize: "24px" }}
                      >
                        Fill out the form below to apply for this job.
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
    </div>
  );
};

export default JobDetails;
