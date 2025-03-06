export default function Profile() {
  return (
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
  );
}
