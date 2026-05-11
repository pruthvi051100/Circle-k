/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Menu, 
  X, 
  Coffee, 
  Fuel, 
  Car, 
  Gift, 
  ShoppingCart, 
  ArrowRight,
  Search,
  ChevronRight,
  Download,
  Star
} from 'lucide-react';

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stores', icon: MapPin },
    { name: 'Deals', icon: Gift },
    { name: 'Food & Drinks', icon: Coffee },
    { name: 'Easy Pay', icon: Fuel },
    { name: 'Careers', icon: ArrowRight },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white border-b border-ck-border py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-ck-red rounded-full flex items-center justify-center text-white font-black text-xl italic transition-transform">
            K
          </div>
          <span className="text-2xl font-black tracking-tighter text-ck-dark">CIRCLE K</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href="#" 
              className="text-sm font-semibold uppercase tracking-wider text-ck-dark hover:text-ck-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-minimal-secondary !py-2 !px-6 !text-sm">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-ck-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-ck-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl lg:hidden p-6 border-t border-gray-100"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href="#" className="flex items-center gap-3 text-lg font-bold text-ck-dark hover:text-ck-red">
                  <link.icon className="w-5 h-5 text-ck-red" />
                  {link.name}
                </a>
              ))}
              <hr />
              <button className="w-full bg-ck-red text-white py-4 rounded-xl font-bold uppercase">
                Find a Store
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center py-20"
          >
            <div className="text-ck-red font-bold text-sm uppercase tracking-[2px] mb-4">
              Your Local Stop
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-ck-dark leading-[0.95] tracking-[-2px] uppercase mb-6">
              FUEL UP FOR<br />
              <span className="text-ck-red">THE ROAD AHEAD.</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
              Save 10¢ per gallon every day and enjoy premium coffee made just for your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-minimal-primary">
                Find a Store
              </button>
              <button className="btn-minimal-secondary">
                Join Inner Circle
              </button>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center relative bg-ck-bg overflow-hidden group">
            <div className="w-[80%] h-[80%] bg-gradient-to-br from-gray-200 to-gray-300 rounded-[24px] flex flex-col items-center justify-center relative transition-transform duration-700 group-hover:scale-105">
               <span className="text-[80px] font-black text-white/50 tracking-tighter uppercase opacity-30 select-none">CIRCLE K</span>
               
               {/* Minimal Info Card overlay */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute bottom-10 left-[-20px] bg-ck-dark text-white p-6 rounded-[16px] w-[240px] shadow-2xl border border-white/10"
               >
                 <div className="text-[10px] uppercase opacity-60 mb-2 font-bold tracking-widest text-white/70">Current Savings</div>
                 <div className="text-3xl font-bold mb-3">$12.40</div>
                 <div className="h-1 bg-ck-red w-[60%] mb-4 rounded-full" />
                 <div className="text-[10px] opacity-60 font-bold uppercase tracking-widest text-white/70">4 Liters to next free Coffee</div>
               </motion.div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="w-[800px] h-[800px] border-[80px] border-ck-red rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoreLocator = () => {
  return (
    <section className="services-bar w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 w-full h-full border-x border-ck-border bg-white">
        <div className="p-10 border-b md:border-b-0 md:border-r border-ck-border flex flex-col justify-center gap-1 group cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-[11px] uppercase font-bold text-gray-400 tracking-widest">Fuel Stations</div>
          <div className="text-lg font-bold text-ck-dark group-hover:text-ck-red transition-colors">High-Quality Fuel</div>
        </div>
        <div className="p-10 border-b md:border-b-0 md:border-r border-ck-border flex flex-col justify-center gap-1 group cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-[11px] uppercase font-bold text-gray-400 tracking-widest">Fresh Food</div>
          <div className="text-lg font-bold text-ck-dark group-hover:text-ck-red transition-colors">Roller Grill & Deli</div>
        </div>
        <div className="p-10 border-b md:border-b-0 md:border-r border-ck-border flex flex-col justify-center gap-1 group cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-[11px] uppercase font-bold text-gray-400 tracking-widest">Convenience</div>
          <div className="text-lg font-bold text-ck-dark group-hover:text-ck-red transition-colors">Car Wash & ATM</div>
        </div>
        <div className="p-10 bg-ck-yellow flex flex-col justify-center gap-1 group cursor-pointer hover:brightness-95 transition-all">
          <div className="text-[11px] uppercase font-bold text-ck-dark/60 tracking-widest">Promo Code</div>
          <div className="text-lg font-bold text-ck-dark uppercase tracking-tight">SAVEGAS24</div>
        </div>
      </div>
    </section>
  );
};

