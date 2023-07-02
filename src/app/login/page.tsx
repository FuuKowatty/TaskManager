"use client"

import { login } from "@/redux/featrues/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getUsers } from "@/redux/services/fetchUsers"
import { useRouter } from "next/navigation"



export default function Login() {
    const router = useRouter()
    const response = useAppSelector(state => state.usersReducer)
    const dispatch = useAppDispatch()
    console.log(response)
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        await dispatch(getUsers())
        dispatch(login({
            email: 'emily.smith@example.com',
            password: 'securepass'
        }))
    }

    if(response.loggedUser) {
        router.push('/dashboard')
      }


    return(
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md bg-gray-700 p-8"
        >
            <label className="flex flex-col gap-1">
                Email
                <input type="text" placeholder="Email" className="p-1 rounded-sm" />
            </label>
            <label className="flex flex-col gap-1">
                Passowrd
                <input type="password" placeholder="Password" className="p-1 rounded-sm" />
            </label>

            <button className="bg-blue-700 py-1">Login</button>
        </form>
    )
}