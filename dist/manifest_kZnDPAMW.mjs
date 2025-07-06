import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_DYpRLEJf.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/harshad/code/proto-equator/","cacheDir":"file:///Users/harshad/code/proto-equator/node_modules/.astro/","outDir":"file:///Users/harshad/code/proto-equator/dist/","srcDir":"file:///Users/harshad/code/proto-equator/src/","publicDir":"file:///Users/harshad/code/proto-equator/public/","buildClientDir":"file:///Users/harshad/code/proto-equator/dist/client/","buildServerDir":"file:///Users/harshad/code/proto-equator/dist/server/","adapterName":"","routes":[{"file":"file:///Users/harshad/code/proto-equator/dist/blog/karnataka-senior-software-engineer-salary-guide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/karnataka-senior-software-engineer-salary-guide","isIndex":false,"type":"page","pattern":"^\\/blog\\/karnataka-senior-software-engineer-salary-guide\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"karnataka-senior-software-engineer-salary-guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/karnataka-senior-software-engineer-salary-guide.md","pathname":"/blog/karnataka-senior-software-engineer-salary-guide","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/harshad/code/proto-equator/dist/blog/ms-dhoni-clean-ui-lessons/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/ms-dhoni-clean-ui-lessons","isIndex":false,"type":"page","pattern":"^\\/blog\\/ms-dhoni-clean-ui-lessons\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"ms-dhoni-clean-ui-lessons","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/ms-dhoni-clean-ui-lessons.md","pathname":"/blog/ms-dhoni-clean-ui-lessons","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/harshad/code/proto-equator/dist/blog/ssr-ssg-disappearing-frameworks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/ssr-ssg-disappearing-frameworks","isIndex":false,"type":"page","pattern":"^\\/blog\\/ssr-ssg-disappearing-frameworks\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"ssr-ssg-disappearing-frameworks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/ssr-ssg-disappearing-frameworks.md","pathname":"/blog/ssr-ssg-disappearing-frameworks","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/harshad/code/proto-equator/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/harshad/code/proto-equator/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://iamharshad.github.io/fontend-blogs","base":"/fontend-blogs/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/harshad/code/proto-equator/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/harshad/code/proto-equator/src/pages/blog/karnataka-senior-software-engineer-salary-guide.md",{"propagation":"none","containsHead":true}],["/Users/harshad/code/proto-equator/src/pages/blog/ms-dhoni-clean-ui-lessons.md",{"propagation":"none","containsHead":true}],["/Users/harshad/code/proto-equator/src/pages/blog/ssr-ssg-disappearing-frameworks.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/karnataka-senior-software-engineer-salary-guide@_@md":"pages/blog/karnataka-senior-software-engineer-salary-guide.astro.mjs","\u0000@astro-page:src/pages/blog/ms-dhoni-clean-ui-lessons@_@md":"pages/blog/ms-dhoni-clean-ui-lessons.astro.mjs","\u0000@astro-page:src/pages/blog/ssr-ssg-disappearing-frameworks@_@md":"pages/blog/ssr-ssg-disappearing-frameworks.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_kZnDPAMW.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/fontend-blogs/file:///Users/harshad/code/proto-equator/dist/blog/karnataka-senior-software-engineer-salary-guide/index.html","/fontend-blogs/file:///Users/harshad/code/proto-equator/dist/blog/ms-dhoni-clean-ui-lessons/index.html","/fontend-blogs/file:///Users/harshad/code/proto-equator/dist/blog/ssr-ssg-disappearing-frameworks/index.html","/fontend-blogs/file:///Users/harshad/code/proto-equator/dist/rss.xml","/fontend-blogs/file:///Users/harshad/code/proto-equator/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XRaDXF5fTB1aXxQTfn24rBO/ysI6QtIYKFagjuiZMwI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
