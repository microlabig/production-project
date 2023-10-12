import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle(callback: (...args: any[]) => void, delayMs: number) {
    const throttleRef = useRef(false);

    return useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (...args: any[]) => {
            if (throttleRef.current) {
                return;
            }

            callback(...args);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delayMs);
        },
        [callback, delayMs]
    );
}
