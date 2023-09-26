import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

export default function DemoTypeScriptContextHook () {
    return <div>
        <h3>useContext: ThemeContext and Box Components</h3>
        <ThemeContextProvider>
            <Box />
        </ThemeContextProvider>
    </div>
}