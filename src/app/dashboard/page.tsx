import { AcquisitionOverview } from "../../Components/common/AcquisitionOverview";
import { LatestCustomers } from "../../Components/common/LatestCustomers";
import { LatestTransactions } from "../../Components/common/LatestTransactions";
import { SalesThisWeek } from "../../Components/common/SalesThisWeek";
import { FC } from "react";
import { NavbarBrand } from "../../customFlowBite";
// import { AcquisitionOverview, LatestCustomers, LatestTransactions, SalesThisWeek } from "../../Components";
// import { NavSidebar } from "../layouts";

const DashboardPage: FC = function () {
    return (
        <>
            <SalesThisWeek />
            <div className="my-2">
                <LatestTransactions />
            </div>
            <LatestCustomers />
            <div className="my-2">
                <AcquisitionOverview />
            </div>

        </>




    );
};

export default DashboardPage