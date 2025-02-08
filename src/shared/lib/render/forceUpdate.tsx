import { createContext, type FC, ReactNode, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
};

interface ForceUpdateProviderPros {
    children: ReactNode;
}

export const ForceUpdateProvider: FC<ForceUpdateProviderPros> = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue(prev => !prev);
        setTimeout(() => {
            setValue(prev => !prev);
        }, 120);
    };

    const valueContext = useMemo(() => {
        return { value, forceUpdate };
    }, [value]);

    if (!value) {
        return null;
    }

    return <ForceUpdateContext.Provider value={valueContext}>{children}</ForceUpdateContext.Provider>;
};
