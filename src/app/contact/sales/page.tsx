export default function Sales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Sales
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Interested in our services? Our sales team is ready to help you find the perfect solution for your
            business needs. We offer customized packages and flexible pricing options.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Schedule a consultation with our sales team to discuss your requirements and discover how we can
            help you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
}
