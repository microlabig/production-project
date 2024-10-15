import { Suspense } from 'react';

import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { RegistrationFormAsync } from '../RegistrationForm/RegistrationForm.async';

type TLoginModalProps = {
    isOpen: boolean;
    onClose: () => void;

    className?: string;
};

export function RegistrationModal(props: TLoginModalProps) {
    return (
        <Modal isLazy isOpen={props.isOpen} onClose={props.onClose} className={props.className}>
            <Suspense fallback={<Loader />}>
                <RegistrationFormAsync onSuccess={props.onClose} />
            </Suspense>
        </Modal>
    );
}
