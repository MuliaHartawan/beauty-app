import satisfactions from "@/modules/home/statisfaction.json";

export default function Satisfaction() {
  return (
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
  );
}
