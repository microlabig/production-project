import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider, StoreWrapperProvider } from './app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. Не удалось вмонтировать react-приложение');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreWrapperProvider>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </StoreWrapperProvider>
    </BrowserRouter>
);
