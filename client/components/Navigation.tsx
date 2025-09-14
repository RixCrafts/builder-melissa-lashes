import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-200 relative">
      <div className="px-4 md:px-8 lg:px-16 py-0">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center justify-center w-21 h-9 px-2">
              <svg className="w-[70px] h-9" viewBox="0 0 71 36" fill="none">
                <g clipPath="url(#clip0_6_217)">
                  <path
                    d="M67.9117 17.0815L67.8746 17.1187C68.1348 16.4125 68.6551 16.1523 69.1011 16.1523C69.733 16.1523 70.2905 16.6355 70.2905 17.3417C70.2905 17.4904 70.2905 17.6762 70.2162 17.8992C68.9153 21.2444 66.1648 22.9541 63.4887 23.2143C62.2622 25.2957 60.2551 26.8196 57.3931 26.8196C53.3046 26.8196 51.4834 23.586 51.4834 20.055C51.4834 15.7063 54.2339 10.8744 58.8427 10.8744C59.8462 10.8744 60.7011 11.0975 61.4073 11.3948C63.4887 12.1753 64.8268 14.8886 64.8268 17.7877C64.8268 18.7169 64.7524 19.6461 64.5294 20.5382C65.9047 20.055 67.2055 18.9399 67.9117 17.0815ZM60.1436 13.9222V13.8851C59.3259 13.8851 58.8427 14.9629 58.8427 16.2638C58.8427 18.1594 59.8834 19.9063 61.5188 20.5382C61.779 19.7205 61.8905 18.7913 61.8905 17.7134C61.8905 15.632 61.2586 13.9222 60.1436 13.9222ZM57.4303 24.1063C58.471 24.1063 59.5117 23.6603 60.3294 22.7311C57.9135 21.6532 56.3896 19.1258 56.3896 16.7098C56.3896 15.8921 56.5383 15.0373 56.7613 14.2939C55.2746 15.5205 54.4197 17.9364 54.4197 20.055C54.4197 22.8054 55.7206 24.1063 57.4303 24.1063Z"
                    fill="#0C0801"
                  />
                  <path
                    d="M52.0573 17.0815L52.0201 17.1187C52.2803 16.4125 52.7263 16.1152 53.1723 16.1152C53.8042 16.1152 54.436 16.6727 54.436 17.3789C54.436 17.5647 54.3989 17.7134 54.3245 17.8992C52.875 21.4302 50.7192 25.5559 47.2626 27.9718L47.1883 28.7152C46.7794 33.1754 44.5122 36.0001 41.6502 36.0001C39.4944 36.0001 38.2307 34.5134 38.2307 32.7665C38.2307 29.6072 41.4643 28.455 44.475 26.5223C44.5493 25.7417 44.5865 24.8497 44.6236 23.8461C43.1369 25.4815 41.5387 26.1506 40.1263 26.1506C37.3015 26.1506 34.9971 23.8461 34.9971 20.3152C34.9971 14.8886 38.5652 11.3205 42.5422 11.3205H42.5794C45.2927 11.3205 48.1918 12.77 48.1918 15.3718C48.1918 16.2267 47.8201 20.8727 47.5228 24.478C49.5298 22.5824 51.2024 19.4975 52.0573 17.0815ZM40.5351 23.4745C41.9104 23.4745 43.7688 22.6196 44.921 18.4196C45.1068 17.4904 45.2183 16.6727 45.1812 15.7063C44.9582 14.7028 44.1033 14.1081 42.8767 14.1081C40.3493 14.1081 37.9334 16.524 37.9334 20.2037C37.9334 22.4338 38.9741 23.4745 40.5351 23.4745ZM41.9475 33.2869H41.9847C42.7652 33.2869 43.6201 32.7665 44.1776 29.4214C42.5422 30.3877 41.0183 31.3541 41.0183 32.5063C41.0183 32.9895 41.39 33.2869 41.9475 33.2869Z"
                    fill="#0C0801"
                  />
                  <path
                    d="M35.649 17.0815L35.6119 17.1187C35.872 16.4125 36.3924 16.1523 36.8384 16.1523C37.4703 16.1523 38.0278 16.6355 38.0278 17.3417C38.0278 17.4904 38.0278 17.6762 37.9535 17.8992C36.6526 21.2444 33.9021 22.9541 31.226 23.2143C29.9995 25.2957 27.9924 26.8196 25.1304 26.8196C21.0419 26.8196 19.2207 23.586 19.2207 20.055C19.2207 15.7063 21.9711 10.8744 26.58 10.8744C27.5835 10.8744 28.4384 11.0975 29.1446 11.3948C31.226 12.1753 32.5641 14.8886 32.5641 17.7877C32.5641 18.7169 32.4897 19.6461 32.2667 20.5382C33.642 20.055 34.9428 18.9399 35.649 17.0815ZM27.8809 13.9222V13.8851C27.0632 13.8851 26.58 14.9629 26.58 16.2638C26.58 18.1594 27.6207 19.9063 29.2561 20.5382C29.5163 19.7205 29.6278 18.7913 29.6278 17.7134C29.6278 15.632 28.9959 13.9222 27.8809 13.9222ZM25.1676 24.1063C26.2083 24.1063 27.249 23.6603 28.0667 22.7311C25.6508 21.6532 24.1269 19.1258 24.1269 16.7098C24.1269 15.8921 24.2756 15.0373 24.4986 14.2939C23.0119 15.5205 22.157 17.9364 22.157 20.055C22.157 22.8054 23.4579 24.1063 25.1676 24.1063Z"
                    fill="#0C0801"
                  />
                  <path
                    d="M21.1099 15.9083C20.5895 15.9083 20.1435 16.1685 19.8461 16.8747C18.8798 19.3278 16.8726 23.4907 14.8283 23.4907C13.5411 23.4907 12.545 23.1996 11.5384 22.9054C10.5105 22.605 9.47166 22.3013 8.10077 22.3013C7.61757 22.3013 6.94853 22.3757 6.31666 22.4872C8.22024 19.8914 8.93138 16.7477 9.62046 10.8054C8.323 10.7228 7.26759 10.4831 6.49831 10.241C5.67666 17.7775 4.7436 20.6511 1.33603 23.4907C0.890002 23.8624 0.666992 24.3828 0.666992 24.9032C0.666992 25.7209 1.3732 26.4271 2.26526 26.4271C2.56261 26.4271 2.89712 26.3156 3.23164 26.1669C5.12726 25.312 6.27949 25.089 7.69191 25.089C8.59008 25.089 9.66482 25.3459 10.8155 25.6208C12.1409 25.9376 13.567 26.2784 14.9399 26.2784C17.9505 26.2784 19.9205 23.3421 22.1134 17.6552C22.225 17.4694 22.2621 17.2464 22.2621 17.0605C22.2621 16.3543 21.7046 15.9083 21.1099 15.9083Z"
                    fill="#0C0801"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.68715 8.70287C7.36024 8.93784 8.41106 9.2114 9.77349 9.29233L9.9965 9.29222C14.1966 9.29222 16.9471 6.6904 16.9471 3.56821C16.9471 1.56109 15.386 0 13.193 0C10.2567 0 8.2124 2.00712 7.17167 5.98419C5.87076 5.27798 4.97871 4.01424 4.53268 2.41598C4.30966 1.63543 3.82647 1.15223 3.15742 1.15223C2.33971 1.15223 1.81934 1.78411 1.81934 2.63899C1.81934 5.16648 3.7893 7.58245 6.68847 8.69752L6.68715 8.70287ZM10.2195 6.57889C10.777 4.01424 11.6691 2.78767 12.8585 2.78767C13.4904 2.78767 13.8992 3.15936 13.8992 3.8284C13.8992 5.05497 12.5983 6.50455 10.2195 6.57889Z"
                    fill="#0C0801"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_217">
                    <rect
                      width="70"
                      height="36"
                      fill="white"
                      transform="translate(0.666992)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                to="/"
                className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors"
              >
                Portfolio
              </Link>
              <button
                className="flex items-center gap-1 text-neutral-950 font-heebo text-base hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                About Us <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button and Contact Button */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 h-0.5 bg-neutral-950"></div>
              <div className="w-5 h-0.5 bg-neutral-950"></div>
              <div className="w-5 h-0.5 bg-neutral-950"></div>
            </button>

            <Link
              to="/contact"
              className="gradient-primary text-white px-3 py-1.5 md:px-5 md:py-2 font-heebo text-sm md:text-base border border-pink-500 hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
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
                <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "🔍",
                      title: "Pricing",
                      desc: "Explore our competitive pricing options.",
                      link: "/pricing"
                    },
                    {
                      icon: "💬",
                      title: "Testimonials",
                      desc: "See what our clients are saying about us.",
                      link: "/testimonials"
                    },
                    {
                      icon: "📞",
                      title: "Contact Us",
                      desc: "Get in touch with our team today.",
                      link: "/contact"
                    },
                    {
                      icon: "📅",
                      title: "Booking",
                      desc: "Schedule your appointment online easily.",
                      link: "/booking"
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded"
                    >
                      <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                      <div>
                        <div className="font-heebo font-semibold text-base text-neutral-950">
                          {item.title}
                        </div>
                        <div className="font-heebo text-sm text-neutral-950">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* More Pages */}
              <div className="flex-1">
                <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">
                  More Pages
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "❓",
                      title: "FAQ",
                      desc: "Find answers to common questions here.",
                      link: "/faq"
                    },
                    {
                      icon: "🖼️",
                      title: "Gallery",
                      desc: "View stunning transformations and results.",
                      link: "/portfolio"
                    },
                    {
                      icon: "🛡️",
                      title: "Policies",
                      desc: "Understand our salon policies and procedures.",
                      link: "/policies"
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded"
                    >
                      <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                      <div>
                        <div className="font-heebo font-semibold text-base text-neutral-950">
                          {item.title}
                        </div>
                        <div className="font-heebo text-sm text-neutral-950">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional Links */}
              <div className="flex-1">
                <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">
                  Additional Links
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📅",
                      title: "Events",
                      desc: "Stay updated on upcoming salon events.",
                      link: "/events"
                    },
                    {
                      icon: "🤝",
                      title: "Partnerships",
                      desc: "Collaborate with us for special offers.",
                      link: "/partnerships"
                    },
                    {
                      icon: "💭",
                      title: "Feedback",
                      desc: "We value your thoughts and suggestions.",
                      link: "/feedback"
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded"
                    >
                      <div className="w-6 h-6 mt-1 text-lg">{item.icon}</div>
                      <div>
                        <div className="font-heebo font-semibold text-base text-neutral-950">
                          {item.title}
                        </div>
                        <div className="font-heebo text-sm text-neutral-950">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Connect With Us */}
              <div className="flex-1">
                <h3 className="font-heebo font-semibold text-sm text-neutral-950 mb-4">
                  Connect With Us
                </h3>
                <a
                  href="#social"
                  className="flex items-start gap-3 p-2 cursor-pointer hover:bg-white/50 rounded"
                >
                  <div className="w-6 h-6 mt-1 text-lg">📱</div>
                  <div>
                    <div className="font-heebo font-semibold text-base text-neutral-950">
                      Social Media
                    </div>
                    <div className="font-heebo text-sm text-neutral-950">
                      Follow us for updates and promotions.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-white border-t border-neutral-950/15 px-4 md:px-8 lg:px-16 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-heebo text-base text-neutral-950">
                  Ready to enhance your beauty?
                </span>
                <Link
                  to="/contact"
                  className="font-heebo text-base text-neutral-950 underline hover:text-pink-500"
                >
                  Sign up for free
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/booking"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500"
                >
                  📖 Book Now
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500"
                >
                  👤 About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}