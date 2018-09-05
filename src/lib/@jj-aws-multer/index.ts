
import { S3, config as awsConfig } from "aws-sdk";
import { InternalServerError } from "ts-httpexceptions";
import { StorageEngine } from "multer";
import { AwsFile } from "lib/@jj-aws-multer/interface/awsFile";

export class AwsMulterStorage implements StorageEngine {
    currentSize = 0;
    bucket = "";
    constructor(bucket:string, accessKey:string, secretAccessKey:string) {
       awsConfig.update({
            accessKeyId: accessKey ,
            secretAccessKey: secretAccessKey
        });
        this.bucket =bucket;
    }
    
    _handleFile(req: Express.Request, file: Express.Multer.File, cb: (error?: any, info?: AwsFile) => void) {
        try {
            const aws = new S3();
            const formattedFileName = `${Date.now()}_${file.originalname}`;
            const upload = aws.upload({
                Bucket: this.bucket,
                Key: formattedFileName,
                Body: (file as any).stream,
                ACL: 'public-read'
            });
            const self = this;
            upload.on('httpUploadProgress', function (ev) {
                if (ev.total) self.currentSize = ev.total
            })
            upload.send((err:any,result:any) => {
                if(err) {
                    console.log("ERRROR",err);
                    cb(new InternalServerError(err));
                }
                
                cb(
                    null,
                    {
                        size: self.currentSize,
                        filename: formattedFileName,
                        etag: result.ETag,
                        versionId: result.VersionId,
                        location: result.Location
                    } as AwsFile
                );
            
                
            });
       
       } catch (exception) {
            console.log(exception);
            cb(new InternalServerError(exception));
       }
    }
    
    _removeFile(req: Express.Request, file: Express.Multer.File, cb: (error: Error) => void) {
        try { 
            const aws = new S3();
            aws.deleteObject(
                {
                    Bucket: this.bucket,
                    Key: file.originalname
                },
                (err:any, data:any) => {
                    if(err) {
                        cb(new InternalServerError(err));
                    }
                    cb(null);
                }
            )
        } catch(exception) {
            cb(new InternalServerError(exception));
        }
    }
}