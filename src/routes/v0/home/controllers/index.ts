import {MultipartFile} from "@tsed/multipartfiles";

import {
    Controller,
    Status,
    Post,
    Put,
    Get,
    Authenticated,
    BodyParams
} from "@tsed/common";
import { InternalServerError, BadRequest } from "ts-httpexceptions";
import { AwsFile } from "lib/@jj-aws-multer/interface/awsFile";


@Controller("/home")

export class HomeController {

    @Post("/")
    @Status(200,{description: "success",type: String})
    async create(@MultipartFile("file") file: AwsFile) {
        try {
            return file;
        } catch(exception){
            throw new InternalServerError(exception);
        }
    }

    @Put("/multiple")
    @Status(200,{description: "success",type: String})
    async createMultiple(@MultipartFile("files",4) files:AwsFile[],@BodyParams('fileLegends') params:string) {
        try {
            let legends:Array<string> = params.split(',');
            if ( legends.length != files.length ){
                 throw new BadRequest("array length of fileLegends should be the same as files");
            }
            return legends.map((x:string,i:number) => ({[x]:files[i]}))
        } catch (exception) {
            throw new InternalServerError(exception);
        }
    }


    @Get("/")
    async get() {
        console.log("GEEET");
        return "hello";
    }

}