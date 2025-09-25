import type { BaseComponent } from "../../../lib"
export type CardImageProps = {
    src: string
    className?: string
}
export function CardImage({ src, className = '' }: CardImageProps) {
    const defaultClasses = "w-full"
    const finalClasses = [defaultClasses, className].join(' ')
    console.log('test', finalClasses)
    return (
        <div className="w-full p-5">
            <img src={src} alt="image" className={finalClasses} />
        </div>
    )
}


export type CardHeaderProps = BaseComponent & {

}
export function CardHeader({ children }: CardHeaderProps) {
    return (
        <div className="text-2xl p-5">
            {children}
        </div>
    )
}
export type CardContentProps = BaseComponent & {
}
export function CardContent({ children }: CardContentProps) {
    return (
        <div className="p-5">
            {children}
        </div>
    )
}

export type CardProps = BaseComponent & {
}
export default function Card({ children, className }: CardProps) {
    const defaultClasses = "rounded-2xl shadow-2xl ring-sky-950 bg-gray-900 w-full"
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <div className={finalClasses}>
            {children}
        </div>
    )
}