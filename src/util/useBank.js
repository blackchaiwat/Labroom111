import { useEffect, useState } from "react";
import { getMasterBank, getMasterProductType } from "./audience";

// -----------------------------------------------------------------------------

export default function useBank() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMasterBank();
      setState((res?.list||[]).map((m) => ({ 
        id: m.bankcode,
        name: m.bankname
      })));
    };
    fetchData();
  }, []);

  return state;
}
