import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Sushma Chandorkar",
      initials: "SC",
      date: "4 months ago",
      review: "All the concerns were addressed perfectly. Proper step by step measures were taken to achieve the final result. Dr. Sagar is perfectionist, he will make sure you have natural looking tooth that makes you smile confidently. The whole process was painless and comfortable."
    },
    {
      name: "Prathamesh Mandavkar",
      initials: "PM",
      date: "1 months ago",
      review: "Fabulous experience at Smile Dental Hospital.. Dr. Sagar is the best cosmetic dentist. Clinic is very nice with modern & advance technology. Fully painless full mouth dental treatment. Highly recommended. Thanks Dr. Sagar & Smile Staff.. all the best 👍"
    },
    {
      name: "Rashika Bait",
      initials: "RB",
      date: "8 months ago",
      review: "Root canal, scalling, filling and capping done very nicely. I like Dr Sagar's work and he is very expert and confidant dentist. Clinic is very nice and hygienic. I am very happy for my full mouth dental treatment. Thanks. Highly recommended"
    },
    {
      name: "Sunita Chavan",
      initials: "SC",
      date: "6 months ago",
      review: "My 1st ever visit to a dentist and definitely not a last one. I am very grateful … for my dental treatment. … We have a very caring, professional and a friendly team. I would strongly recommend Smile Dental Hospital"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}