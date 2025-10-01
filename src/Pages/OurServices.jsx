import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../Components/PageHeader";
import { servicesContent, sliderImages, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";

const Services = () => {
  return (
    <>
      <SeoHead {...seoData.services} />
      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "Services", active: true },
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

        {/* Services Section */}
        <section className="container py-5">
          <div className="row g-4">
            {/* Left column: services */}
            <div className="col-lg-8">
              <div id="servicesAccordion">
                {servicesContent.map((service, idx) => {
                  const collapseId = `svc-collapse-${idx}`;
                  const isFirst = idx === 0;

                  return (
                    <motion.div
                      key={idx}
                      className="mb-2"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: idx * 0.06 },
                      }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                      {/* Header */}
                      <motion.button
                        className="w-100 d-flex align-items-center justify-content-between list-btn text-start px-4 py-3 bg-light border rounded-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <span className="fw-semibold text-secondary">
                          {idx + 1}.&nbsp; {service.title}
                        </span>
                        <i
                          className={`bi ${
                            isFirst ? "bi-dash-lg" : "bi-plus-lg"
                          } text-muted ms-3`}
                        ></i>
                      </motion.button>

                      {/* Body */}
                      <div
                        id={collapseId}
                        className={`collapse ${
                          isFirst ? "show" : ""
                        } rounded-0 border`}
                        data-bs-parent="#servicesAccordion"
                      >
                        <motion.div
                          className="px-4 py-3 bg-light"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                          }}
                          viewport={{ once: true }}
                        >
                          {service.content.map((item, i) =>
                            item.type === "paragraph" ? (
                              <p key={i} className="mb-2 text-muted small">
                                {item.text}
                              </p>
                            ) : (
                              <ul key={i} className="mt-3 list-unstyled">
                                {item.items.map((li, j) => (
                                  <motion.li
                                    key={j}
                                    className="text-muted"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                        duration: 0.35,
                                        delay: j * 0.05,
                                      },
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    <i className="bi bi-arrow-right-short dark-text me-1"></i>{" "}
                                    {li}
                                  </motion.li>
                                ))}
                              </ul>
                            )
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-4">
              <motion.div
                className="card border rounded-0 mb-4 text-center"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.45 },
                }}
                viewport={{ once: true }}
              >
                <div className="card-body py-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle border"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-telephone-outbound-fill dark-text fs-3"></i>
                  </div>
                  <motion.h3
                    className="mt-3 mb-0 fw-bold dark-text"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35, delay: 0.1 },
                    }}
                    viewport={{ once: true }}
                  >
                    02 9819 7799
                  </motion.h3>
                </div>
              </motion.div>

              <motion.div
                className="card border rounded-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: 0.1 },
                }}
                viewport={{ once: true }}
              >
                <div className="card-header banner rounded-0 border-0 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-building text-white"></i>
                    <span className="fw-semibold text-white heading">
                      Located at:
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="fw-semibold">
                    Lo Surdo Braithwaite &amp; Co
                  </div>
                  <div>75, Lyons Road,</div>
                  <div>Drummoyne, NSW - 2047</div>

                  <div className="small">
                    <div>
                      <span className="fw-semibold">P: </span> 02 9819 7799
                      <span className="mx-2">|</span>
                      <span className="fw-semibold">F: </span> 02 9819 7653
                    </div>
                    <div>
                      <span className="fw-semibold">E: </span>
                      <a href="mailto:info@lsbcpas.com" className="dark-text">
                        info@lsbcpas.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
