import { useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaShieldAlt, FaUserLock, FaRegFileAlt } from "react-icons/fa";

export const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Privacy Policy Background"
          className="w-full h-64 object-cover filter xs:pl-4 blur-[3px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center xs:pl-5 justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-3xl xs:text-2xl">
            Privacy Policy
          </h2>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            ReaderApp Privacy Policy
          </h3>
          <p className="text-gray-600">
            Last Updated: 17th August 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <IoMdInformationCircle className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Introduction
              </h4>
            </div>
            <p className="text-gray-700">
              ReaderApp Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines the types of information we collect from users ("you" or "your") of our website and mobile application, how we use and protect that information, and your rights regarding your personal data.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaRegFileAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Information We Collect
              </h4>
            </div>
            <p className="text-gray-700">
              We collect information to provide better services to our users. The types of information we collect include:
            </p>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Personal Information: Your name, email address, phone number, postal address, and payment information.</li>
              <li>Usage Data: Information about your reading habits, preferences, and interactions with our app.</li>
              <li>Technical Data: IP address, browser type, device type, operating system, and other technical data collected automatically.</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaShieldAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                How We Use Your Information
              </h4>
            </div>
            <p className="text-gray-700">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc ml-8 text-gray-700">
              <li>To provide, operate, and maintain our services.</li>
              <li>To improve and personalize your experience.</li>
              <li>To process transactions and manage your account.</li>
              <li>To communicate with you, including updates and promotions.</li>
              <li>To analyze usage patterns and optimize our services.</li>
              <li>To protect against fraudulent or unauthorized activity.</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserLock className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Sharing Your Information
              </h4>
            </div>
            <p className="text-gray-700">
              We do not sell or trade your personal information. We may share your data with:
            </p>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Service Providers: For functions such as payment processing and customer service.</li>
              <li>Legal Requirements: In response to legal processes.</li>
              <li>Business Transfers: In case of mergers or acquisitions.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaShieldAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Data Security
              </h4>
            </div>
            <p className="text-gray-700">
              We take reasonable measures to protect your data from unauthorized access, though no method of online storage is completely secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaRegFileAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Your Rights
              </h4>
            </div>
            <p className="text-gray-700">
              You have rights to access, correct, delete your data, and more. To exercise these rights, contact us at the information below.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaRegFileAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Contact Us
              </h4>
            </div>
            <p className="text-gray-700">
              If you have any questions, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              ReaderApp Limited <br/>
              P.O. Box TNE 1282 <br/>
              Phone: +233 54 736 3882 <br/>
              Email: readerapp@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
