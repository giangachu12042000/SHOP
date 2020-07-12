export const apiEndpoint = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

export const ARTICLE_CATEGORY = {
  guide: 'guide',
  news: 'news'
}

export const LANGUAGE = {
  en: {
    code: 'en',
    name: 'English'
  },
  vn: {
    code: 'vi',
    name: 'Tiếng Việt'
  }
}
