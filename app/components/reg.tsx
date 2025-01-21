"use client";

import React, { useRef } from "react";

const ExhibitorRegistrationForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // Reference for the form

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      companyName: formData.get("company-name"),
      city: formData.get("city"),
      contactPerson: formData.get("contact-person"),
      designation: formData.get("designation"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      industryCategories: Array.from(formData.getAll("industry-category")) as string[],
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Registration successful!");

        // Reset the form after successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const industryCategories = [
    "Medical Equipment",
    "Diagnostics",
    "Rehabilitation",
    "Healthcare Infrastructure",
    "Healthcare Technology",
    "Pharmaceutical and Biotechnology",
    "Consumables and Disposables",
    "Emergency and Trauma Care",
    "Dental Equipment",
    "Wellness and Fitness",
    "Vision and Eye Care",
    "Others",
  ];

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="company-name"
            name="company-name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your company name"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your city"
          />
        </div>

        {/* Contact Person */}
        <div>
          <label htmlFor="contact-person" className="block text-sm font-medium text-gray-700">
            Contact Person
          </label>
          <input
            type="text"
            id="contact-person"
            name="contact-person"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter contact person's name"
          />
        </div>

        {/* Designation */}
        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter designation"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter email address"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {/* Industry Categories */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Industry Categories
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {industryCategories.map((category) => (
            <div className="flex items-center" key={category}>
              <input
                type="checkbox"
                id={category.toLowerCase().replace(/\s+/g, "-")}
                name="industry-category"
                value={category}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={category.toLowerCase().replace(/\s+/g, "-")}
                className="ml-2 text-sm text-gray-700"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>


      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register as Exhibitor
      </button>
    </form>
  );
};

export default ExhibitorRegistrationForm;
