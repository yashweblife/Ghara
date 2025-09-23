import type { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text?: ReactNode
    icon?: ReactNode
    placement?: 'left' | 'right' | 'top' | 'bottom'
    size?: 'sm' | 'md' | 'lg'
    variant?: 'solid' | 'primary' | 'outlined'
    rounded?: 'full' | 'md' | 'lg'
    className?: string
    click?: () => void
}


export default function Button({
    text,
    icon,
    click,
    ...props
}: ButtonProps) {

    return (
        <button onClick={click} className='' {...props}>
            {icon && <span aria-hidden='true' className='flex items-center'>{icon}</span>}
            {text && <span aria-hidden='true' className=''>{text}</span>}
        </button>
    )
}