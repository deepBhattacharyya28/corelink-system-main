import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@corelinksystem.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available 24/7 for support"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Digital City",
      description: "Our main office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM",
      description: "Weekend support available"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted/20">
      {/* Consistent container with same padding as other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Contact <span className="bg-gradient-hero bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with our IT solutions? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you with all your IT needs. Whether you need hardware support, 
                web development, or creative design services, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-2xl p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-hero rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-primary font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl p-8 shadow-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-hero rounded-xl w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-white/50 border-primary/20 focus:border-primary rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-white/50 border-primary/20 focus:border-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="bg-white/50 border-primary/20 focus:border-primary rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/50 border border-primary/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="hardware">Hardware Support</option>
                    <option value="printer">Printer Setup & Repair</option>
                    <option value="web">Web Development</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                  className="bg-white/50 border-primary/20 focus:border-primary rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300 hover:scale-105 py-3 rounded-xl text-lg font-semibold"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
