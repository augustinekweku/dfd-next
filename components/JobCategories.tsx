import { JOBS } from "@/constants/jobs";
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
              We have a range of jobs in all the services we offer. Check out
              our job listings below.
            </p>
            <p>
              <a href="#" className="btn btn-primary d-none">
                Get Started
              </a>
            </p>
          </div>

          <div className="col-lg-12">
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
