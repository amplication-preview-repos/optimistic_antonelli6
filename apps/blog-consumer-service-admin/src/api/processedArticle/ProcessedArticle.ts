export type ProcessedArticle = {
  authorName: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  processedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
