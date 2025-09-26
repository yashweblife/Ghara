import type { BaseComponent } from "@/lib"

export type ContentProps = BaseComponent & {

}
export default function Content({ children }: ContentProps) {
    return (
        <div className='bg-gray-900 min-h-200'>
            {children}
        </div>
    )
}