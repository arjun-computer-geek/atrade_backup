import { FC } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Datepicker } from "./Datepicker";
export const AcquisitionOverview: FC = function () {
    return (
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-6 text-xl font-bold leading-none text-gray-900 dark:text-white">
                Acquisition Overview
            </h3>
            <div className="flex flex-col">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <Table className="min-w-full table-fixed">
                                <TableHead>
                                    <TableHeadCell className="whitespace-nowrap rounded-l border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                        Top Channels
                                    </TableHeadCell>
                                    <TableHeadCell className="whitespace-nowrap border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                        Users
                                    </TableHeadCell>
                                    <TableHeadCell className="min-w-[140px] whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                        Acquisition
                                    </TableHeadCell>
                                </TableHead>
                                <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Organic Search
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            5,649
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">30%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-primary-700"
                                                            style={{ width: "30%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Referral
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            4,025
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">24%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-orange-300"
                                                            style={{ width: "24%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Direct
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            3,105
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">18%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-teal-400"
                                                            style={{ width: "18%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Social
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            1251
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">12%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-pink-600"
                                                            style={{ width: "12%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Other
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            734
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">9%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-indigo-600"
                                                            style={{ width: "9%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="text-gray-500 dark:text-gray-400">
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                            Email
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                            456
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">7%</span>
                                                <div className="relative w-full">
                                                    <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-2 rounded-sm bg-purple-500"
                                                            style={{ width: "7%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
                <Datepicker />
                <div className="shrink-0">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
                    >
                        Acquisition Report
                        <svg
                            className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
