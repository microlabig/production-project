import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export type TAddCommentFormProps = {
    onSendComment?: (text: string) => void;
    className?: string;
};

const AddCommentForm = memo((props: TAddCommentFormProps) => {
    const { t } = useTranslation();
    const { onSendComment, className } = props;
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);

    const handleChangeText = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const handleClickSendBtn = useCallback(() => {
        handleChangeText('');
        onSendComment?.(text || '');
    }, [handleChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card max padding="24" border="partial">
                        <HStack
                            align="center"
                            justify="between"
                            max
                            gap="16"
                            className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
                            data-testid="AddCommentForm"
                        >
                            <Input
                                placeholder={t('Введите текст комментария')}
                                value={text}
                                onChange={handleChangeText}
                                className={cls.input}
                                data-testid="AddCommentForm.Input"
                            />
                            <Button onClick={handleClickSendBtn} data-testid="AddCommentForm.Button">
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        align="center"
                        justify="between"
                        max
                        className={classNames(cls.AddCommentForm, {}, [className])}
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={handleChangeText}
                            className={cls.input}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={handleClickSendBtn}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
