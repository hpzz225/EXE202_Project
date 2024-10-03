import logo from '../../assets/MOON NGANG-01.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

interface Link {
    href: string;
    label: string;
}

const links: Link[] = [
    { href: '/DichVuGiatSay', label: 'Dịch Vụ Giặt Sấy' },
    { href: '/VeSinhGiayDep', label: 'Vệ Sinh Giày Dép' },
    { href: '/GiatSayKhanRem', label: 'Giặt Sấy Khăn Rèm' },
    { href: '/VeSinhGauBong', label: 'Vệ Sinh Gấu Bông, Topper' },
];

const Navbar = () => {
    return (
        <nav className="bg-[#eaf3f7] py-4">
            <div className="container mx-auto flex justify-between items-center px-[158px]">
                <div className="flex items-center">
                    <img src={logo} alt="Moon Logo" className="h-16" />
                </div>

                <div className="flex items-center space-x-12 font-baloo font-700">
                    <ul className="flex space-x-8 text-[#005d63] ">
                        <li className="text-[#f37470]">Về MOON</li>
                        <li>Dịch vụ</li>

                        <Menu as="div" className="relative">
                            <MenuButton className="data-[active]">
                                Bảng giá
                                <span className="ml-1">&#9662;</span>
                            </MenuButton>
                            <MenuItems className="absolute mt-2 w-[250px] bg-white rounded-md shadow-lg z-50">
                                {links.map((link) => (
                                    <MenuItem
                                        as="a"
                                        key={link.href}
                                        href={link.href}
                                        className="block px-4 py-2 hover:bg-blue-100"
                                    >
                                        {link.label}
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>

                        <li>Liên hệ</li>
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
