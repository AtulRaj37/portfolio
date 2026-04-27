import React,{ useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import dynamic from 'next/dynamic'
const CustomCursor = dynamic(() => import('../ui/CustomCursor'), { ssr: false })

const Layout = ({ children }) => {
    const [ isOpen,setOpen ] = useState(false)
    const toggleOpen = () => setOpen(true)
    const toggleClose = () => setOpen(false)
    return (
        <div>
            <CustomCursor />
            <Header isOpen={isOpen} toggleClose={toggleClose} toggleOpen={toggleOpen}/>
            {
                !isOpen && (
                    <>
                        <div>
                            { children }
                        </div>    
                        <Footer />   
                    </>
                ) 
            }

        </div>
    )
}

export default Layout
