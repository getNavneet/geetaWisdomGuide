import React from "react";
import GeetaBook from "../../assets/geetaBook.jpg"
const AboutGita = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-center bg-orange-50 p-6 md:p-10 rounded-2xl ">
      {/* Left - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-orange-950 mb-4">About the Bhagavad Gita</h2>
        <p className="text-orange-900 text-lg mb-3">
          The <strong>Bhagavad Gita</strong>, meaning "The Song of God," is a 700-verse scripture that is part of the Indian epic <em>Mahabharata</em>. It is a dialogue between <strong>Lord Krishna</strong> and <strong>Prince Arjuna</strong>, taking place on the battlefield of <em>Kurukshetra</em>.
        </p>
        <p className="text-orange-800 text-lg mb-3">
          Written in **Sanskrit** and composed around the **5th-2nd century BCE**, the Gita addresses profound spiritual, philosophical, and ethical dilemmas.
        </p>
        <p className="text-orange-800 text-lg">
          It serves as a guide for life, offering wisdom on **duty (dharma), devotion (bhakti), and self-realization**.
        </p>
      </div>

      {/* Right - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={GeetaBook}
          alt="Krishna and Arjuna - Bhagavad Gita"
          className="rounded-xl shadow-md w-full md:w-3/4"
        />
      </div>
    </section>
    <section className="flex flex-col md:flex-row items-center justify-center bg-orange-50 p-6 md:p-10 rounded-2xl shadow-lg mt-6">
  {/* Left - Text Content */}
  <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mr-10">
    <h2 className="text-3xl font-bold text-orange-950 mb-4">
      Share Your Feedback
    </h2>
    <p className="text-orange-900 text-lg mb-3">
      Your suggestions help us improve the experience of exploring the wisdom of the Bhagavad Gita.
    </p>
  </div>

  {/* Right - Contact Form */}
  <div className="w-full md:w-1/2 p-4 bg-white rounded-xl shadow-md border border-orange-200">
    <form className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-orange-800"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-orange-950 bg-orange-50"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-orange-800"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          required
          className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-orange-950 bg-orange-50"
        />
      </div>

      {/* Suggestion/Feedback Field */}
      <div>
        <label
          htmlFor="suggestion"
          className="block text-sm font-medium text-orange-800"
        >
          Suggestion/Feedback
        </label>
        <textarea
          id="suggestion"
          name="suggestion"
          rows="4"
          placeholder="What would you like to tell us?"
          required
          className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-orange-950 bg-orange-50"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
        >
          Send Feedback
        </button>
      </div>
    </form>
  </div>
</section>

    </>
  );
};

export default AboutGita;
