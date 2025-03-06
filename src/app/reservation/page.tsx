import Wrapper from "@/components/layouts/wrapper";

export default function Reservation() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-y-10">
        <a
          href="/"
          className="text-purple-600 border border-purple-600 py-2 px-3 rounded-md text-sm w-fit"
        >
          Kembali
        </a>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-black font-[family-name:var(--font-elmessiri)]">
            Proses Pembayaran
          </h2>
          <p className="text-black text-sm">
            Cek kembali layanan data yang kamu ya, jangan sampai salah
          </p>
        </div>
        <div className="flex justify-between">
          <div className="border border-purple-600 w-1/2 rounded-md">
            <div className="h-8 border-b border-b-purple-600 bg-gradient-to-r from-[#f8dffd] to-white relative overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/pattern-1.svg "
                alt="img"
                className="absolute left-0 bottom-0"
              />
            </div>
            <div className="px-6 py-3">
              <h3 className="font-semibold text-black font-[family-name:var(--font-elmessiri)]">
                Data Pelanggan
              </h3>
              <div className="flex justify-between">
                <label htmlFor="name" className="text-black w-1/2">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="input name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block p-2.5   dark:text-white w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
