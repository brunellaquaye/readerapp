import {  useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaShieldAlt, FaUserShield, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Terms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Terms & Conditions Background"
          className="w-full h-64 object-cover filter xs:pl-4 blur-[2px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center xs:pl-5 justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-3xl xs:text-2xl">
            Terms & Conditions
          </h2>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to ReaderApp!
          </h3>
          <p className="text-gray-600">
            These Terms & Conditions govern your use of our website and related services.
            Please read them carefully to understand your rights and obligations.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <IoMdInformationCircle className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                General Information
              </h4>
            </div>
            <p className="text-gray-700">
              By accessing ReaderApp, you agree to use our site for lawful purposes only. You must not:
              <ul className="list-disc ml-6 mt-2">
                <li>Engage in activities that harm our site or other users.</li>
                <li>Copy, distribute, or exploit any content from the site without our permission.</li>
                <li>Attempt to breach our security measures or access restricted areas.</li>
              </ul>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaShieldAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Intellectual Property
              </h4>
            </div>
            <p className="text-gray-700">
              All content on ReaderApp, including text, images, and graphics, is owned by us or our licensors. 
              Unauthorized use of any content is prohibited. You may not reproduce, republish, or distribute 
              any materials from the site without prior written consent.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <IoMdInformationCircle className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Links to Other Websites
              </h4>
            </div>
            <p className="text-gray-700">
              ReaderApp may contain links to third-party sites, such as the Play Store. We do not endorse 
              or take responsibility for the content or practices of these external websites. Use them at your own risk.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserShield className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Liability Disclaimer
              </h4>
            </div>
            <p className="text-gray-700">
              We strive to provide accurate and up-to-date information, but we do not guarantee the completeness 
              or reliability of our content. ReaderApp is provided "as-is," and we disclaim any liability for errors, 
              omissions, or interruptions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserLock className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Privacy and Data Protection
              </h4>
            </div>
            <p className="text-gray-700">
              We prioritize your privacy. Please refer to our <Link to="/Policy" className="text-orange-500 ">Privacy Policy</Link> for details 
              on how we collect, use, and protect your personal data. Your use of ReaderApp signifies your consent to our privacy practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <IoMdInformationCircle className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Changes to Terms
              </h4>
            </div>
            <p className="text-gray-700">
              We reserve the right to update these Terms & Conditions at any time. Any changes will be posted here, 
              so please check back periodically. Your continued use of ReaderApp after any modifications indicates 
              your acceptance of the updated terms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserShield className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h4>
            </div>
            <p className="text-gray-700">
              If you have any questions or concerns about these Terms & Conditions, please feel free to 
              contact us at <Link to="/contactPage" className="text-orange-500 ">Contact Us</Link>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <IoMdInformationCircle className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Effective Date
              </h4>
            </div>
            <p className="text-gray-700">
              These Terms & Conditions are effective as of 17th August 2024.
            </p>
          </div>
        </div>

        {/* Agree to Terms and Conditions 
        <div className="mt-12 flex items-center justify-center space-x-4">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="agree" className="text-gray-700 text-lg">
            I agree to the terms and conditions above
          </label>
        </div>

        <div className="text-center mt-8">
          <button
            disabled={!isChecked}
            className={`py-2 px-6 rounded-lg shadow-md focus:outline-none ${
              isChecked
                ? "bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>*/}
      </div>
    </div>
  );
};
