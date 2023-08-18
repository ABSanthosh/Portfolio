import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { NekoStorage } from "../utils/Neko";

const initialValue = (): NekoStorage => {
  if (browser) {
    if (window.localStorage.getItem("neko")) {
      const newNeko = JSON.parse(window.localStorage.getItem("neko") as string);
      newNeko.forEach((neko: any) => {
        neko.isShown = false;
      });
      return newNeko;
    }
  }

  return [];
};

const nekoStore = writable<NekoStorage>(initialValue());

nekoStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("neko", JSON.stringify(value));
  }
});

export { nekoStore };
