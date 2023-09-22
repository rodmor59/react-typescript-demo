type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

type InputProps = {
    value: string,
    onChange: (event: InputChangeEvent) => void,
    handleChangeInternally?: boolean
}

const logMsgInputChangeHandled = 'Input change handled internally';

function Input (props: InputProps) {

    const { handleChangeInternally = false } = props

    function handleInputChange (event: InputChangeEvent) {
        // An input component can handle onChange in the same component or let a function received as a prop handle it
        if (handleChangeInternally) {
            console.log(logMsgInputChangeHandled, event)
            return
        }
        props.onChange(event)
    }

    return (
        <input type='text' value={props.value} onChange={handleInputChange}></input>
    )
}

export default Input