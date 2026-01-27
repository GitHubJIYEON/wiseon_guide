export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://guide.wiseon.io/sitemap.xml', // 실제 도메인으로 변경
  }
}
