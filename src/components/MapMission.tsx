import { motion } from 'framer-motion';

export function MapMission() {
  return (
    <section id="map-mission" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block">Bridging Continents,</span>
                <span className="block text-brand">Connecting Hearts</span>
              </h2>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              We connect generous donors to trusted, locally led nonprofits across Africa—making giving easier, more transparent, and impactful. Through smart technology and strong partnerships, we fuel solutions that help communities thrive from within.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a 
                href="#causes" 
                className="hover-smooth px-8 py-4 rounded-xl bg-brand text-white font-semibold shadow-soft hover:bg-brand-dark transition-all duration-300 hover:scale-105"
              >
                Learn About Our Mission
              </a>
              <a 
                href="#impact" 
                className="hover-smooth px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Impact Stories
              </a>
            </motion.div>
          </div>

          {/* Map Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <picture>
                <source srcSet="/africa_map.avif" type="image/avif" />
                <img
                  src="/africa_map.jpeg"
                  alt="Map of Africa showing our impact regions"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
              
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-brand/20 rounded-full blur-xl" />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gold/20 rounded-full blur-lg" />
              
              {/* Impact indicators overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/90">
                  <div className="text-6xl font-bold text-brand mb-2">54</div>
                  <div className="text-sm uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-slate-300">Projects Funded</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-2xl font-bold text-brand">$2M+</div>
              <div className="text-sm text-slate-300">Raised</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


