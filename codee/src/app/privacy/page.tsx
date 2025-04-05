import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="space-y-6 bg-[#1a1a1d] shadow-lg mx-auto p-6 rounded-xl max-w-3xl text-white">
      <h1 className="font-bold text-[#f5f5f5] text-4xl text-center">Privacy Policy</h1>
      <p className="text-gray-400 text-sm text-center">Effective Date: 5 April 2025</p>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🧠 Who We Are</h2>
        <p className="mt-2 text-gray-300">
          Welcome to <strong>Codee</strong> – a game built for curious minds and coding enthusiasts.
          We care about your privacy, and this document outlines how we collect, use, and protect your data.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">📦 What We Collect</h2>
        <ul className="space-y-1 mt-2 text-gray-300 list-disc list-inside">
          <li>Email address (for login and communication)</li>
          <li>Display name or username</li>
          <li>Progress and achievements in the game</li>
          <li>Device info and usage stats</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🧪 Why We Collect It</h2>
        <ul className="space-y-1 mt-2 text-gray-300 list-disc list-inside">
          <li>To personalise your experience</li>
          <li>Track progress and achievements</li>
          <li>Fix bugs and improve gameplay</li>
          <li>Notify you of updates (if opted in)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🛡️ How We Protect It</h2>
        <p className="mt-2 text-gray-300">
          We use Firebase Authentication and secure cloud storage. Data is encrypted during transmission and securely stored.
        </p>
        <ul className="space-y-1 mt-2 text-gray-300 list-disc list-inside">
          <li>We do <strong>not</strong> sell your data.</li>
          <li>We do <strong>not</strong> share personal info without your consent.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🧩 Third-Party Services</h2>
        <p className="mt-2 text-gray-300">
          We use trusted services like Firebase and analytics tools. These services have their own privacy policies.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">👶 Children’s Privacy</h2>
        <p className="mt-2 text-gray-300">
          Codee is not intended for users under 13. If we find data from a minor, we’ll delete it promptly.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">📬 Contact Us</h2>
        <p className="mt-2 text-gray-300">
          Questions or data requests? Email us at <a href="mailto:axolemaranjana4@gmail.com" className="text-blue-400 underline">axolemaranjana4@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-[#ff4c60] text-2xl">🔁 Updates to This Policy</h2>
        <p className="mt-2 text-gray-300">
          We may update this policy from time to time. We&apos;ll notify you in the app or via email.
        </p>
      </section>

      <p className="mt-10 text-gray-500 text-sm text-center">By using Codee, you agree to this privacy policy.</p>
    </div>
  );
};

export default PrivacyPolicy;
