import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Etsy Order Management Demo
              </h1>
              <p className="text-lg text-gray-600">
                Work in Progress - API Integration Demo
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <div className="prose max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-700">
                  <strong>Note to Etsy API Review Team:</strong> This is a
                  demonstration project showcasing the intended integration with
                  Etsy's API endpoints. Currently using mock data for
                  development and review purposes.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                <p className="text-gray-600 text-sm italic">
                  The term 'Etsy' is a trademark of Etsy, Inc. This application
                  uses the Etsy API but is not endorsed or certified by Etsy.
                </p>
              </div>

              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                About This Demo
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • This is a personal project for managing my own Etsy shop
                  orders
                </li>
                <li>
                  • Authentication is temporarily disabled for demo purposes
                  only - proper authentication and security measures will be
                  implemented in the production version
                </li>
                <li>
                  • Currently using hardcoded mock data that matches the
                  structure of Etsy's{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    /v3/application/shops/{"{shop_id}"}/receipts
                  </code>{" "}
                  endpoint
                </li>
                <li>
                  • All data structures and field names follow Etsy's official
                  API documentation
                </li>
                <li>
                  • The interface demonstrates how I plan to display and manage
                  order information
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-cyan-400">
                Security & Privacy
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • This demo version uses mock data only - no real Etsy shop or
                  customer data is being accessed
                </li>
                <li>
                  • The production version will implement full authentication
                  and security measures
                </li>
                <li>
                  • All data handling will comply with Etsy's privacy and
                  security requirements
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-cyan-400">
                Implementation Details
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Built with Next.js, TypeScript, and Tailwind CSS</li>
                <li>• Mock data structure matches Etsy API response format</li>
                <li>
                  • Includes key fields such as receipt_id, buyer information,
                  order status, and shipping details
                </li>
                <li>
                  • Features visual indicators for orders with buyer messages
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <Link
                  href="/orders"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View All Orders
                </Link>
                <Link
                  href="/custom-orders"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View Orders with message_from_buyer
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50">
            <p className="text-sm text-gray-500 text-center">
              This is a development demo using mock data. No real Etsy shop data
              is being accessed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
