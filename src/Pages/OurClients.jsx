import { motion } from "framer-motion";
import Brand from "../Components/Brand";
import PageHeader from "../Components/PageHeader";
import { newsletteritems, sliderImages, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";

const OurClients = () => {
  return (
    <>
      <SeoHead {...seoData.clients} />

      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "Our Clients", active: true },
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
            {/* Left column */}
            <div className="col-12 col-md-8">
              <article className="h-100">
                <div className="position-relative border-dotted mb-4">
                  <motion.h6
                    className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    }}
                    viewport={{ once: true }}
                  >
                    LSB services clients from a broad range of market segments
                  </motion.h6>
                </div>

                <div className="text-dark">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.1 },
                    }}
                    viewport={{ once: true }}
                  >
                    Our experience and in-depth industry knowledge is the key to
                    bringing our clients the best advice.
                  </motion.p>

                  <motion.p
                    className="fw-semibold"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 },
                    }}
                    viewport={{ once: true }}
                  >
                    Our Philosophy is to partner with our clients in providing
                    services beyond customer expectations.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    Client Profile:-
                  </motion.p>

                  <ol>
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
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5, delay: 0.1 * idx },
                        }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </article>
            </div>

            {/* Right column */}
            {/* <div className="col-12 col-md-4">
              <div className="position-relative border-dotted mb-4">
                <motion.h6
                  className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  }}
                  viewport={{ once: true }}
                >
                  CHECK LIST & NEWS LETTER
                </motion.h6>
              </div>

              <motion.div
                className="card border rounded-0"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <div className="card-body p-0">
                  <ul className="list-unstyled m-0">
                    {newsletteritems.map((n, i) => (
                      <motion.li
                        key={i}
                        className="border-bottom"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: 0.1 * i },
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="p-3">
                          <div className="d-flex align-items-center gap-2">
                            <h6 className="m-0 text-danger fw-semibold">
                              {n.monthLabel}
                            </h6>
                            {n.download && (
                              <a
                                href={n.href}
                                download
                                className="text-danger text-decoration-none ms-1"
                                aria-label={`Download ${n.title}`}
                              >
                                <i className="bi bi-download"></i>
                              </a>
                            )}
                          </div>

                          <div className="small">
                            <span className="text-success me-1">[</span>
                            <a
                              href={n.href}
                              className="link-success text-decoration-none fw-medium"
                            >
                              {n.title}
                            </a>
                            <span className="text-success ms-1">]</span>
                          </div>

                          {n.description && (
                            <div className="text-muted small">
                              {n.description}
                            </div>
                          )}
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

export default OurClients;
