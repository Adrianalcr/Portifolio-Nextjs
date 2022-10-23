import type { Prismic } from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/src/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = getPrismicClient(process.env.PRISMIC_API_ENDPOINT,{
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}