export default function Faq() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-elmessiri)] text-2xl font-bold mb-6 text-black">
          FAQ (Pertanyaan yang Sering Diajukan)
        </h2>
        <p className="text-black">
          Tambahkan bagian FAQ untuk menjawab pertanyaan umum terkait layanan:
        </p>
        <div className="space-y-6 mt-8">
          {[
            "Apakah sudah terpercaya?",
            "Apakah produk premium aman?",
            "Apakah ada efek samping?",
          ].map((question, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold mb-2 text-xl">
                {question}
              </h3>
              <p className="text-gray-600">
                Jawaban : Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
