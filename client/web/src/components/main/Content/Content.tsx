import type { BaseComponent } from "@/lib"

export type ContentProps = BaseComponent & {

}
export default function Content({ children, className }: ContentProps) {
    const defaultClasses = 'bg-gray-900 min-h-200'
    const finalClasses = [defaultClasses, className].join(' ')
    return (
        <section className={finalClasses}>
            {children}
        </section>
    )
}