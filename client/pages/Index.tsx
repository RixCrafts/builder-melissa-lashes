import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ArrowLeft, ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-200">
      {/* Navigation */}
      <nav className="bg-neutral-200 relative">
        <div className="px-4 md:px-8 lg:px-16 py-0">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-21 h-9 px-2">
                <svg className="w-[70px] h-9" viewBox="0 0 71 36" fill="none">
                  <g clipPath="url(#clip0_6_217)">
                    <path d="M67.9117 17.0815L67.8746 17.1187C68.1348 16.4125 68.6551 16.1523 69.1011 16.1523C69.733 16.1523 70.2905 16.6355 70.2905 17.3417C70.2905 17.4904 70.2905 17.6762 70.2162 17.8992C68.9153 21.2444 66.1648 22.9541 63.4887 23.2143C62.2622 25.2957 60.2551 26.8196 57.3931 26.8196C53.3046 26.8196 51.4834 23.586 51.4834 20.055C51.4834 15.7063 54.2339 10.8744 58.8427 10.8744C59.8462 10.8744 60.7011 11.0975 61.4073 11.3948C63.4887 12.1753 64.8268 14.8886 64.8268 17.7877C64.8268 18.7169 64.7524 19.6461 64.5294 20.5382C65.9047 20.055 67.2055 18.9399 67.9117 17.0815ZM60.1436 13.9222V13.8851C59.3259 13.8851 58.8427 14.9629 58.8427 16.2638C58.8427 18.1594 59.8834 19.9063 61.5188 20.5382C61.779 19.7205 61.8905 18.7913 61.8905 17.7134C61.8905 15.632 61.2586 13.9222 60.1436 13.9222ZM57.4303 24.1063C58.471 24.1063 59.5117 23.6603 60.3294 22.7311C57.9135 21.6532 56.3896 19.1258 56.3896 16.7098C56.3896 15.8921 56.5383 15.0373 56.7613 14.2939C55.2746 15.5205 54.4197 17.9364 54.4197 20.055C54.4197 22.8054 55.7206 24.1063 57.4303 24.1063Z" fill="#0C0801"/>
                    <path d="M52.0573 17.0815L52.0201 17.1187C52.2803 16.4125 52.7263 16.1152 53.1723 16.1152C53.8042 16.1152 54.436 16.6727 54.436 17.3789C54.436 17.5647 54.3989 17.7134 54.3245 17.8992C52.875 21.4302 50.7192 25.5559 47.2626 27.9718L47.1883 28.7152C46.7794 33.1754 44.5122 36.0001 41.6502 36.0001C39.4944 36.0001 38.2307 34.5134 38.2307 32.7665C38.2307 29.6072 41.4643 28.455 44.475 26.5223C44.5493 25.7417 44.5865 24.8497 44.6236 23.8461C43.1369 25.4815 41.5387 26.1506 40.1263 26.1506C37.3015 26.1506 34.9971 23.8461 34.9971 20.3152C34.9971 14.8886 38.5652 11.3205 42.5422 11.3205H42.5794C45.2927 11.3205 48.1918 12.77 48.1918 15.3718C48.1918 16.2267 47.8201 20.8727 47.5228 24.478C49.5298 22.5824 51.2024 19.4975 52.0573 17.0815ZM40.5351 23.4745C41.9104 23.4745 43.7688 22.6196 44.921 18.4196C45.1068 17.4904 45.2183 16.6727 45.1812 15.7063C44.9582 14.7028 44.1033 14.1081 42.8767 14.1081C40.3493 14.1081 37.9334 16.524 37.9334 20.2037C37.9334 22.4338 38.9741 23.4745 40.5351 23.4745ZM41.9475 33.2869H41.9847C42.7652 33.2869 43.6201 32.7665 44.1776 29.4214C42.5422 30.3877 41.0183 31.3541 41.0183 32.5063C41.0183 32.9895 41.39 33.2869 41.9475 33.2869Z" fill="#0C0801"/>
                    <path d="M35.649 17.0815L35.6119 17.1187C35.872 16.4125 36.3924 16.1523 36.8384 16.1523C37.4703 16.1523 38.0278 16.6355 38.0278 17.3417C38.0278 17.4904 38.0278 17.6762 37.9535 17.8992C36.6526 21.2444 33.9021 22.9541 31.226 23.2143C29.9995 25.2957 27.9924 26.8196 25.1304 26.8196C21.0419 26.8196 19.2207 23.586 19.2207 20.055C19.2207 15.7063 21.9711 10.8744 26.58 10.8744C27.5835 10.8744 28.4384 11.0975 29.1446 11.3948C31.226 12.1753 32.5641 14.8886 32.5641 17.7877C32.5641 18.7169 32.4897 19.6461 32.2667 20.5382C33.642 20.055 34.9428 18.9399 35.649 17.0815ZM27.8809 13.9222V13.8851C27.0632 13.8851 26.58 14.9629 26.58 16.2638C26.58 18.1594 27.6207 19.9063 29.2561 20.5382C29.5163 19.7205 29.6278 18.7913 29.6278 17.7134C29.6278 15.632 28.9959 13.9222 27.8809 13.9222ZM25.1676 24.1063C26.2083 24.1063 27.249 23.6603 28.0667 22.7311C25.6508 21.6532 24.1269 19.1258 24.1269 16.7098C24.1269 15.8921 24.2756 15.0373 24.4986 14.2939C23.0119 15.5205 22.157 17.9364 22.157 20.055C22.157 22.8054 23.4579 24.1063 25.1676 24.1063Z" fill="#0C0801"/>
                    <path d="M21.1099 15.9083C20.5895 15.9083 20.1435 16.1685 19.8461 16.8747C18.8798 19.3278 16.8726 23.4907 14.8283 23.4907C13.5411 23.4907 12.545 23.1996 11.5384 22.9054C10.5105 22.605 9.47166 22.3013 8.10077 22.3013C7.61757 22.3013 6.94853 22.3757 6.31666 22.4872C8.22024 19.8914 8.93138 16.7477 9.62046 10.8054C8.323 10.7228 7.26759 10.4831 6.49831 10.241C5.67666 17.7775 4.7436 20.6511 1.33603 23.4907C0.890002 23.8624 0.666992 24.3828 0.666992 24.9032C0.666992 25.7209 1.3732 26.4271 2.26526 26.4271C2.56261 26.4271 2.89712 26.3156 3.23164 26.1669C5.12726 25.312 6.27949 25.089 7.69191 25.089C8.59008 25.089 9.66482 25.3459 10.8155 25.6208C12.1409 25.9376 13.567 26.2784 14.9399 26.2784C17.9505 26.2784 19.9205 23.3421 22.1134 17.6552C22.225 17.4694 22.2621 17.2464 22.2621 17.0605C22.2621 16.3543 21.7046 15.9083 21.1099 15.9083Z" fill="#0C0801"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.68715 8.70287C7.36024 8.93784 8.41106 9.2114 9.77349 9.29233L9.9965 9.29222C14.1966 9.29222 16.9471 6.6904 16.9471 3.56821C16.9471 1.56109 15.386 0 13.193 0C10.2567 0 8.2124 2.00712 7.17167 5.98419C5.87076 5.27798 4.97871 4.01424 4.53268 2.41598C4.30966 1.63543 3.82647 1.15223 3.15742 1.15223C2.33971 1.15223 1.81934 1.78411 1.81934 2.63899C1.81934 5.16648 3.7893 7.58245 6.68847 8.69752L6.68715 8.70287ZM10.2195 6.57889C10.777 4.01424 11.6691 2.78767 12.8585 2.78767C13.4904 2.78767 13.8992 3.15936 13.8992 3.8284C13.8992 5.05497 12.5983 6.50455 10.2195 6.57889Z" fill="#0C0801"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_217">
                      <rect width="70" height="36" fill="white" transform="translate(0.666992)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <a href="#" className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors">Home</a>
                <a href="#" className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors">Services</a>
                <a href="#" className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors">Portfolio</a>
                <button 
                  className="flex items-center gap-1 text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  About Us <ChevronDown className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex items-center gap-4">
              <button className="gradient-primary text-white px-3 py-1.5 md:px-5 md:py-2 font-heebo text-sm md:text-base border border-pink-500 hover:opacity-90 transition-opacity">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {isMenuOpen && (
          <div className="bg-pink-light">
            <div className="px-4 md:px-8 lg:px-16 py-4 md:py-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Quick Links */}
                <div className="flex-1">
                  <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">Quick Links</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "🔍", title: "Pricing", desc: "Explore our competitive pricing options." },
                      { icon: "💬", title: "Testimonials", desc: "See what our clients are saying about us." },
                      { icon: "📞", title: "Contact Us", desc: "Get in touch with our team today." },
                      { icon: "📅", title: "Booking", desc: "Schedule your appointment online easily." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded">
                        <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                        <div>
                          <div className="font-heebo font-semibold text-base text-neutral-950">{item.title}</div>
                          <div className="font-heebo text-sm text-neutral-950">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* More Pages */}
                <div className="flex-1">
                  <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">More Pages</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "❓", title: "FAQ", desc: "Find answers to common questions here." },
                      { icon: "🖼️", title: "Gallery", desc: "View stunning transformations and results." },
                      { icon: "🛡️", title: "Policies", desc: "Understand our salon policies and procedures." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded">
                        <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                        <div>
                          <div className="font-heebo font-semibold text-base text-neutral-950">{item.title}</div>
                          <div className="font-heebo text-sm text-neutral-950">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Links */}
                <div className="flex-1">
                  <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">Additional Links</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "📅", title: "Events", desc: "Stay updated on upcoming salon events." },
                      { icon: "🤝", title: "Partnerships", desc: "Collaborate with us for special offers." },
                      { icon: "💭", title: "Feedback", desc: "We value your thoughts and suggestions." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded">
                        <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                        <div>
                          <div className="font-heebo font-semibold text-base text-neutral-950">{item.title}</div>
                          <div className="font-heebo text-sm text-neutral-950">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connect With Us */}
                <div className="flex-1">
                  <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">Connect With Us</h3>
                  <div className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded">
                    <div className="w-6 h-6 mt-1 text-lg">📱</div>
                    <div>
                      <div className="font-heebo font-semibold text-base text-neutral-950">Social Media</div>
                      <div className="font-heebo text-sm text-neutral-950">Follow us for updates and promotions.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-white border-t border-neutral-950/15 px-4 md:px-8 lg:px-16 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-heebo text-base text-neutral-950">Ready to enhance your beauty?</span>
                  <a href="#" className="font-heebo text-base text-neutral-950 underline hover:text-pink-500">Sign up for free</a>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500">
                    📖 Button
                  </button>
                  <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500">
                    👤 Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="gradient-header px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h1 className="font-noto-serif text-[56px] leading-[120%] text-neutral-950 tracking-[-0.56px]">
                  Elevate Your Beauty with Stunning Lashes & Brows
                </h1>
                <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
                  Transform your look with our luxurious lash and brow services. Experience the artistry of beauty tailored just for you.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity">
                  Book Now
                </button>
                <button className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e2ff97a8a1d4b894ed2e07a083d040f5bc098cc?width=1200" 
                alt="Beautiful woman with stunning lashes" 
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-200 px-16 py-28">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">Beauty</span>
            </div>
            <h2 className="font-noto-serif text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              Our Signature Services
            </h2>
            <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
              Enhance your natural beauty with our expert services.
            </p>
          </div>

          {/* Services Grid - All 3 in a row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lash Extensions */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-neutral-950">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                      <path d="M17.9677 42.299H9.00017C8.11784 42.299 7.34751 41.9697 6.68917 41.311C6.03051 40.6527 5.70117 39.8824 5.70117 39V30.0325C7.09617 29.8738 8.29084 29.3153 9.28517 28.357C10.2792 27.3983 10.7762 26.2298 10.7762 24.8515C10.7762 23.4728 10.2792 22.3039 9.28517 21.3445C8.29084 20.3852 7.09617 19.8222 5.70117 19.6555V10.7C5.70117 9.82002 6.03051 9.04818 6.68917 8.38452C7.34751 7.72085 8.11784 7.38902 9.00017 7.38902H17.5872C18.0175 6.02402 18.7297 4.88952 19.7237 3.98552C20.7173 3.08152 21.8928 2.62952 23.2502 2.62952C24.6075 2.62952 25.783 3.08152 26.7767 3.98552C27.7707 4.88952 28.4828 6.02402 28.9132 7.38902H37.3002C38.1802 7.38902 38.952 7.72085 39.6157 8.38452C40.2793 9.04818 40.6112 9.82002 40.6112 10.7V19.087C41.9762 19.5173 43.0857 20.2628 43.9397 21.3235C44.7937 22.3838 45.2207 23.5927 45.2207 24.95C45.2207 26.3073 44.7937 27.4578 43.9397 28.4015C43.0857 29.3455 41.9762 30.0327 40.6112 30.463V39C40.6112 39.8824 40.2793 40.6527 39.6157 41.311C38.952 41.9697 38.1802 42.299 37.3002 42.299H28.3447C28.17 40.7387 27.5903 39.4809 26.6057 38.5255C25.621 37.5702 24.4682 37.0925 23.1472 37.0925C21.8265 37.0925 20.6747 37.5702 19.6917 38.5255C18.709 39.4809 18.1343 40.7387 17.9677 42.299Z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-noto-serif text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px]">
                      Lash Extensions for Stunning Eyes
                    </h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      Long-lasting, voluminous lashes tailored for you.
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors">
                  Learn More <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Brow Shaping */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-neutral-950">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                      <path d="M19.2388 44.1796C18.2908 44.1796 17.484 43.8469 16.8183 43.1816C16.153 42.5159 15.8203 41.7091 15.8203 40.7611V36.6196C15.8203 36.1389 15.9848 35.7329 16.3138 35.4016C16.6431 35.0702 17.049 34.9046 17.5313 34.9046C18.014 34.9046 18.4193 35.0702 18.7473 35.4016C19.075 35.7329 19.2388 36.1389 19.2388 36.6196V40.7611H40.7728V19.2271H36.6313C36.1426 19.2271 35.7346 19.0626 35.4073 18.7336C35.08 18.4046 34.9163 17.9984 34.9163 17.5151C34.9163 17.0317 35.08 16.6286 35.4073 16.3056C35.7346 15.9822 36.1426 15.8206 36.6313 15.8206H40.7728C41.7092 15.8206 42.511 16.1542 43.1783 16.8216C43.8456 17.4889 44.1793 18.2907 44.1793 19.2271V40.7611C44.1793 41.7091 43.8456 42.5159 43.1783 43.1816C42.511 43.8469 41.7092 44.1796 40.7728 44.1796H19.2388Z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-noto-serif text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px]">
                      Perfectly Shaped Brows Just for You
                    </h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      Achieve the ideal brow shape with our experts.
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors">
                  Learn More <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Lifts Service */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-neutral-950">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                      <path d="M19.2388 44.1796C18.2908 44.1796 17.484 43.8469 16.8183 43.1816C16.153 42.5159 15.8203 41.7091 15.8203 40.7611V36.6196C15.8203 36.1389 15.9848 35.7329 16.3138 35.4016C16.6431 35.0702 17.049 34.9046 17.5313 34.9046C18.014 34.9046 18.4193 35.0702 18.7473 35.4016C19.075 35.7329 19.2388 36.1389 19.2388 36.6196V40.7611H40.7728V19.2271H36.6313C36.1426 19.2271 35.7346 19.0626 35.4073 18.7336C35.08 18.4046 34.9163 17.9984 34.9163 17.5151C34.9163 17.0317 35.08 16.6286 35.4073 16.3056C35.7346 15.9822 36.1426 15.8206 36.6313 15.8206H40.7728C41.7092 15.8206 42.511 16.1542 43.1783 16.8216C43.8456 17.4889 44.1793 18.2907 44.1793 19.2271V40.7611C44.1793 41.7091 43.8456 42.5159 43.1783 43.1816C42.511 43.8469 41.7092 44.1796 40.7728 44.1796H19.2388Z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="mb-2">
                      <span className="font-heebo font-semibold text-base text-neutral-950">Lifts</span>
                    </div>
                    <h3 className="font-noto-serif text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px]">
                      Lifts for Effortless Elegance
                    </h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      Lift and enhance your lashes for a stunning look.
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors">
                  Learn More <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="gradient-promo px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dec3fc3353e7d0a389dfd55a906f2ba1d243eb7?width=1200" 
                alt="Beauty experience" 
                className="w-full h-[640px] object-cover"
              />
            </div>
            <div className="flex-1 space-y-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="font-heebo font-semibold text-base text-neutral-950">Elegance</span>
                  </div>
                  <h2 className="font-noto-serif text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                    Experience Beauty Like Never Before
                  </h2>
                  <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
                    At our salon, we combine expertise with a passion for beauty. Our dedicated team ensures every visit leaves you feeling confident and radiant.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 text-neutral-950">
                      <svg viewBox="0 0 48 49" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.46 14.74L41.18 14.24C40.8188 13.6354 40.3094 13.1329 39.7 12.78L26.28 5.04C25.6724 4.6875 24.9826 4.50124 24.28 4.5H23.7C22.9974 4.50124 22.3076 4.6875 21.7 5.04L8.28 12.8C7.67394 13.1505 7.17052 13.6539 6.82 14.26L6.54 14.76C6.1875 15.3677 6.00124 16.0575 6 16.76V32.26C6.00124 32.9626 6.1875 33.6524 6.54 34.26L6.82 34.76C7.17958 35.359 7.68098 35.8604 8.28 36.22L21.72 43.96C22.3246 44.3198 23.0164 44.5066 23.72 44.5H24.28C24.9826 44.4988 25.6724 44.3126 26.28 43.96L39.7 36.2C40.312 35.8574 40.8174 35.352 41.16 34.74L41.46 34.24C41.8082 33.6306 41.9942 32.942 42 32.24V16.74C41.9988 16.0375 41.8126 15.3477 41.46 14.74ZM23.7 8.5H24.28L36 15.26L24 22.18L12 15.26L23.7 8.5ZM26 39.5L37.7 32.74L38 32.24V18.72L26 25.66V39.5Z"/>
                      </svg>
                    </div>
                    <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px]">Expert Techniques</h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      We use the latest methods for stunning, long-lasting results tailored to your unique style.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 text-neutral-950">
                      <svg viewBox="0 0 48 49" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.46 14.74L41.18 14.24C40.8188 13.6354 40.3094 13.1329 39.7 12.78L26.28 5.04C25.6724 4.6875 24.9826 4.50124 24.28 4.5H23.7C22.9974 4.50124 22.3076 4.6875 21.7 5.04L8.28 12.8C7.67394 13.1505 7.17052 13.6539 6.82 14.26L6.54 14.76C6.1875 15.3677 6.00124 16.0575 6 16.76V32.26C6.00124 32.9626 6.1875 33.6524 6.54 34.26L6.82 34.76C7.17958 35.359 7.68098 35.8604 8.28 36.22L21.72 43.96C22.3246 44.3198 23.0164 44.5066 23.72 44.5H24.28C24.9826 44.4988 25.6724 44.3126 26.28 43.96L39.7 36.2C40.312 35.8574 40.8174 35.352 41.16 34.74L41.46 34.24C41.8082 33.6306 41.9942 32.942 42 32.24V16.74C41.9988 16.0375 41.8126 15.3477 41.46 14.74ZM23.7 8.5H24.28L36 15.26L24 22.18L12 15.26L23.7 8.5ZM26 39.5L37.7 32.74L38 32.24V18.72L26 25.66V39.5Z"/>
                      </svg>
                    </div>
                    <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px]">Luxurious Experience</h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      Indulge in a serene environment designed for your ultimate relaxation and beauty enhancement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors">
                  Discover
                </button>
                <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors">
                  Book <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gradient-gallery">
        <div className="px-16 py-28">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-noto-serif text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              Transformation Gallery
            </h2>
            <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
              See stunning results from our happy clients!
            </p>
          </div>
        </div>
        
        <div className="relative h-[900px] overflow-hidden">
          <div className="flex w-full h-full">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9063f1f753ab9976d9dd00db5df66028d916908c?width=2880" 
              alt="Before and after transformation" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-neutral-950/15 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-6 h-6 text-neutral-950" />
          </button>
          <button className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-neutral-950/15 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowRight className="w-6 h-6 text-neutral-950" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-neutral-200 px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-neutral-950 text-neutral-950" />
              ))}
            </div>
            
            <blockquote className="font-noto-serif text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px]">
              "The service was exceptional! My lashes have never looked better, and I feel so confident!"
            </blockquote>
            
            <div className="flex items-center justify-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar" 
                  alt="Emily Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-heebo font-semibold text-base text-neutral-950">Emily Johnson</div>
                <div className="font-heebo text-base text-neutral-950">Beauty Blogger</div>
              </div>
              <div className="w-px h-15 bg-neutral-950/15"></div>
              <div className="w-30 h-12 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-pink-light px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="w-20 h-20 text-neutral-950">
                <svg viewBox="0 0 80 81" fill="currentColor">
                  <path d="M56.7575 74.7201C56.0408 74.7201 55.4239 74.4615 54.9067 73.9443C54.3894 73.4271 54.1308 72.8157 54.1308 72.1101C54.1308 71.4051 54.3894 70.7907 54.9067 70.2668C55.4239 69.7429 56.0417 69.4809 56.76 69.4809H68.6142V60.9334H56.76C56.0417 60.9334 55.4239 60.6748 54.9067 60.1576C54.3894 59.6404 54.1308 59.0259 54.1308 58.3143C54.1308 57.6026 54.3894 56.9879 54.9067 56.4701C55.4239 55.9529 56.0417 55.6943 56.76 55.6943H68.6142V47.1076H56.76C56.0417 47.1076 55.4239 46.851 54.9067 46.3376C54.3894 45.8237 54.1308 45.2137 54.1308 44.5076C54.1308 43.8015 54.3894 43.1884 54.9067 42.6684C55.4239 42.1484 56.0417 41.8885 56.76 41.8885H68.6142V33.3018H56.76C56.0417 33.3018 55.4239 33.0432 54.9067 32.526C54.3894 32.0082 54.1308 31.3968 54.1308 30.6918C54.1308 29.9923 54.3894 29.3826 54.9067 28.8626C55.4239 28.3426 56.0417 28.0826 56.76 28.0826H68.6142V19.5151H56.76C56.0417 19.5151 55.4239 19.2565 54.9067 18.7393C54.3894 18.2221 54.1308 17.6076 54.1308 16.896C54.1308 16.1898 54.3894 15.5765 54.9067 15.0559C55.4239 14.5359 56.0408 14.276 56.7575 14.276H70.3642C72.2725 14.276 73.8764 14.9243 75.1758 16.2209C76.4753 17.5171 77.125 19.129 77.125 21.0568V67.9593C77.125 69.8815 76.4753 71.4887 75.1758 72.781C73.8764 74.0737 72.2725 74.7201 70.3642 74.7201H56.7575Z"/>
                </svg>
              </div>
              <div className="space-y-6">
                <h2 className="font-noto-serif text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                  Discover Our Passion for Beauty and Excellence
                </h2>
                <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
                  At our salon, we believe in enhancing natural beauty through expert techniques and personalized care. Our dedicated team is committed to providing a luxurious experience that leaves you feeling confident and radiant.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors">
                  Learn More
                </button>
                <button className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors">
                  Meet Us <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/21cfcdec06b31caa71408d157bb3955858599f18?width=1200" 
                alt="Our salon team" 
                className="w-full h-[640px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-200 px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-20">
            <div className="flex-1">
              <h2 className="font-noto-serif text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                Your Beauty Transformation Awaits
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <p className="font-heebo text-lg text-neutral-950 leading-[150%]">
                Indulge in our luxurious lash and brow services designed to enhance your natural beauty. Book your appointment today and experience the difference.
              </p>
              <div className="flex items-center gap-4">
                <button className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity">
                  Book Now
                </button>
                <button className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-light px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            <div className="flex gap-16">
              {/* Company Info */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center justify-center w-21 h-9 px-2">
                  <svg className="w-[70px] h-9" viewBox="0 0 71 37" fill="none">
                    <g clipPath="url(#clip0_6_304)">
                      <path d="M67.9117 17.9703L67.8746 18.0075C68.1348 17.3013 68.6551 17.0411 69.1011 17.0411C69.733 17.0411 70.2905 17.5243 70.2905 18.2305C70.2905 18.3792 70.2905 18.565 70.2162 18.788C68.9153 22.1332 66.1648 23.8429 63.4887 24.1031C62.2622 26.1845 60.2551 27.7084 57.3931 27.7084C53.3046 27.7084 51.4834 24.4748 51.4834 20.9438C51.4834 16.5951 54.2339 11.7632 58.8427 11.7632C59.8462 11.7632 60.7011 11.9863 61.4073 12.2836C63.4887 13.0641 64.8268 15.7774 64.8268 18.6765C64.8268 19.6057 64.7524 20.5349 64.5294 21.427C65.9047 20.9438 67.2055 19.8287 67.9117 17.9703Z" fill="#0C0801"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_304">
                        <rect width="70" height="36" fill="white" transform="translate(0.666992 0.888672)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="font-heebo font-semibold text-sm text-neutral-950">Address:</div>
                    <div className="font-heebo text-sm text-neutral-950">Level 1, 12 Sample St, Sydney NSW 2000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-heebo font-semibold text-sm text-neutral-950">Contact:</div>
                    <div className="space-y-0">
                      <div className="font-heebo text-sm text-neutral-950 underline">1800 123 4567</div>
                      <div className="font-heebo text-sm text-neutral-950 underline">info@beautysalon.com</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 text-neutral-950">📘</div>
                  <div className="w-6 h-6 text-neutral-950">📷</div>
                  <div className="w-6 h-6 text-neutral-950">🐦</div>
                  <div className="w-6 h-6 text-neutral-950">💼</div>
                  <div className="w-6 h-6 text-neutral-950">📺</div>
                </div>
              </div>

              {/* Links */}
              <div className="max-w-md flex-1 flex gap-6">
                <div className="flex-1">
                  <div className="space-y-2">
                    {['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'YouTube'].map((link, i) => (
                      <div key={i} className="py-2">
                        <a href="#" className="font-heebo font-semibold text-sm text-neutral-950 hover:text-pink-500 transition-colors">{link}</a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {['LinkedIn', 'Snapchat', 'TikTok', 'Blog', 'FAQ'].map((link, i) => (
                      <div key={i} className="py-2">
                        <a href="#" className="font-heebo font-semibold text-sm text-neutral-950 hover:text-pink-500 transition-colors">{link}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="space-y-8">
              <div className="w-full h-px bg-neutral-950/15"></div>
              <div className="flex justify-between items-center">
                <div className="font-heebo text-sm text-neutral-950">
                  © 2025 Relume. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors">Privacy Policy</a>
                  <a href="#" className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors">Terms of Service</a>
                  <a href="#" className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors">Cookies Settings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
