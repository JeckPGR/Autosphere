export const Footer = () => {
  return (
    <footer className="bg-slate-900    text-white pt-10  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-y-4 gap-x-20">
        <div className="px-6">
          <h2 className="text-3xl font-semibold mb-4">AutoSphere</h2>
          <p className="w-[80%]">
            Tujuan utama untuk segala kebutuhan otomotif Anda.
          </p>
        </div>
        {/* Footer Navigation */}
        <div className="flex flex-col text-base px-6">
          <h3 className=" font-semibold mb-4">Services</h3>
          <a href="/AboutUs" className="text-sm hover:text-sky-200 mb-2">
            Tentang Kami
          </a>
          <a href="/JualBeli" className="text-sm hover:text-sky-200 mb-2">
            Jual & Beli
          </a>
          <a href="/Layanan" className="text-sm hover:text-sky-200 mb-2">
            Layanan
          </a>
          <a href="/InformasiBerita" className="text-sm hover:text-sky-200">
            Informasi & Berita
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col px-6">
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <address className="text-sm mb-2">
            Jl. Otomotif No. 45, Jakarta
          </address>
          <p className="text-sm mb-2">Email: support@autosphere.id</p>
          <p className="text-sm">Telepon: +62 21 1234 5678</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col px-6">
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <a
            href="https://facebook.com"
            className="text-sm hover:text-sky-200 mb-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-sm hover:text-sky-200 mb-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-sm hover:text-sky-200 mb-2"
          >
            Instagram
          </a>
          <a href="https://linkedin.com" className="text-sm hover:text-sky-200">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center md:text-lg mt-10 bg-slate-800/80 py-2">
        © 2024 AutoSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
