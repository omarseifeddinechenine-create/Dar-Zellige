import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import { LoginForm } from "./login-form"

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin")
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginForm />
    </div>
  )
}
