import { registerApplication, start, LifeCycles } from "single-spa";
import { bootstrap, mount, unmount } from './header/acc-header';

registerApplication(
  'root-app',
  () => import('./header/acc-header'),
  () => true,
  { bootstrap, mount, unmount }
);

registerApplication({
  name: "@acc/profile",
  app: () =>
    System.import<LifeCycles>(
      "@acc/profile"
    ),
  activeWhen: ["/profiles"],
});


registerApplication({
  name: "@acc/address",
  app: () =>
    System.import<LifeCycles>(
      "@acc/address"
    ),
  activeWhen: ["/address"],
});

registerApplication({
  name: "@acc/orders",
  app: () =>
    System.import<LifeCycles>(
      "@acc/orders"
    ),
  activeWhen: [(location) => location.pathname.startsWith("/orders/")]
});

registerApplication({
  name: "@acc/graphqlapp",
  app: () =>
    System.import<LifeCycles>(
      "@acc/graphqlapp"
    ),
  activeWhen: ["/cart"],
});

start({
  urlRerouteOnly: true,
});