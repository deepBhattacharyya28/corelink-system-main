import { Wrench, Printer, Code, Palette } from 'lucide-react';
import hardwareImage from '../assets/hardware-service.jpg';
import printerImage from '../assets/printer-service.jpg';
import webImage from '../assets/web-service.jpg';
import graphicsImage from '../assets/graphics-service.jpg';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Hardware Support",
      description: "Complete hardware diagnostics, repairs, and upgrades. From desktop computers to servers, we handle all your hardware needs with precision and care.",
      features: ["System Diagnostics", "Component Replacement", "Performance Optimization", "Hardware Consulting"],
      image: hardwareImage
    },
    {
      icon: Printer,
      title: "Printer Setup & Repair",
      description: "Professional printer installation, configuration, and repair services. We work with all major brands and ensure optimal printing performance.",
      features: ["Printer Installation", "Network Configuration", "Troubleshooting", "Maintenance"],
      image: printerImage
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies. From concept to deployment, we create digital experiences that work.",
      features: ["Custom Websites", "E-commerce Solutions", "Mobile-Responsive Design", "SEO Optimization"],
      image: webImage
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Creative visual solutions for your brand and digital presence. From YouTube thumbnails to complete brand identities, we bring your vision to life.",
      features: ["YouTube Thumbnails", "Logo Design", "Brand Identity", "Social Media Graphics"],
      image: graphicsImage
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-background">
      {/* Consistent container with same padding as other sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to keep your technology running smoothly and efficiently
          </p>
        </div>

        {/* Services Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl overflow-hidden shadow-card hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-gradient-hero rounded-2xl w-12 h-12 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 dark:border-primary/30 rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom IT Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us for personalized IT consulting and custom service packages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
