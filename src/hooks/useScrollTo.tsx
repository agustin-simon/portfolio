import { MutableRefObject, useCallback } from "react";

export const useScrollTo = (
  elem: MutableRefObject<HTMLInputElement | null>,
  observer: (node?: Element | null | undefined) => void
) => {
  const setRefs = useCallback(
    (node: any) => {
      elem.current = node;
      observer(node);
    },
    [observer]
  );

  return setRefs;
};
