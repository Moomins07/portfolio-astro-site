import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get('query');

  //   Handle if query is not present
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: 'Query param is missing',
      }),
      {
        status: 400, // Bad request
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection(
    'blog'
  );

  // Filter articles based on query
  const searchResults = allBlogArticles.filter((article) => {
    const lowerCaseQuery = query!.toLowerCase();

    const tagMatch: boolean = article.data.tags.some(
      (tag) => ('#' + tag).toLowerCase() === lowerCaseQuery
    );

    const titleMatch: boolean = article.data.title
      .toLowerCase()
      .includes(lowerCaseQuery);

    const bodyMatch: boolean = article.body
      .toLowerCase()
      .includes(lowerCaseQuery);

    const slugMatch: boolean = article.slug
      .toLowerCase()
      .includes(lowerCaseQuery);

    return titleMatch || slugMatch || bodyMatch || tagMatch;
  });

  return new Response(JSON.stringify(searchResults), {
    status: 200, // Successful request
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
