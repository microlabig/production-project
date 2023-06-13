import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // имитация задержки, сделано для проекта
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
