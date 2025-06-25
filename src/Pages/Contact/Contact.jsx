import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
   const contacts = [
  {
    title: "Address",
    info: "Uttara,Dhaka,Bangladesh",
    icon: <MapPin />
  },
  {
    title: "Phone",
    info: "01741130036",
    icon: <Phone />
  },
  {
    title: "Email",
    info: "lenseforgesupport@lensforge.com",
    icon: <Mail />
  }
];
  return (
    <div className='px-2 max-w-7xl m-auto py-16 flex flex-col md:flex-row justify-between items-center'>
        {/* Right */}
        <div className="md:w-1/2">
            {contacts.map((item, index) => (
  <div key={index} className="flex items-start gap-4 mb-8 ">
    <span className="text-orange-500 mt-1">{item.icon}</span>
    <div>
      <h4 className="font-bold">{item.title}</h4>
      <p className="text-sm text-gray-700">{item.info}</p>
    </div>
  </div>
))}
        </div>

        {/* Left */}
        <div>
        <p className="text-orange-500 font-semibold mb-2">Get in Touch</p>
        <h2 className="text-3xl font-bold mb-4">Reach Out to LensForge</h2>
        <p className="text-gray-600 mb-6">
          Have questions, feedback, or need support? Fill out the form and our team will get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full input input-bordered"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full input input-bordered"
          />
          <textarea
            rows="4"
            placeholder="Write message here..."
            className="w-full textarea textarea-bordered"
          ></textarea>
          <button type="submit" className="btn bg-orange-500 text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
