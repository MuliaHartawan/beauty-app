export default function Cta() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-[#F7E3FF] to-white py-16 px-4 md:px-8 relative overflow-hidden border-[#F7E3FF] border rounded-lg">
          <img
            src="/pattern-1.svg"
            alt="img"
            className="absolute left-0 bottom-0"
          />
          <img src="/logo.svg" alt="logo" className="absolute right-6 top-5" />
          <div className="mx-auto max-w-6xl text-center flex flex-col items-center">
            <h2 className="font-[family-name:var(--font-elmessiri)] text-2xl font-semibold mb-6 text-black w-3/6">
              Jangan tunggu lebih lama, mulailah perjalanan kulit cerah Anda
              sekarang!
            </h2>
            <div className="flex gap-x-5 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 font-bold">
                Pesan Sekarang
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-purple-50 font-bold border-gray-300 border">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
