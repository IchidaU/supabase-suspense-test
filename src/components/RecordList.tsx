import { use, useMemo } from "react";
import { GetRecords } from "../lib/record";

export const RecordList = () => {
  const recordsPromise = useMemo(() => GetRecords(), []);
  const records = use(recordsPromise);

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
