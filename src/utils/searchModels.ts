export async function searchModels (model, search, prevCursor, paginationCount) {
  let pagesCount = Math.ceil(
      (await model.find(search).count() / paginationCount))
  let models = await model.find(search).
      limit(paginationCount).
      skip(paginationCount * prevCursor) // .sort({ created_at: -1 })
  return { models, pagesCount, prevCursor }
}
