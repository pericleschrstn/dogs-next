import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import style from "@/components/feed/feed-photos.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${style.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li key={photo.id + i} className={style.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image src={photo.src} alt={photo.title} width={1500} height={1500} sizes="80vh" />
            <span className={style.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
