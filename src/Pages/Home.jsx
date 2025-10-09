import { useNavigate } from "react-router-dom";
import {
  seoData,
  importantCards,
  whyChooseUs,
  services,
} from "../Contants/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SeoHead from "../Components/SeoHead";
import Video from "../assets/Video/video.mp4";
import BG2 from "../assets/Images/bg2.jpg";
import GlobalButton from "../Components/Button";
import ServiceCard from "../Components/ServiceCard";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceIndex) => {
    navigate(`/our-services?service=${serviceIndex}`);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <>
      <SeoHead {...seoData.home} />

      <div className="container-fluid p-0">
        {/* Hero Section */}
        <motion.section
          className="hero-section position-relative"
          style={{ height: "80vh" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut", delay: 0 },
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <motion.h2 className="fw-bold display-5 mb-4" variants={fadeUp}>
              "LARGE ENOUGH TO OFFER THE EXPERTISE YOU NEED, <br />
              SMALL ENOUGH TO WORK ONE-ON-ONE."
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <GlobalButton
                text="Book Your Consult Now"
                href="/contact"
                className="mt-3"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* History Tab */}
        <div
          className="py-4 banner mb-2"
        >
          <span className="tooltip z-0"></span>
          <motion.div
            className="container text-center text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut", delay: 0 },
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <p className="m-0 heading fs-5">
              Lo Surdo Braithwaite has been established since 1972 providing
              business and taxation services to the broader community.
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <section className="py-5 bg-white mt-5">
          <div className="container">
            <motion.h2
              className="text-center fw-semibold mb-5 heading dark-text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              OUR SERVICES
            </motion.h2>
            <Carousel
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
                tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
                mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
              }}
              autoPlay
              autoPlaySpeed={2000000}
              infinite
              arrows={false}
              showDots={true}
              swipeable
              draggable
              ssr
              containerClass="service-carousel "
              itemClass="service-carousel-item mb-5"
            >
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  {" "}
                  <ServiceCard
                    service={service}
                    index={index}
                    onServiceClick={handleServiceClick}
                  />
                </motion.div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Why important section */}
        <motion.section
          className="py-5 banner text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="container">
            <motion.h2
              className="fw-semibold heading mb-5 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              Our Commitment
            </motion.h2>

            <motion.div
              className="row d-flex justify-content-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {importantCards.map((item, i) => (
                <motion.div
                  key={i}
                  className="col-12 col-md-3 important-card position-relative bg-transparent overflow-hidden d-flex flex-column rounded-4 p-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="d-flex flex-column h-100 z-1">
                    <i
                      className={`bi ${item.icon} display-6`}
                      aria-hidden="true"
                    ></i>
                    <div className="importance-underline my-4"></div>

                    <h5 className="fw-semibold heading mb-2">{item.title}</h5>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* WhyChooseUs section */}
        <motion.section
          className="py-5"
          style={{
            backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.5), rgba(255, 255, 255, 0)), url(${BG2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="container">
            <motion.h2
              className="text-center fw-semibold mb-5 heading dark-text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              WHY CHOOSE US
            </motion.h2>

            <motion.div
              className="row row-cols-1 row-cols-md-3 gy-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut", delay: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {whyChooseUs.map((item, i) => (
                <motion.div
                  className="col-md-4 mb-4"
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut", delay: 0 },
                  }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="d-flex flex-column h-100 choose-card rounded-4 p-4">
                    <div
                      className="service-underline mb-5"
                      style={{ transformOrigin: "left" }}
                    />
                    <div class="choose-card-bg"></div>

                    <p className="mb-0 text-body-emphasis dark-text">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="d-flex justify-content-center text-center mt-5">
              <GlobalButton text="Connect with US" href="/contact" className="mt-3" />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
