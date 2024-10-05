import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/MOON NGANG-01.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

interface Link {
    href: string;
    label: string;
}

const links: Link[] = [
    { href: '/dich-vu-giat-say', label: 'Dịch Vụ Giặt Sấy' },
    { href: '/VeSinhGiayDep', label: 'Vệ Sinh Giày Dép' },
    { href: '/GiatSayKhanRem', label: 'Giặt Sấy Khăn Rèm' },
    { href: '/VeSinhGauBong', label: 'Vệ Sinh Gấu Bông, Topper' },
];

const Navbar = () => {
    const location = useLocation();

    // Check if any dropdown link is active
    const isBanggiaActive = links.some(
        (link) => location.pathname === link.href
    );

    return (
        <nav className="bg-[#eaf3f7] py-4">
            <div className="container mx-auto flex justify-between items-center px-[158px]">
                <div className="flex items-center">
                    <img src={logo} alt="Moon Logo" className="h-16" />
                </div>

                <div className="flex items-center space-x-12 font-baloo font-700">
                    <ul className="flex space-x-8 text-[#005d63]">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#f37470]'
                                        : 'text-[#005d63]'
                                }
                            >
                                Về MOON
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dich-vu"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#f37470]'
                                        : 'text-[#005d63]'
                                }
                            >
                                Dịch vụ
                            </NavLink>
                        </li>

                        {/* Dropdown menu for "Bảng giá" */}
                        <Menu as="div" className="relative">
                            <MenuButton
                                className={`${
                                    isBanggiaActive
                                        ? 'text-[#f37470]'
                                        : 'text-[#005d63]'
                                }`}
                            >
                                Bảng giá
                                <span className="ml-1">&#9662;</span>
                            </MenuButton>
                            <MenuItems className="absolute mt-2 w-[250px] bg-white rounded-md shadow-lg z-50">
                                {links.map((link) => (
                                    <MenuItem key={link.href} as="div">
                                        <NavLink
                                            to={link.href}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'block px-4 py-2 bg-blue-100 text-[#f37470]'
                                                    : 'block px-4 py-2 hover:bg-blue-100'
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>

                        <li>
                            <NavLink
                                to="/lien-he"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#f37470]'
                                        : 'text-[#005d63]'
                                }
                            >
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>

                    <div className="bg-[#62c1bf] text-white py-2 px-6 rounded-full flex items-center space-x-2">
                        <span>&#128222;</span>
                        <span>0123 456 789</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
