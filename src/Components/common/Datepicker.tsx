// Ensure you have the correct import from flowbite-react
import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import { FC } from "react";

export const Datepicker: FC = function () {
    return (
        <span className="text-sm text-gray-600">
            <Dropdown inline label="Last 7 days">
                <DropdownItem>
                    <strong>Sep 16, 2021 - Sep 22, 2021</strong>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Custom...</DropdownItem>
            </Dropdown>
        </span>
    );
};
