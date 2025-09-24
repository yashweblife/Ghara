// Define the available literal values for each prop to enforce strict typing
type ButtonVariant = 'solid' | 'outlined' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonRounded = 'sm' | 'md' | 'lg' | 'full' | 'pill';
type IconPlacement = 'left' | 'right' | 'top' | 'bottom';

// Define the main component props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: React.ReactNode;
    placement?: IconPlacement;
    rounded?: ButtonRounded;
}

/**
 * A Gorgeous, Customizable, and Type-Safe Button Component
 */
export default function Button({
    variant = 'solid',
    size = 'md',
    icon,
    placement = 'left',
    text = '',
    rounded = 'md',
    onClick,
    className = '',
    ...rest
}: ButtonProps) {

    const baseStyles =
        'font-semibold transition duration-200 ease-in-out focus:outline-none focus:ring-4 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

    const roundedClasses: Record<ButtonRounded, string> = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full aspect-square',
        pill: 'rounded-full',
    };

    const sizeClasses: Record<ButtonSize, string> = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-5 py-2.5',
        lg: 'text-lg px-7 py-3.5',
    };

    const variantClasses: Record<ButtonVariant, string> = {
        // Gorgeous Solid Variant
        solid:
            'bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/50 focus:ring-sky-300',
        // Elegant Outlined Variant
        outlined:
            'bg-white text-sky-600 border border-sky-600 hover:bg-sky-50 hover:border-sky-700 focus:ring-sky-300',
        // Subtle Ghost Variant
        ghost:
            'bg-transparent text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-300',
    };


    // Determine flex direction and gap based on placement
    const iconLayoutClasses: Record<IconPlacement, string> = {
        left: 'flex-row gap-2',
        right: 'flex-row-reverse gap-2',
        top: 'flex-col gap-1',
        bottom: 'flex-col-reverse gap-1',
    };

    const layoutClass = icon ? iconLayoutClasses[placement] : 'flex-row';


    const finalClasses = [
        baseStyles,
        roundedClasses[rounded],
        sizeClasses[size],
        variantClasses[variant],
        layoutClass,
        'whitespace-nowrap',
        className, // Merge external classes last
    ].join(' ');

    return (
        <button
            className={finalClasses}
            onClick={onClick ?? onClick}
            // Spread the rest of the props (type, disabled, etc.)
            {...rest}
        >
            {/* Render the icon if provided */}
            {icon ?? icon}

            {/* Render the text */}
            <span>{text}</span>
        </button>
    );
};
