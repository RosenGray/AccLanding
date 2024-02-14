let isLoading = true;
window.process = { env: { NODE_ENV: "production" } };

const rootNode = document.createElement("div");
rootNode.id = "root-accessibilik";
document.getElementsByTagName("body")[0].append(rootNode);

const regDomain =
  window.process.env.NODE_ENV === "production"
    ? "https://acc-landing.vercel.app/api/registerDomain"
    : "http://localhost:3000/api/registerDomain";

const registerDomain = async () => {
  try {
    const data = {
      domain: window.location.hostname,
      created: new Date().toISOString(),
    };

    const response = await fetch(regDomain, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    console.log(resData);
  } catch (err) {
    //err
  }
};
registerDomain();

function loadScript(e) {
  return new Promise((t, o) => {
    const n = document.createElement("script");
    (n.src = e),
      (n.async = true),
      (n.defer = true),
      (n.crossOrigin = "anonymous"),
      (n.onload = t),
      (n.onerror = o),
      document.head.appendChild(n);
  });
}
function loadStyle(e) {
  return new Promise((t, o) => {
    const n = document.createElement("link");
    (n.rel = "stylesheet"),
      (n.href = e),
      (n.onload = t),
      (n.onerror = o),
      document.head.appendChild(n);
  });
}
const reactCdn =
    "development" === window.process.env.NODE_ENV
      ? "https://unpkg.com/react@18/umd/react.development.js"
      : "https://unpkg.com/react@18/umd/react.production.min.js",
  reactDomCdn =
    "development" === window.process.env.NODE_ENV
      ? "https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      : "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";
loadScript(reactCdn)
  .then(() => loadScript(reactDomCdn))
  .then(() => loadStyle("https://acc-landing.vercel.app/style.css"))
  .then(() =>
    loadScript("https://acc-landing.vercel.app/accessibilik.umd.min.cjs")
  )
  .catch((e) => {
    console.error("Failed to load React or ReactDOM", e);
  });
