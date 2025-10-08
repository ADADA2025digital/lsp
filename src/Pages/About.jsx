import React from "react";
import Brand from "../Components/Brand";
import PageHeader from "../Components/PageHeader";
import { sliderImages, urlitems, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <SeoHead {...seoData.about} />

      <div className="container-fluid p-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <PageHeader
            breadcrumbs={[
              { label: "Home", href: "/", icon: "bi-house-fill" },
              { label: "About Us", active: true },
            ]}
          />
        </motion.div>

        {/* Carousel Banner */}
        <section className="py-3">
          <div className="container">
            <motion.div
              id="imageSlider"
              className="carousel slide"
              data-bs-ride="carousel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="carousel-inner position-relative overflow-hidden rounded-2">
                {sliderImages.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={image.id}
                  >
                    <motion.img
                      src={image.src}
                      className="d-block w-100"
                      alt={image.alt}
                      style={{ height: "50vh", objectFit: "cover" }}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0,
                        },
                      }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    />
                  </div>
                ))}
              </div>

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

              <motion.div
                className="custom-indicators position-absolute start-50 translate-middle-x d-flex align-items-center gap-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#imageSlider"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active dot-btn" : "dot-btn"}
                  ></button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row gx-md-5 g-0">
            <div className="col-12 col-md-8">
              <article className="h-100">
                <div className="position-relative border-dotted mb-4">
                  <motion.h6
                    className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                    }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    We Are..
                  </motion.h6>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                    }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    Our Professional Team
                  </motion.h6>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  "Our Firm takes pride in our people that form the backbone of
                  our Management"
                </motion.p>

                <ul className="list-unstyled">
                  {[
                    "Medical & Dental Practices",
                    "Insurance Companies",
                    "Real Estates & Property Development",
                    "Building & Construction",
                    "Information Technologies",
                    "Importing & Distribution",
                    "Manufacturing",
                    "Travel Industry",
                    "Wholesale & Retail Businesses",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="d-flex align-items-start"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0,
                        },
                      }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      <i className="bi bi-arrow-right-circle-fill dark-text me-2 small"></i>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <Brand />
        </motion.div>
      </div>
    </>
  );
};

export default About;
