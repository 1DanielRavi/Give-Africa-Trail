export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Give Africa Corporation</h3>
            <p className="text-gray-300 mb-4">
              Give Africa (EIN 33-1917403) is a 501(C)(3) public charity based in California. 
              The full amount of your gift qualifies as a charitable contribution for federal tax purposes in the United States.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>info@2africa.org</p>
              <p>619-566-2004</p>
              <p>4240 Kearny Mesa Rd STE 120<br />San Diego, CA 92111<br />United States</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About or program</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#leadership" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Giving</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#donate" className="hover:text-white transition-colors">Donate Now</a></li>
              <li><a href="#monthly" className="hover:text-white transition-colors">Monthly Giving</a></li>
              <li><a href="#corporate" className="hover:text-white transition-colors">Corporate Partnerships</a></li>
              <li><a href="#fundraise" className="hover:text-white transition-colors">Fundraise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#reports" className="hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#transparency" className="hover:text-white transition-colors">Financial Transparency</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#donate" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Donate Now
              </a>
            </div>
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Give Africa Corporation. All rights reserved. | 501(c)(3) Tax-exempt organization</p>
              <div className="mt-2 space-x-4">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


