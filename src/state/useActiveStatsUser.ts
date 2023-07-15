import { atom, useAtom } from "jotai";

type userId = number;

const activeStatsAtom = atom<userId>(0);

export const useActiveUserId = () => {
  const [activeStatsUserId, setActiveStatsUserId] = useAtom(activeStatsAtom);
  return { activeStatsUserId, setActiveStatsUserId };
};
