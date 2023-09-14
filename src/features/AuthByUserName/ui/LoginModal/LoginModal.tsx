import React from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

import cls from './LoginModal.module.scss';

type TLoginModalProps = {
    isOpen: boolean;
    onClose: () => void;

    className?: string;
};

export function LoginModal(props: TLoginModalProps) {
    return (
        <Modal
            isLazy
            isOpen={props.isOpen}
            onClose={props.onClose}
            className={classNames(cls.LoginModal, {}, [props.className])}
        >
            <LoginForm />
        </Modal>
    );
}
