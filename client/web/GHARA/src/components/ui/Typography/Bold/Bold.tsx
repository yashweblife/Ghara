export type BoldProps = {
    text: string
    className?: string
}

export default function Bold({ text, className = '' }: BoldProps) {
    const defaultClasses = "text-sky-400"
    const finalClasses = [defaultClasses, className ?? ''].join(' ')
    return (
        <b className={finalClasses}>{text}</b>
    )
}