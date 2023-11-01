import React from "react";
import { prosList, consList } from "../../mocks/prosConsList";
import { catalog } from "../../mocks/catalog";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
// import "./style.css";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import OrderPage from "/src/components/pages/order-page/order-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage data_pros={prosList} data_cons={consList} />}
            />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={catalog} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
