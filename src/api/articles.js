import client from "./client";

export const getArticles = () => client.get("/articles");
export const getArticleId = id => client.get(`/articles/${id}`);
