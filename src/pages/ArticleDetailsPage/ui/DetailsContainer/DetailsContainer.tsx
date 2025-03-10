import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

type TDetailsContainerProps = {
    className?: string;
};

export const DetailsContainer = memo((props: TDetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card max border="partial" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
});
