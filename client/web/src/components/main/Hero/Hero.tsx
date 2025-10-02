import type { BaseComponent } from "@/lib"
import bg from '../../../assets/bg.svg'
import bg1 from '../../../assets/bg1.svg'
import bg2 from '../../../assets/bg2.svg'
import bg3 from '../../../assets/bg3.svg'
import bg4 from '../../../assets/bg4.svg'
export type HeroProps = BaseComponent & {
    variant?: 'blob' | 'wave' | 'sunset' | 'warm' | 'cool'
}

export default function Hero({ children, variant = 'sunset' }: HeroProps) {
    const herobg = {
        blob: bg,
        wave: bg1,
        sunset: bg2,
        warm: bg3,
        cool: bg4
    }
    const defaultClasses = 'dark:bg-gray-900 bg-cover bg-left bg-gray-100 h-112 p-4 sm:p-8 flex justify-center items-center flex-col gap-3 bg-no-repeat bg-center z-1'
    const finalClasses = defaultClasses
    return (
        <div className={finalClasses} style={{
            backgroundImage: `url(${herobg[variant]})`
        }}>
            {children}
        </div>
    )
}