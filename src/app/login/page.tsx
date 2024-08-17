'use client'
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Import or define your Logo component here
import Logo from "@/app/UI/logo/page" // Update this path as necessary

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            await axios.post("/api/users/login", user)
            toast.success("Login Successful")
            router.push("/profile")
        } catch (error: any) {
            toast.error("Email or Password is incorrect", error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-wrap flex-col items-center justify-center bg-gray-900 text-gray-100">
            <div className="mb-6 flex flex-col items-center">
                <div className="h-12 w-12 text-gray-200" />
                <Logo/> 
                <h1 className="text-3xl font-bold text-gray-100">WᴇʙʟLIx</h1>
            </div>
            <Card className="w-[300px] sm:w-[350px] bg-gray-800 text-gray-200">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="bg-gray-700 text-gray-300 placeholder-gray-500"
                        />
                        <Link className="text-right text-xs text-gray-400 hover:underline hover:text-gray-300" href='/forgotpassword'>Forgot Password</Link>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="bg-gray-700 text-gray-300 placeholder-gray-500"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        disabled={user.email.length > 0 && user.password.length > 0 ? false : true}
                        onClick={onLogin}
                    >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Login"}
                    </Button>
                    <Link href='/signup'>
                        <Button variant='outline' className="border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-gray-100">
                            Signup
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
