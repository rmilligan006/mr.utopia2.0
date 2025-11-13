import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [morphDone, setMorphDone] = useState(false);

  const handleSubmit = (e) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    e.preventDefault(); // we temporarily stop the real submit

    setIsSubmitting(true);

    // delay to allow the morph animation to play
    setTimeout(() => {
      setMorphDone(true);

      // submit the form programmatically after morph checkmark
      e.target.submit();
    }, 800);
  };

  return (
    <div
      name="contact"
      className="w-full h-full pt-4 flex justify-center items-center px-4 bg-blue-950"
    >
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="text-white">
          <p className="text-4xl font-bold inline text-white">Contact</p>
          <p className="text-white text-2xl py-4">
            // Submit the Form to get in touch
          </p>
        </div>

        <input className="m-2 p-2" type="text" placeholder="Name..." name="name" required />
        <input
          className="m-2 p-2"
          type="tel"
          placeholder="Phone Number. Ex: 999-888-8877"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
        />
        <input className="m-2 p-2" type="text" placeholder="email..." name="email" required />
        <textarea
          name="message"
          rows="10"
          className="m-2 p-2"
          placeholder="message..."
          required
        ></textarea>

        <button
          disabled={isSubmitting}
          className={`relative text-white border-2 px-6 py-3 my-8 mx-auto flex items-center justify-center transition-all duration-300
            ${
              isSubmitting
                ? "w-12 h-12 rounded-full !px-0 !py-0"
                : "hover:border-yellow-500"
            }`}
        >
          {isSubmitting ? (
            morphDone ? (
              <span className="text-2xl">✔</span>
            ) : (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            )
          ) : (
            "Our trained professionals would love to hear from you!"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;