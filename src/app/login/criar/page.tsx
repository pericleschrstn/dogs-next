import LoginCriarForm from "@/components/login/login-criar-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta | Dogs",
  description: "Crie sua conta",
};

export default async function CriarPage() {
  return (
    <main>
      <h1>Criar</h1>
      <LoginCriarForm />
    </main>
  );
}
