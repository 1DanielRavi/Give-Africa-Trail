export function Mission() {
  return (
    <section id="mission" className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="card p-8">
          <h2 className="h2">Bridging Continents, Connecting Hearts</h2>
          <p className="p mt-4">
            We connect generous donors to trusted, locally led nonprofits across Africa. Through smart technology and strong partnerships, we fuel solutions that help communities thrive from within.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="hover-smooth hover:translate-x-1">• Education & Skills</li>
            <li className="hover-smooth hover:translate-x-1">• Women’s Empowerment</li>
            <li className="hover-smooth hover:translate-x-1">• Clean Water & Health</li>
          </ul>
        </div>
        <div className="card p-8">
          <h3 className="h2">How We Work</h3>
          <p className="p mt-4">
            Our program pillars—Become an African Philanthropist, Project Sponsorship, Crowdfunding & Training, and Fiscal Sponsorship—unlock access to international funding and amplify grassroots impact.
          </p>
          <a href="#causes" className="inline-block mt-6 hover-smooth px-5 py-3 rounded-lg bg-gold text-black font-semibold">See Causes</a>
        </div>
      </div>
    </section>
  );
}


