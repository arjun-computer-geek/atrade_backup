import {
    Breadcrumb,
    Button,
    Label,
    TextInput,
} from "flowbite-react";
// import { FC, useEffect, useState } from "react";

import {
    HiCog,
    HiDocumentDownload,
    HiDotsVertical,
    HiExclamationCircle,
    HiHome,
    HiPlus,
    HiTrash,
} from "react-icons/hi";
import { AllUsersTable } from "../../Components/common/AllUsersTable";
import { Pagination } from "../../Components/common/Pagination";
import customFetch from "@/src/utils/customFetch";
import { AUTH, GET, SERVER } from "@/src/constants/global";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";

const UserListingPage = async function () {
    const userData = await customFetch(`api/v2/users?limit=0&offset=0`, GET, null, AUTH, SERVER)
    return (
        <>
            <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <Breadcrumb className="mb-4">
                            <Breadcrumb.Item href="#">
                                <div className="flex items-center gap-x-3">
                                    <HiHome className="text-xl" />
                                    <span className="dark:text-white">Home</span>
                                </div>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="/users/list">Users</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                        </Breadcrumb>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            All users
                        </h1>
                    </div>
                    <div className="sm:flex">
                        <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
                            <form className="lg:pr-3">
                                <Label htmlFor="users-search" className="sr-only">
                                    Search
                                </Label>
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <TextInput
                                        id="users-search"
                                        name="users-search"
                                        placeholder="Search for users"
                                    />
                                </div>
                            </form>
                            <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Configure</span>
                                    <HiCog className="text-2xl" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Delete</span>
                                    <HiTrash className="text-2xl" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Purge</span>
                                    <HiExclamationCircle className="text-2xl" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Settings</span>
                                    <HiDotsVertical className="text-2xl" />
                                </a>
                            </div>
                        </div>
                        <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
                            <Link href={'/add-user1'}>
                                <Button>
                                    <div className="flex items-center gap-x-3 "  >
                                        <HiPlus className="text-xl" />
                                        Add user
                                    </div>
                                </Button>
                            </Link>
                            <Button color="gray">
                                <div className="flex items-center gap-x-3">
                                    <HiDocumentDownload className="text-xl" />
                                    <span>Export</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <AllUsersTable userData={userData} />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
};

export default UserListingPage;