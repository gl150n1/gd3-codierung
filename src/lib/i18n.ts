import { useSyncExternalStore } from "react";

export type Lang = "de" | "en";

const STORAGE_KEY = "gd3-lang";
const listeners = new Set<() => void>();

function getInitial(): Lang {
  if (typeof window === "undefined") return "de";
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "de" || v === "en") return v;
  } catch {}
  return "de";
}

let current: Lang = getInitial();

export function getLang(): Lang {
  return current;
}

export function setLang(next: Lang) {
  if (current === next) return;
  current = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useLang(): Lang {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => "de" as Lang,
  );
}

const dict = {
  de: {
    nav: {
      services: "Services",
      about: "Über mich",
      prices: "Preise",
      faq: "FAQ",
      contact: "Kontakt",
      loc: "Würzburg DE",
      backHome: "← Startseite",
    },
    hero: {
      badge: "VCDS · VAG-Spezialist · Würzburg",
      title1: "Professionelles VCDS Coding &",
      title2: "Auto Programmierung",
      title3: "in Würzburg.",
      desc: "Diagnose, Codierung und Freischaltung versteckter Funktionen für VW, Audi, Skoda und Seat. Persönlich, transparent und mit originaler VCDS-Hardware.",
      book: "Termin buchen",
      view: "Leistungen ansehen",
      c1: "Original VCDS",
      c2: "Backup vor jeder Codierung",
      c3: "Termine innerhalb 24h",
      c4: "Kostenlos vor Ort – Würzburg & Umgebung",
    },
    imgAlt: "Diagnose-Interface mit Echtzeit-Sensordaten eines VW/Audi Fahrzeugs",
    servicesHeader: { eyebrow: "Leistungen", title: "Was wir für Ihr Fahrzeug tun." },
    services: [
      { title: "VCDS Diagnose", body: "Tiefgreifende Systemanalyse über VCDS auf Herstellerniveau — vollständiges Auslesen aller Steuergeräte." },
      { title: "Coding & Adaptationen", body: "Präzise Anpassung von Steuergeräten an Ihre Wünsche und nach Hardware-Nachrüstungen." },
      { title: "Hidden Feature Aktivierung", body: "Freischaltung versteckter Komfortfunktionen: Abbiegelicht, Coming-Home, Spurhalter und mehr." },
      { title: "Retrofit Programmierung", body: "Einbindung nachgerüsteter Hardware: Tempomat, Park-Sensoren, Multifunktionslenkrad, Apple CarPlay." },
      { title: "Fehlercode-Analyse", body: "Logische Auswertung komplexer Fehlerspeicher zur gezielten Instandsetzung — ohne unnötigen Teiletausch." },
      { title: "VW · Audi · Skoda · Seat", body: "Spezialisiert auf die gesamte Volkswagen-Gruppe — von älteren MQB- bis hin zu aktuellen MEB-Plattformen." },
    ],
    about: {
      eyebrow: "Über GD3",
      title1: "Leidenschaft für Autos.",
      title2: "Präzision in der Technik.",
      p1: "GD3 ist Ihr lokaler Spezialist für VCDS Coding und Fahrzeugprogrammierung in Würzburg. Aus Leidenschaft für VW- und Audi-Technik entstanden, biete ich persönlichen, ehrlichen Service ohne Werkstattgrößen-Aufschlag.",
      p2: "Jedes Fahrzeug bekommt die Zeit, die es braucht. Sie wissen vorher genau, was passiert — und nachher genau, was geändert wurde.",
      onSite: "Vor-Ort-Service",
      onSiteTitle1: "Wir kommen zu Ihnen –",
      onSiteTitle2: "kostenlos",
      onSiteTitle3: "in Würzburg und Umgebung.",
      onSiteDesc: "Kein Werkstattbesuch nötig. Wir führen Codierung und Diagnose direkt bei Ihnen vor Ort durch – unkompliziert, persönlich und ohne Anfahrtskosten in der Region Würzburg.",
      stat1: "Reaktionszeit",
      stat2: "Backup-Garantie",
    },
    why: {
      eyebrow: "Warum GD3",
      title: "Sechs Gründe, die für sich sprechen.",
      items: [
        { title: "Professionelle Tools", body: "Originale VCDS-Lizenz, ODIS-fähige Hardware und kalibrierte Messtechnik." },
        { title: "Faire Preise", body: "Transparente Festpreise pro Codierung — keine versteckten Kosten." },
        { title: "Schnelle Termine", body: "Meist innerhalb von 24 Stunden vor Ort in Würzburg." },
        { title: "Lokale Expertise", body: "Persönlicher Ansprechpartner direkt in Unterfranken." },
        { title: "Klare Kommunikation", body: "Verständliche Erklärung jeder Änderung — vor und nach der Arbeit." },
        { title: "Garantiert sicher", body: "Vollständiges Backup vor jeder Codierung. Reversibel und TÜV-konform." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufig gestellte Fragen.",
      items: [
        { q: "Welche Fahrzeuge unterstützt ihr?", a: "Wir sind spezialisiert auf die Volkswagen-Gruppe: VW, Audi, Skoda und Seat — alle Modelle ab Baujahr 2005 inklusive aktueller MEB-Elektrofahrzeuge." },
        { q: "Wie lange dauert eine Codierung?", a: "Einzelne Feature-Freischaltungen dauern meist 15–30 Minuten. Komplexe Retrofit-Codierungen oder Komplettauslesungen 1–2 Stunden." },
        { q: "Ist Coding sicher für mein Fahrzeug?", a: "Ja. Vor jeder Änderung erstellen wir ein vollständiges Backup der Steuergeräte. Alle Anpassungen sind reversibel und bleiben innerhalb der Herstellerparameter." },
        { q: "Brauche ich einen Termin?", a: "Ja, bitte. So können wir uns die nötige Zeit für Ihr Fahrzeug nehmen. Termine vereinbaren wir am schnellsten via WhatsApp." },
        { q: "Verliere ich die Garantie?", a: "Reine Software-Codierungen innerhalb der Herstellerparameter sind unkritisch. Bei Retrofit-Arbeiten beraten wir Sie individuell zu Ihrem Modell." },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Termin anfragen.",
      desc: "Schreiben Sie kurz, welches Fahrzeug Sie fahren und was Sie sich wünschen — ich melde mich meist innerhalb weniger Stunden zurück.",
      whatsapp: "WhatsApp",
      whatsappSub: "Sofort schreiben",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      locationVal: "Würzburg, Bayern",
      fName: "Name",
      fBrand: "Marke",
      fModel: "Modell",
      fMsg: "Nachricht",
      pName: "Max Mustermann",
      pBrand: "Marke wählen",
      pModel: "Modell wählen",
      pMsg: "Welche Codierung oder Diagnose wünschen Sie?",
      submit: "Via WhatsApp senden",
      sent: "✓ WhatsApp geöffnet — Nachricht abschicken",
      waHello: "Hallo GD3",
      waName: "Name",
      waCar: "Fahrzeug",
    },
    legalPages: {
      back: "← Zurück",
      legalLabel: "Rechtliches",
    },
    impressum: {
      metaTitle: "Impressum — GD3 Codierung Würzburg",
      metaDesc: "Impressum und Anbieterkennzeichnung von GD3 Codierung, Glison Doci, Würzburg.",
      title: "Impressum",
      sectionProvider: "Angaben gemäß § 5 TMG",
      sectionContact: "Kontakt",
      sectionVat: "Umsatzsteuer",
      vatText: "Kein Ausweis der Umsatzsteuer, da Kleinunternehmer gemäß § 19 Abs. 1 UStG.",
      sectionContent: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      sectionOdr: "EU-Streitschlichtung",
      odrText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ",
      odrLink: "https://ec.europa.eu/consumers/odr/",
      odrSuffix: ". Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      sectionLiability: "Haftung für Inhalte",
      liabilityText: "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      sectionCopyright: "Urheberrecht",
      copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },
    datenschutz: {
      metaTitle: "Datenschutzerklärung — GD3 Codierung Würzburg",
      metaDesc: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei GD3 Codierung in Würzburg.",
      title: "Datenschutzerklärung",
      sec1Title: "1. Verantwortlicher",
      sec1Text: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:\nGlison Doci — GD3 Codierung\nKlara-Oppenheimer-Weg 39, 97074 Würzburg\nTelefon: +49 1573 4685334 · E-Mail: gd3.codierung@gmail.com",
      sec2Title: "2. Allgemeine Hinweise",
      sec2Text: "Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
      sec3Title: "3. Server-Logfiles",
      sec3Text: "Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt (Browsertyp/-version, Betriebssystem, Referrer-URL, Hostname, Uhrzeit und IP-Adresse). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).",
      sec4Title: "4. Kontaktaufnahme",
      sec4Text: "Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über das Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f (berechtigtes Interesse an der Beantwortung).",
      sec5Title: "5. WhatsApp / Meta",
      sec5Text: "Für die Terminvereinbarung nutzen wir WhatsApp (Meta Platforms Ireland Ltd.). Wenn Sie uns über WhatsApp kontaktieren, gelten zusätzlich die Datenschutzbestimmungen von Meta. Wir haben keinen Einfluss auf die dortige Datenverarbeitung.",
      sec6Title: "6. Cookies",
      sec6Text: "Diese Website verwendet ausschließlich technisch notwendige Cookies (z. B. zur Speicherung Ihrer Theme-Präferenz). Es werden keine Tracking- oder Marketing-Cookies gesetzt.",
      sec7Title: "7. Ihre Rechte",
      sec7Text: "Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21). Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Bayerisches Landesamt für Datenschutzaufsicht, Ansbach).",
      sec8Title: "8. SSL-Verschlüsselung",
      sec8Text: "Diese Seite nutzt aus Gründen der Sicherheit eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol Ihrer Browserzeile.",
    },
    footer: {
      brand: "CODIERUNG",
      desc: "VCDS Coding, Diagnose und Programmierung für VW, Audi, Skoda und Seat in Würzburg & Umgebung.",
      backup: "Backup garantiert",
      appt: "24h Termine",
      contact: "Kontakt",
      legal: "Rechtliches",
      prices: "Preise",
      imprint: "Impressum",
      privacy: "Datenschutz",
      copyright: "© 2026 GD3 CODIERUNG",
    },
    preise: {
      metaTitle: "Preise — VCDS Coding & Fahrzeugoptimierung Würzburg | GD3",
      eyebrow: "Preise / Leistungen",
      title1: "Fahrzeugoptimierung",
      title2: "— transparente Festpreise.",
      desc: "Alle Leistungen erfolgen vor Ort in Würzburg, mit originaler VCDS-Hardware, Backup vor jeder Codierung und im Rahmen der Herstellerparameter. Preise gelten für Fahrzeuge der VAG-Gruppe (VW, Audi, Skoda, Seat).",
      vat: "Kein Ausweis der Umsatzsteuer, da Kleinunternehmer gemäß § 19 Abs. 1 UStG.",
      inquire: "Anfragen",
      waPrefix: "Hallo GD3, ich interessiere mich für:",
      badges: ["Backup vor jeder Codierung", "Originale VCDS-Lizenz", "Termine meist innerhalb 24h"],
      footerCopy: "© 2026 GD3 Codierung · Würzburg",
      products: [
        { title: "VCDS Komplettauslesung", price: "20,00 €", body: "Vollständiges Auslesen aller Steuergeräte, ausführlicher Fehlerspeicher-Report und Beratung zu sinnvollen nächsten Schritten.", tags: ["Diagnose", "Report"] },
        { title: "Hidden Features Freischaltung", price: "ab 25,00 €", body: "Freischaltung versteckter Komfortfunktionen: Coming/Leaving-Home, Abbiegelicht, Spurhalter-Erinnerung, Menüsprachen u. v. m.", tags: ["Coding"] },
        { title: "Digital Cockpit Aktivierung", price: "ab 30,00 €", body: "Aktivierung erweiterter Ansichten und Layouts im Virtual Cockpit (Audi) bzw. Active Info Display (VW/Skoda/Seat).", tags: ["Infotainment"] },
        { title: "Apple CarPlay & Android Auto", price: "70,00 €", body: "Softwareseitige Freischaltung von Apple CarPlay und Android Auto auf kompatiblen MIB2/MIB3-Systemen.", tags: ["Infotainment", "Retrofit"] },
        { title: "Retrofit-Codierung", price: "ab 50,00 €", body: "Codierung nach Hardware-Nachrüstung: Tempomat, Parksensoren, Multifunktionslenkrad, Rückfahrkamera, Ambientebeleuchtung.", tags: ["Retrofit"] },
        { title: "Fehlercode-Analyse & Löschung", price: "20,00 €", body: "Präzise Interpretation komplexer Fehlerbilder, gezielte Diagnose und Löschen behobener Einträge — ohne unnötigen Teiletausch.", tags: ["Diagnose"] },
        { title: "Steuergerät-Anpassung", price: "ab 30,00 €", body: "Anpassung einzelner Steuergeräte-Parameter nach Werkstattbesuch, Batteriewechsel oder Modulaustausch.", tags: ["Coding"] },
        { title: "Individuelle Konfiguration", price: "auf Anfrage", body: "Sie haben einen speziellen Wunsch? Schreiben Sie uns kurz Ihr Fahrzeug und die gewünschte Änderung — Sie erhalten einen Festpreis.", tags: ["Custom"] },
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      prices: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      loc: "Würzburg DE",
      backHome: "← Home",
    },
    hero: {
      badge: "VCDS · VAG Specialist · Würzburg",
      title1: "Professional VCDS coding &",
      title2: "car programming",
      title3: "in Würzburg.",
      desc: "Diagnostics, coding and unlocking of hidden features for VW, Audi, Skoda and Seat. Personal, transparent and with genuine VCDS hardware.",
      book: "Book appointment",
      view: "View services",
      c1: "Genuine VCDS",
      c2: "Backup before every coding",
      c3: "Appointments within 24h",
      c4: "Free on-site – Würzburg & surroundings",
    },
    imgAlt: "Diagnostic interface with real-time sensor data of a VW/Audi vehicle",
    servicesHeader: { eyebrow: "Services", title: "What we do for your car." },
    services: [
      { title: "VCDS Diagnostics", body: "In-depth system analysis via VCDS at manufacturer level — full readout of all control units." },
      { title: "Coding & Adaptations", body: "Precise adjustment of control units to your wishes and after hardware retrofits." },
      { title: "Hidden Feature Activation", body: "Unlocking of hidden comfort features: cornering light, Coming-Home, lane assist and more." },
      { title: "Retrofit Programming", body: "Integration of retrofitted hardware: cruise control, park sensors, multifunction steering wheel, Apple CarPlay." },
      { title: "Fault Code Analysis", body: "Logical interpretation of complex fault memories for targeted repair — without unnecessary parts replacement." },
      { title: "VW · Audi · Skoda · Seat", body: "Specialised in the entire Volkswagen Group — from older MQB to current MEB platforms." },
    ],
    about: {
      eyebrow: "About GD3",
      title1: "Passion for cars.",
      title2: "Precision in tech.",
      p1: "GD3 is your local specialist for VCDS coding and vehicle programming in Würzburg. Born from a passion for VW and Audi technology, I offer personal, honest service without workshop markup.",
      p2: "Every vehicle gets the time it needs. You know exactly what happens before — and exactly what changed after.",
      onSite: "On-site service",
      onSiteTitle1: "We come to you –",
      onSiteTitle2: "free of charge",
      onSiteTitle3: "in Würzburg and the region.",
      onSiteDesc: "No workshop visit needed. We perform coding and diagnostics right at your location – straightforward, personal and with no travel fees in the Würzburg region.",
      stat1: "Response time",
      stat2: "Backup guarantee",
    },
    why: {
      eyebrow: "Why GD3",
      title: "Six reasons that speak for themselves.",
      items: [
        { title: "Professional tools", body: "Original VCDS licence, ODIS-capable hardware and calibrated measurement equipment." },
        { title: "Fair prices", body: "Transparent flat rates per coding — no hidden costs." },
        { title: "Fast appointments", body: "Usually within 24 hours on-site in Würzburg." },
        { title: "Local expertise", body: "Personal contact directly in Lower Franconia." },
        { title: "Clear communication", body: "Understandable explanation of every change — before and after the work." },
        { title: "Guaranteed safe", body: "Full backup before every coding. Reversible and TÜV-compliant." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions.",
      items: [
        { q: "Which vehicles do you support?", a: "We specialise in the Volkswagen Group: VW, Audi, Skoda and Seat — all models from 2005 onwards, including current MEB electric vehicles." },
        { q: "How long does a coding take?", a: "Individual feature unlocks usually take 15–30 minutes. Complex retrofit coding or full readouts take 1–2 hours." },
        { q: "Is coding safe for my car?", a: "Yes. Before every change we create a full backup of the control units. All adjustments are reversible and stay within manufacturer parameters." },
        { q: "Do I need an appointment?", a: "Yes, please. That way we can take the time your car needs. Appointments are fastest via WhatsApp." },
        { q: "Will I lose my warranty?", a: "Pure software coding within manufacturer parameters is uncritical. For retrofit work we advise you individually for your model." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request an appointment.",
      desc: "Write a short note about your car and what you'd like — I usually get back to you within a few hours.",
      whatsapp: "WhatsApp",
      whatsappSub: "Message now",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationVal: "Würzburg, Bavaria",
      fName: "Name",
      fBrand: "Brand",
      fModel: "Model",
      fMsg: "Message",
      pName: "John Doe",
      pBrand: "Select brand",
      pModel: "Select model",
      pMsg: "Which coding or diagnostics do you need?",
      submit: "Send via WhatsApp",
      sent: "✓ WhatsApp opened — send the message",
      waHello: "Hi GD3",
      waName: "Name",
      waCar: "Vehicle",
    },
    legalPages: {
      back: "← Back",
      legalLabel: "Legal",
    },
    impressum: {
      metaTitle: "Legal Notice — GD3 Coding Würzburg",
      metaDesc: "Legal notice and provider identification for GD3 Coding, Glison Doci, Würzburg.",
      title: "Legal Notice",
      sectionProvider: "Information according to § 5 TMG",
      sectionContact: "Contact",
      sectionVat: "VAT",
      vatText: "VAT is not shown as we are a small business under § 19 (1) German VAT Act.",
      sectionContent: "Responsible for content according to § 55 (2) RStV",
      sectionOdr: "EU Dispute Resolution",
      odrText: "The European Commission provides a platform for online dispute resolution (ODR): ",
      odrLink: "https://ec.europa.eu/consumers/odr/",
      odrSuffix: ". We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
      sectionLiability: "Liability for Content",
      liabilityText: "As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      sectionCopyright: "Copyright",
      copyrightText: "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.",
    },
    datenschutz: {
      metaTitle: "Privacy Policy — GD3 Coding Würzburg",
      metaDesc: "Information on data protection and the processing of personal data at GD3 Coding in Würzburg.",
      title: "Privacy Policy",
      sec1Title: "1. Controller",
      sec1Text: "The controller for data processing on this website is:\nGlison Doci — GD3 Coding\nKlara-Oppenheimer-Weg 39, 97074 Würzburg\nPhone: +49 1573 4685334 · E-mail: gd3.codierung@gmail.com",
      sec2Title: "2. General Information",
      sec2Text: "The use of our website is generally possible without providing personal data. Where personal data is collected on our pages, this is always done on a voluntary basis. This data will not be passed on to third parties without your express consent.",
      sec3Title: "3. Server Log Files",
      sec3Text: "The provider of these pages automatically collects and stores information in so-called server log files, which your browser transmits (browser type/version, operating system, referrer URL, hostname, time and IP address). This data is not merged with other data sources. The legal basis is Art. 6 (1) lit. f GDPR (legitimate interest in the secure operation of the website).",
      sec4Title: "4. Contact",
      sec4Text: "If you contact us by e-mail, telephone, WhatsApp or via the contact form, your details will be stored with us for the purpose of processing the enquiry and in the event of follow-up questions. The legal basis is Art. 6 (1) lit. b GDPR (initiation of contract) and lit. f (legitimate interest in responding).",
      sec5Title: "5. WhatsApp / Meta",
      sec5Text: "We use WhatsApp (Meta Platforms Ireland Ltd.) for appointment scheduling. If you contact us via WhatsApp, Meta's data protection provisions also apply. We have no influence on data processing there.",
      sec6Title: "6. Cookies",
      sec6Text: "This website uses only technically necessary cookies (e.g. to store your theme preference). No tracking or marketing cookies are set.",
      sec7Title: "7. Your Rights",
      sec7Text: "You have the right to information (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21) at any time. You also have the right to lodge a complaint with the competent supervisory authority (Bavarian State Office for Data Protection Supervision, Ansbach).",
      sec8Title: "8. SSL Encryption",
      sec8Text: "This site uses SSL/TLS encryption for security reasons. You can recognise an encrypted connection by the lock symbol in your browser's address bar.",
    },
    footer: {
      brand: "CODING",
      desc: "VCDS coding, diagnostics and programming for VW, Audi, Skoda and Seat in Würzburg & surroundings.",
      backup: "Backup guaranteed",
      appt: "24h appointments",
      contact: "Contact",
      legal: "Legal",
      prices: "Pricing",
      imprint: "Imprint",
      privacy: "Privacy",
      copyright: "© 2026 GD3 CODING",
    },
    preise: {
      metaTitle: "Pricing — VCDS Coding & Vehicle Optimization Würzburg | GD3",
      eyebrow: "Pricing / Services",
      title1: "Vehicle optimization",
      title2: "— transparent flat rates.",
      desc: "All services are performed on-site in Würzburg, with original VCDS hardware, a backup before every coding and within manufacturer parameters. Prices apply to VAG Group vehicles (VW, Audi, Skoda, Seat).",
      vat: "VAT is not shown as we are a small business under § 19 (1) UStG.",
      inquire: "Inquire",
      waPrefix: "Hi GD3, I'm interested in:",
      badges: ["Backup before every coding", "Original VCDS licence", "Appointments usually within 24h"],
      footerCopy: "© 2026 GD3 Coding · Würzburg",
      products: [
        { title: "VCDS Full Readout", price: "€20.00", body: "Complete readout of all control units, detailed fault memory report and advice on sensible next steps.", tags: ["Diagnostics", "Report"] },
        { title: "Hidden Features Unlock", price: "from €25.00", body: "Unlocking of hidden comfort features: Coming/Leaving-Home, cornering light, lane assist reminder, menu languages and more.", tags: ["Coding"] },
        { title: "Digital Cockpit Activation", price: "from €30.00", body: "Activation of extended views and layouts in Virtual Cockpit (Audi) or Active Info Display (VW/Skoda/Seat).", tags: ["Infotainment"] },
        { title: "Apple CarPlay & Android Auto", price: "€70.00", body: "Software-side unlock of Apple CarPlay and Android Auto on compatible MIB2/MIB3 systems.", tags: ["Infotainment", "Retrofit"] },
        { title: "Retrofit Coding", price: "from €50.00", body: "Coding after hardware retrofit: cruise control, park sensors, multifunction steering wheel, reversing camera, ambient lighting.", tags: ["Retrofit"] },
        { title: "Fault Code Analysis & Clearing", price: "€20.00", body: "Precise interpretation of complex fault patterns, targeted diagnostics and clearing of resolved entries — no unnecessary parts replacement.", tags: ["Diagnostics"] },
        { title: "Control Unit Adaptation", price: "from €30.00", body: "Adjustment of individual control unit parameters after a workshop visit, battery replacement or module swap.", tags: ["Coding"] },
        { title: "Custom Configuration", price: "on request", body: "Have a special request? Send us your vehicle and the desired change — you'll get a flat quote.", tags: ["Custom"] },
      ],
    },
  },
} as const;

export function useT() {
  const l = useLang();
  return dict[l];
}
