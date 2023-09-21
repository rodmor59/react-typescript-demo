type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

function Greet(props: GreetProps) {
    return (
        <div>
            {
                props.isLoggedIn ?
                    `Welcome ${props.name}, you have ${props.messageCount} unread messages.`
                    :
                    `Welcome Guest`
            }
        </div>
    )
}

export default Greet