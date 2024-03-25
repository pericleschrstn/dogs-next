import LoginResetForm from "@/components/login/login-reset-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resete a senha | Dogs",
  description: "Reseta a senha da sua conta",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ searchParams }: ResetarSearchParams) {
  console.log(searchParams);
  return (
    <div className="animeLeft">
      <h1 className="title">Resetar a senha</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
