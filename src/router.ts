import { initPageWelcome } from "./pages/welcome";
import { initPageRules } from "./pages/rules";
import { initPageGame } from "./pages/game";
import { initPageResults } from "./pages/results";

const BASE_PATH = "/desafio-modulo5-Piedra-Papel-Tijeras";

const routes = [
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/rules/,
    component: initPageRules,
  },
  {
    path: /\/game/,
    component: initPageGame,
  },
  {
    path: /\/results/,
    component: initPageResults,
  },
];

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io")) {
    goTo("/welcome");
} else if (location.pathname == "/") {
    goTo("/welcome");
} else {
    handleRoute(location.pathname)
}

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}