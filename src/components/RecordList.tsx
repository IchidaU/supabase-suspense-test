import { useFetchData } from "../hooks/useFetchData";

export const RecordList = () => {
  const { records } = useFetchData();
  console.log("records", records);

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
