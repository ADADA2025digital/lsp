import { motion } from "framer-motion";

const Brand = () => {
  return (
    <section className="py-4 banner">
      <span className="tooltip z-0"></span>
      <div className="container text-center text-white">
        <motion.p
          className="m-0 heading fs-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0 },
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Lo Surdo Braithwaite has been established since 1972 providing
          business and taxation services to the broader community.
        </motion.p>
      </div>
    </section>
  );
};

export default Brand;