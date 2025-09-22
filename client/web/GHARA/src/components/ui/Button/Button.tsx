import type { ReactNode } from "react"

export type ButtonProps = {
    children?: ReactNode
}
export default function Button({ children }: ButtonProps) {
    return (
        <button>
            {children}
        </button>
    )
}