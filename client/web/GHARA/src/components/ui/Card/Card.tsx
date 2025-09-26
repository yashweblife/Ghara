import type { BaseComponent } from "../../../lib"
export type CardHolderProps = BaseComponent & {
}
export function CardHolder({ children, className }: CardHolderProps) {
    const defaultClasses = 'rounded-2xl shadow-2xl ring-sky-950 bg-cyan-950 w-full p-5 flex justify-center flex-col md:flex-row gap-5 flex-wrap'
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <div className={finalClasses}>
            {children}
        </div>
    )
}

export type CardImageProps = {
    src: string
    className?: string
}
export function CardImage({ src, className = '' }: CardImageProps) {
    const defaultClasses = "w-full p-5 rounded-t-lg"
    const finalClasses = [defaultClasses, className].join(' ')
    console.log('test', finalClasses)
    return (
        <div className={finalClasses}>
            <img src={src} alt="image" className='aspect-square max-h-100' />
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
    const defaultClasses = "rounded-2xl shadow-2xl ring-sky-950 bg-gray-900 max-w-sm grid grid-cols-1"
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <div className={finalClasses}>
            {children}
        </div>
    )
}