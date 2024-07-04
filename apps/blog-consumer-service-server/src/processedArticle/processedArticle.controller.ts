import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedArticleService } from "./processedArticle.service";
import { ProcessedArticleControllerBase } from "./base/processedArticle.controller.base";

@swagger.ApiTags("processedArticles")
@common.Controller("processedArticles")
export class ProcessedArticleController extends ProcessedArticleControllerBase {
  constructor(protected readonly service: ProcessedArticleService) {
    super(service);
  }
}
