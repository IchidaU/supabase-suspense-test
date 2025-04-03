import { useFetchData } from "../hooks/useFetchData";

export const RecordList = () => {
  const { records, error } = useFetchData();
  console.log("records", records);

  if (error) {
    throw error;
  }

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
