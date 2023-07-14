//define import methods for strapi content.
export function getStrapiUrl(path = "") {
  return `${
    process.env.VUE_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`; //returns the url + the slug dropped in at the beginning.
  //process.env is a variable injected by node.js at runtime
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
