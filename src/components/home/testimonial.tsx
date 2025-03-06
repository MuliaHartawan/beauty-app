import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-2xl mb-6">
          Testimonial
        </h2>
        <p className="text-black">
          Deskripsi singkat tentang layanan yang tersedia dengan harga dan
          manfaat utama. Sertakan tombol untuk melanjutkan booking atau
          konsultasi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <div className="flex items-start mb-4 flex-col">
                <div className="flex items-center">
                  <img
                    src={
                      "https://ui.shadcn.com/avatars/0" + (index + 1) + ".png"
                    }
                    alt="User"
                    className="rounded-full mr-4 w-10 h-10"
                  />
                  <h4 className="font-[family-name:var(--font-elmessiri)] font-semibold text-black">
                    Anastasya Wahyudi
                  </h4>
                </div>
                <div className="mt-4">
                  <div className="flex gap-x-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Kulit saya menjadi jauh lebih cerah setelah 3 sesi suntik
                pemutih! Sangat puas dengan layanan ini
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
