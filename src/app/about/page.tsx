export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We are a forward-thinking organization committed to excellence in digital innovation. Our mission
            is to empower individuals and businesses through cutting-edge technology solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With years of experience and a passion for creating meaningful digital experiences, we've built
            a community that values collaboration, innovation, and continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
}
