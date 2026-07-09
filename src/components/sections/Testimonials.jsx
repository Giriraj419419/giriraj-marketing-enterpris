import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../AnimatedText'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/effect-cards'

const Testimonials = () => {
  const reviews = [
    {
      quote: "Giriraj Marketing didn't just migrate us to the cloud; they fundamentally transformed how our engineering team operates. Absolute world-class infrastructure.",
      author: "Sarah Jenkins",
      role: "CTO, Global Logistics Hub",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=47"
    },
    {
      quote: "The level of engineering precision and security implemented in our fintech platform was unparalleled. They are true architects of the digital age.",
      author: "Michael Chen",
      role: "VP Engineering, Aura Fintech",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "Working with Giriraj Marketing means working with the absolute best. Their infrastructure deployment was flawless and exactly on schedule.",
      author: "David Ross",
      role: "Director of IT, Enterprise Corp",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=33"
    },
    {
      quote: "Exceptional technical prowess. Their custom software integration helped us scale our operations globally with zero downtime.",
      author: "Elena Rodriguez",
      role: "CEO, Nexa Data Systems",
      rating: 5,
      img: "https://i.pravatar.cc/150?img=44"
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-bg-secondary">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)] rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <FadeIn>
             <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">Client Feedback</span>
              </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
              Words from our <br/><span className="text-gradient-accent">Partners.</span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="max-w-2xl mx-auto relative">
          
          <Swiper
            modules={[Autoplay, EffectCards]}
            effect="cards"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="z-10 w-full"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="w-full">
                
                {/* Premium Glassmorphism Card */}
                <div className="bg-card/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-14 text-center shadow-2xl overflow-hidden relative group">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="text-accent fill-accent w-5 h-5" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-12 italic tracking-wide">
                    "{review.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                       <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/50 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                         <img src={review.img} alt={review.author} className="w-full h-full object-cover" />
                       </div>
                       {/* Floating Quote Icon */}
                       <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-card text-white shadow-lg">
                          <span className="font-heading font-bold text-lg leading-none translate-y-1">"</span>
                       </div>
                    </div>
                    
                    <h4 className="text-lg font-heading font-extrabold text-white tracking-tight">{review.author}</h4>
                    <p className="text-text-secondary text-[12px] font-bold font-heading uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </div>
    </section>
  )
}

export default Testimonials
