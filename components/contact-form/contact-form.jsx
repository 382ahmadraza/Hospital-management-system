"use client";

import React, { useState } from "react";
import CustomInput from "../shared/common/input";
import Button from "../shared/common/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //  Field Validation
  const validateField = (name, value) => {
    if (!value.trim())
      return `${name[0].toUpperCase() + name.slice(1)} is required`;

    if (
      (name === "name" || name === "subject") &&
      !/^[A-Za-z\s]+$/.test(value)
    ) {
      return "Only letters allowed";
    }

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      return "Invalid email format";
    }

    if (name === "phone" && !/^\d{10,15}$/.test(value)) {
      return "Phone must be 10–15 digits";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    // if valid
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "" });
      setErrors({});
    }, 2000);
  };

  return (
    <div className="mx-5">
      {isSubmitted ? (
        <div className="text-center text-green-600 text-xl font-semibold py-10">
          Thanks for contacting us! <br />
          We’ll get back to you soon.
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Your Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <CustomInput
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <CustomInput
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <CustomInput
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />

            <label className="text-sm text-gray-600 mt-4 mb-1 block">
              Your message (optional)
            </label>
            <div className="border border-gray-300 bg-zinc-100 focus-within:border-blue-500">
              <textarea
                rows={5}
                className="w-full outline-none bg-transparent p-3"
                placeholder="Type your message here..."
              />
            </div>

            <Button
              btnText={isSubmitting ? "Processing..." : "Submit"}
              disabled={isSubmitting}
              className={`!px-8 !font-medium mt-8 text-white ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
              }`}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
