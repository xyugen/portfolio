import { create } from "zustand";

type State = {
  href: string;
  pageOut: boolean;
  openMenu: boolean;
  scrollVelocity: number;
  scrollY: number;
};

type Action = {
  setHref: (href: string) => void;
  setPageOut: (state: boolean) => void;
  setOpenMenu: (state: boolean) => void;
  setScrollVelocity: (velocity: number) => void;
  setScrollY: (y: number) => void;
};

export const useStateStore = create<State & Action>((set) => ({
  pageOut: false,
  openMenu: false,
  href: "",
  scrollVelocity: 0,
  scrollY: 0,
  setPageOut: (state) => set(() => ({ pageOut: state })),
  setOpenMenu: (state) => set(() => ({ openMenu: state })),
  setHref: (href) => set(() => ({ href: href })),
  setScrollVelocity: (velocity) => set(() => ({ scrollVelocity: velocity })),
  setScrollY: (y) => set(() => ({ scrollY: y })),
}));
