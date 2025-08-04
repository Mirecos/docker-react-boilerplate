import axios from "axios";
import { _isIdentified } from "./routes";


export async function isIdentified () {
    const response = await axios.get(_isIdentified)

    return response.data;
}