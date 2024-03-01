import { lazy, Suspense } from "react";

const FormComp = lazy(() => import("../components/form/Form"));

function Form() {
  return (
    <main>
      <Suspense fallback="Loading...">
        <FormComp />
      </Suspense>
    </main>
  );
}

export default Form;
