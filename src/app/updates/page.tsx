export default function Updates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Updates
        </h1>
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Latest News</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stay informed about our latest features, announcements, and community updates. We're constantly
              working to improve your experience.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Recent Changes</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Check out what's new in our platform, including bug fixes, performance improvements, and new
              functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
