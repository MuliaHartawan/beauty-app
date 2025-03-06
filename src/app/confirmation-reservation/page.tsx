import Wrapper from "@/components/layouts/wrapper";
import bank from "@/modules/payment/payment-bank.json";
import ewallet from "@/modules/payment/payment-ewallet.json";

export default function Reservation() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-y-4">
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
        <div className="flex justify-between gap-x-24">
          <div className="border border-purple-600 w-2/3 rounded-md">
            <div className="h-8 border-b border-b-purple-600 bg-gradient-to-r from-[#f8dffd] to-[#fae9fd] relative overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src="/pattern-1.svg "
                alt="img"
                className="absolute left-0 bottom-0"
              />
            </div>
            <div className="px-8 pt-6 pb-10">
              <div className="flex flex-col gap-y-2 mt-4">
                <h3 className="font-semibold text-black font-[family-name:var(--font-elmessiri)] text-xl">
                  Data Pelanggan
                </h3>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Nama</p>
                    <p className="text-black w-1/2 font-semibold">
                      Anastasya Shauqela
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Email</p>
                    <p className="text-black w-1/2 font-semibold">
                      shauqeela231@gmail.com
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">
                      WhatsApp
                    </p>
                    <p className="text-black w-1/2 font-semibold">
                      085290392246
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Alamat</p>
                    <p className="text-black w-1/2 font-semibold">
                      Jl.KH ahmad dahlan, ring roud selatan bantul Yogyakarta
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <h3 className="font-semibold text-black font-[family-name:var(--font-elmessiri)] text-xl">
                  Data Reservasi
                </h3>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Nama</p>
                    <p className="text-black w-1/2 font-semibold">
                      Infus Whitening Platinum Korea
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">
                      Dijadwalkan pada
                    </p>
                    <p className="text-black w-1/2 font-semibold">
                      Senin, 28 Januari 2025
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Waktu</p>
                    <p className="text-black w-1/2 font-semibold">13.00 WIB</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">
                      Lokasi Pelayanan
                    </p>
                    <p className="text-black w-1/2 font-semibold">Di Klinik</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Status</p>
                    <p className="text-blue-500 w-1/2 font-semibold">
                      Menunggu Pembayaran
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <h3 className="font-semibold text-black font-[family-name:var(--font-elmessiri)] text-xl">
                  Informasi Pembayaran
                </h3>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">
                      Biaya Paket Infus
                    </p>
                    <p className="text-black w-1/2 font-semibold">Rp 500.000</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">
                      Biaya Reservasi
                    </p>
                    <p className="text-black w-1/2 font-semibold">Rp 10.000</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">PPN</p>
                    <p className="text-black w-1/2 font-semibold">Rp 51.000</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 w-1/2 font-semibold">Total</p>
                    <p className="text-green-500 w-1/2 font-semibold">
                      Rp 561.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-y-4 mt-3">
            <h2 className="text-2xl font-semibold text-black font-[family-name:var(--font-elmessiri)]">
              Metode Pembayaran
            </h2>
            <div>
              <h2 className="text-xl font-semibold text-black font-[family-name:var(--font-elmessiri)]">
                Bank Transfer
              </h2>
              <div className="flex flex-col gap-y-3">
                {bank.map((item, index) => (
                  <div className="flex justify-between mt-4" key={index}>
                    <img className="h-5" src={item.url} alt={item.title} />
                    <div className="flex gap-x-2 items-center">
                      <p className="text-black">{item.noRekening}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-copy text-purple-400"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-black font-[family-name:var(--font-elmessiri)]">
                Dompet Digital
              </h2>
              <div className="flex flex-col gap-y-3">
                {ewallet.map((item, index) => (
                  <div className="flex justify-between mt-4" key={index}>
                    <img className="h-5" src={item.url} alt={item.title} />
                    <div className="flex gap-x-2 items-center">
                      <p className="text-black">{item.noRekening}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-copy text-purple-400"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-purple-600 text-white py-2 rounded-md px-12 w-fit font-semibold">
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
