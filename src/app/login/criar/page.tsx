import LoginCriarForm from "@/components/login/login-criar-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta | Dogs",
  description: "Crie sua conta",
};

export default async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}
