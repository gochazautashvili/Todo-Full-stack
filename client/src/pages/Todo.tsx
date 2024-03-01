import { lazy, Suspense } from "react";

const TodoComp = lazy(() => import("../components/todo/Todo"));

function Todo() {
  return (
    <main>
      <Suspense fallback="Loading...">
        <TodoComp />
      </Suspense>
    </main>
  );
}

export default Todo;
