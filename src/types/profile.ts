import type { ComponentType } from "react"

export interface LinkContaco {
    label: string,
    url: string,
    icono: ComponentType<{ size?: number; color?: string }>;
}

export interface ProfileHero{
    name: string,
    rol: string,
    description: string,
    photoURL: string,
    links: LinkContaco[]
}