import React from 'react';

const About = () => {
  return (
    <section className="py-14 px-5 max-w-6xl mx-auto">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">Who We Are</h1>
        <p className="text-md md:text-lg text-slate-600">
          Driven by curiosity, we craft solutions that spark change across industries.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-3 mb-20">
        <div className="bg-gray-50 p-7 rounded-xl shadow hover:shadow-lg transition-all text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">The People</h3>
          <p className="text-gray-600">
            A collaborative team bringing together skills, experience, and shared ambition.
          </p>
        </div>
        <div className="bg-gray-50 p-7 rounded-xl shadow hover:shadow-lg transition-all text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">The Purpose</h3>
          <p className="text-gray-600">
            Tackling real-world problems with smart, scalable tech solutions that matter.
          </p>
        </div>
        <div className="bg-gray-50 p-7 rounded-xl shadow hover:shadow-lg transition-all text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">The Principles</h3>
          <p className="text-gray-600">
            We operate with transparency, innovation, collaboration, and a passion for growth.
          </p>
        </div>
      </div>

      <section className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Journey</h2>
        <p className="text-gray-600">
          Since our inception in 2020, we've evolved from a two-person idea lab into a thriving company that champions impactful technology and unwavering values.
        </p>
      </section>

      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Leadership Team</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              className="w-28 h-28 rounded-full object-cover mb-2"
              alt="Alex Rivera"
            />
            <h4 className="text-lg font-semibold text-gray-900">Alex Rivera</h4>
            <span className="text-gray-500">Chief Executive Officer</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              className="w-28 h-28 rounded-full object-cover mb-2"
              alt="Morgan Lee"
            />
            <h4 className="text-lg font-semibold text-gray-900">Morgan Lee</h4>
            <span className="text-gray-500">Chief Technology Officer</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
