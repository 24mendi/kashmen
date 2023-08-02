import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) throw new Error('There is not auth provider')

    return context
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    const handleSingUp = (username, password) =>{
        try{
            let user = {name:username, pass:password}
            console.log('user Registered', user)
            setUserInfo(user)
            setLoading(false)
        }catch(err){
            console.log(`Error in handleSignUp ${err}`)
            setLoading(true)
        }
    }

    return(
        <AuthContext.Provider value={{ handleSingUp, loading, userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

