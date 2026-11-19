/* Onafi — shared site script: icons, header, footer, interactions */
(function () {
  "use strict";

  // ---------- Icon set (24x24, stroke) ----------
  var P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9h18"/><path d="M9 20v-6h6v6"/>',
    trending: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    "in": '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
    out: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16v-4"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    bank: '<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>',
    mobile: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    report: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 18v-2M12 18v-5M16 18v-3"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
    plug: '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h4v4h-4"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
    receipt: '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 1 .7V2l-1 .7-3-2-3 2-3-2-3 2-3-2z"/><path d="M8 8h8M8 12h8M8 16h5"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }
  window.onafiIcon = icon;

  var LOGO =
    '<svg viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="36" rx="11" fill="#C6F36B"/>' +
    '<path d="M24.6 12.4A8 8 0 1 0 26 18" fill="none" stroke="#0B1D15" stroke-width="3.6" stroke-linecap="round"/>' +
    '<circle cx="26.2" cy="11.4" r="2.4" fill="#0B1D15"/></svg>';

  // ---------- Header ----------
  var NAV = [
    ["home", "index.html", "Home"],
    ["personal", "personal.html", "Personal"],
    ["business", "business.html", "Business"],
    ["solutions", "solutions.html", "Solutions"],
    ["pricing", "pricing.html", "Pricing"],
    ["resources", "resources.html", "Resources"]
  ];
  var page = document.body.getAttribute("data-page") || "";

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
      '<a class="logo" href="index.html" aria-label="Onafi home">' + LOGO + "onafi</a>" +
      '<ul class="nav-links" id="nav-links">' +
      NAV.map(function (n) {
        return '<li><a href="' + n[1] + '"' + (page === n[0] ? ' class="active" aria-current="page"' : "") + ">" + n[2] + "</a></li>";
      }).join("") +
      '<li class="mobile-only"><a href="contact.html"' + (page === "contact" ? ' class="active"' : "") + ">Contact</a></li>" +
      '<li class="mobile-only"><a class="btn btn-primary" href="signup.html">Get Started</a></li>' +
      "</ul>" +
      '<div class="nav-actions">' +
      '<a class="text-link" href="contact.html">Contact</a>' +
      '<a class="btn btn-primary btn-sm" href="signup.html">Get Started ' + icon("arrow") + "</a>" +
      '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">' + icon("menu") + "</button>" +
      "</div></div>";

    var toggle = header.querySelector(".menu-toggle");
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.innerHTML = icon(open ? "close" : "menu");
    });
  }

  // ---------- Footer ----------
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    var col = function (title, links) {
      return '<div class="footer-col"><h4>' + title + "</h4><ul>" +
        links.map(function (l) { return '<li><a href="' + l[1] + '">' + l[0] + "</a></li>"; }).join("") +
        "</ul></div>";
    };
    footer.innerHTML =
      '<div class="container">' +
      '<div class="footer-top">' +
      '<div><a class="logo" href="index.html">' + LOGO + "onafi</a>" +
      "<p>Digital financial tools that help people and businesses move money, get paid and stay in control.</p></div>" +
      col("Products", [
        ["Payment Collection", "payments.html"],
        ["Business Transfers", "solutions.html#transfers"],
        ["Transaction Management", "solutions.html#transactions"],
        ["Payment Links", "solutions.html#links"],
        ["Business Dashboard", "solutions.html#dashboard"]
      ]) +
      col("Solutions", [
        ["Personal", "personal.html"],
        ["Small Businesses", "solutions.html#small"],
        ["Growing Businesses", "solutions.html#growing"],
        ["Enterprises", "solutions.html#enterprise"],
        ["Pricing", "pricing.html"]
      ]) +
      col("Resources", [
        ["Developer Docs", "resources.html#developers"],
        ["Guides", "resources.html#guides"],
        ["Help Centre", "resources.html#help"],
        ["Security", "index.html#security"]
      ]) +
      col("Company", [
        ["About Us", "about.html"],
        ["Contact", "contact.html"],
        ["Talk to Sales", "contact.html?topic=sales"],
        ["Get Started", "signup.html"]
      ]) +
      "</div>" +
      '<div class="footer-bottom"><span>&copy; ' + new Date().getFullYear() + " Onafi. All rights reserved.</span>" +
      '<div class="links"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Cookie Settings</a></div></div>' +
      "</div>";
  }

  // ---------- Inline icons: <i data-icon="name"></i> ----------
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.outerHTML = icon(el.getAttribute("data-icon"));
  });

  // ---------- Reveal on scroll ----------
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---------- Forms (front-end demo only) ----------
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.classList.add("sent");
      var ok = form.nextElementSibling;
      if (ok) { ok.setAttribute("tabindex", "-1"); ok.focus(); }
    });
  });

  // Preselect contact topic from ?topic=
  var topicSel = document.getElementById("topic");
  if (topicSel) {
    var m = location.search.match(/[?&]topic=([a-z]+)/);
    if (m) { topicSel.value = m[1]; }
  }
  // Preselect plan on signup from ?plan=
  var planSel = document.getElementById("plan");
  if (planSel) {
    var p = location.search.match(/[?&]plan=([a-z]+)/);
    if (p) { planSel.value = p[1]; }
  }
})();
