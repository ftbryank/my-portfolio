/* ------------------------------------------------------------
   YOUR PROJECTS
   Add a project by copying the template below into the list.
   - title:       project name
   - year:        when you built it (text or number)
   - description: one or two plain sentences
   - stack:       the languages and tools you used
   - links:       { label, url } pairs. Leave the list empty if none.

   Template (copy, remove the slashes, fill in, keep the comma between projects):
   {
     title: "Project name",
     year: "2026",
     description: "What it does and why you built it.",
     stack: ["Python", "MySQL"],
     links: [
       { label: "Source code", url: "https://github.com/ftbryank/repo-name" },
       { label: "Live demo", url: "https://your-demo-link.vercel.app" }
     ]
   }
------------------------------------------------------------ */
const projects = [
  // Your first project goes here.
];

/* ------------------------------------------------------------
   Code below renders the page. You do not need to edit it.
------------------------------------------------------------ */
const EMAIL = "briankihika00@gmail.com";
const GITHUB = "https://github.com/ftbryank";

function joinList(items) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return items.join(" and ");
  return items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;
  list.textContent = "";

  if (projects.length === 0) {
    const empty = el("li", "project");
    const message = el("p", "", "My first featured projects are on the way. Until then, everything I am working on is on ");
    const link = el("a", "", "my GitHub");
    link.href = GITHUB;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    message.appendChild(link);
    message.appendChild(document.createTextNode("."));
    empty.appendChild(message);
    list.appendChild(empty);
    return;
  }

  projects.forEach(function (project) {
    const item = el("li", "project");

    const head = el("div", "project-head");
    head.appendChild(el("h3", "", project.title));
    if (project.year) head.appendChild(el("span", "muted", String(project.year)));
    item.appendChild(head);

    item.appendChild(el("p", "", project.description));

    if (project.stack && project.stack.length) {
      item.appendChild(el("p", "muted", "Built with " + joinList(project.stack) + "."));
    }

    if (project.links && project.links.length) {
      const links = el("ul", "project-links");
      project.links.forEach(function (link) {
        const li = document.createElement("li");
        const a = el("a", "", link.label);
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        li.appendChild(a);
        links.appendChild(li);
      });
      item.appendChild(links);
    }

    list.appendChild(item);
  });
}

function setupCopyButton() {
  const button = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  if (!button || !status) return;

  button.addEventListener("click", function () {
    const done = function (message) {
      status.textContent = message;
      setTimeout(function () { status.textContent = ""; }, 2500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(
        function () { done("Copied"); },
        function () { done("Could not copy. Select the address above instead."); }
      );
    } else {
      done("Could not copy. Select the address above instead.");
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
setupCopyButton();