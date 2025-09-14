import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-header px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">
                Contact Us
              </span>
            </div>
            <h1 className="font-noto-serif text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[120%] text-neutral-950 tracking-[-0.56px]">
              Get in Touch with Our Beauty Experts
            </h1>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
              Ready to enhance your natural beauty? We'd love to hear from you. Book a consultation, ask questions, or simply say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
                  Let's Connect
                </h2>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
                  We're here to answer your questions and help you achieve your beauty goals. Reach out through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-light border border-neutral-950/15 flex items-center justify-center rounded-lg">
                    <Phone className="w-6 h-6 text-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-heebo font-semibold text-base text-neutral-950 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:1800123456"
                      className="font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                    >
                      1800 123 4567
                    </a>
                    <p className="font-heebo text-sm text-neutral-950/70">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-light border border-neutral-950/15 flex items-center justify-center rounded-lg">
                    <Mail className="w-6 h-6 text-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-heebo font-semibold text-base text-neutral-950 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@melissalashes.com"
                      className="font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                    >
                      info@melissalashes.com
                    </a>
                    <p className="font-heebo text-sm text-neutral-950/70">
                      Send us your questions anytime
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-light border border-neutral-950/15 flex items-center justify-center rounded-lg">
                    <MapPin className="w-6 h-6 text-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-heebo font-semibold text-base text-neutral-950 mb-1">
                      Address
                    </h3>
                    <p className="font-heebo text-base text-neutral-950">
                      Level 1, 12 Beauty Lane<br />
                      Sydney NSW 2000
                    </p>
                    <p className="font-heebo text-sm text-neutral-950/70">
                      Visit us for your appointment
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-light border border-neutral-950/15 flex items-center justify-center rounded-lg">
                    <Clock className="w-6 h-6 text-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-heebo font-semibold text-base text-neutral-950 mb-1">
                      Business Hours
                    </h3>
                    <div className="font-heebo text-base text-neutral-950 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/booking"
                  className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity"
                >
                  Book Online
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-neutral-950/15 p-6 md:p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="font-noto-serif text-xl md:text-2xl leading-[120%] text-neutral-950 tracking-[-0.24px] mb-2">
                  Send us a Message
                </h3>
                <p className="font-heebo text-base text-neutral-950/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-heebo text-sm text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-heebo text-sm text-red-800">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-heebo text-sm font-semibold text-neutral-950 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-950/15 rounded font-heebo text-base text-neutral-950 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-heebo text-sm font-semibold text-neutral-950 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-950/15 rounded font-heebo text-base text-neutral-950 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-heebo text-sm font-semibold text-neutral-950 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-neutral-950/15 rounded font-heebo text-base text-neutral-950 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block font-heebo text-sm font-semibold text-neutral-950 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-neutral-950/15 rounded font-heebo text-base text-neutral-950 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="lash-extensions">Lash Extensions</option>
                      <option value="lash-lifts">Lash Lifts</option>
                      <option value="brow-shaping">Brow Shaping</option>
                      <option value="brow-lamination">Brow Lamination</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-heebo text-sm font-semibold text-neutral-950 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border border-neutral-950/15 rounded font-heebo text-base text-neutral-950 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your beauty goals or ask any questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white px-6 py-3 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-pink-light px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-4">
              Visit Our Salon
            </h2>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
              Located in the heart of Sydney, our salon is easily accessible and offers a welcoming atmosphere for all your beauty needs.
            </p>
          </div>

          {/* Placeholder for Google Maps - replace with actual map embed */}
          <div className="w-full h-64 md:h-96 bg-neutral-300 rounded-lg flex items-center justify-center border border-neutral-950/15">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-neutral-950 mx-auto mb-4" />
              <p className="font-heebo text-base text-neutral-950">
                Google Maps Integration
              </p>
              <p className="font-heebo text-sm text-neutral-950/70">
                Level 1, 12 Beauty Lane, Sydney NSW 2000
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}