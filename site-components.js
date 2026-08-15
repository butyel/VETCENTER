/* ============================================================
   VETCENTER — Componentes compartilhados (header, footer, schema)
   Injeta o header, o footer e os dados estruturados (JSON-LD)
   em todas as páginas a partir de business-config.js.
   ============================================================ */
(function () {
  "use strict";
  var C = window.VETCENTER_CONFIG;

  function qs(sel) { return document.querySelector(sel); }

  function navLink(label, href, current) {
    return '<li><a href="' + href + '"' + (current ? ' class="active" aria-current="page"' : "") + '>' + label + "</a></li>";
  }

  function renderHeader(current) {
    var links =
      navLink("Início", C.baseUrl + "/index.html", current === "home") +
      navLink("A VetCenter", C.baseUrl + "/sobre/index.html", current === "sobre") +
      navLink("Serviços", C.baseUrl + "/servicos/index.html", current === "servicos") +
      navLink("Conteúdos", C.baseUrl + "/blog/index.html", current === "blog") +
      navLink("Contato", C.baseUrl + "/contato/index.html", current === "contato");

    var topRight = "";
    if (C.phone.whatsapp) topRight += '<a href="https://wa.me/' + C.phone.whatsapp.replace(/\D/g, "") + '" target="_blank" rel="noopener" class="top-link"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
    if (C.social.instagram) topRight += '<a href="' + C.social.instagram + '" target="_blank" rel="noopener" class="top-link top-social" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>';
    if (C.social.facebook) topRight += '<a href="' + C.social.facebook + '" target="_blank" rel="noopener" class="top-link top-social" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>';

    var pets =
      '<nav class="pets-nav" aria-label="Animais que atendemos">' +
      '<a class="pets-item pets-dog" href="' + C.baseUrl + '/servicos/index.html">' +
      '<span class="pets-text">Cachorros</span>' +
      '<span class="pets-mascot" aria-hidden="true">' + dogSvg() + "</span>" +
      "</a>" +
      '<a class="pets-item pets-cat" href="' + C.baseUrl + '/servicos/index.html">' +
      '<span class="pets-text">Gatos</span>' +
      '<span class="pets-mascot" aria-hidden="true">' + catSvg() + "</span>" +
      "</a>" +
      "</nav>";

    var html =
      '<div class="topbar">' +
      '<div class="container topbar-inner">' +
      '<span class="top-item"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ' + C.address.street + ', Centro, ' + C.address.city + ' - ' + C.address.state + '</span>' +
      '<span class="top-item"><i class="fa-solid fa-clock" aria-hidden="true"></i> ' + C.openingHours.short + '</span>' +
      '<span class="top-actions">' +
      '<a href="tel:' + C.phone.tel + '" class="top-link"><i class="fa-solid fa-phone" aria-hidden="true"></i> ' + C.phone.display + '</a>' +
      topRight +
      '</span>' +
      '</div>' +
      '</div>' +
      '<header class="site-header" id="site-header">' +
      '<div class="container header-inner">' +
      '<a class="brand" href="' + C.baseUrl + '/index.html" aria-label="' + C.name + ' — Clínica Veterinária em Presidente Epitácio">' +
      '<img class="brand-logo" src="' + C.baseUrl + '/img/logo.png" alt="' + C.name + ' — logo" width="180" height="56">' +
      "</a>" +
      '<button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span></button>' +
      '<nav class="primary-nav" id="primary-nav" aria-label="Navegação principal"><ul>' + links + "</ul></nav>" +
      pets +
      '<a class="btn btn-primary btn-header" href="' + C.baseUrl + '/contato/index.html">Agendar atendimento</a>' +
      "</div>" +
      "</header>";
    return html;
  }

  function dogSvg() {
    return (
      '<svg viewBox="0 0 64 64" width="30" height="30" focusable="false">' +
      '<g class="dog-ear ear-l"><path d="M16 26 C13 12 22 7 27 10 C30 12 29 18 28 22 Z" fill="#148CC8"/></g>' +
      '<g class="dog-ear ear-r"><path d="M48 26 C51 12 42 7 37 10 C34 12 35 18 36 22 Z" fill="#148CC8"/></g>' +
      '<path d="M12 32 C12 18 22 13 32 13 C42 13 52 18 52 32 C52 48 42 56 32 56 C22 56 12 48 12 32 Z" fill="#ffffff" stroke="#148CC8" stroke-width="3"/>' +
      '<g class="dog-eye eye-l"><ellipse cx="24" cy="34" rx="3.2" ry="4.4" fill="#16211b"/></g>' +
      '<g class="dog-eye eye-r"><ellipse cx="40" cy="34" rx="3.2" ry="4.4" fill="#16211b"/></g>' +
      '<path d="M32 40 Q32 44 34.5 44 Q37 44 37 40 Z" fill="#DC283C"/>' +
      '<path d="M26 48 Q32 51 38 48" fill="none" stroke="#148CC8" stroke-width="2.4" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  function catSvg() {
    return (
      '<svg viewBox="0 0 64 64" width="30" height="30" focusable="false">' +
      '<g class="cat-ear ear-l"><path d="M16 30 L12 14 L28 22 Z" fill="#148CC8"/></g>' +
      '<g class="cat-ear ear-r"><path d="M48 30 L52 14 L36 22 Z" fill="#148CC8"/></g>' +
      '<path d="M12 32 C12 18 22 13 32 13 C42 13 52 18 52 32 C52 48 42 56 32 56 C22 56 12 48 12 32 Z" fill="#ffffff" stroke="#16211b" stroke-width="3"/>' +
      '<g class="cat-eye eye-l"><ellipse cx="24" cy="34" rx="3.4" ry="4.6" fill="#16211b"/></g>' +
      '<g class="cat-eye eye-r"><ellipse cx="40" cy="34" rx="3.4" ry="4.6" fill="#16211b"/></g>' +
      '<path d="M30 41 Q32 39 34 41" fill="none" stroke="#DC283C" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M28 49 Q32 45 36 49" fill="none" stroke="#16211b" stroke-width="2.4" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  function renderFooter() {
    var phoneLink = '<a href="tel:' + C.phone.tel + '">' + C.phone.display + "</a>";
    var waLink = "";
    if (C.phone.whatsapp) waLink = '<li>WhatsApp: <a href="https://wa.me/' + C.phone.whatsapp.replace(/\D/g, "") + '" target="_blank" rel="noopener">' + C.phone.whatsappDisplay + "</a></li>";
    var emailLi = "";
    if (C.email.address) emailLi = '<li>E-mail: <a href="mailto:' + C.email.address + '">' + C.email.display + "</a></li>";
    var social = "";
    if (C.social.instagram) social += '<a href="' + C.social.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i><span class="visually-hidden">Instagram</span></a>';
    if (C.social.facebook) social += '<a href="' + C.social.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i><span class="visually-hidden">Facebook</span></a>';
    if (C.social.googleBusiness) social += '<a href="' + C.social.googleBusiness + '" target="_blank" rel="noopener" aria-label="Google"><i class="fa-brands fa-google" aria-hidden="true"></i><span class="visually-hidden">Google</span></a>';

    var html =
      '<footer class="site-footer">' +
      '<div class="container footer-inner">' +
      '<div class="footer-col footer-about">' +
      '<img class="footer-logo" src="' + C.baseUrl + '/img/logo%20branca.png" alt="' + C.name + '" width="180" height="56">' +
      "<p>" + C.type + " atendendo cães e gatos no Centro de Presidente Epitácio, São Paulo. Consultas, vacinação, diagnóstico por imagem, Raio-X Digital, banho e tosa e Pet Shop.</p>" +
      '<div class="footer-social">' + social + "</div>" +
      "</div>" +
      '<div class="footer-col">' +
      "<h4>Navegação</h4>" +
      "<ul>" +
      '<li><a href="' + C.baseUrl + '/index.html">Início</a></li>' +
      '<li><a href="' + C.baseUrl + '/sobre/index.html">A VetCenter</a></li>' +
      '<li><a href="' + C.baseUrl + '/servicos/index.html">Serviços</a></li>' +
      '<li><a href="' + C.baseUrl + '/blog/index.html">Conteúdos</a></li>' +
      '<li><a href="' + C.baseUrl + '/contato/index.html">Contato</a></li>' +
      "</ul>" +
      "</div>" +
      '<div class="footer-col">' +
      "<h4>Serviços</h4>" +
      "<ul>" +
      '<li><a href="' + C.baseUrl + '/servicos/consulta-veterinaria-presidente-epitacio/index.html">Consulta Veterinária</a></li>' +
      '<li><a href="' + C.baseUrl + '/servicos/vacinacao-pet-presidente-epitacio/index.html">Vacinação</a></li>' +
      '<li><a href="' + C.baseUrl + '/servicos/raio-x-veterinario-presidente-epitacio/index.html">Raio-X Digital</a></li>' +
      '<li><a href="' + C.baseUrl + '/servicos/diagnostico-por-imagem-veterinario-presidente-epitacio/index.html">Diagnóstico por Imagem</a></li>' +
      '<li><a href="' + C.baseUrl + '/servicos/banho-e-tosa-presidente-epitacio/index.html">Banho e Tosa</a></li>' +
      "</ul>" +
      "</div>" +
      '<div class="footer-col footer-contact-col">' +
      "<h4>Contato</h4>" +
      "<ul>" +
      '<li class="footer-nap"><strong>' + C.name + "</strong><br>" + C.address.street + "<br>" + C.address.district + ", " + C.address.city + " - " + C.address.state + "<br>CEP " + C.address.postalCode + "</li>" +
      '<li>Telefone: ' + phoneLink + "</li>" +
      waLink +
      emailLi +
      "<li>Horário: " + C.openingHours.text + "</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom"><div class="container"><p>© ' + new Date().getFullYear() + " " + C.legalName + ". Todos os direitos reservados.</p></div></div>" +
      "</footer>" +
      '<a class="call-bar" href="tel:' + C.phone.tel + '"><i class="fa-solid fa-phone" aria-hidden="true"></i> ' + C.phone.display + "</a>";
    return html;
  }

  function renderSchema() {
    var localBusiness = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "@id": C.baseUrl + "/#vetcenter",
      "name": C.legalName,
      "url": C.baseUrl + "/",
      "image": C.baseUrl + "/img/logo.png",
      "logo": C.baseUrl + "/img/logo.png",
      "description": C.type + " Atendemos cães e gatos em Presidente Epitácio, São Paulo.",
      "telephone": C.phone.tel,
      "email": C.email.address,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": C.address.street,
        "addressLocality": C.address.city,
        "addressRegion": C.address.state,
        "postalCode": C.address.postalCode,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": C.address.lat,
        "longitude": C.address.lng
      },
      "openingHoursSpecification": C.openingHours.spec.map(function (s) {
        return { "@type": "OpeningHoursSpecification", "dayOfWeek": s.days, "opens": s.opens, "closes": s.closes };
      }),
      "areaServed": C.address.city
    };
    var sameAs = [];
    if (C.social.instagram) sameAs.push(C.social.instagram);
    if (C.social.facebook) sameAs.push(C.social.facebook);
    if (C.social.googleBusiness) sameAs.push(C.social.googleBusiness);
    if (sameAs.length) localBusiness.sameAs = sameAs;

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(localBusiness);
    document.head.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var headerEl = qs("#site-header");
    var footerEl = qs("#site-footer");
    if (headerEl) headerEl.outerHTML = renderHeader(headerEl.getAttribute("data-current") || "");
    if (footerEl) footerEl.outerHTML = renderFooter();
    renderSchema();
    injectPaws();
    initNav();
  });

  function injectPaws() {
    var hero = qs("main .hero");
    if (!hero || hero.querySelector(".floating-paw")) return;
    var paws =
      '<i class="fa-solid fa-paw floating-paw paw-1" aria-hidden="true"></i>' +
      '<i class="fa-solid fa-paw floating-paw paw-2" aria-hidden="true"></i>' +
      '<i class="fa-solid fa-paw floating-paw paw-3" aria-hidden="true"></i>';
    var holder = document.createElement("div");
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = paws;
    hero.insertBefore(holder.firstChild, hero.firstChild);
    hero.insertBefore(holder.firstChild, hero.firstChild);
    hero.insertBefore(holder.firstChild, hero.firstChild);
  }

  function initNav() {
    var toggle = qs(".nav-toggle");
    var nav = qs(".primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
