import "@testing-library/jest-dom/vitest";

// jsdom n'implémente pas Element.prototype.scrollTo (utilisé pour
// l'auto-scroll du chat) — polyfill minimal pour l'environnement de test
// uniquement ; aucun impact sur le comportement réel en navigateur.
if (typeof Element !== "undefined" && !Element.prototype.scrollTo) {
  Element.prototype.scrollTo = () => {};
}
