import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className=" bg-brandBlue p-4 md:p-8 lg:p-12">
      <h2 className="text-white md:text-3xl font-bold text-center mb-6">Meet Our Principal Dentist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/images/doctor.jpeg" alt="Dr. Sagar Barkade" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#01659e]">Dr. Sagar Barkade</h3>
            <p className="text-gray-600 font-medium">Founder and Director of Smile Dental Hospital</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Sagar Barkade is a highly experienced dental professional known for delivering advanced, ethical, and patient-focused dental care. With years of expertise in cosmetic and general dentistry, the doctor is committed to creating healthy and confident smiles using modern techniques and technology.
            </p>

            <p className="md:text-lg">
              Expert Dental Care Backed by 18+ Years of Experience
              Specializing in cosmetic, implant, and general dentistry with award-winning clinical excellence and patient-first care.
            </p>



            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#01659e] mb-3 md:text-lg">Expertise & Specializations</h3>
                <p className="md:text-lg mb-4">
                  With over 18+ years of clinical experience, the doctor specializes in providing comprehensive and ethical dental care using modern techniques. Known for precision, aesthetics, and patient comfort, the doctor delivers personalized treatment plans for long-term oral health.
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Specializations</h4>
                <ul className="list-disc list-inside md:text-lg space-y-1">
                  <li>Cosmetic Dentistry</li>
                  <li>Dental Implants</li>
                  <li>General Dentistry</li>
                  <li>Smile Enhancement Treatments</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#01659e] mt-6 mb-3 md:mt-0 md:text-lg">⭐ Clinic Highlights</h3>
                <ul className="list-none md:text-lg space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span>✅</span> <span>Modern & advanced dental technology</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>ISO-certified, highly hygienic clinic</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>4 fully equipped dental chairs</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Patient-friendly & ethical treatment approach</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Comfortable, safe, and well-maintained environment</span></li>
                </ul>

                <h3 className="font-bold text-[#01659e] mb-3 md:text-lg">🏆 Awards & Recognition</h3>
                <ul className="list-none md:text-lg space-y-2">
                  <li className="flex items-start gap-2"><span>🏅</span> <span>India Dental Award 2017 – Best Dental Clinic in Mumbai</span></li>
                  <li className="flex items-start gap-2"><span>🏅</span> <span>National Dental Award 2017 – Best Cosmetic Dentist in Mumbai</span></li>
                  <li className="flex items-start gap-2"><span>🏅</span> <span>Doctor Ratna Award 2024 – Best & Cosmetic Dental Surgeon</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. Sagar Barkade
        </button>
      </div>
    </section>
  );
}