"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-white ">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 text-white">
                First name*
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="input w-full bg-black border-[#F5BD4D]/40 focus:border-[#F89222]"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 text-white">
                Last name*
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="input  w-full bg-black border-[#F5BD4D]/40 focus:border-[#F89222]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 text-white">
                Email*
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input w-full bg-black border-[#F5BD4D]/40 focus:border-[#F89222]"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 text-white">
                Phone*
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input w-full bg-black border-[#F5BD4D]/40 focus:border-[#F89222]"
            />
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text flex items-center gap-2 text-white">
              Message*
            </span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="textarea textarea-bordered w-full h-32 bg-black border-[#F5BD4D]/40 focus:border-[#F89222]"
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] hover:from-[#F89222] hover:to-[#F5BD4D] text-base-900 font-bold text-lg border-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
