import packages from "@/modules/home/package-service.json";

export default function Package() {
  return (
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
          {packages.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.bestSeller
                  ? "border-purple-500 border rounded-xl"
                  : "border rounded-xl"
              }`}
            >
              {plan.bestSeller && (
                <p className="text-center uppercase text-black py-2 ">
                  best seller
                </p>
              )}

              <div
                className={`${
                  plan.bestSeller
                    ? "rounded-b-xl p-6 text-left hover:shadow-lg transition-shadow"
                    : "rounded-xl p-6 text-left hover:shadow-lg transition-shadow"
                }`}
                style={{
                  backgroundImage: `url(${plan.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-black font-bold text-lg mb-2 capitalize">
                  {plan.type}
                </h3>
                <h3 className="text-black font-bold text-2xl mb-4">
                  {plan.title}
                </h3>
                <p className="text-black text-sm mb-4">{plan.description}</p>
                <div className="flex items-center">
                  {plan.priceDiscount > 0 && (
                    <>
                      <p className="text-gray-500 text-md font-normal line-through">
                        {`Rp.${plan.price}K`}
                      </p>
                      <div className="flex relative">
                        <p className="text-sm text-white z-10">{`${plan.discount}%`}</p>
                        <div className="absolute top-0 left-0">
                          <img
                            src="/tag-sale.svg"
                            alt="sale"
                            className="w-12 md:w-16"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-black text-xl font-semibold mb-4">
                  Rp.
                  <span className="text-2xl">
                    {plan.priceDiscount ? plan.priceDiscount : plan.price}
                  </span>
                  K
                </p>
                <button className="w-full bg-white text-black hover:text-white font-bold py-2 rounded-lg hover:bg-purple-600 transition ease-in-out">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
