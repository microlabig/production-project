import { Suspense } from 'react';

import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type TLoginModalProps = {
    isOpen: boolean;
    onClose: () => void;

    className?: string;
};

export function LoginModal(props: TLoginModalProps) {
    return (
        <Modal isLazy isOpen={props.isOpen} onClose={props.onClose} className={props.className}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={props.onClose} />
            </Suspense>
        </Modal>
    );
}
