import { writable } from "svelte/store";
import { browser } from "$app/environment";

const initialValue = browser
  ? window.localStorage.getItem("theme") ?? "dark"
  : "dark";
export const theme = writable<Theme>(initialValue as Theme);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("theme", value);
    document.documentElement.dataset.theme = value;
  }
});
