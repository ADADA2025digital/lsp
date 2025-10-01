import { motion } from "framer-motion";

const Brand = () => {
  return (
    <section className="py-4 banner mb-2">
      <span className="tooltip z-0"></span>
      <div className="container text-center text-white">
        <motion.p
          className="m-0 heading fs-5"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Lo Surdo Braithwaite has been established since 1972 providing
          business and taxation services to the broader community.
        </motion.p>
      </div>
    </section>
  );
};

export default Brand;
