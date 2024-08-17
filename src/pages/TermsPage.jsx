import { useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaShieldAlt, FaUserShield, FaUserLock } from "react-icons/fa";

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
            These Terms & Conditions govern your use of our application and
            services. Please read them carefully to understand your rights and
            obligations.
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
              By accessing and using our application, you agree to comply with
              these Terms & Conditions. Our services are provided as-is, and we
              may update these terms periodically. Your continued use of the app
              constitutes acceptance of any changes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaShieldAlt className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Privacy and Security
              </h4>
            </div>
            <p className="text-gray-700">
              We prioritize your privacy and are committed to protecting your
              personal data. Our Privacy Policy details how we collect, use, and
              safeguard your information. We employ advanced security measures
              to prevent unauthorized access and ensure data integrity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserShield className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                User Responsibilities
              </h4>
            </div>
            <p className="text-gray-700">
              As a user, you are responsible for maintaining the confidentiality
              of your account and password. You agree not to engage in any
              activity that disrupts or interferes with our services. Report any
              misuse of your account immediately to help us maintain a safe
              environment for everyone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <FaUserLock className="text-orange-500 text-3xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Account Security
              </h4>
            </div>
            <p className="text-gray-700">
              Safeguard your account by keeping your login credentials
              confidential and using a strong, unique password. <br /> Regularly
              review your account activity and set up notifications for
              important changes. Report any suspicious activity promptly.
              Maintain recovery options such as an alternate email or phone
              number for easy access restoration. <br /> You are accountable for
              all actions performed under your account, so stay vigilant and
              follow best security practices to protect against unauthorized
              access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
