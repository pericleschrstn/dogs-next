"use client";

import React from "react";
import FeedIcon from "@/components/icons/feed-icon";
import EstatisticasIcon from "@/components/icons/estatisticas-icon";
import AdicionarIcon from "@/components/icons/adicionar-icon";
import SairIcon from "@/components/icons/sair-icon";
import styles from "@/components/conta/conta-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import Link from "next/link";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/estatisticas":
      return "Estatísticas";
    case "/conta/postar":
      return "Poste sua foto";
    default:
      return "Minha conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const pathname = usePathname();

  function handleLogout() {
    // userLogout();
  }

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <Link href={"/conta"} className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link href={"/conta/estatisticas"} className={pathname === "/conta/estatisticas" ? "active" : ""}>
          <EstatisticasIcon />
          {mobile && "Estatistícas"}
        </Link>
        <Link href={"/conta/postar"} className={pathname === "/conta/postar" ? "active" : ""}>
          <AdicionarIcon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
