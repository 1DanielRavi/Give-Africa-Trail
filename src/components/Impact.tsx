import { motion } from 'framer-motion';

export function Impact() {
  const impactStats = [
    { number: "54", label: "Countries", description: "Connecting continents through purpose" },
    { number: "1000+", label: "Projects", description: "Real change in local communities" },
    { number: "$2M+", label: "Raised", description: "Empowering local organizations" }
  ];

  const focusAreas = [
    {
      title: "Education & Skills",
      description: "Building schools, training teachers, and providing educational resources to unlock potential.",
      icon: "🎓"
    },
    {
      title: "Women's Empowerment",
      description: "Supporting women-led initiatives, microfinance, and leadership development programs.",
      icon: "👩‍💼"
    },
    {
      title: "Clean Water & Health",
      description: "Installing wells, water systems, and health clinics to ensure basic human dignity.",
      icon: "💧"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Bridging Continents,</span>
            <span className="block text-green-600">Connecting Hearts</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We connect generous donors to trusted, locally led nonprofits across Africa—making giving easier, more transparent, and impactful. Through smart technology and strong partnerships, we fuel solutions that help communities thrive from within.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a 
              href="#mission" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Learn About Our Mission
            </a>
            <a 
              href="#stories" 
              className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 transition-colors duration-200"
            >
              View Impact Stories
            </a>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="text-center mb-12">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Committed to Transforming Communities
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Africa is home to some of the world's most dynamic communities and resilient leaders. Yet, many grassroots organizations lack access to international funding. At Give Africa, we believe local organizations know their communities best. From education to healthcare, environment to entrepreneurship, we amplify their solutions and connect them with people who care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
              <a
                href="#learn-more"
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
