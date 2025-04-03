import { useFetchData } from "../hooks/useFetchData";

export const RecordList = () => {
  const { records } = useFetchData();

  // if (loading) {
  //   return <div>読み込み中...</div>;
  // }

  // if (error) {
  //   return <div>エラーが発生しました: {error.message}</div>;
  // }

  // if (!records || records.length === 0) {
  //   return <div>データがありません</div>;
  // }

  return (
    <div>
      {records.map((record) => (
        <div key={record.id}>
          <h2>{record.title}</h2>
          <p>{record.time}</p>
        </div>
      ))}
    </div>
  );
};
