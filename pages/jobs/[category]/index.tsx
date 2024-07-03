import { JOBS } from "@/constants/jobs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const JobCategory = () => {
  const { category } = useRouter().query;

  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>

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
                          {category}
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
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <ul className="job-list">
                {JOBS[category as keyof typeof JOBS]?.jobs?.map((job) => (
                  <li key={job.title} className="job-preview">
                    <div className="content float-left">
                      <h4 className="job-title">{job.title}</h4>
                      <h5 className="company">{job.description}</h5>
                    </div>
                    <Link
                      href={`/jobs/${category}/${job.title}`}
                      className="btn btn-apply float-sm-right float-xs-left"
                    >
                      Apply
                    </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
