import { Module } from "@nestjs/common";
import { ProcessedArticleModuleBase } from "./base/processedArticle.module.base";
import { ProcessedArticleService } from "./processedArticle.service";
import { ProcessedArticleController } from "./processedArticle.controller";
import { ProcessedArticleResolver } from "./processedArticle.resolver";

@Module({
  imports: [ProcessedArticleModuleBase],
  controllers: [ProcessedArticleController],
  providers: [ProcessedArticleService, ProcessedArticleResolver],
  exports: [ProcessedArticleService],
})
export class ProcessedArticleModule {}
