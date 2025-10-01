import { motion } from "framer-motion";
import PageHeader from "../Components/PageHeader";
import Brand from "../Components/Brand";
import { sliderImages, team, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";

const OurTeam = () => {
  return (
    <>
      <SeoHead {...seoData.team} />

      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "Our Team", active: true },
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
          <div className="row g-md-5 g-0">
            {team.map((p, idx) => (
              <motion.div
                className="col-12 col-lg-6 mt-5 mt-0"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5},
                }}
              >
                <article className="h-100">
                  <div className="position-relative border-dotted mb-4">
                    <motion.h6
                      className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative me-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45 },
                      }}
                      viewport={{ once: true }}
                    >
                      {p.name}
                    </motion.h6>
                    {p.degrees && (
                      <motion.small
                        className="text-secondary small"
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 0.35, delay: 0.1 },
                        }}
                        viewport={{ once: true }}
                      >
                        ({p.degrees})
                      </motion.small>
                    )}
                  </div>

                  <div className="text-secondary lh-lg">
                    {p.paragraphs?.map((t, i) => (
                      <motion.p
                        key={i}
                        className="mb-3"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, delay: 0.08 * i },
                        }}
                        viewport={{ once: true }}
                      >
                        {t}
                      </motion.p>
                    ))}

                    {p.email && (
                      <motion.p
                        className="mb-0"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, delay: 0.1 },
                        }}
                        viewport={{ once: true }}
                      >
                        Please reach {p.name.split(" ")[0]} at{" "}
                        <a
                          href={`mailto:${p.email}`}
                          className="text-decoration-none dark-text"
                        >
                          {p.email}
                        </a>
                        .
                      </motion.p>
                    )}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </section>

        <Brand />
      </div>
    </>
  );
};

export default OurTeam;
