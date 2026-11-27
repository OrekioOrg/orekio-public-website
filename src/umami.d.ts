// Ce que le site appelle du script de mesure d'audience (src/integrations.ts) :
// absent tant qu'il n'est pas chargé, ou bloqué par le navigateur.
interface Window {
  umami?: { track(event: string): void };
}
