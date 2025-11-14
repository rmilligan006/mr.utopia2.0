import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [morphDone, setMorphDone] = useState(false);

  const handleSubmit = (e) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    e.preventDefault(); // temporarily stop real submit
    setIsSubmitting(true);

    // delay to allow morph animation to play
    setTimeout(() => {
      setMorphDone(true);
      // submit the form programmatically after morph checkmark
      e.target.submit();
    }, 800);
  };

  return (
    <section
      name="contact"
      className="w-full min-h-screen flex justify-center items-center px-6 md:px-20 py-20 bg-blue-950"
    >
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-3xl w-full bg-white rounded-xl p-10 shadow-lg"
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
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number. Ex: 999-888-8877"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Message..."
          required
          className="m-2 p-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative text-white border-2 px-6 py-3 my-8 mx-auto flex items-center justify-center font-heading font-bold transition-all duration-300
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
    </section>
  );
};

export default Contact;
