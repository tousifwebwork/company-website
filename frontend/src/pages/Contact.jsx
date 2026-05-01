import React, { useState } from 'react' 
import Footer from '../components/Footer'
import { contact } from '../api/api'

const Contact = () => {
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        setSuccess("");
        setError("");
    
        try {
          setIsSubmitting(true);
    
          await contact({ email, message });
    
          setSuccess("Message sent successfully 🚀");
     
          setEmail("");
          setMessage("");
    

          // close after 3 seconds
          setTimeout(() => {
            setSuccess(""); 
          }, 3000);
    
        } catch (error) {
          console.error("Error submitting application:", error);
          setError("Submission failed. Please try again ❌");
    
        } finally {
          setIsSubmitting(false);
        }
      };


  return (
    <>
           <section id='contact' className='flex flex-col items-center px-4 py-4 w-full' >
             <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full max-w-md mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Need Help? Contact Us</h2>
            {success && (
              <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">
                {success}
              </div>
            )}
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            <label htmlFor="email">Email</label>
            <input id="email" className="w-full border mt-1 border-gray-500/30 outline-none rounded p-2" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="msg" className="mt-3 block">Message</label>
            <textarea rows="4" id="msg" className="w-full border mt-1 resize-none border-gray-500/30 outline-none rounded p-2" placeholder="Your Message..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button type="submit" className="btn btn-primary w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
        </section>
    
   </>
  )
}

export default Contact