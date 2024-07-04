import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedArticleServiceBase } from "./base/processedArticle.service.base";

@Injectable()
export class ProcessedArticleService extends ProcessedArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
