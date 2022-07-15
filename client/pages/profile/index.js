import MainLayout from "../../components/layouts/Main"
import { Button } from "@mui/material"
import { useUserContext } from "../../components/context/User"
import { useEffect } from "react"
import { useRouter } from "next/router"

const UserProfile = () => {
  const router = useRouter()
  const { logout, user } = useUserContext()
  useEffect(() => {
    if (!user.loading && !user.auth) {
      router.push(`/`)
    }
  }, [user])
  console.log(user)
  return (
    <MainLayout>
      <h1>User Profile</h1>
      <Button color="inherit" onClick={logout}>Logout</Button>
      <Button color="inherit" onClick={() => {
        router.push(`/profile/orders`)
      }}>Мои бронирования</Button>

    </MainLayout>
  )
}

export default UserProfile