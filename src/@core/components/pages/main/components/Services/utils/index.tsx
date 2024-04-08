export const getLng = (locale: string, item: any, lng: string) => {
  switch (locale) {
    case 'en':
      return item[`${lng}_en`]
    case 'ru':
      return item[`${lng}_ru`]
    case 'uz':
      return lng !== 'title' ? item[`${lng}_uz`] : item[`${lng}`]
    default:
      return item[`${lng}_ru`]
  }
}
