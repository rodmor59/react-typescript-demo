type GreetProps = {
    name: string
}

function Greet(props: GreetProps) {
    return (
        <div>
            Welcome {props.name}, you have 10 unread messages.
        </div>
    )
}

export default Greet