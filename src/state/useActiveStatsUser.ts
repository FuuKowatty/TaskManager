import { atom, useAtom } from "jotai";

type userId = number;

const activeStatsAtom = atom<userId | null>(null);

export const useActiveUserId = () => {
  const [activeStatsUserId, setActiveStatsUserId] = useAtom(activeStatsAtom);

  return { activeStatsUserId, setActiveStatsUserId };
};
