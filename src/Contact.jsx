import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [morphDone, setMorphDone] = useState(false);

  const handleSubmit = (e) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setMorphDone(true);
      e.target.submit();
    }, 800);
  };

  return (
    <section
      name="contact"
      className="w-full min-h-screen flex justify-center items-center px-6 md:px-20 py-20 bg-blue-950 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 opacity-30 animate-gradient-x z-0"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-4 h-4 bg-white rounded-full opacity-20 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Form */}
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col max-w-3xl w-full bg-white rounded-xl p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
      >
        {/* Section Header */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-blue-950 mb-2">
            Contact
          </h2>
          <p className="text-blue-950 text-lg">
            Submit the form to get in touch with our trained professionals
          </p>
        </div>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Name..."
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number. Ex: 999-888-8877"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Message..."
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative text-white border-2 px-6 py-3 my-8 mx-auto flex items-center justify-center font-heading font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg
            ${
              isSubmitting
                ? "w-12 h-12 rounded-full !px-0 !py-0"
                : "bg-blue-950 hover:bg-blue-900"
            }`}
        >
          {isSubmitting ? (
            morphDone ? (
              <span className="text-2xl">✔</span>
            ) : (
              <div className="w-6 h-6 border-4 border-blue-950 border-t-transparent rounded-full animate-spin"></div>
            )
          ) : (
            "Our trained professionals would love to hear from you!"
          )}
        </button>
      </form>

      {/* Gradient & Particle Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.4; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
