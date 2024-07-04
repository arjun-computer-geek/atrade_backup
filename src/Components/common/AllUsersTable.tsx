import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { EditUserModal } from "../modal/EditUserModal";
import { DeleteUserModal } from "../modal/DeleteUserModal";
export const AllUsersTable = function (props: { userData: any }) {
    const { userData } = props;
    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                    <TableHeadCell>User Name</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Mobile No.</TableHeadCell>
                    <TableHeadCell>Sub Broker Name</TableHeadCell>
                    <TableHeadCell>Account Code</TableHeadCell>
                    <TableHeadCell>Account Type</TableHeadCell>
                    <TableHeadCell>Actions</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    {
                        userData?.content?.map((item: any, i: number) => <TableRow key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            {/* <TableCell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="/images/users/neil-sims.png"
                                alt="Neil Sims avatar"
                            />
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                    Neil Sims
                                </div>
                                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    neil.sims@flowbite.com
                                </div>
                            </div>
                        </TableCell> */}
                            <TableCell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                {item?.userName}
                            </TableCell>
                            <TableCell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                {item?.email}
                            </TableCell>
                            <TableCell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                {item?.mobileNo}
                            </TableCell>
                            <TableCell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                {item?.subBrokerName}
                            </TableCell>
                            <TableCell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                {item?.accountCode || "N/A"}
                            </TableCell>
                            <TableCell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                                {item?.accountType?.name || "N/A"}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-x-3 whitespace-nowrap">
                                    <EditUserModal />
                                    <DeleteUserModal />
                                </div>
                            </TableCell>
                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};