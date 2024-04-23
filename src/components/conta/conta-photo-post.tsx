"use client";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";
import styles from "@/components/conta/conta-photo-post.module.css";
import photoPost from "@/actions/photo-post";

function ButtonForm() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar</Button>}</>;
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = React.useState("");
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photopost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input onChange={handleImgChange} type="file" name="img" id="img" className={styles.file} />
        <ErrorMessage error={state.error} />
        <ButtonForm />
      </form>
      <div>
        <div className={styles.preview} style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </section>
  );
}
