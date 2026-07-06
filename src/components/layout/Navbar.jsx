import Logo from "../common/Logo";

export default function Navbar() {
    return (
        <nav className="bg-white text-black shadow">
            {/* Nav Wrapper */}
            <div className="flex justify-between items-center px-3 py-3">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold">
                    <Logo />
                </a>
                {/* Menu Wrapper */}
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-gray-200">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Blogs
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Ecommerce
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Area
                    </a>
                </div>
                {/* Auth Buttons */}
                <div className="flex gap-3">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </nav>
    );
}
