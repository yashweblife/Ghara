import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
    children?: ReactNode,
    variant?: "default" | "primary" | "secondary",
    size?: "small" | "medium" | "large",
    className?: string
}
const defaultStyle = 'px-20'
const variants = {
    default: 'bg-red-200',
    primary: 'bg-red-500',
    secondary: 'bg-red-100',
}
const sizes = {
    small: 'p-5',
    medium: 'p-7',
    large: 'p-10'
}

export default function Button({
    className,
    children,
    variant = "default",
    size = "medium",
    ...props
}: ButtonProps) {

    const styles = `${defaultStyle} ${variants[variant]} ${sizes[size]} ${className ?? ''}`
    console.log(styles)
    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}