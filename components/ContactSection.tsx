import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Clock, Users, MessageSquare, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or want to get involved? We'd love to hear from you. 
            Reach out to us through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us your questions or feedback
                </p>
                <Button variant="outline" className="w-full">
                  che-advisory@utexas.edu
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Attend Meetings</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our monthly open meetings
                </p>
                <Button variant="outline" className="w-full">
                  View Schedule
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Anonymous Feedback</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Share concerns anonymously
                </p>
                <Button variant="outline" className="w-full">
                  Feedback Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-gray-900">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-gray-900">Office Location</p>
                  <p className="text-gray-600 text-sm">
                    McKetta Department of Chemical Engineering<br />
                    CPE Building, Room 3.466<br />
                    200 E Dean Keeton St<br />
                    Austin, TX 78712
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-gray-900">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Or by appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-gray-900">Monthly Meetings</p>
                  <p className="text-gray-600 text-sm">
                    Every first Wednesday of the month<br />
                    6:00 PM - 7:00 PM<br />
                    CPE 2.204
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-gray-900">Department Phone</p>
                  <p className="text-gray-600 text-sm">(512) 471-4617</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us more about your question or feedback"
                  ></textarea>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}