import Image from "next/image";

export default function Footer() {
  return (
  <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image 
            src="/images/smilelogo.png" 
            alt="Smile Dental Hospital" 
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+919321370066" className="block text-[#01659e] font-bold md:text-lg hover:text-black transition-colors">+91  9321370066</a>
            <p className="text-gray-700"> sagar9876@gmail.com</p>
            <p className="text-gray-700">www.smiledentalhospital.com</p>
          </div>

         <div>
  <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Open Hours</h3>
  <p className="text-gray-700 md:text-lg">
    Monday to Saturday:<br />
    Morning: 9:30 AM – 1:30 PM<br />
    Evening: 5:30 PM – 9:30 PM
  </p>
</div>


          <div>
            <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/CRPLdijTfFUy3VAr5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#01659e] transition-colors cursor-pointer block"
            >
              📍 Smile Dental Hospital
Mukti Nagar, Acharya Marg, Beside Unique Restaurant, Ghatla, Chembur East, Mumbai – 400071
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4797.462238154573!2d72.90772707600082!3d19.05545555261551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f092db1fe1%3A0xfcb2ed89eab75608!2sSmile%20Dental%20Hospital!5e1!3m2!1sen!2sin!4v1766618155233!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orovac Dental Care Location - Malviya Nagar, Jaipur, Rajasthan 302017"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}