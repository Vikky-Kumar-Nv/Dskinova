import React, { useState } from "react";

const ContactForm = ({
  formData,
  formAction = "https://formsubmit.co/kunalking01grd@gmail.com",
}) => {
  const [formStatus, setFormStatus] = useState(null);

  // Default form data if not provided
  const defaultFormData = {
    title: "Your Details",
    fields: [
      {
        label: "First Name *",
        name: "name",
        placeholder: "Your Name",
        type: "text",
        required: true,
      },
      {
        label: "Email Address *",
        name: "email",
        placeholder: "you@example.com",
        type: "email",
        required: true,
      },
      {
        label: "Subject *",
        name: "subject",
        placeholder: "Subject",
        type: "text",
        required: true,
      },
      {
        label: "Comments / Questions *",
        name: "message",
        placeholder: "Your Message",
        type: "textarea",
        required: true,
      },
    ],
    button: "Submit Message",
  };

  const form = formData || defaultFormData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    const data = new FormData(formEl);
    // Friendly labels in email
    if (data.get("name")) data.append("Name", data.get("name"));
    if (data.get("email")) data.append("Email", data.get("email"));
    if (data.get("subject")) data.append("Subject", data.get("subject"));
    if (data.get("message")) data.append("Message", data.get("message"));
    // Controls
    data.append("_captcha", "false");
    data.append("_template", "table");
    data.append("_subject", "New Contact Message");

    fetch(formAction, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit");
        setFormStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });
        formEl.reset();
      })
      .catch(() => {
        setFormStatus({
          type: "error",
          message: "Submission failed. Please try again.",
        });
      });
  };

  return (
    <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl rounded-lg relative z-30">
      <h2 className="text-[28px] leading-[32px] font-[600] text-[rgb(208,147,107)] mb-8 tracking-tight font-['Domine,sans-serif']">
        {form.title}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 md:space-y-7"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {form.fields.slice(0, 2).map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("*", "")}
                className="block text-base font-medium text-black mb-2"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("*", "")}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="block w-full border border-gray-300 p-3.5 text-base focus:border-[rgb(208,147,107)] focus:ring-1 focus:ring-[rgb(208,147,107)] outline-none transition bg-white rounded-none"
              />
            </div>
          ))}
        </div>
        {form.fields.slice(2).map((field, index) => (
          <div key={index + 2}>
            <label
              htmlFor={field.label
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace("*", "")}
              className="block text-base font-medium text-black mb-2"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("*", "")}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                className="block w-full border border-gray-300 p-3.5 text-base focus:border-[rgb(208,147,107)] focus:ring-1 focus:ring-[rgb(208,147,107)] outline-none transition bg-white rounded-none"
              />
            ) : (
              <input
                type={field.type}
                id={field.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("*", "")}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="block w-full border border-gray-300 p-3.5 text-base focus:border-[rgb(208,147,107)] focus:ring-1 focus:ring-[rgb(208,147,107)] outline-none transition bg-white rounded-none"
              />
            )}
          </div>
        ))}
        {formStatus && (
          <p
            className={`text-sm ${
              formStatus.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {formStatus.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-[rgb(208,147,107)] text-white py-3 px-8 text-base font-medium hover:bg-[rgb(188,127,87)] transition"
        >
          {form.button}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
