import type { BaseComponent } from "../../../lib"
export type CardHolderProps = BaseComponent & {
}
export function CardHolder({ children, className }: CardHolderProps) {
    const defaultClasses = 'rounded-2xl shadow-2xl ring-sky-950 bg-cyan-950 w-full p-5 flex justify-center flex-col md:flex-row gap-5 flex-wrap'
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <dt className={finalClasses}>
            {children}
        </dt>
    )
}
export type CardImageProps = {
    src: string
    alt?: string
    className?: string
}
export function CardImage({ src, alt = '', className = '' }: CardImageProps) {
    const defaultClasses = "w-full p-5 rounded-t-lg"
    const finalClasses = [defaultClasses, className].join(' ')
    console.log('test', finalClasses)
    return (
        <div className={finalClasses}>
            {
                src ?
                    (
                        <figure>
                            <div className="w-full bg-gray-800"></div>
                            <img src={src} alt="image" className='aspect-square max-h-100' />
                            {alt ? <figcaption className="sr-only">{alt}</figcaption> : null}
                        </figure>
                    ) : null
            }
        </div>
    )
}
export type CardHeaderProps = BaseComponent & {

}
export function CardHeader({ children }: CardHeaderProps) {
    return (
        <header className="text-2xl p-5">
            {children}
        </header>
    )
}
export type CardContentProps = BaseComponent & {
}
export function CardContent({ children }: CardContentProps) {
    return (
        <dl className="p-5">
            {children}
        </dl>
    )
}
export type CardProps = BaseComponent & {
}
export default function Card({ children, className }: CardProps) {
    const defaultClasses = "rounded-2xl shadow-2xl ring-sky-950 bg-gray-900 max-w-sm grid grid-cols-1"
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <article className={finalClasses}>
            {children}
        </article>
    )
}