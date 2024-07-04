import { ALL_JOBS, JOBS } from "@/constants/jobs";
import Link from "next/link";
import React from "react";

const JobCategories = () => {
  return (
    <div className="site-section services bg-light" id="jobs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-3 mb-4 mb-lg-0" data-aos="fade-up">
            <h2 className="heading font-weight-bold text-center">
              Our Job Listings
            </h2>
            <p className="mb-4 text-center">
              Here at Drylining Finishers & Decorators Limited we are currently
              have vacancies for the following tradesmen:
            </p>
          </div>
          <div className="col-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10">
                <ul className="job-list">
                  {Object.keys(ALL_JOBS)?.map((job) => (
                    <li key={job} className="job-preview">
                      <div className="content float-left">
                        <h4 className="job-title">{job}</h4>
                        {/* <h5 className="company">{job}</h5> */}
                      </div>
                    </li>
                  ))}
                  {/* <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Senior Web Designer</h4>
                    <h5 className="company">Seattle, WA</h5>
                  </div>
                  <a
                    href="#"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li> */}
                </ul>
              </div>

              <div className="col-md-10">
                <div className="pt-4">
                  <h5 className="heading font-weight-bold text-center pt-4 pb-3">
                    Please submit an enquiry using the form below:
                  </h5>

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

          <div className="col-lg-12 d-none">
            <div className="row text-center">
              {Object.keys(JOBS).map((job) => (
                <div key={job} className="col-12 col-md-6 col-lg-3">
                  <div
                    className="service-card bg-white p-3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="service-card-image-card pb-4">
                      <img
                        src={JOBS[job as keyof typeof JOBS].image}
                        alt={JOBS[job as keyof typeof JOBS].title}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="service-card-content">
                      <h5>{JOBS[job as keyof typeof JOBS].title}</h5>
                      <Link
                        href={`/jobs/${job}`}
                        className="btn btn-primary my-3 py-2"
                      >
                        View Jobs
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
