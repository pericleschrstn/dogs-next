import Image from "next/image";
import Link from "next/link";
import styles from "@/components/header.module.css";

export default async function Header() {
  const user = false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"} className={styles.logo}>
          <Image src={"/assets/dogs.svg"} alt="Dogs" width={28} height={22} priority />
        </Link>
        {user ? (
          <Link href={"/conta"} className={styles.login}>
            dogs
          </Link>
        ) : (
          <Link href={"/login"} className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
