import React, { useEffect, useRef, useState } from "react";
import Button1 from "./Button1";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const handleText = (e: any) => {
    const { name, value } = e?.target;
    setData((prev: any) => ({ ...prev, [name]: value }));
  };

  const form = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState({
    success: false,
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_gd5thed", "template_850lrkx", form?.current, {
        publicKey: "yzi92fO52eLPNtPwL",
      })
      .then(
        () => {
          setData({
            name: "",
            email: "",
            subject: "",
            text: "",
          });
          setMessage({ success: true, message: "Message Sent!" });
        },
        (error: any) => {
          setMessage({ success: false, message: error?.text });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (message?.message) {
      setTimeout(() => {
        setMessage({ success: false, message: "" });
      }, 5000);
    }
  }, [message]);

  const defaultClass =
    "w-full p-[1rem] text-center text-[1.8rem] bg-transparent focus:outline-none text-white border-b-2 border-white";
  return (
    <section className="w-full  p-[4rem] py-[10rem] bg-slate-900" id="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-[3rem] max-w-[60rem] p-[2rem] mx-auto bg-slate-950 rounded-xl shadow-2xl"
      >
        <h3 className="text-[6rem] uppercase font-bold text-violet-500 text-center">
          Contact
        </h3>
        <input
          type="text"
          name="name"
          required
          id="name"
          className={defaultClass}
          value={data?.name}
          onChange={handleText}
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          className={defaultClass}
          value={data?.email}
          onChange={handleText}
          placeholder="Enter Email"
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          className={defaultClass}
          value={data?.subject}
          onChange={handleText}
          placeholder="Enter Subject"
          required
        />
        <input
          type="text"
          name="text"
          id="text"
          className={defaultClass}
          value={data?.text}
          onChange={handleText}
          placeholder="Enter Message"
          required
        />
        <center>
          <Button1>{loading ? "Sending Message..." : "Send Message"}</Button1>
        </center>
        {message?.message && (
          <p
            className={`w-full text-center font-semibold text-[1.8rem] ${
              message?.success ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {message?.message}
          </p>
        )}
      </form>
      <br />
    </section>
  );
};

export default Contact;
