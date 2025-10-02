import type { BaseComponent } from "@/lib";
import { type JSX } from "react";

export type HeadingProps = BaseComponent & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
const headingStyles: Record<NonNullable<HeadingProps["variant"]>, string> = {
    h1: "text-4xl font-extrabold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium uppercase tracking-wide",
};
export default function Heading({
    variant = 'h1',
    children,
    className = '',
    ...props
}: HeadingProps) {
    const Tag: keyof JSX.IntrinsicElements = variant
    const defaultClasses = headingStyles[variant]
    const finalClasses = [defaultClasses, className].join(' ')
    return (<Tag className={finalClasses}>{children}</Tag>)
}