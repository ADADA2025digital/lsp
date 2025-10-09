import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackToTop from "./BacktToTop";
import FooterLogo from "../assets/Images/footer-logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row text-center text-md-start">
          {/* About */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0 },
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="position-relative border-dotted">
              <h6 className="heading m-0 pb-2 text-white d-inline-block position-relative">
                About
              </h6>
            </div>

            <p className="lh-lg small mt-4">
              Lo Surdo Braithwaite has been established since 1972 providing
              business and taxation services to the broader community. The
              Partners of the Firm are well known to the local area and within
              the professional community.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            className="col-md-4 mt-4 mt-md-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="position-relative border-dotted">
              <h6 className="heading m-0 pb-2 text-white d-inline-block position-relative">
                Contact Us
              </h6>
            </div>
            <ul className="list-unstyled lh-lg mt-4">
              <li>
                <Link
                  className="text-decoration-none small"
                  to="/about"
                  style={{ color: "#bababa" }}
                >
                  <i className="bi bi-house-fill me-2 text-white"></i>
                  75, Lyons Road, Drummoyne, NSW - 2047
                </Link>
              </li>
              <li>
                <a
                  className="text-decoration-none small"
                  href="mailto:info@lsbca.com.au"
                  style={{ color: "#bababa" }}
                >
                  <i className="bi bi-envelope-fill me-2 text-white"></i>
                  info@lsbca.com.au
                </a>
              </li>

              <li>
                <a
                  className="text-decoration-none small"
                  href="tel:02 9819 7799"
                  style={{ color: "#bababa" }}
                >
                  <i className="bi bi-telephone-inbound-fill me-2 text-white"></i>
                  02 9819 7799
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Member of / Newsletter */}
          <motion.div
            className="col-md-4 mt-4 mt-md-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="position-relative border-dotted">
              <h6 className="heading m-0 pb-2 text-white d-inline-block position-relative">
                Member of:
              </h6>
            </div>

            <motion.img
              src={FooterLogo}
              alt="Member Logo"
              className="mt-4"
              style={{ maxWidth: "180px", height: "auto" }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.45 },
              }}
              viewport={{ once: true }}
            />

            <p className="m-0 py-3">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>

            <motion.form
              className="d-flex"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                className="form-control rounded-0 py-3"
                placeholder="Email"
              />
              <button
                type="submit"
                className="btn rounded-0 text-white p-3"
                style={{ background: "#99002f" }}
              >
                <i className="bi bi-send-fill"></i>
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="py-4 copyright"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
        }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row align-items-center text-center">
            <p className="m-0 small">
              Copyright © {new Date().getFullYear()}. All rights reserved to LO
              SURDO Braithwaite. <br />
              Web solution by ADADA Digital
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
