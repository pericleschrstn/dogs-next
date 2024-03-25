import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a senha da sua conta",
};

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu</h1>
      <LoginPerdeuForm />
    </div>
  );
}
