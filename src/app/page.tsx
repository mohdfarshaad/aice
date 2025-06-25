import { ArrowRight, Code, Users, Trophy, Calendar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Association of Innovative
              <span className="block text-yellow-300">Computer Engineers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering the future of technology through collaboration,
              innovation, and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Events
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join AICE?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of being part of our innovative community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
              <p className="text-gray-600">
                Connect with like-minded engineers and work on cutting-edge
                projects that shape the future of technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Professional Network
              </h3>
              <p className="text-gray-600">
                Build valuable connections with industry professionals and
                expand your career opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recognition</h3>
              <p className="text-gray-600">
                Get recognized for your contributions and achievements in the
                field of computer engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-200">Years Strong</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Dont miss out on our latest events and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} />
                  <span className="text-sm">March 15, 2025</span>
                </div>
                <h3 className="text-lg font-semibold">
                  AI & Machine Learning Workshop
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Deep dive into the latest AI technologies and hands-on ML
                  projects.
                </p>
                <Link
                  href="/events"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} />
                  <span className="text-sm">March 22, 2025</span>
                </div>
                <h3 className="text-lg font-semibold">Tech Career Fair</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Connect with top tech companies and explore career
                  opportunities.
                </p>
                <Link
                  href="/events"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} />
                  <span className="text-sm">April 5, 2025</span>
                </div>
                <h3 className="text-lg font-semibold">Hackathon 2025</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  48-hour coding challenge with amazing prizes and networking.
                </p>
                <Link
                  href="/events"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/events"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
