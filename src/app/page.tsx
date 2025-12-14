import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Welcome to Community
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover powerful tools, innovative solutions, and a passionate community 
            dedicated to building the next generation of digital experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/carousel"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold text-lg transition-all shadow-lg"
            >
              View Gallery
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-gray-900 rounded-full font-semibold text-lg transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Innovation</h2>
            <p className="text-gray-300">
              Cutting-edge solutions that push the boundaries of what's possible in digital technology.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Community</h2>
            <p className="text-gray-300">
              A vibrant community of developers, designers, and innovators working together.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30 hover:border-pink-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Excellence</h2>
            <p className="text-gray-300">
              Commitment to delivering the highest quality products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
