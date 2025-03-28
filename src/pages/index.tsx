import Head from 'next/head';
import Footer from '../components/Footer'; // Import the Footer component
import PricingCard from '../components/PricingCard'; // Import the PricingCard component

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Zort-App - AI-Powered Bet Tracker</title>
        <meta name="description" content="Track your bets and analyze them with AI-powered insights." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Track, Analyze, Win.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Zort-App uses AI to help you track your bets and make smarter decisions.
          </p>
          <a
            href="#"
  
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-12 md:py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <PricingCard
              title="Free"
              description="Track up to 10 bets per month."
              buttonText="Start Free"
              href="#"
            />

            {/* Pro Plan */}
            <PricingCard
              title="Pro"
              price="$9.99/month"
              description="Unlimited bets and advanced analytics."
              buttonText="Upgrade Now"
              href="#"
            />

            {/* Enterprise Plan */}
            <PricingCard
              title="Enterprise"
              description="Custom solutions for teams."
              buttonText="Contact Us"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer /> 
    </div>
  );
}