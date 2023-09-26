import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './[FTName].module.scss';

type T[FTName]Props = {
  

  className?: string;
};

export const [FTName] = memo((props: T[FTName]Props) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      [FTName]
    </div>
  )
});
