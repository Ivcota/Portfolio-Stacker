import create from "zustand";

interface State {
  mode: "light" | "dark";
}

interface ZustandState extends State {
  switchMode: () => void;
}

export const useThemeStore = create<ZustandState>((set) => ({
  mode: "light",
  switchMode: () => {
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    }));
  },
}));
