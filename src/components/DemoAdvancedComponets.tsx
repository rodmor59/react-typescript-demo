import Counter from "./class/Counter";
import Auth from "./auth/Auth";

function DemoAdvancedComponents () {

    return <div>
        <h2>Advanced Componets</h2>
        <h3>Counter Class</h3>
        <Counter message='The count is: '/>
        <h3>Pass Profile Component as Props to Private Component</h3>
        <Auth />
    </div>
}

export default DemoAdvancedComponents