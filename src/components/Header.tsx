import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            src="/images/smilelogo.png"
            alt="Veda Dentistry Logo"
            width={192}
            height={48}
            className="h-auto mx-auto mb-4 md:mb-0 md:mx-0"
          />
          <a
            href="https://maps.app.goo.gl/1a1CNYzDErxs7kid8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 mb-4 md:mb-0 hover:text-[#01659e] transition-colors cursor-pointer block"
          >
            📍 Smile Dental Hospital
            Mukti Nagar, Acharya Marg, Beside Unique Restaurant, Ghatla, Chembur East, Mumbai – 400071
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-brandBlue text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+918830910757" className="bg-brandBlue
 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}