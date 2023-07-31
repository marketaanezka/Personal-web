import useContactForm from "../hooks/useContactForm";
import { useState } from "react";
import axios from "axios";

const sendEmail = async (email: string, subject: string, message: string) => {
  return axios({
    method: "post",
    url: "/api/sendmail",
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

const ContactForm = () => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  console.log({ responseMessage });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        value={values.email}
        onChange={handleChange}
        type="email"
      />

      <label htmlFor="subject">Subject</label>
      <input
        required
        id="subject"
        value={values.subject}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="message">Message</label>
      <textarea
        required
        value={values.message}
        onChange={handleChange}
        id="message"
        rows={8}
      />
      <button type="submit" value="Submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
