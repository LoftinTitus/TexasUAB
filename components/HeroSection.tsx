import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-orange-600">
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
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <a href="#about" className="text-white">Learn More</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-orange-100 rounded-lg p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=400&fit=crop&crop=center"
                alt="Chemical Engineering Laboratory"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}