"use server";

import { PHOTO_GET } from "@/functions/api";
import ApiError from "@/functions/api-error";
import { Photo } from "./photos-get";

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comment: Comment[];
};

export default async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, { next: { revalidate: 60, tags: ["photos", "comment"] } });
    if (!response.ok) throw new Error("Falha ao buscar a foto");
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: "" };
  } catch (error) {
    return ApiError(error);
  }
}
