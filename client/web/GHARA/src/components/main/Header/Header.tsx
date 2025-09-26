import type { BaseComponent } from '@/lib';
import Logo from '../../../../public/logo.svg';

export type HeaderProps = BaseComponent & {
    title?: string
}
export default function Header({ children, title }: HeaderProps) {

    return (
        <header
            className="dark:bg-gray-900 py-10 px-2 flex-col w-full flex md:flex-row items-center align-middle md:justify-between md:px-5 md:py-5 drop-shadow-2xl shadow-2xl"
        >
            <div className='flex gap-3 items-center justify-center md:w-full'>
                <img src={Logo} alt="logo" className="w-[50px]" />
                <h1
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                >
                    {title ?? 'Ghara'}
                </h1>
            </div>
            <nav
                className="w-full md:w-1/2 flex gap-1 justify-evenly mt-3 md:mt-0"
            >
                {children}
            </nav>
        </header>
    )
}