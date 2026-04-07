export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://blueprintglobal.io/sitemap.xml',
  };
}
