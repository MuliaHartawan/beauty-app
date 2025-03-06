export default function Treatment() {
  return (
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
              <span className="text-purple-500 text-2xl">1x</span> infus gold +{" "}
              <span className="text-purple-500 text-2xl">1x</span> gold boster
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
              <span className="text-purple-500 text-2xl">2x</span> infus premium
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
              <span className="text-purple-500 text-2xl">5x</span> infus premium
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
