import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}

function PersonList ({ names }: PersonListProps) {
    return (
        <div>
            {names.map(name => 
                <h4 key={name.first}>{name.first} {name.last}</h4>
            )}
        </div>
    )
}

export default PersonList