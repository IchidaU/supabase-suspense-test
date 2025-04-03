import { useEffect, useState } from "react";
import { GetRecords } from "../lib/record";
import { Record } from "../domain/record";

type UseFetchDataResult = {
  records: Record[];
  error: Error | null;
};

export const useFetchData = (): UseFetchDataResult => {
  const [records, setRecords] = useState<Record[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchRecords = async () => {
    try {
      const data = await GetRecords();
      setRecords(data);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("エラーが発生しました")
      );
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return { records, error };
};
