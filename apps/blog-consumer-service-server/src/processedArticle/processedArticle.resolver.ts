import * as graphql from "@nestjs/graphql";
import { ProcessedArticleResolverBase } from "./base/processedArticle.resolver.base";
import { ProcessedArticle } from "./base/ProcessedArticle";
import { ProcessedArticleService } from "./processedArticle.service";

@graphql.Resolver(() => ProcessedArticle)
export class ProcessedArticleResolver extends ProcessedArticleResolverBase {
  constructor(protected readonly service: ProcessedArticleService) {
    super(service);
  }
}
