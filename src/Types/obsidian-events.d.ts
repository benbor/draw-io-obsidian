import { EventRef, TFile } from "obsidian";

declare module "obsidian" {
	interface Workspace {
		on(name: "drawio:edit-diagram", callback: (file: TFile) => void, ctx?: unknown): EventRef;
		on(name: "drawio:copy-diagram-as-image", callback: (file: TFile) => void, ctx?: unknown): EventRef;
	}
}
