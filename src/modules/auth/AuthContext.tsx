import React, { createContext, useState } from 'react'
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { RoleTypesEnum } from '../../domain/enums/RoleTypes'
import { User } from "../../domain/models/User"
import { publicRoutes, routesSuperAdmin } from './appRoutes'

interface authSession{
    isLoggedIn:boolean,
    token?:string,
    loggedUser?:User,
    meta:{
        expiresOn:number,
        time:number
    }
}

type AuthContextSession = authSession & {
    setLoggedIn:(token:string, user:User)=>void,
    logOut:()=>void
}

export const SESSION_KEY = 'aludhfavgdfa'
const DEFAULT_SESSION:authSession = {
    isLoggedIn:false,
    meta:{
        expiresOn:-1,
        time:0
    }
}

export const getLocalSession = ():authSession=>{
    const stringySession = localStorage.getItem(SESSION_KEY)

    if(stringySession){
        return JSON.parse(stringySession)    
    }

    return DEFAULT_SESSION

}

export const getSessionToken = () => {
    const session = getLocalSession()
    if(session){
        return session.token
    }
    return undefined
}  

export const activateSession = (token?:string, user?:User) =>{
    const now = new Date()

    const session = {
        isLoggedIn:true,
        token,
        loggedUser: user,
        meta:{
            time:now.getMilliseconds(),
            expiresOn:now.getMilliseconds() + (60*60*24)
        }
    } as authSession

    localStorage.setItem('Authorization', JSON.stringify(token))
    localStorage.setItem(SESSION_KEY,JSON.stringify(session))

    return session 
}
    
const desactivateSession = () => {
    const session = DEFAULT_SESSION
    localStorage.setItem(SESSION_KEY,JSON.stringify(session))
    return session
}

const initialSession = getLocalSession()

const AuthContext = createContext<AuthContextSession>({
    ...initialSession,
    setLoggedIn:(token:string, user:User)=>{},
    logOut:()=>{}
})

export const AuthProvider:React.FC<{children:React.ReactNode}> = ({children})=>{

    const  [auth, setAuth] = useState<authSession>(initialSession)
    const navifate = useNavigate()

    const logOut = () =>{
        setAuth(DEFAULT_SESSION)
        desactivateSession()
        navifate(publicRoutes.login)
    }
    
    const setLoggedIn = (token:string, user:User) => {
        setAuth(activateSession(token, user))
        {
            user.role_id === RoleTypesEnum.superadmin ? navifate(routesSuperAdmin.area) : 
            user.role_id === RoleTypesEnum.admin ? navifate(`/signup`) : 
            user.role_id === RoleTypesEnum.preceptor ? navifate(`/signup`) : 
            user.role_id === RoleTypesEnum.teacher ? navifate(`/signup`) : 
            user.role_id === RoleTypesEnum.user ? navifate(`/signup`) : 
            navifate(publicRoutes.login)
        }
        
    } 

    const authContextSession:AuthContextSession ={
        ...auth,
        setLoggedIn,
        logOut
    }

    return(
        <AuthContext.Provider value={authContextSession}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    return useContext<AuthContextSession>(AuthContext)
}