export default function Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Overview
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Welcome to our comprehensive overview page. Here you'll find a high-level summary of our platform,
            services, and community initiatives.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This page provides insights into our mission, vision, and the innovative solutions we offer to help
            you achieve your goals in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
