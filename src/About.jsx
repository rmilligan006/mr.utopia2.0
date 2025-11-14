import React from "react";
import Fridge from "./assets/fridge.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-blue-950 py-20 flex items-center"
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Will Catt
          </h2>
          <p className="text-lg font-sans text-white mb-4 leading-relaxed">
            Will Catt is a seasoned appliance technician with over 17 years of
            expertise. In 2014, he took the reins of Mr.Utopia, bringing a wealth
            of experience to every repair. Known for his dedication and skill, Will
            is your go-to expert for reliable and efficient appliance solutions.
          </p>
          <p className="text-lg font-sans text-white leading-relaxed">
            Servicing Alliston, New Tecumseth, Essa and surrounding areas.
          </p>
        </motion.div>

        <motion.img
          src={Fridge}
          alt="Fridge"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg shadow-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default About;
