import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SuccessPopup from "../components/SuccessPopup";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "eddbd3de-f399-4407-aaa8-cea74e32a0c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        setResult("");
        e.target.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        setResult("Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen pt-17.5 px-[5%] md:px-[10%] pb-0"
    >
      <SuccessPopup show={showPopup} />
      <SectionTitle titleText1="Contact" titleText2=" Me" />

      <div className="flex justify-center items-center mt-20">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl rounded-[20px] border border-[rgba(255,255,255,0.1)]
          bg-linear-to-br from-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.05)]
          p-7 flex flex-col gap-5 transition-all duration-[0.4s]
          hover:border-[#00eeff] hover:shadow-[0_30px_60px_rgba(0,238,255,0.25)]"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
            rounded-xl p-4 text-white focus:border-[#00eeff] outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
            rounded-xl p-4 text-white focus:border-[#00eeff] outline-none transition"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            maxLength="10"
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
            rounded-xl p-4 text-white focus:border-[#00eeff] outline-none transition"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Enter your message"
            required
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
            rounded-xl p-4 text-white focus:border-[#00eeff] outline-none transition resize-none"
          />

          {result && (
            <span className="text-sm text-[#00eeff] animate-pulse font-semibold">
              {result}
            </span>
          )}

          <button
            type="submit"
            className="w-fit px-8 py-3 rounded-xl font-bold
            bg-[rgba(0,238,255,0.8)] text-[#081b29]
            hover:bg-[rgba(0,238,255,1)]
            hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)]
            transition-all duration-[0.4s] active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
