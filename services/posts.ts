import { allPosts, allSeries } from "@/.contentlayer/generated"

export function getSeriesList() {
  return allSeries
}

export function getPosts() {
  return allPosts
}

export function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}
