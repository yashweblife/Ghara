import type { ReactNode } from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
    className?: string
    center?: boolean
    responsive?: boolean
    bold?: boolean
}
/**
 * Text Component
 * - Center is false by default
 * - Responsive is true by default
 * - Bold is false by default
 * @param param0 
 * @returns 
 */
export default function Text({ children, className = '', center = false, responsive = true, bold = false, ...props }: TextProps) {
    const defaultClasses = 'dark:text-white'
    const centered = center ? responsive ? 'text-center md:text-left' : 'text-center' : ''
    const bolded = bold && 'font-bold'
    const finalClasses = [defaultClasses, className, centered, bolded].join(' ')
    return (
        <p className={finalClasses} {...props}>{children}</p>
    )
}