import { useState, useEffect } from "react";

const Navbar = () => {
  // State untuk mendeteksi scroll (agar navbar berubah warna)
  const [scroll, setScroll] = useState(false);
  
  // State untuk membuka/menutup menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, aktifkan background gelap
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen tidak dipakai
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk menutup menu mobile saat link diklik
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-20 border-b 
      ${scroll 
          ? "bg-zinc-900/90 backdrop-blur-md py-4 border-zinc-800 shadow-lg" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* --- LOGO --- */}
        <a href="#home" className="text-2xl font-bold tracking-wider text-indigo-500 cursor-pointer no-underline">
          PORTFOLIO<span className="text-white">.</span>
        </a>

        {/* --- MENU DESKTOP (Hidden di HP) --- */}
        <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-widest text-zinc-400">
          <li><a href="#home" className="hover:text-white hover:text-indigo-500 transition">Home</a></li>
          <li><a href="#tentang" className="hover:text-white hover:text-indigo-500 transition">Tentang</a></li>
          <li><a href="#proyek" className="hover:text-white hover:text-indigo-500 transition">Proyek</a></li>
        </ul>

        {/* --- TOMBOL KONTAK (Hidden di HP) --- */}
        <a href="#kontak" className="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
          Kontak Saya
        </a>

        {/* --- HAMBURGER ICON (Muncul di HP) --- */}
        <div 
          className="md:hidden text-2xl cursor-pointer text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {/* Muncul hanya jika mobileMenuOpen bernilai true */}
      {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-6 px-4 flex flex-col gap-4 shadow-2xl text-white animate-slideDown">
              <a href="#home" className="block py-2 px-4 hover:bg-zinc-800 rounded text-center transition" onClick={closeMenu}>Home</a>
              <a href="#tentang" className="block py-2 px-4 hover:bg-zinc-800 rounded text-center transition" onClick={closeMenu}>Tentang</a>
              <a href="#proyek" className="block py-2 px-4 hover:bg-zinc-800 rounded text-center transition" onClick={closeMenu}>Proyek</a>
              <a href="#kontak" className="block py-2 px-4 bg-indigo-600 rounded text-center font-bold mx-4 mt-2 hover:bg-indigo-700 transition" onClick={closeMenu}>Kontak Saya</a>
          </div>
      )}
    </nav>
  );
};

export default Navbar;