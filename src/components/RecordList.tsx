import { use } from "react";
import { GetRecords } from "../lib/record";

export const RecordList = () => {
  const records = use(GetRecords());

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
