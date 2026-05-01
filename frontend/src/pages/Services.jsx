import React from 'react' 
import Footer from '../components/Footer'


const Services = () => {
  return (
    <>
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="w-full py-16">
            <h1 className="text-3xl font-semibold text-center mx-auto">Our Services</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto px-4">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            <div id='services' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mt-10 mx-auto">
                
                <div className="relative group rounded-lg overflow-hidden h-56 sm:h-72 lg:h-[400px]">
                    <img className="h-full w-full object-cover object-center"
                        src="https://i.pinimg.com/originals/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg?nii=t"
                        alt="image" />
                </div>


                <div className="relative group rounded-lg overflow-hidden h-56 sm:h-72 lg:h-[400px]">
                    <img className="h-full w-full object-cover object-center"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNf5S6oFaamWauI1jZIYGzNMQMByvvX0i7A&s"
                        alt="image" />
                </div>


                <div className="relative group rounded-lg overflow-hidden h-56 sm:h-72 lg:h-[400px]">
                    <img className="h-full w-full object-cover object-center"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CimyFnpxcs87dA5zurrP7wLmPpJbkD2aiw&s"
                        alt="image" />
                </div>


                <div className="relative group rounded-lg overflow-hidden h-56 sm:h-72 lg:h-[400px]">
                    <img className="h-full w-full object-cover object-center"
                        src="https://img.freepik.com/free-photo/top-view-payroll-concept-with-wooden-cubes_23-2149103955.jpg"
                        alt="image" />
                </div>


                <div className="relative group rounded-lg overflow-hidden h-56 sm:h-72 lg:h-[400px]">
                    <img className="h-full w-full object-cover object-center"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAN9O6qzpH2gf4Q20Eue0aVZy52QyOxM8Nqw&s"
                        alt="image" />
                </div>
                


            </div>
            </section>
        </>
     
    </>
  )
}

export default Services