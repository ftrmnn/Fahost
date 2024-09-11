import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 font-poppins">
      <div className="container mx-auto px-5">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="order-1 md:order-1">
            <img src="/fahost.png" alt="FAHost" className="h-16" />
            <p className="text-sm text-gray-600">
              We are here to help millions of people harness the power of the internet to build online success.
              We are constantly improving our server technology, professional support, and web hosting services.
            </p>
            <div className="flex h-10 mt-4">
                <img src="/pay1.png" alt="" />
                <img src="/pay2.png" alt="" />
                <img src="/pay3.png" alt="" />
                <img src="/pay4.png" alt="" />
                <img src="/pay5.png" alt="" />
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-8 order-2 md:order-2">
            
            <div>
              <h4 className="font-semibold mb-2">HOSTING Web</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Hosting VPS Hosting</li>
                <li>Cloud Hosting</li>
                <li>WordPress Hosting</li>
                <li>Managed Commerce</li>
                <li>Hosting Email Hosting</li>
                <li>Google Workspace</li>
                <li>Hosting Cheap</li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-semibold mb-2">Domain</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Cheap Domains</li>
                <li>Domain Transfer</li>
                <li>Free Domains</li>
                <li>Domain Prices</li>
                <li>WHOIS Free SSL</li>
                <li>Domain .COM</li>
                <li>Domain .ID</li>
                <li>Website Builder Tool</li>
              </ul>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-8 order-3 md:order-3">
            
            <div>
              <h4 className="font-semibold mb-2">Information</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Hosting Transfer</li>
                <li>Service Status</li>
                <li>Payment Terms</li>
                <li>Customer Reviews</li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-semibold mb-2">Help</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Blog</li>
                <li>User Guide</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="items-center justify-center text-center pt-10 text-slate-500">
            <h1>@2024 Fahost_fathurahman. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
