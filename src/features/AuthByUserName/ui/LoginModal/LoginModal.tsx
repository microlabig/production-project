import React from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

type TLoginModalProps = {
    isOpen: boolean;
    onClose: () => void;

    className?: string;
};

export function LoginModal(props: TLoginModalProps) {
    return (
        <Modal isLazy isOpen={props.isOpen} onClose={props.onClose} className={props.className}>
            <LoginForm />
        </Modal>
    );
}
