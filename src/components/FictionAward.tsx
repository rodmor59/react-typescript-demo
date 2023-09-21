type fictionAwardProps = {
    children: React.ReactNode
}

function FictionAward (props: fictionAwardProps) {
    return <div>{props.children}</div>
}

export default FictionAward