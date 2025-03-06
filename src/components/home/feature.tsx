export default function Feature() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-[family-name:var(--font-elmessiri)] font-semibold mb-12 text-left text-black">
          Keunggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left">
            <img
              src="/img/img-1.png"
              alt="Professional"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2 text-black font-[family-name:var(--font-elmessiri)]">
              Perawatan Profesional
            </h3>
            <p className="text-gray-600">
              Dilakukan oleh perawat berpengalaman dan bersertifikat.
            </p>
          </div>
          <div className="text-left">
            <img
              src="/img/img-2.png"
              alt="Service"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2 text-black font-[family-name:var(--font-elmessiri)]">
              Proses Steril
            </h3>
            <p className="text-gray-600">
              Semua prosedur dilakukan dengan standar kebersihan yang tinggi.
            </p>
          </div>
          <div className="text-left">
            <img
              src="/img/img-3.png"
              alt="Lab"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2 text-black font-[family-name:var(--font-elmessiri)]">
              Bahan Terjamin Aman
            </h3>
            <p className="text-gray-600">
              Menggunakan produk yang teruji dan aman untuk kulit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
