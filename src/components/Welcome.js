import React,{Component} from "react";
import { user } from "./MyImage";

class Welcome extends Component{
    render(){
        return <h1 className="greenclass">{user.name}</h1>
    }
}

export default Welcome