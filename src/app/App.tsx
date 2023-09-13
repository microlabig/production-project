import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
