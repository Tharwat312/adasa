import { NavLink } from "react-router-dom"

const Navbar = () => {
    const navLinks = [
        { name: "الرئيسية", path: "/" },
        { name: "مدونة", path: "/blog" },
        { name: "من نحن", path: "/aboutus" },
    ]
    return (
        <nav className="fixed-navbar-top bg-neutral-700 py-3">
            <div className="container">
                <div className="flex-space-between">
                    <div>
                        <h1>عدسة</h1>
                        <h2>عالم التصوير</h2>
                    </div>
                    <ul className="flex place-items-center gap-x-4">
                        {navLinks.map((link, index) => <li key={index}>
                            <NavLink className={({ isActive }) => {
                                return `hover:text-orange-400 transition-colors ${isActive ? 'text-orange-500' : ""}`
                            }} to={link.path}>{link.name}
                            </NavLink>
                        </li>)}
                    </ul>
                    <button className="bg-orange-400 px-4 py-2 rounded-full hover:bg-orange-500 transition-colors">
                        لقرأء المزيد
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar