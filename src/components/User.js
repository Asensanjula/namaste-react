import { useEffect } from "react"

const User = () => {

    useEffect(() => {

         const intervalId = setInterval(()=> {
            console.log('Namaste FC OP')
        },1000)

        return () => {
            console.log('Use Effect Return')
            clearInterval(intervalId)
        }

    },[])

    return (
        <div className="user-card">
            <h2>Name : Asen De Silva</h2>
            <h3>Location : Sri Lanka</h3>
            <h3>Contact : @asensanjula</h3>
        </div>
    )
}

export default User;