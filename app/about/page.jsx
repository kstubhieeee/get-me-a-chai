import React from 'react';
import { FaHandsHelping, FaMugHot, FaUsers, FaRegLightbulb, FaCogs, FaChartLine } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">About Get Me a Chai</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Get Me a Chai is a crowdfunding platform where creators can fund their projects with the support of their fans. It's as simple as sharing a chai and making dreams a reality.
                </p>
            </section>

            {/* How It Works Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-6">How It Works</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaUsers className="text-blue-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Fans Want to Collaborate
                        </h3>
                        <p className="text-gray-300">Your fans are eager to support and collaborate on your projects.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaMugHot className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
                            Support Through Chai
                        </h3>
                        <p className="text-gray-300">Fans contribute to your projects by buying you chai.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaRegLightbulb className="text-green-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-transparent bg-clip-text">
                            Bring Ideas to Life
                        </h3>
                        <p className="text-gray-300">Use the support to turn your creative ideas into reality.</p>
                    </div>
                </div>
            </section>


            {/* Benefits Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-6">Why Choose Us</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Benefit 1 */}
                    <div className="p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaHandsHelping className="text-purple-500 text-5xl mb-4" />
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                            For Creators
                        </h3>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li className="mb-2">Direct financial support</li>
                            <li className="mb-2">Personal engagement with fans</li>
                            <li>Access to tailored tools</li>
                        </ul>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaChartLine className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                            For Fans
                        </h3>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li className="mb-2">Support creators directly</li>
                            <li className="mb-2">Exclusive perks</li>
                            <li>Be part of the process</li>
                        </ul>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg shadow-md rounded-lg border border-white/20">
                        <FaCogs className="text-indigo-500 text-5xl mb-4" />
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                            For Communities
                        </h3>
                        <ul className="list-disc pl-6 text-gray-300">
                            <li className="mb-2">Collaborative projects</li>
                            <li className="mb-2">Shared resources</li>
                            <li>Creative growth together</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Call to Action */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">Ready to Make a Difference?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Join Get Me a Chai today and start collaborating, creating, and connecting with a community of changemakers.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About - Get Me A Chai",
};
