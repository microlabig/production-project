import { Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/providers/theme-provider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>

      <Link to="/">Главная</Link>
      <Link to="/about">О странице</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
