export default function Company() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Our Company
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Founded with a vision to transform the digital landscape, our company has grown into a trusted
            partner for businesses and individuals seeking innovative technology solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We pride ourselves on our commitment to quality, customer satisfaction, and staying at the
            forefront of technological advancement.
          </p>
        </div>
      </div>
    </div>
  );
}
