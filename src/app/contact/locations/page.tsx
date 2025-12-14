export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Our Locations
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We have offices and team members located around the world to serve you better. Find our office
            locations and contact information below.
          </p>
          <div className="mt-8 space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Headquarters</h3>
              <p className="text-gray-300">1234 Web Street, Suite 567</p>
              <p className="text-gray-300">City, State 89012</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Regional Office</h3>
              <p className="text-gray-300">5678 Tech Avenue, Floor 3</p>
              <p className="text-gray-300">Metro City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
