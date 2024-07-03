import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();

  function isLinkActive(href: string) {
    const isLinkActive = router.asPath === href;
    return isLinkActive ? "active" : "";
  }
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="logo mr-4">
              <Link
                href="/"
                className="text-black d-flex align-items-center g-2"
              >
                <img
                  src="/images/dfd-logo.jpeg"
                  width="160"
                  alt=""
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </div>
            <div className="ml-4 col-12 col-sm-12 col-lg-12 site-navigation text-left">
              <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu">
                {NAV_LINKS.map((link) => (
                  <li
                    className={`nav-item nav-link ${isLinkActive(link.href)}`}
                    style={{ fontSize: "large" }}
                    key={link.title}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>

              <ul
                className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right menu-absolute navbar-icon"
                style={{ fontSize: "large" }}
              >
                <li className="cta-button d-none">
                  <a href="contact.html" target="_blank">
                    {" "}
                    Reach out to Us{" "}
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/447413602698" className="navbar-icon">
                    <span className="icon-whatsapp"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: info@dryliningfinishers.co.uk"
                    className="navbar-icon"
                  >
                    <span className="icon-mail_outline"></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+4407476614867" className="navbar-icon">
                    <span className="icon-phone"></span>
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="burger ml-auto site-menu-toggle js-menu-toggle d-block d-lg-none dark"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- END container --> */}
      </nav>
    </div>
  );
};

export default Navbar;
