import ErrorBoundary from "./compoenents.jsx/ErrorBoundary";

function App() {
  return (
    <div>
    <h3>Outside the error boundary</h3>
    <ErrorBoundary>
    <h3>This is inside error Boundary</h3>
    </ErrorBoundary>
    </div>
  )
}

export default App;
