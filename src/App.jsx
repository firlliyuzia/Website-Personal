import { useEffect, useState } from "react";

// --- DATA ---
const DataImage = {
  HeroImage: "assets/fotoku.jpg", // Pastikan file ini ada di folder public/assets/
};

const listTools = [
  { 
    id: 1, 
    nama: "Python", 
    keterangan: "Data Science", 
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
  },
  { 
    id: 2, 
    nama: "React JS", 
    keterangan: "Framework", 
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
  },
  { 
    id: 3, 
    nama: "Tailwind", 
    keterangan: "CSS Framework", 
    gambar: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
  },
  { 
    id: 4, 
    nama: "JavaScript", 
    keterangan: "Language", 
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
  },
  { 
    id: 5, 
    nama: "Scikit-Learn", 
    keterangan: "Machine Learning", 
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", 
  },
];

const listProyek = [
  {
    nama: "NLP: Klasifikasi Berita Indonesia",
    deskripsi: "Menggunakan Bernoulli Naive Bayes untuk mengklasifikasikan judul berita ke dalam kategori Finance, News, Hot, dll. Mencapai akurasi 80.4% dengan teknik TF-IDF.",
    kategori: "Natural Language Processing",
    gambar: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://colab.research.google.com/drive/1Ng7JRM94e-g2Q8N003cAI8G5s5hNSiFC?usp=sharing",
    tags: ["Python", "NLTK", "Machine Learning"]
  },
  {
    nama: "E-Commerce Dashboard",
    deskripsi: "Dashboard admin responsif untuk mengelola produk dan pesanan dengan analitik data real-time menggunakan React.",
    kategori: "Web App",
    gambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["React", "Tailwind"]
  },
  {
    nama: "Travel Booking App",
    deskripsi: "Aplikasi pemesanan tiket perjalanan dengan fitur pencarian rute dan integrasi peta.",
    kategori: "Mobile / Web",
    gambar: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["JavaScript", "API"]
  }
];

// --- Komponen Bintang Background ---
const StarsBackground = ({ numberOfStars = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: numberOfStars }).map((_, i) => {
      const size = Math.random() < 0.3 ? 'star-lg' : Math.random() < 0.7 ? 'star-md' : 'star-sm';
      const left = Math.random() * 100 + 'vw';
      const top = Math.random() * 100 + 'vh';
      const delay = Math.random() * 10 + 's'; 

      return (
        <div
          key={i}
          className={`star ${size}`}
          style={{ left, top, '--delay': delay }} 
        />
      );
    });
    setStars(generatedStars);
  }, [numberOfStars]);

  return <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">{stars}</div>;
};

function App() {
  useEffect(() => {
    // Load AOS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({ duration: 1000, once: true });
      }
    };
    document.body.appendChild(script);

    // Load Remix Icon
    const iconLink = document.createElement("link");
    iconLink.rel = "stylesheet";
    iconLink.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
    document.head.appendChild(iconLink);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      document.head.removeChild(iconLink);
    };
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-screen px-4 md:px-10 lg:px-20 overflow-x-hidden font-sans selection:bg-indigo-500 selection:text-white">
      <StarsBackground numberOfStars={100} /> 
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-zinc-900/90 backdrop-blur-md z-50 py-4 px-4 md:px-20 border-b border-zinc-800">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wider text-indigo-500">FIRLLI.</h1>
          <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-widest text-zinc-400">
            <li><a href="#home" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#tentang" className="hover:text-indigo-500 transition">Tentang</a></li>
            <li><a href="#proyek" className="hover:text-indigo-500 transition">Proyek</a></li>
          </ul>
          <a href="#kontak" className="bg-indigo-600 px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
            Kontak
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-10 min-h-screen flex items-center relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full relative z-10">
          <div className="order-2 md:order-1 text-center md:text-left" data-aos="fade-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 bg-zinc-800/50 w-fit p-2 pr-5 rounded-full mx-auto md:mx-0 border border-zinc-700">
              <img src={DataImage.HeroImage} alt="Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500" />
              <q className="text-xs italic text-zinc-400">Data is the new oil.</q>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Firlli Yuzia <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">Rahmanu</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-lg mx-auto md:mx-0 mb-8">
              Data Analyst & Front-End Developer. Berpengalaman dalam mengolah data teks (NLP) dan membangun antarmuka web yang modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#proyek" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                Lihat Proyek <i className="ri-arrow-right-up-line"></i>
              </a>
              <button className="bg-zinc-800 border border-zinc-700 px-8 py-4 rounded-xl font-bold hover:bg-zinc-700 transition">CV Saya</button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative" data-aos="zoom-in">
            <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
            <img src={DataImage.HeroImage} alt="Hero" className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-3xl object-cover border-4 border-zinc-800 rotate-3 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* PROYEK SECTION */}
      <section id="proyek" className="py-20 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Proyek Pilihan</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProyek.map((proyek, index) => (
              <div key={index} className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 group hover:border-indigo-500/50 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="overflow-hidden h-48 relative">
                  <img src={proyek.gambar} alt={proyek.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-indigo-600 text-[10px] uppercase font-bold px-2 py-1 rounded">
                    {proyek.kategori}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400">{proyek.nama}</h3>
                  <p className="text-sm text-zinc-400 mb-6 line-clamp-2">{proyek.deskripsi}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tags?.map(tag => (
                      <span key={tag} className="text-[10px] bg-zinc-900 px-2 py-1 rounded border border-zinc-700 text-zinc-500">{tag}</span>
                    ))}
                  </div>
                  <a href={proyek.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition">
                    Lihat Selengkapnya <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="py-20 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-8">Tertarik Berkolaborasi?</h2>
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://github.com/firlliyuzia" className="text-3xl text-zinc-400 hover:text-white transition"><i className="ri-github-fill"></i></a>
          <a href="https://www.linkedin.com/in/firllli-yuzia-rahmanu/" className="text-3xl text-zinc-400 hover:text-indigo-500 transition"><i className="ri-linkedin-box-fill"></i></a>
          <a href="firlliyuzia@gmail.com" className="text-3xl text-zinc-400 hover:text-red-500 transition"><i className="ri-mail-fill"></i></a>
        </div>
        <p className="text-zinc-600 text-sm">© 2026 Firlli Yuzia Rahmanu.</p>
      </footer>
    </div>
  );
}

export default App;