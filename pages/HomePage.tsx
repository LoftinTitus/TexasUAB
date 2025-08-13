import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-orange-700">
                UT Austin Chemical Engineering
              </h1>
              <h1 className="text-gray-900">
                Undergraduate Advisory Board
              </h1>
              <p className="text-gray-600 max-w-lg">
                Bridging the gap between students and faculty to enhance the undergraduate 
                experience in Chemical Engineering. We represent student voices, advocate for 
                improvements, and foster community within our department.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button size="lg" className="bg-orange-700 hover:bg-orange-800 text-white">
                    Learn More
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-orange-700 text-orange-700 hover:bg-orange-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-orange-100 rounded-lg p-8">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=400&fit=crop&crop=center"
                  alt="UT Austin Chemical Engineering Laboratory"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-orange-700">6</div>
              <p className="text-gray-600">Board Members</p>
            </div>
            <div className="space-y-2">
              <div className="text-orange-700">500+</div>
              <p className="text-gray-600">ChE Students</p>
            </div>
            <div className="space-y-2">
              <div className="text-orange-700">12</div>
              <p className="text-gray-600">Monthly Events</p>
            </div>
            <div className="space-y-2">
              <div className="text-orange-700">100%</div>
              <p className="text-gray-600">Student Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image - UT Campus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Proud to be at UT Austin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Austin, our department continues the tradition of excellence 
              in chemical engineering education and research.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1606156684711-297b91e89a5c?w=1200&h=600&fit=crop&crop=center"
              alt="UT Austin Campus Tower"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-white mb-2">The University of Texas at Austin</h3>
              <p className="text-gray-200">McKetta Department of Chemical Engineering</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}