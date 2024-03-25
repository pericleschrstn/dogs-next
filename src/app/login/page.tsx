import LoginForm from "@/components/login/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Faça login na sua conta",
};

export default async function LoginPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </div>
  );
}
