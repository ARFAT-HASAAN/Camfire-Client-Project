import { useEffect, useState } from "react"
import firebaseApp from "../Pages/Firebase/firebaseApp"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth";


firebaseApp()
const Usefirebase = () => {
    const auth = getAuth();


    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isloading, setIsloading] = useState(true)
    const [admin, setAdmin] = useState(false)



    // new user 
    const RegesterUser = (email, password, history, location) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                const destination = location?.state?.from || '/'
                history.push(destination)

                const newUser = { email, password }
                setUser(newUser)
                userdata(email, password)

            })
            .catch((error) => {
                setError(error.meassage)
            })
            .finally(() => setIsloading(false))
    }



    // log out 
    const logOUT = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setIsloading(false)
            })
            .catch((error) => {
                setError(error.meassage)
            })
            .finally(() => setIsloading(false))


    }

    // observer 

    useEffect(() => {
        setIsloading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {


            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed
    }
        , [auth])


    //    previews user 

    const logIn = (email, password, history, location) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 


                const destination = location?.state?.from || '/'
                history.push(destination)
                setUser(res.user)

            })
            .catch((error) => {
                setError(error.meassage)
            })

            .finally(() => setIsloading(false))


    }

    const userdata = (email, password) => {
        const user = { email, password }
        // const url = `https://ancient-shelf-73698.herokuapp.com/user`
        fetch('https://ancient-shelf-73698.herokuapp.com/user', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
    }


    useEffect(() => {
        // console.log(user)
        // https://ancient-shelf-73698.herokuapp.com/user/tarek@gmail.com
        const url = `https://ancient-shelf-73698.herokuapp.com/user/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user?.email])

    return {
        admin,
        logIn,
        logOUT,
        user,
        RegesterUser,
        error,
        isloading

    }
}

export default Usefirebase;






