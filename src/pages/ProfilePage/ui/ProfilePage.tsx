import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';

function ProfilePage() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating id={id} />
            </VStack>
        </Page>
    );
}

export default memo(ProfilePage);
