const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

function closeMenu() {
  if (!toggle || !navigation) return;
  toggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

if (toggle && navigation) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const projectForm = document.querySelector("#project-form");
const copyProjectButton = document.querySelector("[data-copy-project]");
const formStatus = document.querySelector("[data-form-status]");

function projectSummary() {
  if (!projectForm) return "";
  const data = new FormData(projectForm);
  const value = (name) => String(data.get(name) || "Not provided").trim() || "Not provided";
  return [
    "AJM ELECTRICAL PROJECT REQUEST",
    "",
    `Name: ${value("name")}`,
    `Phone: ${value("phone")}`,
    `Email: ${value("_replyto")}`,
    `Project location: ${value("location")}`,
    `Type of work: ${value("service")}`,
    `Preferred timing: ${value("timing")}`,
    "",
    "Project details:",
    value("details")
  ].join("\n");
}

function setFormStatus(message) {
  if (formStatus) formStatus.textContent = message;
}

if (projectForm) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "1") {
    setFormStatus("Thanks. Your quote request was submitted to AjM. For urgent electrical issues, call (705) 790-6008.");
    window.history.replaceState({}, "", `${window.location.pathname}${window.location.hash}`);
  }
}

if (copyProjectButton) {
  copyProjectButton.addEventListener("click", async () => {
    if (!projectForm?.reportValidity()) return;
    try {
      await navigator.clipboard.writeText(projectSummary());
      setFormStatus("Project details copied. Paste them into an email to Estimates@ajmelectricalsolutions.com.");
    } catch {
      setFormStatus("Copy was blocked by your browser. Select the form details manually or use Send Quote Request.");
    }
  });
}
