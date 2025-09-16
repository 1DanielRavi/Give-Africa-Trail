import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

function App() {
  
  // Optimized parallax scroll effect
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.2; // Reduced intensity
          
          // Only parallax for hero background - most impactful
          const heroBg = document.querySelector('.hero-bg-image') as HTMLElement;
          if (heroBg && scrolled < window.innerHeight) {
            heroBg.style.transform = `scale(1.03) translateY(${rate}px)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use a more specific Africa-focused TopoJSON
  const africaTopoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
  
  // African countries with their ISO codes and names for precise filtering
  const africanCountryCodes = [
    'DZA', 'AGO', 'BEN', 'BWA', 'BFA', 'BDI', 'CMR', 'CPV', 'CAF', 'TCD', 'COM', 'COG', 'COD',
    'DJI', 'EGY', 'GNQ', 'ERI', 'SWZ', 'ETH', 'GAB', 'GMB', 'GHA', 'GIN', 'GNB', 'CIV', 'KEN',
    'LSO', 'LBR', 'LBY', 'MDG', 'MWI', 'MLI', 'MRT', 'MUS', 'MAR', 'MOZ', 'NAM', 'NER', 'NGA',
    'RWA', 'STP', 'SEN', 'SYC', 'SLE', 'SOM', 'ZAF', 'SSD', 'SDN', 'TZA', 'TGO', 'TUN', 'UGA',
    'ZMB', 'ZWE'
  ];
  
  const africanCountryNames = [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde',
    'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Democratic Republic of the Congo',
    'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia',
    'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Côte d\'Ivoire', 'Kenya', 'Lesotho', 'Liberia', 'Libya',
    'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia',
    'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Príncipe', 'Senegal', 'Seychelles', 'Sierra Leone',
    'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
    'Zambia', 'Zimbabwe'
  ];
  
  // Additional variations and alternative names for better matching
  const africanCountryVariations = [
    'Côte d\'Ivoire', 'Cote d\'Ivoire', 'Ivory Coast',
    'Democratic Republic of Congo', 'DRC', 'DR Congo',
    'Republic of Congo', 'Congo Republic',
    'Central African Rep', 'CAR',
    'São Tomé', 'Sao Tome',
    'Eswatini', 'Swaziland',
    'Cape Verde', 'Cabo Verde',
    'Burkina Faso', 'Burkina',
    'Guinea', 'Guinea-Conakry', 'Republic of Guinea',
    'Guinea-Bissau', 'Guinea Bissau',
    'Equatorial Guinea', 'Guinea Ecuatorial',
    'Sierra Leone', 'Sierra',
    'South Sudan', 'Southern Sudan'
  ];
  
  // Countries to explicitly exclude (non-African countries that might appear)
  const excludedCountries = [
    'UAE', 'United Arab Emirates', 'Oman', 'Yemen', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait',
    'Iraq', 'Iran', 'Israel', 'Palestine', 'Jordan', 'Lebanon', 'Syria', 'Turkey', 'Cyprus',
    'Malta', 'Spain', 'Portugal', 'France', 'Italy', 'Greece', 'Greek', 'Greek Islands', 'Sicily', 'Sardinia', 'Corsica', 'Crete', 'Canary Islands', 'Madeira', 'Balearic Islands', 'Albania', 'Montenegro',
    'Croatia', 'Bosnia', 'Serbia', 'Bulgaria', 'Romania', 'Moldova', 'Ukraine', 'Russia',
    'Georgia', 'Armenia', 'Azerbaijan', 'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Tajikistan',
    'Kyrgyzstan', 'Afghanistan', 'Pakistan', 'India', 'Bangladesh', 'Sri Lanka', 'Maldives',
    'Nepal', 'Bhutan', 'Myanmar', 'Thailand', 'Laos', 'Cambodia', 'Vietnam', 'Malaysia',
    'Singapore', 'Indonesia', 'Philippines', 'Brunei', 'East Timor', ' Papua New ',
    'Australia', 'New Zealand', 'Fiji', 'Samoa', 'Tonga', 'Vanuatu', 'Solomon Islands',
    'Canada', 'United States', 'Mexico', 'Guatemala', 'Belize', 'Honduras', 'El Salvador',
    'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Jamaica', 'Haiti', 'Dominican Republic',
    'Puerto Rico', 'Trinidad', 'Barbados', 'Guyana', 'Suriname', 'Venezuela', 'Colombia',
    'Ecuador', 'Peru', 'Bolivia', 'Chile', 'Argentina', 'Uruguay', 'Paraguay', 'Brazil'
  ];

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-background">
            <img 
              src="./HHM.png" 
              alt="Give Africa hero background" 
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-main-text">
                <div className="hero-tagline">
                  <h2>Connecting Donors to African Communities.</h2>
                  <h3>Restoring Dignity Through Giving.</h3>
                </div>
                
                <h1>
                  <span className="line">Empowering</span>
                  <span className="line">Communities</span>
                  <span className="line">Through</span>
                  <span className="line highlight">Partnership</span>
                </h1>
                <p>Join us in supporting sustainable development initiatives across Africa. Together we can make a difference in the lives of thousands.</p>
                <div className="hero-buttons">
                  <button className="btn-primary">Explore Causes →</button>
                  <button className="btn-secondary">Donate Now</button>
                </div>
              </div>
            </div>
            
            <div className="hero-right">
              {/* Desktop interactive map (hidden on mobile/tablet via CSS) */}
              <div className="map-top desktop-map" style={{ height: '650px', padding: 0, margin: 0, overflow: 'visible' }}>
                <ComposableMap 
                  projectionConfig={{ scale: 670 , center: [17, 2] }} 
                  projection="geoMercator" 
                  style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                >
                  <Geographies geography={africaTopoUrl}>
                        {({ geographies }: { geographies: any[] }) => {
                          const africanGeos = geographies.filter((g: any) => {
                            const props = (g as any).properties || {};
                            const countryCode = props.ISO_A3 || props.iso_a3 || props.ISO3 || props.iso3 || '';
                            const countryName = props.NAME || props.name || props.NAME_EN || props.NAME_0 || '';
                            
                            
                            // Try ISO code first, then fall back to name matching with variations
                            const isAfricanByCode = africanCountryCodes.includes(countryCode);
                            const isAfricanByName = africanCountryNames.some(name => 
                              countryName.toLowerCase().includes(name.toLowerCase()) ||
                              name.toLowerCase().includes(countryName.toLowerCase())
                            );
                            const isAfricanByVariation = africanCountryVariations.some(variation => 
                              countryName.toLowerCase().includes(variation.toLowerCase()) ||
                              variation.toLowerCase().includes(countryName.toLowerCase())
                            );
                            
                            // Check if country should be excluded
                            const isExcluded = excludedCountries.some(excluded => 
                              countryName.toLowerCase().includes(excluded.toLowerCase()) ||
                              excluded.toLowerCase().includes(countryName.toLowerCase())
                            );
                            
                            // Geographic fallback - if it's in Africa's bounds, include it (but not if excluded)
                            const [xMin, yMin, xMax, yMax] = (g as any).bbox || [0,0,0,0];
                            const isInAfricaBounds = xMax >= -30 && xMin <= 65 && yMax >= -45 && yMin <= 45;
                            
                            // Force include Guinea specifically
                            const isGuinea = countryCode === 'GIN' || countryName.toLowerCase().includes('guinea');
                            
                            const isAfrican = !isExcluded && (isAfricanByCode || isAfricanByName || isAfricanByVariation || isInAfricaBounds || isGuinea);
                            
                            return isAfrican;
                          });
                          
                          if (africanGeos.length === 0) {
                            return (
                              <text x="50%" y="50%" textAnchor="middle" fill="#666" fontSize="16">
                                Loading African countries...
                              </text>
                            );
                          }
                          
                          return africanGeos.map((geo: any) => (
                            <Geography
                              key={(geo as any).rsmKey}
                              geography={geo}
                                    style={{
                                      default: { 
                                        fill: 'rgba(184, 134, 11, 0.45)', 
                                        stroke: '#E5E5E5', 
                                        strokeWidth: 1.5, 
                                        outline: 'none',
                                        transition: 'all 0.3s ease-in-out'
                                      },
                                      hover: { 
                                        fill: 'rgba(70, 130, 180, 0.5)', 
                                        stroke: '#E5E5E5', 
                                        strokeWidth: 2, 
                                        outline: 'none',
                                        transition: 'all 0.3s ease-in-out'
                                      },
                                      pressed: { 
                                        fill: 'rgba(70, 130, 180, 0.6)', 
                                        stroke: '#D3D3D3', 
                                        strokeWidth: 2, 
                                        outline: 'none',
                                        transition: 'all 0.3s ease-in-out'
                                      },
                                    }}
                            />
                          ));
                        }}
                  </Geographies>
                </ComposableMap>
              </div>
            </div>
          </div>
        </div>
        
        <div id="our-team" className="about-us-section">
          <div className="about-us-container">
            <div className="about-us-content">
              <div className="about-us-right">
                <div className="ceo-image-container">
                  <img 
                    src="/ceo.webp" 
                    alt="CEO of Give Africa Corporation" 
                    className="ceo-image"
                  />
                  <div className="ceo-title">
                    <h3>CEO/Executive Director</h3>
                  </div>
                </div>
              </div>
              <div className="about-us-left">
                <h2 className="about-us-label">ABOUT US</h2>
                <h1 className="about-us-heading">What We Do</h1>
                <div className="about-us-text">
                  <p>At Give to Africa, we harness the power of technology to drive meaningful change across the continent. We connect generous donors with trusted nonprofits, NGOs, and grassroots organizations in Africa, making giving more impactful, transparent, and joyful. Our platform empowers local changemakers with digital tools and AI-driven strategies to amplify their work and create lasting social impact. By bridging the gap between global generosity and local solutions.</p>
                  <p>we're building a future where communities thrive through collaboration, innovation, and compassion. Every gift made through Give to Africa fuels purpose-driven projects and strengthens the heart of African-led development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="our-mission" className="mission-section">
          <div className="mission-container">
            <div className="mission-content">
              <h2 className="mission-label">MISSION</h2>
              <h1 className="mission-heading">Our Mission: Giving That Connects Hearts and Changes Lives</h1>
              <div className="mission-text">
                <p>At Give to Africa, we're not just a nonprofit—we're a community of givers, doers, and dreamers united by one powerful belief: everyone deserves the chance to thrive.</p>
                <p>Rooted in connection, trust, and hope, our mission is simple but bold—to make giving across borders easy, transparent, and deeply impactful.</p>
                <p>Headquartered in San Diego, California, and recognized as a U.S. 501(c)(3), we exist to bridge generosity from around the world to the heart of Africa—one trusted, grassroots cause at a time.</p>
                <p>We dream of an Africa where local leaders are fully equipped to transform their communities—from classrooms in Uganda to health clinics in Nigeria, disaster relief efforts in Malawi to green innovation in Senegal. We believe that change is strongest when it's local—and supported globally.</p>
                <p>Through our seamless digital platform, we connect donors with community-led projects that are making a real difference—projects they can believe in and be proud to support.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="join-movement-section">
          <div className="join-movement-container">
            <div className="join-movement-content">
              <div className="join-movement-left">
                <div className="tree-graphic">
                  <div className="tree-trunk"></div>
                  <div className="tree-canopy">
                    <div className="handprint main"></div>
                    <div className="handprint small-1"></div>
                    <div className="handprint small-2"></div>
                    <div className="handprint small-3"></div>
                    <div className="handprint small-4"></div>
                    <div className="handprint small-5"></div>
                    <div className="handprint small-6"></div>
                    <div className="handprint small-7"></div>
                    <div className="handprint small-8"></div>
                  </div>
                </div>
              </div>
              <div className="join-movement-right">
                <h2 className="join-movement-title">Join Our Movement</h2>
                <p className="join-movement-description">
                  Stay informed on what Give Africa Corporation is doing to help prevent poverty and promote development across African communities.
                </p>
                <form className="join-movement-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      placeholder="Enter your email address"
                    />
                  </div>
                  <button type="submit" className="signup-button">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
