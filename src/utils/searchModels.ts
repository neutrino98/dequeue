export async function searchModels (model, search, prevCursor, paginationCount) {
  let findOptions = search ? {
    $or:
    [
            { surname: { $regex: search, $options : 'i' } },
            { doctorSpecialty: { $regex: search, $options : 'i' } },
            { doctorCategory: { $regex: search, $options : 'i' } }
    ]
  }
      : {}
  let pagesCount = Math.ceil(
      (await model.find(findOptions).count() / paginationCount))
  console.log('options: ', findOptions)
  console.log('model: ', model)
  let models = await model.find(findOptions).
      limit(paginationCount).
      skip(paginationCount * prevCursor) // .sort({ created_at: -1 })
  console.log(models)
  return { models, pagesCount, prevCursor }
}
