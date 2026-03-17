import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomDialog from "../Pages/Dialog/custom-dialog";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    const [Currency, setCurrency] = useState("USD");
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <a href="#" className="hover:text-blue-600">About Us</a>
                    <a href="#" className="hover:text-blue-600">My account</a>
                    <a href="#" className="hover:text-blue-600">Wishlist</a>
                    <a href="#" className="hover:text-blue-600">Order Tracking</a>
                </nav>

                <div>
                    <p>Need help? Call Us: <a className=" text-blue-600 hover:underline" href="">+ 0020 500</a>
                    </p>
                </div>
                {/* Right Section */}
                <div className="hidden md:flex space-x-4">
                    <Select value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="German">German</MenuItem>
                    </Select>
                    <Select value={Currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                        <MenuItem value="GDP">GDP</MenuItem>
                    </Select>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div><h1 className="text-2xl font-bold text-blue-600">
                    ShopApp
                </h1> <span>Online Grocery Shopping Center</span>
                </div>
                    <CustomDialog open={open} />
                <div>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: "8px",
                            width: "250px",
                            marginBottom: "15px",
                            border: "1px solid #ccc",
                            borderRadius: "4px"
                        }}
                    />
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#" className="hover:text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600">Shop</a>
                <a href="#" className="hover:text-blue-600">Meats & SeaFood</a>
                <a href="#" className="hover:text-blue-600">Bakery</a>
                <a href="#" className="hover:text-blue-600">Beverages</a>
                <a href="#" className="hover:text-blue-600">Blog</a>
                <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
            <br />

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <a className="block">Home</a>
                    <a className="block">Products</a>
                    <a className="block">About</a>
                    <a className="block">Contact</a>
                </div>
            )}
        </header>
    );
}

export default Header;