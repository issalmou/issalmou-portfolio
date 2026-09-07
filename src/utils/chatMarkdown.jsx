import { Link } from "react-router-dom";

// Routes réellement vérifiées dans le frontend (voir App.jsx) — seule une
// route de cette liste peut devenir un lien cliquable. Le backend ne suggère
// jamais une route inventée, mais cette whitelist est une seconde ligne de
// défense côté UI face à un contenu arbitraire renvoyé par le LLM.
const KNOWN_INTERNAL_PATHS = ["/about#skills", "/about", "/resume", "/projects", "/services", "/contact"];
const PROJECT_DETAIL_PATTERN = /^\/project\/[A-Za-z0-9_-]+$/;

function isKnownInternalPath(path) {
  return KNOWN_INTERNAL_PATHS.includes(path) || PROJECT_DETAIL_PATTERN.test(path);
}

// Étiquette lisible et déjà localisée (réutilise les traductions nav.*
// existantes) plutôt que d'afficher le chemin brut "/about#skills".
function getRouteLabel(path, texts) {
  const nav = texts?.nav || {};
  if (path === "/about" || path === "/about#skills") return nav.about || path;
  if (path === "/resume") return nav.resume || path;
  if (path === "/projects") return nav.projects || path;
  if (path === "/services") return nav.services || path;
  if (path === "/contact") return nav.contact || path;
  if (PROJECT_DETAIL_PATTERN.test(path)) return texts?.projects?.btnviewinfo || path;
  return path;
}

// Motif combiné : gras/italique/souligné (existant) + lien markdown
// "[texte](cible)" + URL absolue + chemin interne connu (whitelist ci-dessus).
const INLINE_SPLIT_PATTERN =
  /(\*\*.*?\*\*|\*.*?\*|__.*?__|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)\]]+|\/about#skills|\/about|\/resume|\/projects|\/services|\/contact|\/project\/[A-Za-z0-9_-]+)/g;

const linkStyle = { unicodeBidi: "isolate" };

function renderLink(target, label, key, navigate) {
  if (/^https?:\/\//.test(target)) {
    // Nouvel onglet ; rel="noopener noreferrer" contre le reverse tabnabbing.
    return (
      <a key={key} href={target} target="_blank" rel="noopener noreferrer" dir="ltr" className="chat-link" style={linkStyle}>
        {label}
      </a>
    );
  }

  if (!isKnownInternalPath(target)) {
    return label; // défense en profondeur : chemin non reconnu, jamais rendu cliquable
  }

  const hashIndex = target.indexOf("#");
  if (hashIndex === -1) {
    return (
      <Link key={key} to={target} dir="ltr" className="chat-link" style={linkStyle}>
        {label}
      </Link>
    );
  }

  // Ancre (ex. "/about#skills") : react-router ne scrolle pas automatiquement
  // vers un id après navigation, on le fait nous-mêmes une fois la page montée.
  const pathname = target.slice(0, hashIndex);
  const hash = target.slice(hashIndex + 1);
  return (
    <a
      key={key}
      href={target}
      dir="ltr"
      className="chat-link"
      style={linkStyle}
      onClick={(e) => {
        e.preventDefault();
        navigate?.(pathname);
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 60);
        });
      }}
    >
      {label}
    </a>
  );
}

/**
 * Formatage inline (**gras**, *italique*, __souligné__) + liens.
 * `ctx.texts` fournit les libellés localisés des routes internes ; `ctx.navigate`
 * (résultat de useNavigate()) permet de gérer le scroll vers une ancre.
 */
export function parseInlineMarkdown(text, ctx = {}) {
  const { texts, navigate } = ctx;
  const parts = text.split(INLINE_SPLIT_PATTERN);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={idx}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("__") && part.endsWith("__")) {
      return <u key={idx}>{part.slice(2, -2)}</u>;
    }

    const mdLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLink) {
      const [, label, target] = mdLink;
      return renderLink(target, label, idx, navigate);
    }

    if (/^https?:\/\//.test(part)) {
      return renderLink(part, part, idx, navigate);
    }

    if (isKnownInternalPath(part)) {
      return renderLink(part, getRouteLabel(part, texts), idx, navigate);
    }

    return part;
  });
}

/**
 * Formatage complet d'une réponse (listes + formatage inline + liens).
 * Voir parseInlineMarkdown pour la forme de `ctx`.
 */
export function formatMarkdown(text, ctx = {}) {
  const lines = text.split("\n");
  let tempList = [];
  const finalElements = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      tempList.push(<li key={idx}>{parseInlineMarkdown(trimmed.slice(2), ctx)}</li>);
    } else {
      if (tempList.length > 0) {
        finalElements.push(<ul key={`ul-${idx}`}>{tempList}</ul>);
        tempList = [];
      }
      if (trimmed) {
        finalElements.push(
          <span key={idx}>
            {parseInlineMarkdown(trimmed, ctx)}
            <br />
          </span>
        );
      } else {
        finalElements.push(<br key={idx} />);
      }
    }
  });

  if (tempList.length > 0) {
    finalElements.push(<ul key="ul-end">{tempList}</ul>);
  }

  return finalElements;
}

export { isKnownInternalPath, getRouteLabel };
