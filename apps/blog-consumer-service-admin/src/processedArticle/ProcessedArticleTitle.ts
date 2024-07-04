import { ProcessedArticle as TProcessedArticle } from "../api/processedArticle/ProcessedArticle";

export const PROCESSEDARTICLE_TITLE_FIELD = "authorName";

export const ProcessedArticleTitle = (record: TProcessedArticle): string => {
  return record.authorName?.toString() || String(record.id);
};
