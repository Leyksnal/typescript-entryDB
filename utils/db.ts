import mongoose from "mongoose";
const url: string = "mongodb://localhost/firsttypescript"

export default mongoose.connect(url).then((): void =>{
    return console.log(`Database is connected`)
}).catch((error): void =>{
    console.log(`not connected`)
})