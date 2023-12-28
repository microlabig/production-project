import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary } from './shared/providers/error-boundary';
import { StoreProvider, StoreWrapperProvider } from './shared/providers/store-provider';
import { ThemeProvider } from './shared/providers/theme-provider';

import 'shared/config/i18n/i18n';

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
