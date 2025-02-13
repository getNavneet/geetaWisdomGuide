import React from "react";
import GeetaBook from "../../assets/geetaBook.jpg"
const AboutGita = () => {
  return (
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
  );
};

export default AboutGita;
