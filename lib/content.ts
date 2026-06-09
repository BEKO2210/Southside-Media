import data from "@/content/content.json";

/**
 * Zentraler Zugriff auf alle Website-Inhalte.
 * Inhalte werden ausschließlich in `content/content.json` gepflegt.
 */
export const content = data;
export type Content = typeof data;

export default content;
