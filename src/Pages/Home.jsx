import { motion } from "framer-motion";
import {
  services,
  seoData,
  importantCards,
  whyChooseUs,
} from "../Contants/Data";
import SeoHead from "../Components/SeoHead";
import Video from "../assets/Video/video.mp4";
import GlobalButton from "../Components/Button";

const Home = () => {
  return (
    <>
      <SeoHead {...seoData.home} />

      <div className="container-fluid p-0">
        {/* Hero Section */}
        <section
          className="hero-section position-relative"
          style={{ height: "80vh" }}
        >
          <video
            className="position-absolute top-0 start-0 w-100 h-100"
            autoPlay
            loop
            muted
            playsInline
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <motion.div
            className="container d-flex flex-column justify-content-center align-items-center text-center text-light h-100"
            initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <h2 className="fw-bold display-5 mb-4">
              “LARGE ENOUGH TO OFFER THE EXPERTISE YOU NEED, <br />
              SMALL ENOUGH TO WORK ONE-ON-ONE.”
            </h2>

            <GlobalButton
              text="Book Your Consult Now"
              href="/contact"
              className="mt-3"
            />
          </motion.div>
        </section>

        {/* History Tab */}
        <motion.section
          className="position-relative banner text-white overflow-visible"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="container py-4">
            <motion.p
              className="lead mb-0 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Lo Surdo Braithwaite has been established since 1972 providing
              business and taxation services to the broader community
            </motion.p>
          </div>
          <svg
            className="position-absolute w-100 banner"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            height={56}
            style={{
              left: 0,
              bottom: 0,
              transform: "translateY(100%)",
              pointerEvents: "none",
              display: "block",
            }}
            aria-hidden="true"
          >
            <polygon points="0,0 50,10 100,0 100,10 0,10" fill="#ffffff" />
          </svg>{" "}
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-5 bg-white mt-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container">
            <motion.h2
              className="text-center fw-semibold mb-4 heading dark-text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              OUR SERVICES
            </motion.h2>

            <div className="row p-3 p-md-0">
              {services.map((s, i) => (
                <div className="col-12 col-md p-0 mb-5 mb-md-0" key={i}>
                  <motion.div
                    className="service-card h-100 d-flex flex-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.08 * i,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <div
                      className="rounded position-relative overflow-hidden image-anime reveal box "
                      style={{
                        height:
                          typeof window !== "undefined" &&
                          window.innerWidth >= 768
                            ? `${s.height}px`
                            : "auto",
                      }}
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-100 h-100 object-fit-cover"
                        loading="lazy"
                      />
                    </div>

                    <motion.div
                      className="service-underline mt-5"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.08 * i + 0.1,
                      }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />

                    <motion.h6
                      className="mt-3 mb-0 dark-text white-space-pre-line"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.08 * i + 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      {s.title}
                    </motion.h6>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why important section */}
        <section className="py-5 banner text-white">
          <div className="container">
            <h2 className="fw-semibold heading mb-5">IT’S IMPORTANT</h2>

            <div className="row gap-4">
              {importantCards.map((item, i) => (
                <motion.div
                  key={i}
                  className="col-12 col-md-3 service-card position-relative bg-transparent overflow-hidden d-flex flex-column rounded-4 p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="d-flex flex-column h-100 z-1">
                    <i
                      className={`bi ${item.icon} display-6`}
                      aria-hidden="true"
                    ></i>
                    <div className="importance-underline my-4"></div>

                    <h5 className="fw-semibold heading mb-2">{item.title}</h5>

                    <a
                      className="text-white-50 text-decoration-none small mt-auto"
                      href={item.href}
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhyChooseUs section */}
        <motion.section
          className="py-5 bg-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container">
            <motion.h2
              className="text-center fw-semibold mb-5 heading dark-text"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              WHY CHOOSE US
            </motion.h2>

            <div className="row row-cols-1 row-cols-md-3 gy-5">
              {whyChooseUs.map((item, i) => (
                <div className="col mb-4" key={i}>
                  <motion.div
                    className="d-flex flex-column h-100"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.08 * i,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <motion.div
                      className="service-underline mb-5"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.08 * i + 0.1,
                      }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />

                    <motion.p
                      className="mb-0 text-body-emphasis dark-text"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.08 * i + 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              className="d-flex justify-content-center text-center mt-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true }}
            >
              <GlobalButton text="Contact" href="/contact" className="mt-3" />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
