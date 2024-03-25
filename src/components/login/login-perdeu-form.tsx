"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";
import style from "@/components/login/login-form.module.css";
import passwordLost from "@/actions/password-lost";

function ButtonForm() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar</Button>}</>;
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={style.form}>
        <Input label="E-mail / Usuário" name="login" type="text" />
        <input type="hidden" value={url} name="url" />
        <ErrorMessage error={state.error} />
        {state.ok ? <p style={{ color: "#4c1" }}>E-mail enviado</p> : <ButtonForm />}
      </form>
    </>
  );
}
