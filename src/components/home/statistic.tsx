export default function Statistic() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-2xl mb-6">
          Statistik Kepuasan
        </h2>
        <p className="text-black">
          Deskripsi singkat tentang layanan yang tersedia dengan harga dan
          manfaat utama. Sertakan tombol untuk melanjutkan booking atau
          konsultasi.
        </p>
        <div className="grid grid-cols-2 gap-8 border-purple-500 border rounded-lg p-10 mt-6">
          <div className="text-center">
            <p className="font-[family-name:var(--font-elmessiri)] text-4xl font-bold text-purple-600 mb-2">
              98%
            </p>
            <p className="font-[family-name:var(--font-elmessiri)] text-xl text-gray-600">
              Pelanggan Puas
            </p>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              quasi voluptates, eius fuga aliquid
            </p>
          </div>
          <div className="text-center">
            <p className="font-[family-name:var(--font-elmessiri)] text-4xl font-bold text-purple-600 mb-2">
              500+
            </p>
            <p className="font-[family-name:var(--font-elmessiri)] text-xl text-gray-600">
              Pelanggan Sukses
            </p>
            <p className="text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              quasi voluptates, eius fuga aliquid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
