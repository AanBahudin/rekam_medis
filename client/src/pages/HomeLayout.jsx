import { Outlet } from "react-router"

const HomeLayout = () => {
  return (
    <div className="h-[100vh]">
      <Outlet />
    </div>
  )
}

export default HomeLayout