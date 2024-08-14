'use client'
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import toast from "react-hot-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react" // Assuming you are using Lucide icons
import Webllix from "@/app/UI/webllix/page"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const [showProfileCard, setShowProfileCard] = useState(false)

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successfully')
            router.push('/login')
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data._id)
    }

    return (
        <div className="relative h-screen w-screen">
            {/* Full-page Webllix component */}
            <Webllix className="absolute inset-0 z-0" />

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <span className="ml-2 text-white text-xl font-semibold">Your Company</span>
                </div>
                <button
                    onClick={() => setShowProfileCard(!showProfileCard)}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                    <UserIcon className="w-6 h-6" />
                </button>
            </nav>

            {/* Profile Card positioned conditionally */}
            {showProfileCard && (
                <div className="absolute top-16 right-4 z-20">
                    <Card className="w-[300px] sm:w-[350px]">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">User Details</CardTitle>
                            <CardDescription>
                                {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Button onClick={getUserDetails}>Get User Details</Button>
                                <Button variant='outline' onClick={logout}>Logout</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}
