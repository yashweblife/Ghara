import type { ReactNode } from "react"

export function CardHeader() { }


export type CardProps = {
    children?: ReactNode
}
export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-2xl shadow-2xl ring-sky-950 bg-gray-900 w-full p-20">
            {children}
        </div>
    )
}