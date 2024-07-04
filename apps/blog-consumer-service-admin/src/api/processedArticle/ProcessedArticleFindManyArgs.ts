import { ProcessedArticleWhereInput } from "./ProcessedArticleWhereInput";
import { ProcessedArticleOrderByInput } from "./ProcessedArticleOrderByInput";

export type ProcessedArticleFindManyArgs = {
  where?: ProcessedArticleWhereInput;
  orderBy?: Array<ProcessedArticleOrderByInput>;
  skip?: number;
  take?: number;
};
