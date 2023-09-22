type PersonListProps = {
    names: {
        first: string,
        last: string,
    }[]
}


function PersonList (props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => 
                <h4 key={name.first}>{name.first} {name.last}</h4>
            )}
        </div>
    )
}

export default PersonList