import { getYear } from "@/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About</h3>
              <a
                href="index.html"
                className="text-black d-flex align-items-center mb-3"
              >
                <img src="/images/dfd-logo.jpeg" width="150" alt="" />
                <p className="ml-2 mb-0">
                  Drylining Finishers <br />& Decorators Ltd
                </p>
              </a>
              <p>
                Welcome to Drylining Finishers & Decorators Ltd, your trusted
                partner in high-quality construction solutions. With expertise
                in various aspects of building and finishing, we deliver
                exceptional results tailored to your needs.
              </p>
            </div>
            <div className="widget">
              <h3>Connect with us</h3>
              <ul className="social list-unstyled">
                <li>
                  <a href="https://x.com/drylinerf?s=11">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/drylinersfnr?igsh=czYwaTZ0aWdrbzBz&utm_source=qr">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="d-none">
                  <a href="#">
                    <span className="icon-dribbble"></span>
                  </a>
                </li>
                <li className="d-none">
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3>Contact</h3>
              <p>
                <span className="font-weight-bold">
                  Address: <br />
                </span>
                Unit 29 Highcroft Industrial Estate, <br />
                Enterprise Rd, Waterlooville PO8 0BT
              </p>
              <p>
                <span className="font-weight-bold">
                  Phone: <br />
                </span>
                +44 07476614867
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-12">
                <div className="widget">
                  <h3>Quick Links</h3>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/#about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/#services">Services</Link>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center copyright">
          <div className="col-md-8">
            <p>
              Copyright &copy;
              {getYear()}
              Drylining Finishers & Decorators Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
