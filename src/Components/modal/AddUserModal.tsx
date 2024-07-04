import { FC, useState } from "react";
import {
    Button,
    Label,
    Modal,
    TextInput,
} from "flowbite-react";

import {
    HiPlus,
} from "react-icons/hi";

export const AddUserModal: FC = function () {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Button color="primary" onClick={() => setOpen(true)}>
                <div className="flex items-center gap-x-3">
                    <HiPlus className="text-xl" />
                    Add user
                </div>
            </Button>
            <Modal onClose={() => setOpen(false)} show={isOpen}>
                <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
                    <strong>Add new user</strong>
                </Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <Label htmlFor="firstName">First name</Label>
                            <div className="mt-1">
                                <TextInput
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Bonnie"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last name</Label>
                            <div className="mt-1">
                                <TextInput id="lastName" name="lastName" placeholder="Green" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <div className="mt-1">
                                <TextInput
                                    id="email"
                                    name="email"
                                    placeholder="example@company.com"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone number</Label>
                            <div className="mt-1">
                                <TextInput
                                    id="phone"
                                    name="phone"
                                    placeholder="e.g., +(12)3456 789"
                                    type="tel"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="department">Department</Label>
                            <div className="mt-1">
                                <TextInput
                                    id="department"
                                    name="department"
                                    placeholder="Development"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="company">Company</Label>
                            <div className="mt-1">
                                <TextInput
                                    id="company"
                                    name="company"
                                    placeholder="Somewhere"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" onClick={() => setOpen(false)}>
                        Add user
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};