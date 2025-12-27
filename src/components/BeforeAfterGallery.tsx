'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const videos = [
    {
      src: '/img/before-after/Digital dentistry_Intra oral scan.mp4',
      poster: '/img/before-after/Digital dentistry in action.png'
    },
    {
      src: '/img/before-after/Invisible braces 1.mp4',
      poster: '/img/before-after/Dental crowns and bridges overview.png'
    },
    {
      src: '/img/before-after/Invisible braces 2.mp4',
      poster: '/img/before-after/Dental implant surgery in progress.png'
    },
    {
      src: '/img/before-after/Pediatric dentistry.mp4',
      poster: '/img/before-after/ChatGPT Image Dec 26, 2025, 10_47_38 AM.png'
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#01659e] text-sm md:text-base font-medium mb-2">
            Smile Dental Hospital
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-12">
          {videos.map((video, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-black">
              <video
                controls
                className="w-full h-auto"
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#01659e]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Sagar Barkade &apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919828079898"
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: +91 9321370066
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
