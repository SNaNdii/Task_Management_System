import { NavBar } from "../NavBar"
import { AddTaskDemo } from "./AddTaskDemo"
import { HomeTop } from "./HomeTop"

export const Home = () => {

    return (
        <>
            <NavBar/>
            <HomeTop/>
            <AddTaskDemo/>
        </>
    )
}