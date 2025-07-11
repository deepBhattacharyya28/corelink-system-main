import { Users, Target, Award, Clock } from 'lucide-react';
import aboutImage from '../assets/about-image.jpg';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Target, value: "99%", label: "Success Rate" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-background">
      {/* Consistent container with same padding as other sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">CoreLink System</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in IT solutions and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Leading IT Solutions Provider
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At CoreLink System, we specialize in delivering comprehensive IT solutions that drive business growth. 
              Our team of experienced professionals is dedicated to providing exceptional hardware support, innovative 
              web development, and creative design services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that technology is the backbone of modern business, which is why we offer reliable, 
              scalable, and cost-effective solutions tailored to your specific needs.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Expert technical support team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Cutting-edge technology solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Competitive pricing</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <img 
                src={aboutImage} 
                alt="Our Team" 
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl p-6 text-center shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-hero rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
