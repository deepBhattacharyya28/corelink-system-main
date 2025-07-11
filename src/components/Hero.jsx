import { ArrowRight, Code, Wrench, Printer, Palette } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-background flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="IT Professional"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-background/80 dark:bg-gradient-background/90"></div>
      </div>

      {/* Consistent container with same padding as navbar */}
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Empowering Your
            <span className="bg-gradient-hero bg-clip-text text-transparent block sm:inline sm:ml-4">
              Digital Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete IT solutions and creative services for your business success. From hardware support to stunning graphics design,
            CoreLink System delivers excellence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
          <Button
            onClick={scrollToServices}
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300 hover:scale-105 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-2xl w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-2xl backdrop-blur-sm w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
            <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Hardware Support</h3>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
            <Printer className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Printer Solutions</h3>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
            <Code className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Web Development</h3>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
            <Palette className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Graphics Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
