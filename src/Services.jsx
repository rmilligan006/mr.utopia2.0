import React from "react";
import { motion } from "framer-motion";
import Appliance from "./assets/appliances.png";
import Repair from "./assets/repair.jpg";

const Services = () => {
  const services = [
    {
      title: "About Mr.Utopia",
      text: "At Mr. Utopia, excellence is our standard. With a commitment to prompt, reliable service, Will expertly diagnoses and fixes appliance issues. Trust us to bring your appliances back to life, ensuring a seamless and stress-free experience.",
      image: Appliance,
    },
    {
      title: "Dependable Service",
      text: "With deep expertise across top-tier appliance brands, Will provides unmatched service, ensuring your appliances receive the specialized care they deserve. Trust Will’s proficiency for reliable solutions to your appliance needs.",
      image: Repair,
    },
  ];

  return (
    <section className="w-full bg-gray-200 py-20" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-gray-700">Services</h2>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-20 items-center">
        {services.map((service, idx) => (
          <React.Fragment key={service.title}>
            <motion.div
              className="bg-blue-950 p-10 rounded-xl text-white shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
              <p className="text-lg font-sans leading-relaxed">{service.text}</p>
            </motion.div>

            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 + 0.2 }}
              viewport={{ once: true }}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Services;
