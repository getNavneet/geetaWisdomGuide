import React from "react";

const shlokas = [
  {
    verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। \n मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    chapter: "Chapter 2, Verse 47",
    translation: "You have the right to perform your duty, but never to the fruits of your actions. Do not be attached to the results, and do not become inactive.",
    explanation: "This verse emphasizes selfless action. Focus on your work with dedication, without worrying about the outcome.",
  },
  {
    verse: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। \n सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    chapter: "Chapter 2, Verse 48",
    translation: "Perform your duty with equanimity, O Arjuna, abandoning attachment to success and failure. Such evenness of mind is called yoga.",
    explanation: "True yoga is maintaining balance in all situations—whether success or failure.",
  },
  {
    verse: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। \n निर्ममो निरहङ्कारः स शान्तिमधिगच्छति॥",
    chapter: "Chapter 2, Verse 71",
    translation: "That person who abandons all material desires and lives free from possessiveness and ego attains true peace.",
    explanation: "Letting go of attachments and ego leads to inner peace and ultimate liberation.",
  },
  {
    verse: "वासांसि जीर्णानि यथा विहाय \n नवानि गृह्णाति नरोऽपराणि। \n तथा शरीराणि विहाय जीर्णा- \n न्यन्यानि संयाति नवानि देही॥",
    chapter: "Chapter 2, Verse 22",
    translation: "Just as a person discards old clothes and wears new ones, the soul discards an old body and takes on a new one.",
    explanation: "This verse teaches us that death is not the end but a transition, like changing clothes.",
  },
  {
    verse: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः। \n ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    chapter: "Chapter 4, Verse 39",
    translation: "A person full of faith, devoted to wisdom, and who controls the senses, attains true knowledge and ultimate peace.",
    explanation: "Faith, dedication, and discipline lead to true wisdom and inner peace.",
  },
  {
    verse: "समः शत्रौ च मित्रे च तथा मानापमानयोः। \n शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः॥",
    chapter: "Chapter 12, Verse 18",
    translation: "One who remains equal towards friends and enemies, honor and dishonor, heat and cold, joy and sorrow, is truly wise.",
    explanation: "True wisdom is achieved when one remains unaffected by external circumstances.",
  },
];

const GitaShlokas = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-200 p-8  shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Famous Bhagavad Gita Shlokas</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {shlokas.map((shloka, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-md">
            <p className="text-xl text-gray-700 font-semibold">{shloka.chapter}</p>
            <p className="text-lg text-gray-800 mt-3 whitespace-pre-line font-serif">{shloka.verse}</p>
            <p className="text-gray-600 italic mt-2">"{shloka.translation}"</p>
            <p className="text-gray-700 mt-3">{shloka.explanation}</p>
          </div>
        ))}
      </div>

      {/* Footer Image */}
      <div className="flex justify-center mt-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Krishna_Arjuna_Bhagavad_Gita.jpg/800px-Krishna_Arjuna_Bhagavad_Gita.jpg"
          alt="Krishna guiding Arjuna"
          className="rounded-xl shadow-md w-full md:w-3/4"
        />
      </div>
    </section>
  );
};

export default GitaShlokas;
