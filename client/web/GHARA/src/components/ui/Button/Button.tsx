import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
    children?: ReactNode,
    variant?: "default" | "primary" | "secondary",
    size?: "small" | "medium" | "large",
    className?: string
}
const defaultStyle = 'px-1 py-2 rounded-md shadow-lg cursor-pointer hover:shadow-sm'
const variants = {
    default: 'bg-emerald-200',
    primary: 'bg-sky-500 text-white',
    secondary: 'bg-emerald-100',
}
const sizes = {
    small: 'px-5',
    medium: 'px-7',
    large: 'px-10'
}

export default function Button({
    className,
    children,
    variant = "default",
    size = "medium",
    ...props
}: ButtonProps) {

    const styles = `${defaultStyle} ${variants[variant]} ${sizes[size]} ${className ?? ''}`
    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}