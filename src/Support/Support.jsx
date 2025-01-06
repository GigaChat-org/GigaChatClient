import React from 'react';

function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-3xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">Support & Feedback</h1>
          <p className="mt-2 text-gray-100 text-sm">
            Your feedback is valuable to us! Fill out the form below for any queries or suggestions.
          </p>
        </header>

        {/* Google Form Embed */}
        <div className="p-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc9iJJkbFQpBjeOVo6uLcF4WHg8jpKsekyQRSoqkxYZWLscBg/viewform?usp=sharing"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full rounded-lg"
              title="Feedback Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
