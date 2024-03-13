import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

function ProfilePage() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating id={id} />
            </VStack>
        </Page>
    );
}

export default memo(ProfilePage);
