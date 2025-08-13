import { Card, CardContent } from './ui/card';
import { Users, MessageCircle, BookOpen, Target } from 'lucide-react';

export function AboutSection() {
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
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">About Our Board</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Chemical Engineering Undergraduate Advisory Board is a student-led organization 
            dedicated to enhancing the undergraduate experience through advocacy, communication, 
            and community building within the McKetta Department of Chemical Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To advocate for undergraduate students in the Chemical Engineering department, 
              foster meaningful connections between students and faculty, and work collaboratively 
              to enhance the academic and professional development opportunities available to our peers. 
              We strive to create an inclusive, supportive environment where every student can thrive 
              and reach their full potential in chemical engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}