const FeaturedDeals = () => {
  const deals = [
    {
      title: "Any Size Polar Pop",
      price: "$0.89",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop",
      tag: "Everyday Value",
      color: "text-blue-600 border-blue-600"
    },
    {
      title: "Fresh Baked Cookies",
      price: "2 for $3",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2064&auto=format&fit=crop",
      tag: "Freshly Made",
      color: "text-amber-600 border-amber-600"
    },
    {
      title: "Premium Roast Coffee",
      price: "$1.00",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2187&auto=format&fit=crop",
      tag: "Morning Must",
      color: "text-ck-dark border-ck-dark"
    },
    {
      title: "Fuel Savings",
      price: "Save 10¢/Gal",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070&auto=format&fit=crop",
      tag: "Member Exclusive",
      color: "text-ck-red border-ck-red"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="text-ck-red font-bold text-xs uppercase tracking-[2px] mb-2">Featured Offers</div>
            <h2 className="text-5xl font-extrabold tracking-[-1.5px] uppercase mb-4 leading-[0.95]">
              SIZZLING <br />
              <span className="text-ck-red">SUMMER DEALS</span>
            </h2>
          </div>
          <button className="text-ck-dark border-b-2 border-ck-dark font-bold uppercase tracking-widest text-xs pb-1 hover:text-ck-red hover:border-ck-red transition-all">
            View All Current Promotions
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal, idx) => (
            <motion.div 
              key={deal.title}
              whileHover={{ y: -5 }}
              className="group bg-white border border-ck-border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={deal.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={deal.title}
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className={`inline-block px-2 py-0.5 border text-[9px] font-black uppercase tracking-widest ${deal.color} rounded`}>
                    {deal.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ck-dark uppercase tracking-tight mb-2 leading-tight">{deal.title}</h3>
                <p className="text-2xl font-extrabold text-ck-red mt-auto">{deal.price}</p>
                <div className="mt-6 pt-6 border-t border-ck-border opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="w-full text-ck-dark font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                     Learn More <ArrowRight className="w-3 h-3" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LoyaltyProgram = () => {
  return (
    <section className="py-24 bg-ck-red overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[100px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block bg-white text-ck-red px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Circle K Inner Circle
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
              SAVE MORE. <br />
              <span className="text-ck-orange">GO FURTHER.</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
              Join Inner Circle for automatic fuel discounts, free snacks, and exclusive surprises. Every visit counts towards your next reward.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black">10Â¢</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Off Every Gallon</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black">FREE</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Sip After 5 Drinks</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-ck-orange text-ck-dark px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-all flex items-center gap-3">
                Download the App <Download className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            {/* Phone Mockup */}
            <div className="relative w-72 h-[150px] sm:h-[600px] bg-ck-dark rounded-[100px] border-[8px] border-ck-dark shadow-2xl p-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-ck-dark rounded-b-3xl" />
              <div className="h-full w-full bg-white rounded-[60px] overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-ck-red rounded-full flex items-center justify-center text-white font-black italic">K</div>
                  <span className="font-black text-ck-dark tracking-tighter text-lg">REWARDS</span>
                </div>
                
                <div className="bg-gray-100 rounded-3xl p-5 mb-6">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Available Points</span>
                  <div className="text-3xl font-black text-ck-dark">1,240 <span className="text-ck-red">pts</span></div>
                </div>

                <div className="space-y-4">
                   <div className="bg-ck-orange/10 p-4 rounded-2xl border border-ck-orange/20 flex items-center gap-3">
                     <Fuel className="text-ck-orange" />
                     <div className="flex-1">
                       <p className="text-[10px] font-bold text-ck-dark uppercase">Fuel Discount</p>
                       <p className="text-sm font-black text-ck-dark">10Â¢ OFF Active</p>
                     </div>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                     <Coffee className="text-ck-dark" />
                     <div className="flex-1">
                       <p className="text-[10px] font-bold text-gray-400 uppercase">Drink Tracker</p>
                       <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-4/5 h-full bg-ck-red rounded-full" />
                       </div>
                     </div>
                   </div>
                </div>

                <div className="mt-auto bg-ck-red text-white py-4 rounded-3xl text-center font-black uppercase text-xs">
                  Scan to Earn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ck-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-ck-red rounded-full flex items-center justify-center text-white font-black text-2xl italic">
                K
              </div>
              <span className="text-3xl font-black tracking-tighter">CIRCLE K</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-8 font-medium">
              Your global neighborhood destination for convenience, quality food, and fuel.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'LI'].map((s) => (
                <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold font-mono hover:bg-white hover:text-ck-dark transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-white/50">Company</h4>
             <ul className="space-y-4 font-bold text-sm">
               <li><a href="#" className="hover:text-ck-red transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Newsroom</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Sustainability</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-white/50">Services</h4>
             <ul className="space-y-4 font-bold text-sm">
               <li><a href="#" className="hover:text-ck-red transition-colors">Easy Pay</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Inner Circle</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Car Wash</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Gift Cards</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-white/50">Support</h4>
             <ul className="space-y-4 font-bold text-sm">
               <li><a href="#" className="hover:text-ck-red transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">FAQs</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Store Locator</a></li>
               <li><a href="#" className="hover:text-ck-red transition-colors">Accessibility</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
             Â© 2026 Circle K Stores Inc. All rights reserved.
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      
      {/* Search Bar Floating CTA for Mobile */}
      <div className="md:hidden sticky top-20 z-40 px-4 mt-[-24px]">
        <div className="bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
          <Search className="text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search stores near you..." 
            className="flex-1 bg-transparent border-none focus:outline-none font-bold text-sm"
          />
          <button className="bg-ck-red text-white p-2 rounded-xl">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <main>
        <FeaturedDeals />
        <StoreLocator />
        <LoyaltyProgram />
        
        {/* Newsletter Section */}
        <section className="py-32 bg-ck-bg border-y border-ck-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="text-ck-red font-extrabold text-xs uppercase tracking-[3px] mb-6">Stay Connected</div>
            <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-[-1px] mb-8 leading-[0.95]">
              NEVER MISS A <br />
              <span className="text-ck-red">SIZZLING DEAL.</span>
            </h3>
            <p className="text-lg text-gray-500 mb-12 font-medium max-w-lg mx-auto">
              The latest savings and exclusive mobile-only coupons, delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border-2 border-ck-dark rounded-[4px] bg-white overflow-hidden shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 font-bold outline-none text-ck-dark"
              />
              <button className="bg-ck-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-ck-red transition-all sm:border-l-2 sm:border-ck-dark">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
