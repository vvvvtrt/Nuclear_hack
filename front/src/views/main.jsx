import React from "react";
import Waller from "../components/hierarhyWaller/waller.jsx";
import PermanentNavigation from "../components/navigation/PermanentNavigation.jsx";
import Field from "../components/field/OwnFiled.jsx";
import '../App.css'

const Main = () => {

    return(<div className="wrapper-main">
    <PermanentNavigation></PermanentNavigation>
    <Field></Field>
    {/* <SideBar></SideBar> */}
    {/* <Waller></Waller> */}
    </div>)
}

export default Main;