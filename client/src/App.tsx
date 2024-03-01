import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import useUser from "./hooks/useUser";
const Header = lazy(() => import("./components/header/Header"));
const Form = lazy(() => import("./pages/Form"));
const Todo = lazy(() => import("./pages/Todo"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

function App() {
  const { user } = useUser();

  return (
    <>
      <Suspense fallback="Loading...">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/auth"
              element={!user.gmail ? <Form /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={user.gmail ? <Todo /> : <Navigate to="/auth" />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
