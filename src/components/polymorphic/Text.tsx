type TextOwnProps<E extends React.ElementType> = {
    size?: 'small' | 'medium' | 'large',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

function Text<E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as
}: TextProps<E>) {
    const Component = as || 'div'
    return (
        <Component className={`class-witdh-${size}-${color}`}>{children}</Component>
    )
}

export default Text