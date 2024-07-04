import { FC } from "react";
import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Datepicker } from "./Datepicker";

export const LatestTransactions: FC = function () {
    return (
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                        Latest Transactions
                    </h3>
                    <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        This is a list of latest transactions
                    </span>
                </div>
                <div className="shrink-0">
                    <a
                        href="#"
                        className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                    >
                        View all
                    </a>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <Table
                                striped
                                className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
                            >
                                <TableHead className="bg-gray-50 dark:bg-gray-700">
                                    <TableHeadCell>Transaction</TableHeadCell>
                                    <TableHeadCell>Date &amp; Time</TableHeadCell>
                                    <TableHeadCell>Amount</TableHeadCell>
                                    <TableHeadCell>Status</TableHeadCell>
                                </TableHead>
                                <TableBody className="bg-white dark:bg-gray-800">
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Bonnie Green</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 23, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $2300
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment refund to{" "}
                                            <span className="font-semibold">#00910</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 23, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            -$670
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment failed from{" "}
                                            <span className="font-semibold">#087651</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 18, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $234
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="failure">Cancelled</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Lana Byrd</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 15, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $5000
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <span className="mr-2 rounded-md bg-purple-100 py-0.5 px-2.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                                                In progress
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Jese Leos</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 15, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $2300
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">THEMESBERG LLC</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 11, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $560
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Lana Lysle</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 6, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $1437
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment to{" "}
                                            <span className="font-semibold">Joseph Mcfall</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 1, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $980
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Alphabet LLC</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Mar 23, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $11,436
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <span className="mr-2 rounded-md bg-purple-100 py-0.5 px-2.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                                                In progress
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Bonnie Green</span>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Mar 23, 2021
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $560
                                        </TableCell>
                                        <TableCell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-3 sm:pt-6">
                <Datepicker />
                <div className="shrink-0">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
                    >
                        Transactions Report
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