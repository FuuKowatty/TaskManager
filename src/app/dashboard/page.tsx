"use client"

import { useAppSelector } from "@/redux/hooks"
import { redirect } from "next/navigation"

export default function Dashboard() {
    const res = useAppSelector(state => state.usersReducer)
    if(!res.loggedUser) return redirect('/login')

    return(
        <h1>Dashboard</h1>
    )
}