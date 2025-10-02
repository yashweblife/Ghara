import type { BaseComponent } from "@/lib";

export type HeadingProps = BaseComponent & {
    variant?: string
}

export default function Heading({ variant = 'h1', children, className = '' }: HeadingProps) {
    const defaultClasses = ''
    const finalClasses = [defaultClasses, className].join(' ')
    if (variant === 'h2') return <h2 className={finalClasses}>{children}</h2>
    if (variant === 'h3') return <h3 className={finalClasses}>{children}</h3>
    if (variant === 'h4') return <h4 className={finalClasses}>{children}</h4>
    if (variant === 'h5') return <h5 className={finalClasses}>{children}</h5>
    if (variant === 'h6') return <h6 className={finalClasses}>{children}</h6>
    return <h1 className={finalClasses}>{children}</h1>
}