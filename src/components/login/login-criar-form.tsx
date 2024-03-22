"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";
import style from "@/components/login/login-form.module.css";
import userPost from "@/actions/user-post";

function ButtonForm() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Cadastrando...</Button> : <Button>Cadastrar</Button>}</>;
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={style.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="E-mail" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <ButtonForm />
      </form>
    </>
  );
}
