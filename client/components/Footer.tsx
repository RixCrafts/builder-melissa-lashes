import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pink-light px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="flex-1 space-y-8">
              <Link to="/" className="flex items-center justify-center w-21 h-9 px-2">
                <svg className="w-[70px] h-9" viewBox="0 0 71 37" fill="none">
                  <g clipPath="url(#clip0_6_304)">
                    <path
                      d="M67.9117 17.9703L67.8746 18.0075C68.1348 17.3013 68.6551 17.0411 69.1011 17.0411C69.733 17.0411 70.2905 17.5243 70.2905 18.2305C70.2905 18.3792 70.2905 18.565 70.2162 18.788C68.9153 22.1332 66.1648 23.8429 63.4887 24.1031C62.2622 26.1845 60.2551 27.7084 57.3931 27.7084C53.3046 27.7084 51.4834 24.4748 51.4834 20.9438C51.4834 16.5951 54.2339 11.7632 58.8427 11.7632C59.8462 11.7632 60.7011 11.9863 61.4073 12.2836C63.4887 13.0641 64.8268 15.7774 64.8268 18.6765C64.8268 19.6057 64.7524 20.5349 64.5294 21.427C65.9047 20.9438 67.2055 19.8287 67.9117 17.9703Z"
                      fill="#0C0801"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_304">
                      <rect
                        width="70"
                        height="36"
                        fill="white"
                        transform="translate(0.666992 0.888672)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="font-heebo font-semibold text-sm text-neutral-950">
                    Address:
                  </div>
                  <div className="font-heebo text-sm text-neutral-950">
                    Level 1, 12 Sample St, Sydney NSW 2000
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-heebo font-semibold text-sm text-neutral-950">
                    Contact:
                  </div>
                  <div className="space-y-0">
                    <a
                      href="tel:1800123456"
                      className="block font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors"
                    >
                      1800 123 4567
                    </a>
                    <a
                      href="mailto:info@beautysalon.com"
                      className="block font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors"
                    >
                      info@beautysalon.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="w-6 h-6 text-neutral-950 hover:text-pink-500 transition-colors">📘</a>
                <a href="#" className="w-6 h-6 text-neutral-950 hover:text-pink-500 transition-colors">📷</a>
                <a href="#" className="w-6 h-6 text-neutral-950 hover:text-pink-500 transition-colors">🐦</a>
                <a href="#" className="w-6 h-6 text-neutral-950 hover:text-pink-500 transition-colors">💼</a>
                <a href="#" className="w-6 h-6 text-neutral-950 hover:text-pink-500 transition-colors">📺</a>
              </div>
            </div>

            {/* Links */}
            <div className="max-w-md flex-1 flex gap-6">
              <div className="flex-1">
                <div className="space-y-2">
                  {[
                    { name: "Instagram", href: "#" },
                    { name: "Facebook", href: "#" },
                    { name: "Twitter", href: "#" },
                    { name: "Pinterest", href: "#" },
                    { name: "YouTube", href: "#" },
                  ].map((link, i) => (
                    <div key={i} className="py-2">
                      <a
                        href={link.href}
                        className="font-heebo font-semibold text-sm text-neutral-950 hover:text-pink-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  {[
                    { name: "LinkedIn", href: "#" },
                    { name: "Snapchat", href: "#" },
                    { name: "TikTok", href: "#" },
                    { name: "Blog", href: "/blog" },
                    { name: "FAQ", href: "/faq" },
                  ].map((link, i) => (
                    <div key={i} className="py-2">
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="font-heebo font-semibold text-sm text-neutral-950 hover:text-pink-500 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="font-heebo font-semibold text-sm text-neutral-950 hover:text-pink-500 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
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
                © 2025 Melissa Lashes. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors"
                >
                  Terms of Service
                </Link>
                <a
                  href="#cookies"
                  className="font-heebo text-sm text-neutral-950 underline hover:text-pink-500 transition-colors"
                >
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}