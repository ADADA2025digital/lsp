import { motion } from "framer-motion";
import Brand from "../Components/Brand";
import PageHeader from "../Components/PageHeader";
import { sliderImages, urlitems, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";

const About = () => {
  return (
    <>
      <SeoHead {...seoData.about} />

      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "About Us", active: true },
          ]}
        />

        {/* Carousel Banner */}
        <section className="py-3">
          <div className="container">
            <div
              id="imageSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel Inner */}
              <div className="carousel-inner">
                {sliderImages.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={image.id}
                  >
                    <img
                      src={image.src}
                      className="d-block w-100"
                      alt={image.alt}
                      style={{ height: "50vh" }}
                    />
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imageSlider"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imageSlider"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

              {/* Bottom Dots with Arrows */}
              <div className="custom-indicators position-absolute start-50 translate-middle-x d-flex align-items-center gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#imageSlider"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active dot-btn" : "dot-btn"}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row gx-md-5 g-0">
            <div className="col-12 col-md-8">
              <article className="h-100">
                <div className="position-relative border-dotted mb-4">
                  <motion.h6
                    className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    We Are..{" "}
                  </motion.h6>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.05,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  Lo Surdo Braithwaite has been established since 1972 providing
                  business and taxation services to the broader community. The
                  Partners of the Firm are well known to the local area and
                  within the professional community. The Partners are actively
                  engaged in professional committees as well as participation in
                  various community organizations.
                </motion.p>

                <div className="position-relative border-dotted mb-4">
                  <motion.h6
                    className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.1,
                      },
                    }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    Our Professional Team
                  </motion.h6>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
                  }}
                  viewport={{ once: true }}
                >
                  "Our Firm takes pride in our people that form the backbone of
                  our Management"
                </motion.p>

                <ul className="list-unstyled">
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.05 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Medical & Dental Practices
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.1 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Insurance Companies
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.15 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Real Estates & Property Development
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.2 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Building & Construction
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.25 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Information Technologies
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Importing & Distribution
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.35 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Manufacturing
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.4 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Travel Industry
                  </motion.li>
                  <motion.li
                    className="d-flex align-items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.45 },
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                    Wholesale & Retail Businesses
                  </motion.li>
                </ul>
              </article>
            </div>

            {/* <div className="col-12 col-md-4">
              <div className="position-relative border-dotted mb-4">
                <motion.h6
                  className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  CHECK LIST & NEWS LETTER
                </motion.h6>
              </div>

              <motion.div
                className="card border rounded-0"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.05 },
                }}
                viewport={{ once: true }}
              >
                <div className="card-body p-0">
                  <ul className="list-unstyled m-0">
                    {urlitems.map((list, i) => (
                      <motion.li
                        key={i}
                        className="border-bottom"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.08 * i,
                          },
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="p-2">
                          <h6 className="m-0 text-dark">{list.urlLabel}</h6>
                          <a
                            href={list.href}
                            className="link-danger text-decoration-none small"
                          >
                            <i className="bi bi-globe-americas-fill me-1 text-dark small"></i>
                            {list.title}
                          </a>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div> */}
          </div>
        </section>

        <Brand />
      </div>
    </>
  );
};

export default About;
