import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Memberships() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const toggleOpen2 = () => setOpen2(!open2);
  const toggleOpen3 = () => setOpen3(!open3);
  const toggleOpen4 = () => setOpen4(!open4);
  const toggleOpen5 = () => setOpen5(!open5);
  const toggleOpen6 = () => setOpen6(!open6);
  const toggleOpen7 = () => setOpen7(!open7);

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="bg-purple-700 h-[400px] flex justify-center items-center">
        <h1 className="font-semibold text-white text-4xl sm:text-5xl md:text-6xl text-center">
          Our Memberships
        </h1>
      </div>

      {/* Card Section */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap relative bottom-[150px]">
        {/* Card-1 */}
        <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 w-full sm:w-[500px] h-auto sm:h-[400px] p-6 rounded-3xl space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-white font-bold text-xl">PF BLACK CARD®</p>
            <p className="bg-yellow-400 w-fit rounded-md font-semibold text-md px-3 py-1">
              Best Value
            </p>
          </div>

          <p className="text-white mt-4">Starting at</p>
          <p className="text-[rgb(255,230,0)] text-opacity-100 text-3xl font-bold">
            $24.99 <span className="font-light text-xl text-white">/mo*</span>
          </p>
          <p className="text-white text-sm">plus taxes & fees</p>

          <p className="text-white text-xl mt-4 font-normal">
            Access to any club, bring a guest anytime, PF+ premium digital
            workouts, and so much more!
          </p>

          <div className="flex items-center justify-between mt-8 flex-wrap">
            <p className="text-white text-xl underline cursor-pointer">
              Learn More
            </p>
            <Link
              to={"/SignUp"}
              className="text-purple-700 bg-white rounded-full h-14 w-32 font-semibold text-lg mt-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Card-2 */}
        <div className="bg-white w-full sm:w-[500px] h-auto sm:h-[400px] p-6 rounded-3xl space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-black text-lg font-bold">CLASSIC</p>
          </div>

          <p className="text-black mt-4">Starting at</p>
          <p className="text-[rgb(86,20,150)] text-opacity-100 text-3xl font-bold">
            $15 <span className="font-light text-xl text-black">/mo*</span>
          </p>
          <p className="text-black text-sm">plus taxes & fees</p>

          <p className="text-black text-xl w-full mt-4 font-normal">
            Our standard membership, with unlimited access to your home club
          </p>

          <div className="flex items-center justify-between mt-8 flex-wrap">
            <p className="text-[rgb(86,20,150)] text-xl underline cursor-pointer">
              Learn More
            </p>
            <Link
              to="/SignUp"
              className="text-white bg-[rgb(86,20,150)] rounded-full h-14 w-32 font-semibold text-lg mt-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:bg-[rgb(86,20,150)] hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-300 relative bottom-[100px] h-auto p-6">
        <h2 className="text-black text-2xl font-bold mb-4">Memberships FAQs</h2>

        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                What’s the difference between PF Black Card® and Classic
                memberships?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen}
              >
                {open ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Planet Fitness offers two membership options: PF Black Card®
                  and Classic. With a PF Black Card®, you will have access to
                  all Planet Fitness clubs worldwide, while the Classic
                  membership gives you access to your home club location.
                  Additionally, as a PF Black Card® member, you will have access
                  to several amenities that are not available to Classic members
                  such as the option to bring a guest anytime, access to the PF
                  Black Card® Spa, and other exclusive PF Black Card® perks.
                </p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                How old do I have to be to get a Planet Fitness membership?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen2}
              >
                {open2 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open2 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  You can join PF if you are 13 years or older with a
                  parent/legal guardian's permission. Members aged 13 and must
                  be accompanied by a parent or guardian when they work out.
                  Many clubs also require that members aged 14 must be
                  accompanied by a parent/guardian at all times. Members who are
                  15-17 years old (15-18 in regions where 19 is the age of
                  majority) must have a signed waiver from a parent or guardian.
                </p>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                Does Planet Fitness offer classes or personal training?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen3}
              >
                {open3 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open3 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Yes. We offer free fitness training in small group formats
                  that are first come, first serve. Fitness classes are led by
                  certified fitness trainers and are available to all Planet
                  Fitness members.
                </p>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                Can I freeze my Planet Fitness membership?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen4}
              >
                {open4 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open4 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Yes, Planet Fitness allows you to freeze your membership for a
                  certain period of time. You can request this feature by
                  contacting your local club, and there may be a fee for
                  freezing your membership.
                </p>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                Can I cancel my membership at Planet Fitness anytime?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen5}
              >
                {open5 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open5 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Yes, you can cancel your membership at Planet Fitness at any
                  time. You must visit your home club in person or follow their
                  online cancellation process to terminate your membership.
                </p>
              </div>
            </div>
          </div>

          {/* Question 6 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                Does Planet Fitness offer a student discount?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen6}
              >
                {open6 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open6 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Yes, Planet Fitness does offer discounts for students. Be sure
                  to inquire at your local club for current student promotions
                  and offers.
                </p>
              </div>
            </div>
          </div>

          {/* Question 7 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="cursor-pointer text-lg font-semibold text-purple-700">
                Does Planet Fitness have a referral program?
              </p>
              <button
                className="text-purple-700 bg-transparent border-2 border-purple-700 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:text-white"
                onClick={toggleOpen7}
              >
                {open7 ? "-" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open7 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-700 text-md">
                <p>
                  Yes, Planet Fitness offers a referral program where existing
                  members can refer friends to join, often receiving discounts
                  or rewards in return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Memberships;
