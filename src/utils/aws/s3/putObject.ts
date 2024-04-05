import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import { v4 as uuid } from "uuid";
import s3Client from "./client";

async function uploadToS3(file: File): Promise<{ key: string; error: string }> {
  const res = {
    key: "",
    error: "",
  };
  const key = uuid() + file.name;
  const command = new PutObjectCommand({
    Bucket: import.meta.env.VITE_BUCKET_NAME,
    Key: key,
    ContentType: "image/png",
  });
  try {
    const url = await getSignedUrl(s3Client, command);
    await axios.put(url, file);
    res.key = key;
  } catch (error: any) {
    console.error("Error", error);
    res.error = error.message;
  }
  return res;
}

export { uploadToS3 };
