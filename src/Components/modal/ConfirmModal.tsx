import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Button } from 'flowbite-react';
// import { useNavigate } from 'react-router-dom';



export const ConfirmationModal = (props: { showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>>, registeredUser: any }) => {
    const { showModal, setShowModal, registeredUser } = props
    // const navigate = useNavigate()

    const handleConfirm = () => {
        // navigate('/add-user/2')
        localStorage.setItem("registeredUser", JSON.stringify(registeredUser))
        setShowModal(false);
    };

    return (
        <>
            {/* Confirmation Modal */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>Go to Step2 ?</Modal.Header>
                <Modal.Body>
                    <p><b>{registeredUser?.username}</b> is already is registered with us. Do you want to go to Step 2.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button color="primary" onClick={handleConfirm}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};