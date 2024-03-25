"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";
import style from "@/components/login/login-form.module.css";
import passwordReset from "@/actions/password-reset";

function ButtonForm() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Resetando...</Button> : <Button>Resetar</Button>}</>;
}

export default function LoginResetForm({ keyToken, login }: { keyToken: string; login: string }) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={style.form}>
        <Input label="Nova senha" name="password" type="password" />
        <input type="hidden" value={keyToken} name="key" />
        <input type="hidden" value={login} name="login" />
        <ErrorMessage error={state.error} />
        <ButtonForm />
      </form>
    </>
  );
}
