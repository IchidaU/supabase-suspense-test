import { Suspense } from "react";
import { RecordList } from "./components/RecordList";

function App() {
  return (
    <>
      <Suspense fallback={<div>読み込み中...</div>}>
        <RecordList />
      </Suspense>
    </>
  );
}

export default App;
