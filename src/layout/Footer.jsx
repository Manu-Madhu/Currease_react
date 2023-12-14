import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="nav mx-2 md:mx-10 mt-5 flex items-center justify-between rounded-xl p-4">
        <div className="flex items-center justify-center w-full">
          <img src={require('../assets/currease logo 1.jpg')} alt="logo" className="object-container" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
           <h3>Customer Support</h3>
           <h2>+1 65695 545 65</h2>
           <h2>support@cantaricorp.com</h2>
           <div>
            
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
