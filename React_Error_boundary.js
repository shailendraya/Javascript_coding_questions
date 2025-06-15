import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong!</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const BuggyComponent = () => {
  throw new Error("Oops! An error occurred.");
  return <p>This won't render.</p>;
};

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
