import { motion } from 'framer-motion';

export function Programs() {
  const programs = [
    {
      title: "Become an African Philanthropist",
      description: "Gain tax benefits while making a lasting difference. Regrant funds, set up an endowment or family foundation, and join a growing movement of African philanthropy.",
      buttonText: "Learn More",
      icon: "🌍"
    },
    {
      title: "Project Sponsorship",
      description: "Co-design and sponsor high-impact projects in any African country. Become the lead sponsor while we bring in co-sponsors to amplify your impact.",
      buttonText: "Join Us",
      icon: "🤝"
    },
    {
      title: "Crowdfunding, Education & Training",
      description: "Launch campaigns with our AI-powered tools and get hands-on education and training to strengthen your fundraising and connect with global donors.",
      buttonText: "Learn More",
      icon: "📚"
    },
    {
      title: "Fiscal Sponsorship",
      description: "Access U.S.-based donations, grants, and compliance support, giving your organization the tools to grow and scale.",
      buttonText: "Sign Up",
      icon: "💼"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Programs
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our work sits at the intersection of philanthropy, technology, and innovation—empowering African communities through funding, capacity building, and storytelling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              <a
                href="#learn-more"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                {program.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
