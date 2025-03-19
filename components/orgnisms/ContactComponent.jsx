import React, { useState } from "react";
import Button from "../atoms/Button";
import Headings from "../atoms/Headings";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // Install react-icons if not installed

function ContactComponent() {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const onClose = () => {
  setIsVisible(false)
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ firstName: "", lastName:"", phone:"", option:"", email:"",  message: "" });
        setIsVisible(true)
      } else {
        setIsVisible(false)
        console.log("Err frontend ::",data.error);
        
      }
    } catch (error) {
      setIsVisible(false)
    }
    setLoading(false);
    setTimeout(() => {
      setIsVisible(false)
    }, 4000);
  };
  const phoneNumber = process.env.MOBILE_NUMBER_ADMIN; // Apna WhatsApp number likho

  return (
    <div id="contact" className="w-full flex md:flex-row flex-col space-x-0 md:space-x-4 bg-[#F6F3FC] py-12 md:py-[150px] px-[50px]">
      <div className="left w-full md:w-[50%] px-2 md:px-[30px] py-[50px] bg-white rounded-xl ml-0 md:ml-10" data-aos="zoom-in-right">
        <div className="text-center md:text-start w-full md:w-[90%] flex flex-col">
          <Headings level="2" text="Let’s work together!" />
          <Headings
            level="10"
            text="I design and code beautifully simple things and i love what i do.
                  Just simple like that!"
          />
        </div>
        { isVisible && (
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
        >
          ✅
        </motion.div>
        <h2 className="text-xl font-semibold text-gray-800">Success!</h2>
        <p className="text-gray-600 mt-2 text-sm flex">Your Message Successfully Send <FaRegThumbsUp className="ml-2" size={15} /> </p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          OK
        </button>
      </div>
    </motion.div>
    )}
        { !isVisible && (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col md:items-start items-center justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
          </div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="p-3 mt-4 border rounded-md w-full"
          >
            <option value="">—Please choose an option—</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="consultation">Consultation</option>
          </select>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md w-full mt-4"
            rows="4"
          ></textarea>
          <div className="mt-3">
          {!loading && (<Button type={'submit'} variant="heeder-button" text="Send Message" />)}
          {loading && (<Button variant="loading-button" text="Sending..." />)}
          </div>
       <div className="flex md:text-sm text-[8px] fixed bottom-5 md:right-20 right-15 text-[#2A1454]">
        <a
      href={`https://wa.me/${phoneNumber}`}
      title="Click here"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="md:text-[30px] text-[20px] " />
    </a>
       </div>
        </form>)}
      </div>
      {/* Contact information */}
      <div className="right mt-10 md:mt-0 w-full md:w-[50%] flex flex-col items-center md:items-start justify-center space-y-2 md:space-y-6" data-aos="zoom-in-left">
        <div className="w-full flex ml-10  relative">
          <Button variant="icon-button" text={<FiPhoneCall />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Phone" />
            <Headings level="5" text="+92 3164288921" />
          </div>
        </div>
        <div className="w-full flex ml-10  relative">
          <Button variant="icon-button" text={<HiOutlineMail />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Email" />
            <Headings level="5" text="musama4288921@gmail.com" />
          </div>
        </div>
        <div className="w-full flex ml-10 relative">
          <Button variant="icon-button" text={<CiLocationOn />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Adresse" />
            <Headings level="5" text="faislabad, punjab, pakistan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
