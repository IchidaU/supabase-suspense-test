import { use, useMemo } from "react";
import { GetRecords } from "../lib/record";

export const useFetchData = () => {
  const recordsPromise = useMemo(() => GetRecords(), []);

  return use(recordsPromise);
};
