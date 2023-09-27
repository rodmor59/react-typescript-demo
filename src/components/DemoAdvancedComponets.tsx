import Counter from "./class/Counter";
import Auth from "./auth/Auth";
import List from "./generics/List";

function DemoAdvancedComponents () {

    return <div>
        <h2>Advanced Componets</h2>
        <h3>Counter Class</h3>
        <Counter message='The count is: '/>
        <h3>Pass Profile Component as Props to Private Component</h3>
        <Auth />
        <h3>List Component (Generic Props)</h3>
        <List
            itemName="Star Wars Characters"
            items={['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Darth Vader', 'Emperor Palpatine']}
            onClick={(item) => console.log(item)}
        />
        <List
            itemName="numbers"
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            onClick={(item) => console.log(item)}
        />
        <List
            itemName="Cyberpunk 2077 Characters (As Objects)"
            items={[
                {
                    firstName: 'V',
                    lastName: 'just V',
                    placeOfBirth: 'The Badlands',
                },
                {
                    firstName: 'Alt',
                    lastName: 'Cunningham',
                    placeOfBirth: 'Night City',
                },
                {
                    firstName: 'Johnny',
                    lastName: 'Silverhand',
                    gender: 'College Station, Texas',
                },
                {
                    firstName: 'Judy',
                    lastName: 'Alvarez',
                    placeOfBirth: 'Night City',
                },
                {
                    firstName: 'Panam',
                    lastName: 'Palmer',
                    placeOfBirth: 'The Badlands',
                },
                {
                    firstName: 'Goro',
                    lastName: 'Takemura',
                    placeOfBirth: 'Japan',
                },
                {
                    firstName: 'Saburo',
                    lastName: 'Arasaka',
                    placeOfBirth: 'Japan',
                },
                {
                    firstName: 'Yorinobu',
                    lastName: 'Arasaka',
                    placeOfBirth: 'Japan',
                }
            ]}
            onClick={(item) => console.log(item)}
        />
    </div>
}

export default DemoAdvancedComponents