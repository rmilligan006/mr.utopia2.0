import React from "react";
import Fridge from "./assets/fridge.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-blue-950 py-20 flex items-center"
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-4xl font-bold mb-6">Will Catt</h1>
          <p className="text-white text-lg mb-4">
            Will Catt is a seasoned appliance technician with over 17 years of
            expertise. In 2014, he took the reins of Mr.Utopia, bringing a wealth
            of experience to every repair. Known for his dedication and skill, Will
            is your go-to expert for reliable and efficient appliance solutions.
          </p>
          <p className="text-white text-lg">
            Servicing Alliston, New Tecumseth, Essa and surrounding areas.
          </p>
        </motion.div>

        {/* Image */}
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
