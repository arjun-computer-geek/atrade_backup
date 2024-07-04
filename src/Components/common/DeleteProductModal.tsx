import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle, HiTrash } from "react-icons/hi";

export const DeleteProductModal = function () {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Button color="failure" onClick={() => setOpen(!isOpen)}>
                <HiTrash className="mr-2 border-gray-200 text-lg" />
                Delete item
            </Button>
            <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
                <Modal.Header className="px-3 pt-3 pb-0">
                    <span className="sr-only">Delete product</span>
                </Modal.Header>
                <Modal.Body className="px-6 pb-6 pt-0">
                    <div className="flex flex-col items-center gap-y-6 text-center">
                        <HiOutlineExclamationCircle className="text-7xl text-red-600" />
                        <p className="text-lg text-gray-500 dark:text-gray-300">
                            Are you sure you want to delete this product?
                        </p>
                        <div className="flex items-center gap-x-3">
                            <Button color="failure" onClick={() => setOpen(false)}>
                                Yes, I&apos;m sure
                            </Button>
                            <Button color="gray" onClick={() => setOpen(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};