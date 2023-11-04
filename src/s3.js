import dotenv from 'dotenv';
import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';

dotenv.config()

const region = "us-east-1"
const bucketName = "s3-react-shoes-img"
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY


const s3 = new aws.s3({
    region,
    accessKeyId,
    secretAccessKey,
    signaturVersion: 'v4'
})

export async function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')


    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const upLoadURL = await s3.getSignedUrlPromise('putObject', params)
    image
}


