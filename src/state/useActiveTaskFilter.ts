import { atom, useAtom } from "jotai";

const initialValue = 0;
const Atom = atom<number>(initialValue);

export const useActiveTaskFilter = () => {
  const [activeTaskFilter, setActiveTaskFilter] = useAtom(Atom);

  return { activeTaskFilter, setActiveTaskFilter };
};
