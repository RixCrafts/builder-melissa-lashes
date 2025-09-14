import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-header px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <div className="mb-4">
                  <span className="font-heebo font-semibold text-base text-neutral-950">
                    About Us
                  </span>
                </div>
                <h1 className="font-noto-serif text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[120%] text-neutral-950 tracking-[-0.56px] text-center lg:text-left">
                  Discover Our Passion for Beauty and Excellence
                </h1>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] text-center lg:text-left">
                  At Melissa Lashes, we believe in enhancing natural beauty through expert techniques and personalized care. Our dedicated team is committed to providing a luxurious experience that leaves you feeling confident and radiant.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/booking"
                  className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/21cfcdec06b31caa71408d157bb3955858599f18?width=1200"
                alt="Our salon team"
                className="w-full h-64 md:h-80 lg:h-[600px] object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 w-full lg:w-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dec3fc3353e7d0a389dfd55a906f2ba1d243eb7?width=1200"
                alt="Our story"
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="mb-4">
                  <span className="font-heebo font-semibold text-base text-neutral-950">
                    Our Story
                  </span>
                </div>
                <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] text-center lg:text-left">
                  Founded on Excellence and Artistry
                </h2>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] text-center lg:text-left">
                  Melissa Lashes was born from a passion for enhancing natural beauty and empowering confidence. Our founder, Melissa, started this journey with a simple vision: to create a sanctuary where every client feels valued, pampered, and beautiful.
                </p>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] text-center lg:text-left">
                  With over 8 years of experience in the beauty industry, we have perfected our craft and built lasting relationships with clients who trust us with their beauty needs. Every lash extension and brow treatment is performed with meticulous attention to detail and personalized care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-pink-light px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">
                Our Values
              </span>
            </div>
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              What We Stand For
            </h2>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] max-w-3xl mx-auto">
              Our core values guide everything we do, from the way we treat our clients to the quality of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Excellence",
                description: "We never compromise on quality and continuously strive to exceed expectations in every service we provide.",
                icon: "⭐"
              },
              {
                title: "Personalization",
                description: "Every client is unique, and we tailor our services to enhance your individual beauty and style preferences.",
                icon: "💎"
              },
              {
                title: "Safety & Hygiene",
                description: "We maintain the highest standards of cleanliness and safety, using only premium, sanitized tools and products.",
                icon: "🛡️"
              },
              {
                title: "Expertise",
                description: "Our team consists of certified professionals who stay updated with the latest techniques and trends in beauty.",
                icon: "🎯"
              },
              {
                title: "Customer Care",
                description: "Your comfort and satisfaction are our priorities. We listen, understand, and deliver results that make you smile.",
                icon: "💕"
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to provide cutting-edge services that deliver exceptional results.",
                icon: "✨"
              },
            ].map((value, index) => (
              <div key={index} className="bg-white border border-neutral-950/15 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px]">
                    {value.title}
                  </h3>
                  <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">
                Our Team
              </span>
            </div>
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              Meet the Artists Behind Your Beauty
            </h2>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] max-w-3xl mx-auto">
              Our talented team of beauty professionals brings years of experience and a passion for perfection to every appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Melissa Rodriguez",
                role: "Founder & Master Lash Artist",
                experience: "8+ Years Experience",
                specialties: ["Volume Lashes", "Classic Extensions", "Brow Shaping"],
                image: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-team-1"
              },
              {
                name: "Sarah Chen",
                role: "Senior Lash Specialist",
                experience: "5+ Years Experience",
                specialties: ["Lash Lifts", "Hybrid Sets", "Color Lashes"],
                image: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-team-2"
              },
              {
                name: "Amanda Williams",
                role: "Brow & Lash Technician",
                experience: "3+ Years Experience",
                specialties: ["Microblading", "Brow Lamination", "Lash Extensions"],
                image: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-team-3"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white border border-neutral-950/15 p-6 rounded-lg text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px] mb-1">
                      {member.name}
                    </h3>
                    <p className="font-heebo font-semibold text-sm text-pink-500">
                      {member.role}
                    </p>
                    <p className="font-heebo text-sm text-neutral-950 mt-1">
                      {member.experience}
                    </p>
                  </div>
                  <div>
                    <p className="font-heebo font-semibold text-sm text-neutral-950 mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-pink-light text-xs font-heebo text-neutral-950 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-pink-light px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">
                Testimonials
              </span>
            </div>
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Melissa and her team are absolutely incredible! My lashes look natural yet stunning, and they last for weeks. The attention to detail is unmatched.",
                name: "Emily Johnson",
                role: "Beauty Blogger",
                rating: 5
              },
              {
                text: "I've been coming here for over a year, and I'm always impressed by the professionalism and quality. My brows have never looked better!",
                name: "Sarah Martinez",
                role: "Marketing Manager",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-neutral-950/15 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-neutral-950 text-neutral-950"
                      />
                    ))}
                  </div>
                  <blockquote className="font-noto-serif text-lg leading-[140%] text-neutral-950">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-heebo font-semibold text-sm text-neutral-950">
                      {testimonial.name}
                    </div>
                    <div className="font-heebo text-sm text-neutral-950">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 text-center lg:text-left">
            <div className="flex-1">
              <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                Ready to Experience the Melissa Lashes Difference?
              </h2>
            </div>
            <div className="flex-1 space-y-6 md:space-y-8">
              <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
                Join thousands of satisfied clients who trust us with their beauty needs. Book your appointment today and discover why we're the premier destination for lash and brow services.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/booking"
                  className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors flex items-center gap-2"
                >
                  View Services <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}