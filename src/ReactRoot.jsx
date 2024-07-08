import {Home} from "./presenter/homePresenter.jsx";
import { observer } from "mobx-react-lite"
import {  createHashRouter,  RouterProvider} from "react-router-dom";

function makeRouter(model){
    return createHashRouter([
        { 
            path: "/", 
            element:<Home model={model} />, 
        },
    ])
}

const ReactRoot = observer((props)=>{
    return (<div>
                <RouterProvider router={makeRouter(props.model)}/>
            </div>
           );
})

export { makeRouter, ReactRoot }