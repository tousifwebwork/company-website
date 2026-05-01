import React, { useState } from "react";
import { createApplication } from "../api/api";

const Card = ({ props }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFile(null);
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal").close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("file", file);

    try {
      setIsSubmitting(true);

      await createApplication(formData);

      setSuccess("Application submitted successfully 🚀");

      // clear form immediately
      resetForm();

      // close after 3 seconds
      setTimeout(() => {
        setSuccess("");
        handleCloseModal();
      }, 3000);

    } catch (error) {
      console.error("Error submitting application:", error);
      setError("Submission failed. Please try again ❌");

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="card bg-base-100 w-full max-w-sm shadow-sm mx-auto">

      <figure>
        <img src={props.imageUrl} alt={props.jobTitle} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{props.jobTitle}</h2>
        <p>{props.jobDescription}</p>

        <div className="card-actions justify-end">

          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById("my_modal").showModal()
            }
          >
            Apply Now
          </button>

          {/* MODAL */}
          <dialog id="my_modal" className="modal">
            <div className="modal-box w-[calc(100vw-2rem)] max-w-md">

              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>

              {/* SUCCESS */}
              {success && (
                <div className="bg-green-100 text-green-700 p-2 rounded mb-2 text-sm">
                  {success}
                </div>
              )}

              {/* ERROR */}
              {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded mb-2 text-sm">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col justify-center items-center gap-y-2"
              >
                <input
                  type="text"
                  placeholder="Mr John Doe"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="input input-bordered w-full max-w-xs"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Your message here..."
                  className="textarea textarea-bordered w-full max-w-xs"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary w-full max-w-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

              </form>

            </div>
          </dialog>

        </div>
      </div>
    </div>
  );
};

export default Card;