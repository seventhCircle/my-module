import { useAtom } from "jotai";
import React from "react";
import { atomResettable } from "./core_hooks";
import { useResetAtom } from "jotai/utils";

export const core = () => {
  const [state, setState] = useAtom(atomResettable);
  const resetter = useResetAtom(atomResettable);

  return (
    <>
      <div>{state}</div>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        add
      </button>
      <button onClick={resetter}>reset</button>
    </>
  );
};
