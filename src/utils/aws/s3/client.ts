import { S3Client } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY_ID, AWS_ACCESS_SECRET } from "../../contants";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_ACCESS_SECRET,
  },
});

export default s3Client;
