import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

const routes = [
  {
    canonical: "https://vitoroliveira.ca/",
    outputs: ["index.html"],
    title: "Vítor Oliveira | Fractional CTO & Tech Leadership",
    description:
      "Fractional CTO and technology leadership for startups, helping founders shape product strategy, scale engineering teams, and build software with confidence.",
    h1: "Strategic Leadership in Technology, Product, and Growth",
    paragraphs: [
      "Vítor Oliveira, also written Vitor Oliveira, provides fractional CTO and early-stage advisory services for founders who need experienced technology leadership without hiring a full-time executive.",
      "The work spans product strategy, engineering execution, technical due diligence, architecture decisions, hiring plans, delivery systems, and team leadership for startups moving from idea to scale.",
      "Services include fractional CTO leadership, technology strategy, software architecture guidance, engineering management support, product and growth advisory, and access to vetted engineering talent.",
    ],
    links: [
      ["Home", "https://vitoroliveira.ca/"],
      ["Blog", "https://vitoroliveira.ca/blog"],
      ["Talent matching process", "https://vitoroliveira.ca/jobs/about"],
      ["Book a discovery call", "https://intro.co/VitorOliveira"],
      ["LinkedIn", "https://www.linkedin.com/in/imvitoroliveira/"],
    ],
  },
  {
    canonical: "https://vitoroliveira.ca/blog",
    outputs: ["blog.html", "blog/index.html"],
    title: "Blog | Vítor Oliveira",
    description:
      "Articles and resources from Vítor Oliveira on software engineering, technical leadership, engineering management, and startup growth.",
    h1: "Blog by Vítor Oliveira",
    paragraphs: [
      "The Vítor Oliveira blog collects practical writing on software engineering, technical leadership, engineering management, team growth, and startup execution.",
      "Topics include building trust with engineering teams, improving delivery systems, growing into organizational leadership, preventing software defects, and supporting developer success.",
      "These articles, essays, interviews, and talks are written for founders, engineering managers, senior engineers, and product leaders who want clearer technology decisions.",
    ],
    links: [
      ["Home", "https://vitoroliveira.ca/"],
      ["Talent matching process", "https://vitoroliveira.ca/jobs/about"],
      ["Book a discovery call", "https://intro.co/VitorOliveira"],
      ["LinkedIn", "https://www.linkedin.com/in/imvitoroliveira/"],
    ],
  },
  {
    canonical: "https://vitoroliveira.ca/jobs/about",
    outputs: ["jobs/about.html", "jobs/about/index.html"],
    title: "Talent Matching for Engineering Teams | Vítor Oliveira",
    description:
      "Learn how Vítor Oliveira helps startups find vetted engineering talent through a fit-first matching and technical vetting process.",
    h1: "Talent Matching for Engineering Teams",
    paragraphs: [
      "Vítor Oliveira helps startups find engineers who fit the company, team, technical needs, and growth stage, not just a keyword list on a resume.",
      "The fit-first process covers discovery, candidate strategy, sourcing, technical vetting, reference checks, and curated delivery of a small number of qualified candidates.",
      "This talent matching service is designed for founders and engineering leaders who need hiring support informed by fractional CTO experience and practical engineering judgment.",
    ],
    links: [
      ["Home", "https://vitoroliveira.ca/"],
      ["Blog", "https://vitoroliveira.ca/blog"],
      ["Book a discovery call", "https://intro.co/VitorOliveira"],
      ["LinkedIn", "https://www.linkedin.com/in/imvitoroliveira/"],
    ],
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const renderFallback = ({ h1, paragraphs, links }) => `      <main>
        <section>
          <h1>${escapeHtml(h1)}</h1>
${paragraphs
  .map((paragraph) => `          <p>${escapeHtml(paragraph)}</p>`)
  .join("\n")}
          <nav aria-label="Primary pages">
${links
  .map(([label, href]) => `            <a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
  .join("\n")}
          </nav>
        </section>
      </main>`;

const upsertCanonical = (html, canonical) => {
  const canonicalLink = `<link rel="canonical" href="${escapeHtml(canonical)}" />`;

  if (html.includes('rel="canonical"')) {
    return html.replace(/<link rel="canonical" href="[^"]*" \/>/, canonicalLink);
  }

  return html.replace(/(<meta name="author" content="[^"]*" \/>\s*)/, `$1    ${canonicalLink}\n`);
};

const setMetaByName = (html, name, content) =>
  html.replace(
    new RegExp(`<meta name="${name}" content="[^"]*" \\/>`),
    `<meta name="${name}" content="${escapeHtml(content)}" />`,
  );

const setMetaByProperty = (html, property, content) =>
  html.replace(
    new RegExp(`<meta property="${property}" content="[^"]*" \\/>`),
    `<meta property="${property}" content="${escapeHtml(content)}" />`,
  );

const setRootFallback = (html, fallback) =>
  html.replace(
    /<div id="root">[\s\S]*?<\/div>(?=\s*<script)/,
    `<div id="root">\n${fallback}\n    </div>`,
  );

const renderRoute = (template, route) => {
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = upsertCanonical(html, route.canonical);
  html = setMetaByName(html, "description", route.description);
  html = setMetaByName(html, "twitter:title", route.title);
  html = setMetaByName(html, "twitter:description", route.description);
  html = setMetaByProperty(html, "og:title", route.title);
  html = setMetaByProperty(html, "og:description", route.description);
  html = setMetaByProperty(html, "og:url", route.canonical);
  html = setRootFallback(html, renderFallback(route));

  return html;
};

const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const html = renderRoute(template, route);

  for (const output of route.outputs) {
    const outputPath = path.join(distDir, output);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
}
