import { Star } from "lucide-react";
import satisfactions from "@/utils/const/statisfaction.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-stone-50">
      {/* Hero Section */}
      {/* bg-gradient-to-r from-purple-100 to-pink-50 */}
      <div className="bg-[url(/section.svg)] w-full bg-right bg-no-repeat">
        <div className="relative px-4 py-12 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center">
              <div className="flex flex-col gap-y-8">
                <img src="./logo.svg" alt="logo" className="w-28" />
                <div className="flex flex-col gap-y-7">
                  <h1 className="text-3xl font-bold text-black font-[family-name:var(--font-elmessiri)]">
                    INFA WHITENING & VITAMIN JOGJA
                  </h1>
                  <p className="text-gray-600">
                    Kulit cerah dan sehat dengan perawatan yang dilakukan oleh
                    perawat profesional.
                  </p>
                  <button className="bg-[url(/pattern-2.svg)] uppercase font-semibold text-white px-8 py-3 rounded-lg w-[242px]">
                    Pesan Sekarang
                  </button>
                </div>
                <img
                  src="/certificate.svg"
                  alt="Certificate"
                  className="w-10/12"
                />
              </div>
              <div className="flex flex-col justify-end">
                <img
                  src="/hero.svg"
                  alt="Beauty Treatment"
                  className="rounded-lg w-11/12"
                />
                <div className="pl-12">
                  <h3 className=" text-2xl font-semibold text-purple-500 font-[family-name:var(--font-elmessiri)]">
                    Alamat Klinik
                  </h3>
                  <p className="text-black">
                    JL. Ringroad Selatan, Bangunharjo, Bantul Yogyakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex h-[330] w-full overflow-hidden">
        <div className=" bg-gradient-to-r from-[#F7E3FF] to-white flex flex-col items-center gap-y-9  place-content-center px-8 relative">
          <img
            src="/pattern-1.svg"
            alt="img"
            className="absolute left-0 bottom-0 w-auto"
          />
          <h2 className="text-4xl font-semibold font-[family-name:var(--font-elmessiri)] text-purple-600">
            BEAUTY INFUS JOGJA
          </h2>
          <p className="text-center text-lg text-black px-10 z-10">
            “Klinik yang fokus pada suntik pemutih dengan hasil yang aman,
            efektif, dan terjangkau. Dengan pengalaman lebih dari 5 tahun, kami
            memiliki tim perawat berlisensi yang berkomitmen untuk memberikan
            perawatan terbaik di lingkungan yang bersih dan aman”
          </p>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Treatment Process */}
      <div className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-left text-black font-[family-name:var(--font-elmessiri)]">
            Kenapa Memilih Kami?
          </h2>
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-[url(/pattern-2.svg)] p-2 text-right rounded-lg">
                <span className="font-[family-name:var(--font-elmessiri)] text-white text-left text-2xl font-bold ">
                  1
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-xl">
                Hasil Terlihat Nyata
              </h3>
            </div>
            <p className="text-black">
              Perawatan kami memberikan hasil yang dapat dirasakan dalam waktu
              singkat.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
            <div className="bg-white rounded-md p-3 h-auto shadow-sm">
              <div>
                <img
                  src="/img/testimoni-1-a.png"
                  alt="testimoni 1 a"
                  className="w-full rounded-ss-lg"
                />
                <img
                  src="/img/testimoni-1-b.png"
                  alt="testimoni 1 b"
                  className="w-full rounded-br-lg rounded-bl-lg"
                />
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black semi-bold text-xl capitalize mt-2">
                <span className="text-purple-500 text-2xl">1x</span> infus gold
                + <span className="text-purple-500 text-2xl">1x</span> gold
                boster
              </h3>
            </div>
            <div className="bg-white rounded-md p-3 h-auto shadow-sm">
              <div>
                <img
                  src="/img/testimoni-2-a.png"
                  alt="testimoni 2 a"
                  className="w-full rounded-ss-lg"
                />
                <img
                  src="/img/testimoni-2-b.png"
                  alt="testimoni 2 b"
                  className="w-full rounded-br-lg rounded-bl-lg"
                />
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black semi-bold text-xl capitalize mt-2">
                <span className="text-purple-500 text-2xl">2x</span> infus gold
              </h3>
            </div>
            <div className="bg-white rounded-md p-3 h-auto shadow-sm">
              <div>
                <img
                  src="/img/testimoni-3-a.png"
                  alt="testimoni 3 a"
                  className="w-full rounded-ss-lg"
                />
                <img
                  src="/img/testimoni-3-b.png"
                  alt="testimoni 3 b"
                  className="w-full rounded-br-lg rounded-bl-lg"
                />
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black semi-bold text-xl capitalize mt-2">
                <span className="text-purple-500 text-2xl">2x</span> infus
                premium
              </h3>
            </div>
            <div className="bg-white rounded-md p-3 h-auto shadow-sm">
              <div>
                <img
                  src="/img/testimoni-4-a.png"
                  alt="testimoni 4 a"
                  className="w-full rounded-ss-lg"
                />
                <img
                  src="/img/testimoni-4-b.png"
                  alt="testimoni 4 b"
                  className="w-full rounded-br-lg rounded-bl-lg"
                />
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black semi-bold text-xl capitalize mt-2">
                <span className="text-purple-500 text-2xl">5x</span> infus
                premium
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Satisfaction Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-[url(/pattern-2.svg)] p-2 text-right rounded-lg">
                <span className="font-[family-name:var(--font-elmessiri)] text-white text-left text-2xl font-bold ">
                  2
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-xl">
                Kepuasan Pelanggan
              </h3>
            </div>
            <p className="text-black">
              98% pelanggan puas dengan hasilnya, dengan banyak testimonial
              positif.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-y-1 gap-x-3 mt-6">
            {satisfactions.map((item) => {
              return (
                <img
                  key={item.filename}
                  src={item.link}
                  alt={item.filename}
                  className="shadow-xl"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="pt-16 pb-8 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-[url(/pattern-2.svg)] p-2 text-right rounded-lg">
                <span className="font-[family-name:var(--font-elmessiri)] text-white text-left text-2xl font-bold ">
                  3
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-xl">
                Kepercayaan & Legalitas
              </h3>
            </div>
            <p className="text-black">
              Kami berlisensi dan terdaftar, menjamin perawatan yang aman dan
              terpercaya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-x-8">
            <div className="border-purple-500 w-auto h-[150px] border rounded-lg"></div>
            <div className="border-purple-500 w-auto h-[150px] border rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Package Section */}
        <div className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-3">
                <h3 className="font-[family-name:var(--font-elmessiri)] text-black font-semibold text-2xl">
                  Layanan yang Kami Tawarkan
                </h3>
              </div>
              <p className="text-black">
                Deskripsi singkat tentang layanan yang tersedia dengan harga dan
                manfaat utama. Sertakan tombol untuk melanjutkan booking atau
                konsultasi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 items-end">
              {[
                "Gold",
                "Platinum Korea",
                "Platinum Japan",
                "Premium Korea",
              ].map((plan, index) => (
                <div
                  key={index}
                  className={
                    plan === "Gold" ? "border-purple-500 border rounded-xl" : ""
                  }
                >
                  {plan === "Gold" && (
                    <p className="text-center uppercase text-black py-2 ">
                      best seller
                    </p>
                  )}

                  <div
                    className={
                      plan === "Gold"
                        ? "rounded-b-xl p-6 text-left hover:shadow-lg transition-shadow bg-[url(/img/package-1.png)] border-t-purple-500 border-t"
                        : "rounded-xl border p-6 text-left hover:shadow-lg transition-shadow bg-[url(/img/package-1.png)]"
                    }
                  >
                    <h3 className="text-black font-[family-name:var(--font-elmessiri)] font-bold text-lg mb-2 capitalize ">
                      infus white
                    </h3>
                    <h3 className="text-black font-[family-name:var(--font-elmessiri)] font-bold text-2xl mb-4 ">
                      {plan}
                    </h3>
                    <p className="text-black text-sm mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center">
                      <p className="text-gray-500 text-md font-normal line-through">
                        Rp.300K{" "}
                      </p>
                      <div className="flex relative">
                        <p className="text-sm text-white z-10">16%</p>
                        <div className="absolute top-0 left-0">
                          <img
                            src="/tag-sale.svg"
                            alt="sale"
                            className="w-40"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-black text-xl font-semibold mb-4">
                      Rp. <span className="text-2xl">250</span>K
                    </p>
                    <button className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
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
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-start mb-4 flex-col">
                    <div className="flex items-center">
                      <img
                        src={
                          "https://ui.shadcn.com/avatars/0" +
                          (index + 1) +
                          ".png"
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

        {/* Statistics */}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam quasi voluptates, eius fuga aliquid
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam quasi voluptates, eius fuga aliquid
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-[#F7E3FF] to-white py-16 px-4 md:px-8 relative overflow-hidden border-[#F7E3FF] border rounded-lg">
            <img
              src="/pattern-1.svg"
              alt="img"
              className="absolute left-0 bottom-0"
            />
            <img
              src="/logo.svg"
              alt="logo"
              className="absolute right-6 top-5"
            />
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

      {/* Footer */}
      <footer className="bg-white pt-8 pb-2 px-4 md:px-8">
        <div className="py-16 px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-6xl flex justify-between items-center border-b-gray-400 border-b mb-5 py-5">
              <img src="/logo.svg" alt="logo" />
              <div className="space-x-6">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  0872648618234
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  @beauty_infusjogja
                </a>
              </div>
            </div>
            <p className="text-gray-600">copyright@beauty infus jogja 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
