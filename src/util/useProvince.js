import { useEffect, useState } from "react";
import { getMasterProvince } from "./audience";

// -----------------------------------------------------------------------------

export default function useProvince() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMasterProvince();
      setState((res?.list||[]).map((m) => ({ 
        id: m.provinceth,
        name: m.provinceth
      })));
    };
    fetchData();
  }, []);

  return state;
}
