import React from 'react';

const PricingSection = () => {
    return (
        <div className='my-16 md:my-32'>
            <div className='text-center my-10 space-y-4'>
                 <h1 className='text-4xl lg:text-6xl font-bold'>Simple, Transparent Pricing</h1>
 <p className='text-gray-400 text-lg lg:text-xl'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

 <div className=" flex items-center justify-center">
   
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 lg:grid-cols-3 gap-6 w-10/12 lg:w-full px-4">

        {/* Starter */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:bg-purple-200">
          <h3 className="text-lg font-semibold text-gray-700">Starter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Perfect for getting started
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $0<span className="text-base font-medium">/Month</span>
          </h2>

          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-lg p-6 text-center scale-105">

          {/* Badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-xs font-semibold px-3 py-1 rounded-full text-yellow-600">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm text-purple-200 mb-4">
            Best for professionals
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $29<span className="text-base font-medium">/Month</span>
          </h2>

          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:bg-purple-200">
          <h3 className="text-lg font-semibold text-gray-700">Enterprise</h3>
          <p className="text-sm text-gray-400 mb-4">
            For teams and businesses
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $99<span className="text-base font-medium">/Month</span>
          </h2>

          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>

        </div>
    );
};

export default PricingSection;