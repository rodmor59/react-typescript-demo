type ContainerProps = {
    styles: React.CSSProperties
}

function Container (props: ContainerProps) {
    return (
        <div style={props.styles}>
            Styles Container
        </div>
    )
}

export default Container