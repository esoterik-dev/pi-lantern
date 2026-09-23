import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import piZentui from "./zentui/index.ts";
import piSidebar from "./sidebar/index.ts";

export default function piLantern(pi: ExtensionAPI): void {
  piZentui(pi);
  piSidebar(pi);
}
