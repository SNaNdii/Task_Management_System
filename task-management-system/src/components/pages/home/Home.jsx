import { NavBar } from "../../NavBar"
import { AddTaskDemo } from "./AddTaskDemo"
import { HomeTop } from "./HomeTop"
import { Footer } from "../../Footer"
import { Explore } from "./Explore"

export const Home = () => {

    return (
        <>
            <NavBar/>
            <HomeTop/>
            <AddTaskDemo/>
            <Explore/>
            <Footer/>
        </>
    )
}