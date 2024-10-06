import logo from '../../assets/MOON NGANG-01.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-[#eaf3f7] py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Moon Logo" className="h-12" />
                </div>

                {/* Menu */}
                <ul className="flex space-x-8 text-[#005d63] font-medium">
                    <li className="text-[#f37470]">Về MOON</li>
                    <li>Dịch vụ</li>
                    <li className="relative">
                        Bảng giá
                        {/* Dropdown icon */}
                        <span className="ml-1">&#9662;</span>
                    </li>
                    <Link to="/contact">
                        <li >Liên hệ</li> 
                    </Link>
                </ul>

                {/* Contact Button */}
                <div className="bg-[#62c1bf] text-white py-2 px-4 rounded-full flex items-center space-x-2">
                    <span>&#128222;</span>
                    <span>0123 456 789</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
