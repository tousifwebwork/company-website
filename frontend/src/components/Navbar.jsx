import React from 'react'

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'carrier', label: 'Careers' },
    { id: 'about', label: 'About' },
]

const Navbar = () => {
        const [mobileOpen, setMobileOpen] = React.useState(false)
        const [activeSection, setActiveSection] = React.useState('home')
        const navRef = React.useRef(null)

        const scrollToSection = (id) => {
            const section = document.getElementById(id)
            if (!section) return
            setActiveSection(id)
            setMobileOpen(false)
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

        React.useEffect(() => {
            const updateNavbarOffset = () => {
                const offset = (navRef.current?.offsetHeight || 80) + 24
                document.documentElement.style.setProperty('--navbar-offset', `${offset}px`)
            }

            updateNavbarOffset()
            window.addEventListener('resize', updateNavbarOffset)
            return () => window.removeEventListener('resize', updateNavbarOffset)
        }, [])

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id)
                        }
                    })
                },
                {
                    rootMargin: '-40% 0px -45% 0px',
                    threshold: 0.1,
                },
            )

            NAV_ITEMS.forEach((item) => {
                const section = document.getElementById(item.id)
                if (section) observer.observe(section)
            })

            return () => observer.disconnect()
        }, [])
  return (

        <nav ref={navRef} className="flex items-center justify-between gap-8 bg-white/60 border border-white rounded-full px-4 md:px-2 py-2.5 w-full max-w-3xl sticky top-8 z-40" >
                    <a href="https://prebuiltui.com" className='flex items-center md:pl-3 cursor-pointer'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m12.75 8.3 6.75 3.884L26.25 8.3m-13.5 23.28v-7.755L6 19.94m27 0-6.75 3.885v7.754M6.405 12.408 19.5 19.954l13.095-7.546M19.5 35V19.94M33 25.914V13.962a2.98 2.98 0 0 0-1.5-2.585L21 5.4a3.01 3.01 0 0 0-3 0L7.5 11.377A3 3 0 0 0 6 13.962v11.953A2.98 2.98 0 0 0 7.5 28.5L18 34.477a3.01 3.01 0 0 0 3 0L31.5 28.5a3 3 0 0 0 1.5-2.585" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <div className='w-0.5 h-8 bg-gray-50 hidden md:flex'></div>
                    <div id="menu" className={` max-md:absolute max-md:bg-white/70 max-md:h-196.25 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:backdrop-blur flex items-center gap-8 z-50 md:gap-10 flex-1 ${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
                                                {NAV_ITEMS.map((item) => (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        onClick={() => scrollToSection(item.id)}
                                                        className={`text-xl transition cursor-pointer ${activeSection === item.id ? 'text-violet-600' : 'text-gray-600 hover:text-gray-700'}`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                ))}

                        <button href="/contact" id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-violet-500 active:bg-violet-600 text-white p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                            
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg> 
                        </button>
                    </div>

                    <div className="flex items-center gap-2 md:pr-1">
                        <button onClick={() => scrollToSection('contact')} className="hidden md:inline-block bg-violet-600 hover:bg-violet-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition cursor-pointer">
                           Contact Us
                        </button>

                        <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden text-gray-700 p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 12h16" />
                                <path d="M4 18h16" />
                                <path d="M4 6h16" />
                            </svg>
                        </button>
                    </div>
    </nav>
  )
}

export default Navbar