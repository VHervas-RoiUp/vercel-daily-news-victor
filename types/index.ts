import { components } from './api';

/* Data types re-export to be more usable */
export type Article = components['schemas']['Article'];
export type Category = components['schemas']['Category'];
export type BreakingNews = components['schemas']['BreakingNews'];
export type Subscription = components['schemas']['Subscription'];
export type PaginationMeta = components['schemas']['PaginationMeta'];

export type ArticleListResponse = components['schemas']['ArticleListResponse'];
export type ArticleResponse = components['schemas']['ArticleResponse'];
export type CategoryListResponse =
  components['schemas']['CategoryListResponse'];
export type BreakingNewsResponse =
  components['schemas']['BreakingNewsResponse'];
export type SubscriptionResponse =
  components['schemas']['SubscriptionResponse'];
export type ErrorResponse = components['schemas']['ErrorResponse'];
