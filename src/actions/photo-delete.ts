"use server";

import { PHOTO_DELETE } from "@/functions/api";
import ApiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;

  try {
    if (!token) throw new Error("Token inválido");
    const { url } = PHOTO_DELETE(id);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Erro ao deletar foto");
  } catch (error: unknown) {
    return ApiError(error);
  }
  revalidateTag("photos");
  redirect("/conta");
}
