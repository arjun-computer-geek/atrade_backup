import type { FC } from "react";
import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
// import { UserDropDown } from "../components";

const NavbarEx: FC = function () {
    return (
        <Navbar fluid className="sticky top-0 z-10 border-b">
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <NavbarBrand href="/">
                            <Image alt="Avlen logo" src="/images/logo.jpeg" className="mr-3 h-6 sm:h-8 dark:text-white" width={60} height={40} />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                Avlen
                            </span>
                        </NavbarBrand>
                    </div>
                    <div className="flex items-center gap-3">
                        <DarkThemeToggle />
                        {/* <UserDropDown /> */}
                    </div>
                </div>
            </div>
        </Navbar>
    );
};
export default NavbarEx;