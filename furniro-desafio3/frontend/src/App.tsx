import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./components/AuthContext/AuthContext";

import { RootLayout } from "./layout";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { SingleProduct } from "./pages/SingleProduct";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./components/NotFound";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />

        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop />} />

            <Route
              path="/shop/:category"
              element={<Shop />}
            />

            <Route
              path="/product/:id"
              element={<SingleProduct />}
            />

            <Route
              path="/product/slug/:slug"
              element={<SingleProduct />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/checkout"
                element={<Checkout />}
              />
              <Route path="/Contact" element={<Contact/>}/>
            </Route>
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}