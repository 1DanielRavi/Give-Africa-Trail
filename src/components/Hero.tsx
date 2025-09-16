import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative py-20" style={{ background: 'var(--navy)', color: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Connecting Donors to</span>
            <span className="block" style={{ color: 'var(--primary)' }}>African Communities.</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-4" style={{ color: 'rgba(255,255,255,.8)' }}>
              Restoring Dignity Through Giving.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,.85)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join us in supporting sustainable development initiatives across Africa. 
            Together we can make a difference in the lives of thousands.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a 
              href="#programs" 
              className="font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ background: 'var(--primary)', color: '#FFFFFF' }}
            >
              Explore Programs
            </a>
            <a 
              href="#donate" 
              className="font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ background: '#FFFFFF', color: 'var(--ink)' }}
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


