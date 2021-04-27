import {useContext} from 'react'
import {GlobalContext} from "../App"

export default function UseContextComponetn() {
    const msg = useContext(GlobalContext);
    return <h1> {msg}</h1>;
}
