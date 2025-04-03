import { Suspense } from "react";
import { RecordList } from "./components/RecordList";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>エラーが発生しました</div>}>
        <Suspense fallback={<div>読み込み中...</div>}>
          <RecordList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
