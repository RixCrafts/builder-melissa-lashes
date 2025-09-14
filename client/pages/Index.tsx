import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-header px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h1 className="font-noto-serif text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[120%] text-neutral-950 tracking-[-0.56px] text-center lg:text-left">
                  Elevate Your Beauty with Stunning Lashes & Brows
                </h1>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] text-center lg:text-left">
                  Transform your look with our luxurious lash and brow services.
                  Experience the artistry of beauty tailored just for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/booking"
                  className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e2ff97a8a1d4b894ed2e07a083d040f5bc098cc?width=1200"
                alt="Beautiful woman with stunning lashes"
                className="w-full h-64 md:h-80 lg:h-[600px] object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            <div className="mb-4">
              <span className="font-heebo font-semibold text-base text-neutral-950">
                Beauty
              </span>
            </div>
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              Our Signature Services
            </h2>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
              Enhance your natural beauty with our expert services.
            </p>
          </div>

          {/* Services Grid - All 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Lash Extensions */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-neutral-950">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                      <path d="M17.9677 42.299H9.00017C8.11784 42.299 7.34751 41.9697 6.68917 41.311C6.03051 40.6527 5.70117 39.8824 5.70117 39V30.0325C7.09617 29.8738 8.29084 29.3153 9.28517 28.357C10.2792 27.3983 10.7762 26.2298 10.7762 24.8515C10.7762 23.4728 10.2792 22.3039 9.28517 21.3445C8.29084 20.3852 7.09617 19.8222 5.70117 19.6555V10.7C5.70117 9.82002 6.03051 9.04818 6.68917 8.38452C7.34751 7.72085 8.11784 7.38902 9.00017 7.38902H17.5872C18.0175 6.02402 18.7297 4.88952 19.7237 3.98552C20.7173 3.08152 21.8928 2.62952 23.2502 2.62952C24.6075 2.62952 25.783 3.08152 26.7767 3.98552C27.7707 4.88952 28.4828 6.02402 28.9132 7.38902H37.3002C38.1802 7.38902 38.952 7.72085 39.6157 8.38452C40.2793 9.04818 40.6112 9.82002 40.6112 10.7V19.087C41.9762 19.5173 43.0857 20.2628 43.9397 21.3235C44.7937 22.3838 45.2207 23.5927 45.2207 24.95C45.2207 26.3073 44.7937 27.4578 43.9397 28.4015C43.0857 29.3455 41.9762 30.0327 40.6112 30.463V39C40.6112 39.8824 40.2793 40.6527 39.6157 41.311C38.952 41.9697 38.1802 42.299 37.3002 42.299H28.3447C28.17 40.7387 27.5903 39.4809 26.6057 38.5255C25.621 37.5702 24.4682 37.0925 23.1472 37.0925C21.8265 37.0925 20.6747 37.5702 19.6917 38.5255C18.709 39.4809 18.1343 40.7387 17.9677 42.299Z" />
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
                <Link
                  to="/services"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                >
                  Learn More <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Brow Shaping */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 text-neutral-950">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                      <path d="M19.2388 44.1796C18.2908 44.1796 17.484 43.8469 16.8183 43.1816C16.153 42.5159 15.8203 41.7091 15.8203 40.7611V36.6196C15.8203 36.1389 15.9848 35.7329 16.3138 35.4016C16.6431 35.0702 17.049 34.9046 17.5313 34.9046C18.014 34.9046 18.4193 35.0702 18.7473 35.4016C19.075 35.7329 19.2388 36.1389 19.2388 36.6196V40.7611H40.7728V19.2271H36.6313C36.1426 19.2271 35.7346 19.0626 35.4073 18.7336C35.08 18.4046 34.9163 17.9984 34.9163 17.5151C34.9163 17.0317 35.08 16.6286 35.4073 16.3056C35.7346 15.9822 36.1426 15.8206 36.6313 15.8206H40.7728C41.7092 15.8206 42.511 16.1542 43.1783 16.8216C43.8456 17.4889 44.1793 18.2907 44.1793 19.2271V40.7611C44.1793 41.7091 43.8456 42.5159 43.1783 43.1816C42.511 43.8469 41.7092 44.1796 40.7728 44.1796H19.2388Z" />
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
                <Link
                  to="/services"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                >
                  Learn More <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Lifts Service */}
            <div className="bg-white border border-neutral-950/15 p-6">
              <div className="flex flex-row gap-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F52220e3dedeb40088fb6ba6cc9160867%2Fe97ae88cdcc24a2c9716dcb1f15fae9a"
                  alt="Lash lift service"
                  className="aspect-[0.67] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                />
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 text-neutral-950">
                      <svg viewBox="0 0 48 48" fill="currentColor">
                        <path d="M19.2388 44.1796C18.2908 44.1796 17.484 43.8469 16.8183 43.1816C16.153 42.5159 15.8203 41.7091 15.8203 40.7611V36.6196C15.8203 36.1389 15.9848 35.7329 16.3138 35.4016C16.6431 35.0702 17.049 34.9046 17.5313 34.9046C18.014 34.9046 18.4193 35.0702 18.7473 35.4016C19.075 35.7329 19.2388 36.1389 19.2388 36.6196V40.7611H40.7728V19.2271H36.6313C36.1426 19.2271 35.7346 19.0626 35.4073 18.7336C35.08 18.4046 34.9163 17.9984 34.9163 17.5151C34.9163 17.0317 35.08 16.6286 35.4073 16.3056C35.7346 15.9822 36.1426 15.8206 36.6313 15.8206H40.7728C41.7092 15.8206 42.511 16.1542 43.1783 16.8216C43.8456 17.4889 44.1793 18.2907 44.1793 19.2271V40.7611C44.1793 41.7091 43.8456 42.5159 43.1783 43.1816C42.511 43.8469 41.7092 44.1796 40.7728 44.1796H19.2388Z" />
                      </svg>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="mb-2">
                        <span className="font-heebo font-semibold text-base text-neutral-950">
                          Lifts
                        </span>
                      </div>
                      <h3 className="font-noto-serif text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px] mt-2">
                        Lifts for Effortless Elegance
                      </h3>
                      <p className="font-heebo text-base text-neutral-950 leading-[150%] mt-2">
                        Lift and enhance your lashes for a stunning look.
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors mt-6"
                  >
                    Learn More <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="gradient-promo px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dec3fc3353e7d0a389dfd55a906f2ba1d243eb7?width=1200"
                alt="Beauty experience"
                className="w-full h-64 md:h-80 lg:h-[640px] object-cover rounded-lg lg:rounded-none"
              />
            </div>
            <div className="flex-1 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="mb-4">
                    <span className="font-heebo font-semibold text-base text-neutral-950">
                      Elegance
                    </span>
                  </div>
                  <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] text-center lg:text-left">
                    Experience Beauty Like Never Before
                  </h2>
                  <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%] text-center lg:text-left">
                    At our salon, we combine expertise with a passion for
                    beauty. Our dedicated team ensures every visit leaves you
                    feeling confident and radiant.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <div className="w-12 h-12 text-neutral-950 mx-auto md:mx-0">
                      <svg viewBox="0 0 48 49" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M41.46 14.74L41.18 14.24C40.8188 13.6354 40.3094 13.1329 39.7 12.78L26.28 5.04C25.6724 4.6875 24.9826 4.50124 24.28 4.5H23.7C22.9974 4.50124 22.3076 4.6875 21.7 5.04L8.28 12.8C7.67394 13.1505 7.17052 13.6539 6.82 14.26L6.54 14.76C6.1875 15.3677 6.00124 16.0575 6 16.76V32.26C6.00124 32.9626 6.1875 33.6524 6.54 34.26L6.82 34.76C7.17958 35.359 7.68098 35.8604 8.28 36.22L21.72 43.96C22.3246 44.3198 23.0164 44.5066 23.72 44.5H24.28C24.9826 44.4988 25.6724 44.3126 26.28 43.96L39.7 36.2C40.312 35.8574 40.8174 35.352 41.16 34.74L41.46 34.24C41.8082 33.6306 41.9942 32.942 42 32.24V16.74C41.9988 16.0375 41.8126 15.3477 41.46 14.74ZM23.7 8.5H24.28L36 15.26L24 22.18L12 15.26L23.7 8.5ZM26 39.5L37.7 32.74L38 32.24V18.72L26 25.66V39.5Z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px]">
                      Expert Techniques
                    </h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      We use the latest methods for stunning, long-lasting
                      results tailored to your unique style.
                    </p>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <div className="w-12 h-12 text-neutral-950 mx-auto md:mx-0">
                      <svg viewBox="0 0 48 49" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M41.46 14.74L41.18 14.24C40.8188 13.6354 40.3094 13.1329 39.7 12.78L26.28 5.04C25.6724 4.6875 24.9826 4.50124 24.28 4.5H23.7C22.9974 4.50124 22.3076 4.6875 21.7 5.04L8.28 12.8C7.67394 13.1505 7.17052 13.6539 6.82 14.26L6.54 14.76C6.1875 15.3677 6.00124 16.0575 6 16.76V32.26C6.00124 32.9626 6.1875 33.6524 6.54 34.26L6.82 34.76C7.17958 35.359 7.68098 35.8604 8.28 36.22L21.72 43.96C22.3246 44.3198 23.0164 44.5066 23.72 44.5H24.28C24.9826 44.4988 25.6724 44.3126 26.28 43.96L39.7 36.2C40.312 35.8574 40.8174 35.352 41.16 34.74L41.46 34.24C41.8082 33.6306 41.9942 32.942 42 32.24V16.74C41.9988 16.0375 41.8126 15.3477 41.46 14.74ZM23.7 8.5H24.28L36 15.26L24 22.18L12 15.26L23.7 8.5ZM26 39.5L37.7 32.74L38 32.24V18.72L26 25.66V39.5Z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-noto-serif text-xl leading-[140%] text-neutral-950 tracking-[-0.2px]">
                      Luxurious Experience
                    </h3>
                    <p className="font-heebo text-base text-neutral-950 leading-[150%]">
                      Indulge in a serene environment designed for your ultimate
                      relaxation and beauty enhancement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/about"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  Discover
                </Link>
                <Link
                  to="/booking"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                >
                  Book <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gradient-gallery">
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px] mb-6">
              Transformation Gallery
            </h2>
            <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
              See stunning results from our happy clients!
            </p>
          </div>
        </div>

        <div className="relative h-64 md:h-96 lg:h-[900px] overflow-hidden">
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
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 fill-neutral-950 text-neutral-950"
                />
              ))}
            </div>

            <blockquote className="font-noto-serif text-lg md:text-xl lg:text-2xl leading-[140%] text-neutral-950 tracking-[-0.24px] px-4">
              "The service was exceptional! My lashes have never looked better,
              and I feel so confident!"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar"
                  alt="Emily Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-heebo font-semibold text-sm md:text-base text-neutral-950">
                  Emily Johnson
                </div>
                <div className="font-heebo text-sm md:text-base text-neutral-950">
                  Beauty Blogger
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 md:h-15 bg-neutral-950/15"></div>
              <div className="w-24 md:w-30 h-8 md:h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-pink-light px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="w-20 h-20 text-neutral-950">
                <svg viewBox="0 0 80 81" fill="currentColor">
                  <path d="M56.7575 74.7201C56.0408 74.7201 55.4239 74.4615 54.9067 73.9443C54.3894 73.4271 54.1308 72.8157 54.1308 72.1101C54.1308 71.4051 54.3894 70.7907 54.9067 70.2668C55.4239 69.7429 56.0417 69.4809 56.76 69.4809H68.6142V60.9334H56.76C56.0417 60.9334 55.4239 60.6748 54.9067 60.1576C54.3894 59.6404 54.1308 59.0259 54.1308 58.3143C54.1308 57.6026 54.3894 56.9879 54.9067 56.4701C55.4239 55.9529 56.0417 55.6943 56.76 55.6943H68.6142V47.1076H56.76C56.0417 47.1076 55.4239 46.851 54.9067 46.3376C54.3894 45.8237 54.1308 45.2137 54.1308 44.5076C54.1308 43.8015 54.3894 43.1884 54.9067 42.6684C55.4239 42.1484 56.0417 41.8885 56.76 41.8885H68.6142V33.3018H56.76C56.0417 33.3018 55.4239 33.0432 54.9067 32.526C54.3894 32.0082 54.1308 31.3968 54.1308 30.6918C54.1308 29.9923 54.3894 29.3826 54.9067 28.8626C55.4239 28.3426 56.0417 28.0826 56.76 28.0826H68.6142V19.5151H56.76C56.0417 19.5151 55.4239 19.2565 54.9067 18.7393C54.3894 18.2221 54.1308 17.6076 54.1308 16.896C54.1308 16.1898 54.3894 15.5765 54.9067 15.0559C55.4239 14.5359 56.0408 14.276 56.7575 14.276H70.3642C72.2725 14.276 73.8764 14.9243 75.1758 16.2209C76.4753 17.5171 77.125 19.129 77.125 21.0568V67.9593C77.125 69.8815 76.4753 71.4887 75.1758 72.781C73.8764 74.0737 72.2725 74.7201 70.3642 74.7201H56.7575Z" />
                </svg>
              </div>
              <div className="space-y-6">
                <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                  Discover Our Passion for Beauty and Excellence
                </h2>
                <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
                  At our salon, we believe in enhancing natural beauty through
                  expert techniques and personalized care. Our dedicated team is
                  committed to providing a luxurious experience that leaves you
                  feeling confident and radiant.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 font-heebo text-base text-neutral-950 hover:text-pink-500 transition-colors"
                >
                  Meet Us <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/21cfcdec06b31caa71408d157bb3955858599f18?width=1200"
                alt="Our salon team"
                className="w-full h-64 md:h-80 lg:h-[640px] object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-200 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 text-center lg:text-left">
            <div className="flex-1">
              <h2 className="font-noto-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[120%] text-neutral-950 tracking-[-0.48px]">
                Your Beauty Transformation Awaits
              </h2>
            </div>
            <div className="flex-1 space-y-6 md:space-y-8">
              <p className="font-heebo text-base md:text-lg text-neutral-950 leading-[150%]">
                Indulge in our luxurious lash and brow services designed to
                enhance your natural beauty. Book your appointment today and
                experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/booking"
                  className="gradient-primary text-white px-6 py-2.5 font-heebo text-base border border-pink-500 hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent text-neutral-950 px-6 py-2.5 font-heebo text-base border border-neutral-950/15 hover:bg-white/50 transition-colors"
                >
                  Learn More
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