import { useEffect, useState } from "react";

/**
 * Returns false on the server and during the first client render, then true
 * after mount. This is the hydration-safe guard for our scroll/load
 * animations: components render fully visible until `mounted` flips, so the
 * markup matches the server and sections are never left invisible.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time mount flag; this is the whole point of the hook
    setMounted(true);
  }, []);
  return mounted;
}
