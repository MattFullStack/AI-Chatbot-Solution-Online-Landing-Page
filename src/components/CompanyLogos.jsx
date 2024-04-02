// Import React (necessary for defining the component and using JSX)
import React from 'react';
// Import the companyLogos array from your constants file
import { companyLogos } from "../constants";

// Define the CompanyLogos functional component
const CompanyLogos = ({ className }) => {
  // Return JSX layout for the component
  return (
    // Use the provided className for additional styling on the component's root div
    <div className={`CompanyLogos ${className}`}>

      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
  
      <ul className="flex justify-center items-center flex-wrap">
        {companyLogos.map((binance) => (
          
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={binance}
          >
            <img src={binance} width={134} height={28} alt={`Company logo ${binance}`} />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the CompanyLogos component as the default export of this module
export default CompanyLogos;
