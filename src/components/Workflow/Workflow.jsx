import React from 'react';

const Workflow = () => {
    return (
          <div className="bg-linear-to-r from-indigo-500 to-purple-500 py-10 md:py-20 px-6">
            <div className="container mx-auto text-center text-primary-content">

                <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 tracking-tight">
                   Ready to Transform Your Workflow?
                </h2>

                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-5 md:mb-10 ">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-8">
                    <button className="btn bg-white text-primary hover:bg-slate-100 border-none px-4 md:px-8 rounded-full shadow-lg font-bold">
                        Explore Products
                    </button>
                    <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary  px-4 md:px-8 rounded-full font-bold">
                        View Pricing
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm opacity-80 font-medium">
                    <span className="flex items-center gap-2">
                        14-day free trial
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-2">
                        No credit card required
                    </span>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-2">
                        Cancel anytime
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Workflow;