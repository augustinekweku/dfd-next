import JobCategories from "@/components/JobCategories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drylining Finishers & Decorators Ltd</title>
        <meta
          name="description"
          content=" Drylining Finishers & Decorators Ltd is a construction company that specializes in internal partitions, metal stud partitions, traditional plastering, spray plastering, ceiling installation, rendering services, and plasterboard installation. We are based in Portsmouth, UK."
        />
        <meta
          name="keywords"
          content="Internal partitions, metal stud partitions, traditional plastering, spray plastering, ceiling installation, rendering services, plasterboard installation, UK construction services, Portsmouth plastering services"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dfd-logo.jpeg" />
      </Head>
      <div className="untree_co-slider">
        <div className="image-slider-wrap">
          <div className="image-slider">
            <div
              className="item active overlay-left"
              style={{ backgroundImage: "url('images/banner-3.jpg')" }}
            ></div>
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="slider-direction-wrap d-none">
            <div className="slider-direction" data-aos="fade-right">
              <a href="#" className="custom-owl-prev-heading">
                Prev
              </a>
              <a href="#" className="custom-owl-next-heading">
                Next
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="slider-heading owl-carousel js-slider-heading no-nav">
                <div>
                  <h1 className="mb-4">
                    <span className="d-block">Best Construction</span> Company
                    <i>For You</i>
                  </h1>
                  <p className="mb-4 slider-sub-heading">
                    Providing a bespoke tailored solution to your drylining &
                    decorating needs. Fully insured.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary d-none">
                      Reach out to Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ABOUT US --> */}
      <div className="features-lg" id="about">
        <div className="container">
          <div className="row feature align-items-center justify-content-between">
            <div
              className="col-lg-7 section-stack order-lg-2 mb-4 mb-lg-0 position-relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="image-stack">
                <div
                  className="image-stack__item image-stack__item--top"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="images/banner.jpeg"
                    data-fancybox="gal0"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/banner.jpeg"
                      alt="Image"
                      style={{ height: "340px", objectFit: "cover" }}
                    />
                  </a>
                </div>
                <div
                  className="image-stack__item image-stack__item--bottom"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="images/indoor.jpeg"
                    data-fancybox="gal0"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/indoor.jpeg"
                      alt="Image"
                      style={{ height: "340px", objectFit: "cover" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 section-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="font-weight-bold mb-4 heading">About Us</h2>
              <p className="mb-4">
                Welcome to Drylining Finishers & Decorators Ltd, your premier
                partner in transforming spaces with precision and elegance. With
                years of expertise in drylining, painting, and decorating, we
                specialize in delivering exceptional results that exceed
                expectations. Whether you&apos;re embarking on a residential
                makeover or enhancing your commercial environment, our dedicated
                team is committed to craftsmanship, attention to detail, and
                personalized service. At Drylining Finishers & Decorators Ltd,
                we blend creativity with technical expertise to bring your
                vision to life, ensuring every project reflects quality and
                sophistication. Join us as we redefine spaces with innovation
                and excellence.
              </p>
              <ul className="list-unstyled list-check primary mb-5">
                <li>Versatile Space Configuration</li>
                <li>Enhanced Acoustic and Thermal Insulation</li>
                <li>Aesthetic Integration</li>
              </ul>

              <p>
                <a href="contact.html" className="btn btn-primary d-none">
                  Reach out to Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF ABOUT US --> */}

      {/* <!-- SERVICES --> */}
      <div className="site-section services bg-light" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pt-3 mb-4 mb-lg-0" data-aos="fade-up">
              <h2 className="heading font-weight-bold">Our Services</h2>
              <p className="mb-4">
                We specialize in professional drylining and decorating services,
                transforming spaces with precision and expertise.
                <span className="d-none">
                  Whether you need efficient drywall installation or a
                  meticulous decorative finish, our skilled team ensures
                  high-quality results tailored to your unique needs.
                </span>
                Discover how our solutions can enhance your project&apos;s
                aesthetic and functional appeal.
              </p>
              <p>
                <a href="#" className="btn btn-primary d-none">
                  Get Started
                </a>
              </p>
            </div>

            <div className="col-lg-9">
              <div className="row text-center">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="service-card bg-white p-3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="service-card-image-card pb-4">
                      <img
                        src="images/services/internal-partitions.jpeg"
                        alt="finishes"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="service-card-content">
                      <h5>Internal partitions</h5>
                      <p className="mb-0">Metal Stud/jumbo stud</p>
                      <p>Dot & Dab</p>
                      <p className="mb-1"></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="service-card bg-white p-3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="service-card-image-card pb-3">
                      <img
                        src="images/services/finishes.jpeg"
                        alt="ceilings"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="service-card-content">
                      <h5>Finishes</h5>
                      <p className="mb-0">Tape & Jointing</p>
                      <p className="mb-0">Traditional Plastering</p>
                      <p className="mb-0">Spray Plastering</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="service-card bg-white p-3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="service-card-image-card pb-3">
                      <img
                        src="images/services/rendering.jpeg"
                        alt="ceilings"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="service-card-content">
                      <h5>Rendering</h5>
                      <p className="mb-0">Mono couche</p>
                      <p className="mb-0">Acrylic</p>
                      <p className="mb-0">Silicone</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="service-card bg-white p-3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="service-card-image-card pb-3">
                      <img
                        src="images/services/ceilings.jpeg"
                        alt="ceilings"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="service-card-content">
                      <h5>Ceilings</h5>
                      <p className="mb-0">Metal Frame</p>
                      <p className="mb-0">Grid & Tile</p>
                      <p className="mb-0">Acoustic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END OF SERVICES --> */}

      <div
        className="site-section overlay-bg site-cover-2"
        style={{ backgroundImage: "url('images/banner-5.png')" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 mx-auto text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="text-white mb-4">Need any of our services?</h2>
              <p className="mb-0">
                <a
                  href="contact.html"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Contact Us!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- JOBS --> */}
      <JobCategories />
      {/* <!-- END OF JOBS --> */}

      <div className="features-lg">
        <div className="container">
          <div className="row feature align-items-center justify-content-between">
            <div
              className="col-lg-7 section-stack order-lg-2 mb-4 mb-lg-0 position-relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="image-stack">
                <div
                  className="image-stack__item image-stack__item--bottom"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="images/partition.JPEG"
                    data-fancybox="gal1"
                    data-caption="Milbank Lock, Manchester"
                    className="fancybox hover-float"
                  >
                    <img src="images/partition.JPEG" alt="Image" />
                  </a>
                </div>
                <div
                  className="image-stack__item image-stack__item--top"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="images/window.jpeg"
                    data-fancybox="gal1"
                    className="fancybox hover-float"
                    data-caption="Hawkins Factory, Northampton"
                  >
                    <img src="images/window.jpeg" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 section-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="font-weight-bold mb-4 heading">
                Exploring The Quality Internal Partitions
              </h2>
              <p className="mb-4">
                Utilizing advanced techniques and materials, we construct
                durable partitions that enhance both the functionality and
                aesthetics of your interior layout.
              </p>
              <ul className="list-unstyled list-check primary mb-5">
                <li>Versatile Space Configuration</li>
                <li>Enhanced Acoustic and Thermal Insulation</li>
                <li>Aesthetic Integration</li>
              </ul>

              <p>
                <a href="contact.html" className="btn btn-primary">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- PROJECTS --> */}
      <div className="site-section bg-light projects" id="projects">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 order-2 pl-lg-5"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="mb-4 heading font-weight-bold">Projects</h2>
              <p className="mb-4">
                Our portfolio showcases a diverse range of projects,
                highlighting our expertise in drylining and decorating. From
                modern office spaces to residential homes, we have delivered
                exceptional results across various sectors. Each project
                reflects our commitment to quality, innovation, and client
                satisfaction, demonstrating our capability to meet the unique
                demands of any construction endeavor.
              </p>

              <ul className="list-unstyled list-check primary">
                <li>Precise dot & dab application.</li>
                <li>Installation of robust metal stud walls</li>
                <li>High-quality drylining and decorating.</li>
                <li>Tailored internal partition solutions.</li>
                <li>Expertise across commercial and residential projects.</li>
                <li>Custom internal partitions.</li>
              </ul>
            </div>
            <div className="col-lg-6 order-1">
              <div className="row">
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="images/apartment.jpeg"
                    data-fancybox="gal"
                    data-caption="Western Circus W3"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/apartment.jpeg"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="images/projects/project-2.JPEG"
                    data-fancybox="gal"
                    data-caption="Hawkins Factory, Northampton"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/projects/project-2.JPEG"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="images/banner-4.jpg"
                    data-fancybox="gal"
                    className="fancybox hover-float"
                    data-caption="Ashgate View, Burwash"
                  >
                    <img
                      src="images/banner-4.jpg"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="images/banner-5.png"
                    data-fancybox="gal"
                    data-caption="Nestle Road, Hayes"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/banner-5.png"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <a
                    href="images/window.jpeg"
                    data-fancybox="gal"
                    data-caption="Milbank Lock, Manchester"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/window.jpeg"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
                <div
                  className="col-6 col-md-4 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="images/partition.JPEG"
                    data-fancybox="gal"
                    data-caption="Hawkins Factory, Northampton"
                    className="fancybox hover-float"
                  >
                    <img
                      src="images/partition.JPEG"
                      alt="Image"
                      className="img-fluid custom-rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF PROJECTS --> */}

      {/* <!-- FOOTER --> */}

      {/* <!-- END OF  FOOTER --> */}
    </>
  );
}
