import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { NekoSizeVariations, type NekoStorage } from "../utils/Neko";

const initialValue = (): NekoStorage => {
  if (browser) {
    if (window.localStorage.getItem("neko")) {
      return JSON.parse(window.localStorage.getItem("neko") as string);
    }
  }
  return {
    isShown: false,
    size: NekoSizeVariations.SMALL,
  };
};

const nekoStore = writable<NekoStorage>(initialValue());

nekoStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("neko", JSON.stringify(value));
  }
});

export { nekoStore };
