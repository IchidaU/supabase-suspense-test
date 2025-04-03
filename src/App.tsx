import { lazy, Suspense } from "react";
// import { RecordList } from "./components/RecordList";

function App() {
  const RecordList = lazy(() =>
    import("./components/RecordList").then((module) => ({
      default: module.RecordList,
    }))
  );

  return (
    <>
      <Suspense fallback={<div>読み込み中...</div>}>
        <RecordList />
      </Suspense>
    </>
  );
}

export default App;
