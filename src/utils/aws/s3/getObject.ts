import s3Client from "./client";

import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { BUCKET_NAME } from "../../contants";

export const getObectFromS3 = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
};
