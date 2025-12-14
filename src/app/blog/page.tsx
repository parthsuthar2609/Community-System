export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Latest Articles</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Stay updated with our latest blog posts covering technology trends, development tips, industry
              insights, and more.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our blog features articles written by our team of experts, sharing knowledge and experiences
              from the world of digital innovation.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Featured Posts</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span>The Future of Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span>Best Practices for Cloud Migration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span>Building Scalable Applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
