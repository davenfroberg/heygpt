require('dotenv').config();
import {streamGpt} from "./gpt-connector";

async function main() {
    await streamGpt();
}

main();
