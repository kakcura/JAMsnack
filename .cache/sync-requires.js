// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/space/Hello/JAMstack/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/space/Hello/JAMstack/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/space/Hello/JAMstack/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/space/Hello/JAMstack/src/pages/page-2.js"))
}

