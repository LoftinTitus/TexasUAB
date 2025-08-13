import { Card, CardContent } from '../components/ui/card';
import { Users, MessageCircle, BookOpen, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const features = [
    {
      icon: Users,
      title: "Student Representation",
      description: "We serve as the voice of undergraduate students in departmental decisions and policy changes."
    },
    {
      icon: MessageCircle,
      title: "Communication Bridge",
      description: "Facilitating open dialogue between students, faculty, and administration to improve our program."
    },
    {
      icon: BookOpen,
      title: "Academic Enhancement",
      description: "Working to improve curriculum, course offerings, and educational resources for all students."
    },
    {
      icon: Target,
      title: "Career Development",
      description: "Organizing events, workshops, and networking opportunities to prepare students for their careers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">About Our Board</h1>
            <p className="text-orange-100 max-w-3xl mx-auto">
              The Chemical Engineering Undergraduate Advisory Board is a student-led organization 
              dedicated to enhancing the undergraduate experience through advocacy, communication, 
              and community building within the McKetta Department of Chemical Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="p-6">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To advocate for undergraduate students in the Chemical Engineering department, 
                foster meaningful connections between students and faculty, and work collaboratively 
                to enhance the academic and professional development opportunities available to our peers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strive to create an inclusive, supportive environment where every student can thrive 
                and reach their full potential in chemical engineering, while maintaining the highest 
                standards of academic excellence that UT Austin is known for.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center"
                alt="UT Austin Students in Engineering Building"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-gray-900 mb-8 text-center">Our History</h3>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Chemical Engineering Undergraduate Advisory Board was established in 2018 as part of 
                the McKetta Department's commitment to student-centered education. Named after Ernest Orlando 
                Lawrence McKetta Jr., a distinguished UT alumnus and chemical engineer, our department has 
                always prioritized student success and innovation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Since our founding, the board has successfully advocated for numerous improvements including 
                enhanced laboratory facilities, expanded research opportunities for undergraduates, and 
                stronger industry partnerships that have led to increased internship and job placement rates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to build on this legacy, working closely with faculty, staff, and 
                administration to ensure that the UT Austin Chemical Engineering program remains at the 
                forefront of engineering education while serving the diverse needs of our student body.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}