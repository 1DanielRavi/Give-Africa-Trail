const cards = [
  { title: 'Education & Skills', desc: 'Building schools, training teachers, and providing resources to unlock potential.' },
  { title: 'Women & Children', desc: 'Supporting women-led initiatives and youth programs to break cycles of poverty.' },
  { title: 'Clean Water & Health', desc: 'Installing wells, water systems, and clinics to ensure dignity and health.' },
  { title: 'Climate & Environment', desc: 'Protecting ecosystems and building resilience against climate change.' },
];

export function Causes() {
  return (
    <section id="causes" className="container mx-auto px-6">
      <h2 className="h2 mb-8">Explore Causes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <a key={c.title} href="#" className="card p-6 hover-smooth group">
            <div className="h-28 rounded-xl bg-gradient-to-br from-brand to-gold opacity-80 group-hover:opacity-100 hover-smooth" />
            <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
            <p className="p mt-2">{c.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


