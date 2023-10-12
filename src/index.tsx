import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './shared/providers/theme-provider';
import { ErrorBoundary } from './shared/providers/error-boundary';
import { StoreProvider, StoreWrapperProvider } from './shared/providers/store-provider';

import 'shared/config/i18n/i18n';

render(
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
    </BrowserRouter>,
    document.getElementById('root')
);
