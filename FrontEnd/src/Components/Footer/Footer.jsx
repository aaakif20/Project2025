import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-purple-700 py-10">
        {/* Button */}
        <div className="flex justify-center mb-10">
          <a
            href="https://play.google.com/store/apps/details?id=com.planetfitness&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-xl w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
              Download the PF App
            </button>
          </a>
        </div>

        {/* Divider */}
        <hr className="w-full max-w-[1150px] mx-auto mt-12 bg-gray-400 h-0.5" />

        {/* Footer Links */}
        <div className="text-center mt-8 text-white">
          <div className="flex justify-between items-start space-x-10 flex-wrap">
            {/* Info Section */}
            <div className="w-full sm:w-[200px] md:w-[250px]">
              <h2 className="font-bold text-2xl mb-6">Info</h2>
              <ul className="space-y-4 text-lg">
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Newsroom
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Careers
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  FAQs
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Directory
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Blog
                </li>
              </ul>
            </div>

            {/* Partners Section */}
            <div className="w-full sm:w-[200px] md:w-[250px]">
              <h2 className="font-bold text-2xl mb-6">Partners</h2>
              <ul className="space-y-4 text-lg">
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Franchising
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Investor Relations
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  PF Purpose
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  PF Media Network
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="w-full sm:w-[200px] md:w-[250px]">
              <h2 className="font-bold text-2xl mb-6">Legal</h2>
              <ul className="space-y-4 text-lg">
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Privacy Policy
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Terms and Conditions of Use
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Do Not Sell or Share My Personal Information
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Your State and EU Privacy Rights
                </li>
                <li className="underline cursor-pointer hover:text-yellow-400 transition-all">
                  Accessibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
