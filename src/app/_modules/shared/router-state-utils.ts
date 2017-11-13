import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

/**
 * RouterStateSerializer nimmt derzeitigen RouterStateSnapshot und liefert alle relevanten Informationen
 * Der Snapshot enthält alle Informationen über den Zustand des Router zu einem gegebenen Zeitpunkt.
 * Der gesamte Snapshot ist komplex und wird nicht gebraucht.
 * Hier interssieren nur URL und Query-Parameter.
 * Es könnten auch andere Daten ausgewertet werden , z.B. Route-Parameter und statische Route-Daten.
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}
