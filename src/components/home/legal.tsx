export default function Legal() {
  return (
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
  );
}
