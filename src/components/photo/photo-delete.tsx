"use client";

import React from "react";
import styles from "./photo-delete.module.css";
import photoDelete from "@/actions/photo-delete";

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Deseja deletar a foto?");
    if (confirm) {
      await photoDelete(id);
    }
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
}
