import { useEffect, useState } from "react";
import { getMasterProductType } from "./audience";

// -----------------------------------------------------------------------------

export default function useProductType() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMasterProductType();
      setState((res?.list||[]).map((m) => ({ 
        id: m.producttypecode,
        name: m.producttypename
      })));
    };
    fetchData();
  }, []);

  return state;
}
