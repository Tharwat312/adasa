import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-[80px] min-h-screen flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout