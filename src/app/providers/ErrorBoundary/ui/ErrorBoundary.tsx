import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.state = { error, errorInfo };
        // eslint-disable-next-line no-console
        console.error(error, errorInfo);
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;

        if (error) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <PageError error={error} errorInfo={errorInfo} />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
