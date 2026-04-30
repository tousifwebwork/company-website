import React from 'react' 
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'

const About = () => {
  return (
     <>
        <section id="about" className='mt-10 flex flex-col items-center px-4 py-4' >

           
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-2" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-3" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Join our developer community</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">
We help businesses transform ideas into scalable digital products by delivering modern, high-performance software solutions.
</p>

<p className="mt-4">
From web applications and mobile platforms to cloud-native systems, our team builds secure, fast, and user-friendly solutions tailored to real-world business needs.
</p>

<p className="mt-4">
Whether you're a startup or an enterprise, we focus on clean architecture, seamless user experience, and technology that grows with your business.
</p>

<a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
    <span>Explore Services</span>
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
            fill="#fff" />
    </svg>
</a>
                </div>
            </section> 

            <Testimonial  />
                   
                   

        </section>
     
    </>
  )
}

export default About