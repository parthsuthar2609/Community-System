export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Our Team
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Meet the talented individuals who make our community thrive. Our team is composed of passionate
            developers, designers, and innovators dedicated to creating exceptional digital experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Together, we work collaboratively to push the boundaries of technology and deliver solutions that
            make a real impact.
          </p>
        </div>
      </div>
    </div>
  );
}
