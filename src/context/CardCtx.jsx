import { createContext } from "react";

/**
 * @typedef TThumbnailConfig
 * @property {string} src
 * @property {string} alt
 *
 * @typedef TProjectConfig
 * @property {string} title
 * @property {string} description
 *
 * @typedef TCardProps
 * @property {TThumbnailConfig} thumbnailConfig
 * @property {TProjectConfig} projectConfig
 * @property {number} level
 * @property {import("react").ButtonHTMLAttributes['onClick']} onClickCard
 *
 * @typedef {TCardProps} TCardCtx
 */

/** @type {import("react").Context<TCardCtx>} */
const CardCtx = createContext({});

export default CardCtx;
