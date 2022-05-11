import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false)

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }

    return { showModal, toggleShowModal }
}

export default useModal;