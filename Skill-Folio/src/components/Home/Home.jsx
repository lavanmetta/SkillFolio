import "./Home.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="heading-container">
      <motion.h1
        animate={{ x: 10, y: 20 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        Resume Builder
      </motion.h1>

      <h3>Create a professional resume with SkillFolio</h3>
      <p>
        Unlock the power of a standout resume with ResuGenius. Craft your
        professional journey effortlessly and make a lasting impression on
        employers. Our user-friendly platform empowers you to create a
        customized, polished resume that highlights your unique skills,
        experiences, and achievements.
      </p>
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <button className="cmr">Create My Resume</button>
      </motion.div>
    </div>
  );
}
