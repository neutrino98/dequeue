export function enumValues<T> (e: Object): Array<T> {
  return Object.keys(e).map(k => e[k as any])
}
