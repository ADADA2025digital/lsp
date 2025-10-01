import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageHeader from "../Components/PageHeader";
import GlobalButton from "../Components/Button";
import { contactData, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Ld16dcrAAAAALK46kuJ9CLYZSqFKWW-xuoFOvfc";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // reCAPTCHA state
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // Validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: /^.{10,500}$/,
  };

  // Error messages
  const errorMessages = {
    name: "Name must be 2-50 characters long and contain only letters and spaces",
    email: "Please enter a valid email address",
    message: "Message must be between 10 and 500 characters long",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear field error when user changes it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onMessageFocus = () => {
    if (!showCaptcha) setShowCaptcha(true);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(form).forEach((field) => {
      if (!validationPatterns[field].test(form[field])) {
        newErrors[field] = errorMessages[field];
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const inputsOk = validateForm();
    if (!inputsOk) return;

    if (showCaptcha && !captchaToken) {
      setErrors((prev) => ({
        ...prev,
        message:
          prev.message || "Please complete the reCAPTCHA before submitting",
      }));
      return;
    }

    setSubmitted(true);
    setErrors({ name: "", email: "", message: "" });
    setCaptchaToken(null);
    if (recaptchaRef.current) recaptchaRef.current.reset();
    setShowCaptcha(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SeoHead {...seoData.contact} />

      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "Contact", active: true },
          ]}
        />

        {/* Contact Details section */}
        <motion.section
          className="position-relative text-white mt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container contact-hero p-5">
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

            <motion.div
              className="row g-0 position-relative overflow-hidden shadow"
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="display-6 fw-bold mb-4 text-uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Contact Us
              </motion.h2>

              {contactData.map((panel, idx) => (
                <motion.div
                  className="col-12 col-lg-4 z-2"
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="panel banner p-5 h-100"
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <div className="d-flex flex-md-row flex-column align-items-md-start align-items-center text-md-start text-center gap-3 p-md-5 p-0">
                      <motion.i
                        className={`bi ${panel.icon} fs-1`}
                        transition={{ duration: 0.25 }}
                      />
                      <div>
                        <h5 className="mb-2 fw-semibold">{panel.heading}</h5>

                        {panel.lines &&
                          panel.lines.map((line, i) => (
                            <p
                              key={i}
                              className={`mb-${
                                i === panel.lines.length - 1 ? "0" : "1"
                              } ${i === 0 ? "small opacity-75" : ""}`}
                            >
                              {line}
                            </p>
                          ))}

                        {panel.link && (
                          <>
                            <a
                              href={panel.link}
                              className="text-white text-decoration-none"
                            >
                              {panel.linkText}
                            </a>
                            {panel.note && (
                              <p className="mb-0 small opacity-75">
                                {panel.note}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="container py-5 mt-5">
          <div className="row g-4">
            {/* Left column: form */}
            <motion.div
              className="col-lg-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
              <div className="position-relative border-dotted">
                <motion.h6
                  className="heading m-0 fs-5 pb-2 text-muted fw-semibold d-inline-block position-relative"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, delay: 0.05 },
                  }}
                  viewport={{ once: true }}
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Send us a Message
                </motion.h6>
              </div>

              <motion.p
                className="text-muted mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: 0.1 },
                }}
                viewport={{ once: true }}
              >
                Thank you for your interest to contact us. Provide the following
                information about your needs. This information will enable us to
                route your response.
              </motion.p>

              <motion.form
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 0, y: 12 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: 0.12 },
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.02 },
                  }}
                  viewport={{ once: true }}
                >
                  <label className="form-label">Name</label>
                  <input
                    className={`form-control rounded-0 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={onChange}
                    disabled={submitted}
                  />
                  {errors.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.06 },
                  }}
                  viewport={{ once: true }}
                >
                  <label className="form-label">Email Address</label>
                  <input
                    className={`form-control rounded-0 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    disabled={submitted}
                  />
                  {errors.email && (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.1 },
                  }}
                  viewport={{ once: true }}
                >
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-control rounded-0 ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={onChange}
                    onFocus={onMessageFocus}
                    disabled={submitted}
                  />
                  {errors.message && (
                    <div className="invalid-feedback d-block">
                      {errors.message}
                    </div>
                  )}
                </motion.div>

                {showCaptcha && !submitted && (
                  <motion.div
                    className="mb-3 d-flex justify-content-start"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35 },
                    }}
                  >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={onCaptchaChange}
                    />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <fieldset
                    disabled={showCaptcha && !captchaToken}
                    className="p-0 m-0 border-0"
                  >
                    <GlobalButton text="Submit" />
                  </fieldset>
                </motion.div>

                {submitted && (
                  <motion.div
                    className="alert alert-success mt-3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3 },
                    }}
                  >
                    Thanks! Your message has been sent successfully.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>

            {/* Right column */}
            <motion.div
              className="col-lg-4 d-flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.15 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <iframe
                title="Office Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13253.408031375453!2d151.123331!3d-33.85481800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af8d5bac2ea3%3A0xf1c7b975f98714f5!2sLo%20Surdo%20Braithwaite%20%26%20Co!5e0!3m2!1sen!2sus!4v1758876928984!5m2!1sen!2sus"
                width="100%"
                className="h-100 w-100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
