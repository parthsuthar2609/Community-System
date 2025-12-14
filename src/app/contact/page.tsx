export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We'd love to hear from you! Whether you have a question, need support, or want to discuss a
            potential project, our team is here to help.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Reach out to us through any of our contact channels, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-gray-300"><span className="text-purple-400 font-semibold">Email:</span> info@mywebsite.com</p>
            <p className="text-gray-300"><span className="text-purple-400 font-semibold">Phone:</span> (123) 456-7890</p>
            <p className="text-gray-300"><span className="text-purple-400 font-semibold">Address:</span> 1234 Web Street, Suite 567, City, State 89012</p>
          </div>
        </div>
      </div>
    </div>
  );
}
