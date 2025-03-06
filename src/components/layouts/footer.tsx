export default function Footer() {
  return (
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
  );
}
