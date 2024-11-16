import { theme } from "./Theme"

type FontPropsType = {
  /*   family?: string */
    weight?: number
  /*   color?: string */
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font= ({weight, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`