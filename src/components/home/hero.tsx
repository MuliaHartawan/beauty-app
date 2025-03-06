export default function Hero() {
  return (
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
                src="./certificate.svg"
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
  );
}
