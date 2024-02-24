import { a as getCollection } from './404_BECTP9x-.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "Query param is missing"
      }),
      {
        status: 400,
        // Bad request
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const allBlogArticles = await getCollection(
    "blog"
  );
  const searchResults = allBlogArticles.filter((article) => {
    const lowerCaseQuery = query.toLowerCase();
    const tagMatch = article.data.tags.some(
      (tag) => ("#" + tag).toLowerCase() === lowerCaseQuery
    );
    const titleMatch = article.data.title.toLowerCase().includes(lowerCaseQuery);
    const bodyMatch = article.body.toLowerCase().includes(lowerCaseQuery);
    const slugMatch = article.slug.toLowerCase().includes(lowerCaseQuery);
    return titleMatch || slugMatch || bodyMatch || tagMatch;
  });
  return new Response(JSON.stringify(searchResults), {
    status: 200,
    // Successful request
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { GET };
