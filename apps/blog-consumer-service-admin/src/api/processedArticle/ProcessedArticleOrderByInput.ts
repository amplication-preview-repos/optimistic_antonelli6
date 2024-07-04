import { SortOrder } from "../../util/SortOrder";

export type ProcessedArticleOrderByInput = {
  authorName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
