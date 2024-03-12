import { useRouteError } from "react-router-dom"

const Error: React.FC = () =>{
    const error:any = useRouteError();
    console.log("err",error);
    return (
        <div>
            <h1>ERROR</h1>
            
            <h3>{error.statusText}</h3>
        </div>
    )
}
export default Error;