import React, { useState, useRef, useEffect } from 'react';
import { Bot as Lotus, Send, Loader2, AlertCircle,Clipboard  } from 'lucide-react';
import { getGeminiResponse } from '../../useGeminiApi.js';  
import ReactMarkdown from 'react-markdown';
import AboutGita from '../Intro/Intro.jsx';
import GitaShlokas from '../sloks/Sloks.jsx';
import BhagavadGitaCard from '../Intro/BookRead.jsx';
function GuidanceForm() {
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const sampleProblems = [
    "I lack motivation and often procrastinate on important tasks. How can I develop discipline?",
    "I recently failed an important exam, and now I feel worthless. How should I handle this?",
    "I constantly feel anxious about the future and fear failure. How can I gain peace of mind?",
    "I'm confused about my career path. Should I follow my passion or go for a stable job?",
    "I get emotionally attached to people and feel hurt when they don't meet my expectations. What should I do?",
    "People often criticize me, and I feel disheartened. How should I respond?",
    "I want to succeed in my career but also wish to follow a spiritual path. How do I balance both?",
    "I feel jealous when I see others achieving more than me. How can I overcome this feeling?",
    "I made mistakes in the past, and I can't forgive myself. How can I move on?",
    "Despite having everything, I feel empty inside. How can I find real happiness?",
  ];
  const responseRef =useRef(null);
  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setLoading(true);
    setError('');
    try {
      const result = await getGeminiResponse(problem);
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setResponse('');
    }
    setLoading(false);
  };
  const handleSampleClick = (sample) => {
    setProblem(sample);
    handleSubmit();
  };

  return (
    <div className="min-h-screen  to-orange-100">

      <main className="max-w-4xl mx-auto px-4 py-8">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-orange-900 mb-4">What would you like to ask Krishna?</h2>
          <p className="text-orange-800">Share your concerns and receive wisdom inspired by the Bhagavad Gita</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Error</h3>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Describe your situation or concern..."
              className="w-full h-32 p-4 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
            <button
              type="submit"
              disabled={loading || !problem.trim()}
              className="mt-4 bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Seeking wisdom...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Seek Guidance
                </>
              )}
            </button>
          </div>
        </form>

        {/* Sample Problems */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">Try Some Examples:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sampleProblems.map((sample, index) => (
              <button
                key={index}
                onClick={() => handleSampleClick(sample)}
                className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200 rounded-lg p-3 text-left transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
              >
                <Clipboard className="w-5 h-5 text-orange-600" />
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Response */}
        {response && (
          <div ref={responseRef} className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <div className="prose max-w-none">
              <div className="flex items-center gap-2 mb-4">
                <Lotus className="w-6 h-6 text-orange-700" />
                <h3 className="text-xl font-serif text-orange-900">Divine Guidance</h3>
              </div>
              <div className="whitespace-pre-wrap text-orange-900"><ReactMarkdown>{response}</ReactMarkdown></div>
            </div>
          </div>
        )}
      </main>
      <AboutGita/>
      <BhagavadGitaCard/>
      <GitaShlokas/>
    </div>
  );
}

export default GuidanceForm;