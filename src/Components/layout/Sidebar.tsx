"use client"
import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import {
    HiChartPie,
    HiSearch,
    HiUsers,
} from "react-icons/hi";

const Sidebars: FC = function () {


    return (
        <Sidebar aria-label="Sidebar border-l with multi-level dropdown example" className="sticky top-[px] shadow">
            <div className="flex min-h-screen flex-col justify-between py-2">
                <div>
                    <form className="pb-3 md:hidden">
                        <TextInput
                            icon={HiSearch}
                            type="search"
                            placeholder="Search"
                            required
                            size={32}
                        />
                    </form>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="/dashboard"
                            // icon={HiChartPie}
                            // className={
                            //     "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                            // }
                            >
                                Dashboard
                            </Sidebar.Item>

                            <Sidebar.Item
                                href="/users-list"
                            // icon={HiUsers}
                            // className={
                            //     "/users-list" === currentPage
                            //         ? "bg-gray-100 dark:bg-gray-700"
                            //         : ""
                            // }
                            >
                                Users list
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/users-permission"
                            // icon={HiUsers}
                            >
                                User Privileges
                            </Sidebar.Item>
                            {/* <Sidebar.Item
                                href="/products"
                                icon={HiShoppingBag}
                                className={
                                    "/products" === currentPage
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }
                            >
                                Products
                            </Sidebar.Item> */}
                            {/* <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                                Sign in
                            </Sidebar.Item>
                            <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                                Sign up
                            </Sidebar.Item> */}
                        </Sidebar.ItemGroup>
                        {/* <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                            >
                                Docs
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                            >
                                Components
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                            >
                                Help
                            </Sidebar.Item>
                        </Sidebar.ItemGroup> */}
                    </Sidebar.Items>
                </div>
            </div>
        </Sidebar>
    );
};

export default Sidebars;
