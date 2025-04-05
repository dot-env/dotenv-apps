import React from 'react';

const TermsOfService = () => {
  return (
    <div className="space-y-6 bg-[#1a1a1d] shadow-lg mx-auto p-6 rounded-xl max-w-3xl text-white">
      <h1 className="font-bold text-[#f5f5f5] text-4xl text-center">Terms of Service</h1>
      <p className="text-gray-400 text-sm text-center">Effective Date: 5 April 2025</p>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🎮 Welcome to Codee!</h2>
        <p className="mt-2 text-gray-300">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Codee game. By using the app, you agree to follow these Terms.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">📋 Your Responsibilities</h2>
        <ul className="space-y-1 mt-2 text-gray-300 list-disc list-inside">
          <li>Provide accurate and complete information when signing up.</li>
          <li>Keep your login credentials safe and don’t share your account.</li>
          <li>Don’t misuse the app or try to hack it. We see you. 👀</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🧠 Content and Ownership</h2>
        <p className="mt-2 text-gray-300">
          All game assets, code, and content are property of Codee. You may not copy, redistribute, or reuse any part without permission.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🚫 Termination</h2>
        <p className="mt-2 text-gray-300">
          We may suspend or terminate your access to Codee if you break these rules or misuse the platform.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">📦 In-App Purchases</h2>
        <p className="mt-2 text-gray-300">
          Some parts of Codee may offer optional purchases. All sales are final, and we don’t offer refunds unless required by law.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">⚙️ Updates & Changes</h2>
        <p className="mt-2 text-gray-300">
          We may update these Terms and the app at any time. Continued use after changes means you accept the new terms.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">📬 Contact</h2>
        <p className="mt-2 text-gray-300">
          For any questions or feedback, hit us up at <a href="mailto:axolemaranjana4@gmail.com" className="text-blue-400 underline">axolemaranjana4@gmail.com</a>.
        </p>
      </section>

      <p className="mt-10 text-gray-500 text-sm text-center">Thanks for being part of the Codee community. Let the games begin!</p>
    </div>
  );
};

export default TermsOfService;
