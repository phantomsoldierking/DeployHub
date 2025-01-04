import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: process.env.id,
    secretAccessKey:process.env.key,
    endpoint: process.env.uri
})

export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "phantomsoldeirking-vercel",
        Key: fileName,
    }).promise();
    console.log(response);
}