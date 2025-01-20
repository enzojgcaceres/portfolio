"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Holaaaa";

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch('https://formspree.io/f/mvggeqew', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.current.user_email.value,
          message: form.current.user_message.value,
        }),
      })

      if (response.ok) {
        setSuccess(true);
        form.current.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 sm:p-8 md:p-16 lg:p-24 mb-4"
        >
          <span>Querido Enzo,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full"
            name="user_message"
            required
          />
          <span>Mi email es:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none w-full"
            required
          />
          <span>Saludos</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 w-full">
            Enviar
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Tu mensaje se ha enviado correctamente!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Algo salió mal!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
