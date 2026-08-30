const layers = [
  {
    number: 7,
    name: "Aplicación",
    subtitle: "Servicios que usa el usuario",
    pdu: "Datos",
    role: "Acerca la red a las aplicaciones. Aquí viven las peticiones web, correo, nombres de dominio y transferencia de archivos.",
    examples: ["HTTP", "DNS", "SMTP", "FTP"],
    devices: "Navegador, cliente de correo, API",
    tip: "Si la persona puede reconocer el servicio, suele estar aquí.",
    encapsulation: "Mensaje de la aplicación"
  },
  {
    number: 6,
    name: "Presentación",
    subtitle: "Formato, cifrado y compresión",
    pdu: "Datos",
    role: "Traduce el formato de la información para que ambos extremos puedan interpretarla de forma compatible.",
    examples: ["TLS", "JSON", "JPEG", "UTF-8"],
    devices: "Bibliotecas de cifrado, codificadores",
    tip: "Piensa en idioma, formato y protección del contenido.",
    encapsulation: "Datos formateados"
  },
  {
    number: 5,
    name: "Sesión",
    subtitle: "Diálogo entre sistemas",
    pdu: "Datos",
    role: "Organiza la apertura, mantenimiento y cierre de sesiones entre aplicaciones que se comunican.",
    examples: ["RPC", "NetBIOS", "SIP", "SMB"],
    devices: "Servicios de sesión, middleware",
    tip: "Si gestiona quién habla y durante cuánto tiempo, mira esta capa.",
    encapsulation: "Contexto de sesión"
  },
  {
    number: 4,
    name: "Transporte",
    subtitle: "Puertos y entrega extremo a extremo",
    pdu: "Segmento",
    role: "Divide, ordena y entrega datos entre procesos. TCP aporta fiabilidad y UDP prioriza rapidez.",
    examples: ["TCP", "UDP", "QUIC", "SCTP"],
    devices: "Balanceadores, firewalls L4",
    tip: "Busca puertos, conexiones y control de flujo.",
    encapsulation: "Segmento TCP o datagrama UDP"
  },
  {
    number: 3,
    name: "Red",
    subtitle: "Direcciones IP y rutas",
    pdu: "Paquete",
    role: "Decide por dónde viajan los paquetes entre redes diferentes mediante direccionamiento lógico.",
    examples: ["IP", "ICMP", "OSPF", "BGP"],
    devices: "Router, firewall L3",
    tip: "Si aparece una IP o una ruta, estás en red.",
    encapsulation: "Paquete IP"
  },
  {
    number: 2,
    name: "Enlace",
    subtitle: "Tramas dentro de la red local",
    pdu: "Trama",
    role: "Mueve datos dentro del mismo enlace físico. Usa direcciones MAC y detecta errores básicos de transmisión.",
    examples: ["Ethernet", "Wi-Fi", "ARP", "PPP"],
    devices: "Switch, tarjeta de red, punto de acceso",
    tip: "MAC, VLAN y switch apuntan a enlace.",
    encapsulation: "Trama Ethernet"
  },
  {
    number: 1,
    name: "Física",
    subtitle: "Señales, cables y radio",
    pdu: "Bits",
    role: "Convierte bits en señales eléctricas, ópticas o de radio para transportarlos por el medio.",
    examples: ["Cable UTP", "Fibra", "Radio", "Conectores"],
    devices: "Cable, repetidor, hub, antena",
    tip: "Si puedes medir voltaje, luz o frecuencia, es física.",
    encapsulation: "Bits en el medio"
  }
];

const layerColors = {
  7: "var(--layer-7)",
  6: "var(--layer-6)",
  5: "var(--layer-5)",
  4: "var(--layer-4)",
  3: "var(--layer-3)",
  2: "var(--layer-2)",
  1: "var(--layer-1)"
};

const officialReferences = [
  {
    layer: 0,
    protocol: "Modelo OSI",
    standard: "ISO/IEC 7498-1 e ITU-T X.200",
    organization: "ISO e ITU-T",
    summary: "Modelo de referencia básico para interconexión de sistemas abiertos.",
    links: [
      { label: "ISO/IEC 7498-1:1994", url: "https://www.iso.org/standard/20269.html" },
      { label: "ITU-T X.200", url: "https://www.itu.int/rec/T-REC-X.200/en" }
    ]
  },
  {
    layer: 7,
    protocol: "HTTP",
    standard: "RFC 9110, RFC 9112, RFC 9113 y RFC 9114",
    organization: "IETF",
    summary: "Semántica HTTP y versiones HTTP/1.1, HTTP/2 y HTTP/3.",
    links: [
      { label: "RFC 9110", url: "https://www.rfc-editor.org/info/rfc9110" },
      { label: "RFC 9112", url: "https://www.rfc-editor.org/info/rfc9112" },
      { label: "RFC 9113", url: "https://www.rfc-editor.org/info/rfc9113" },
      { label: "RFC 9114", url: "https://www.rfc-editor.org/info/rfc9114" }
    ]
  },
  {
    layer: 7,
    protocol: "DNS",
    standard: "RFC 1034 y RFC 1035",
    organization: "IETF",
    summary: "Conceptos, formato de mensajes y funcionamiento básico del sistema de nombres de dominio.",
    links: [
      { label: "RFC 1034", url: "https://www.rfc-editor.org/info/rfc1034" },
      { label: "RFC 1035", url: "https://www.rfc-editor.org/info/rfc1035" }
    ]
  },
  {
    layer: 7,
    protocol: "SMTP",
    standard: "RFC 5321",
    organization: "IETF",
    summary: "Protocolo simple de transferencia de correo para envío entre servidores.",
    links: [{ label: "RFC 5321", url: "https://www.rfc-editor.org/info/rfc5321" }]
  },
  {
    layer: 7,
    protocol: "FTP",
    standard: "RFC 959",
    organization: "IETF",
    summary: "Protocolo de transferencia de archivos con canal de control y canal de datos.",
    links: [{ label: "RFC 959", url: "https://www.rfc-editor.org/info/rfc959" }]
  },
  {
    layer: 6,
    protocol: "TLS",
    standard: "RFC 9846",
    organization: "IETF",
    summary: "TLS 1.3 actualizado. Obsoleta RFC 8446 según RFC Editor.",
    links: [{ label: "RFC 9846", url: "https://www.rfc-editor.org/info/rfc9846" }]
  },
  {
    layer: 6,
    protocol: "JSON",
    standard: "RFC 8259 y ECMA-404",
    organization: "IETF y Ecma",
    summary: "Formato ligero de intercambio de datos y especificación de sintaxis JSON.",
    links: [
      { label: "RFC 8259", url: "https://www.rfc-editor.org/info/rfc8259" },
      { label: "ECMA-404", url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-404/" }
    ]
  },
  {
    layer: 6,
    protocol: "JPEG",
    standard: "ISO/IEC 10918-1 e ITU-T T.81",
    organization: "ISO e ITU-T",
    summary: "Codificación y compresión de imágenes digitales de tono continuo.",
    links: [
      { label: "ISO/IEC 10918-1", url: "https://www.iso.org/standard/18902.html" },
      { label: "ITU-T T.81", url: "https://www.itu.int/rec/T-REC-T.81/en" }
    ]
  },
  {
    layer: 6,
    protocol: "UTF-8",
    standard: "RFC 3629",
    organization: "IETF",
    summary: "Codificación UTF-8 como formato de transformación de ISO 10646.",
    links: [{ label: "RFC 3629", url: "https://www.rfc-editor.org/info/rfc3629" }]
  },
  {
    layer: 5,
    protocol: "RPC",
    standard: "RFC 5531",
    organization: "IETF",
    summary: "Especificación ONC RPC versión 2 para llamadas a procedimiento remoto.",
    links: [{ label: "RFC 5531", url: "https://www.rfc-editor.org/info/rfc5531" }]
  },
  {
    layer: 5,
    protocol: "NetBIOS",
    standard: "RFC 1001 y RFC 1002",
    organization: "IETF",
    summary: "Servicio NetBIOS sobre transporte TCP/UDP, conceptos y especificación detallada.",
    links: [
      { label: "RFC 1001", url: "https://www.rfc-editor.org/info/rfc1001" },
      { label: "RFC 1002", url: "https://www.rfc-editor.org/info/rfc1002" }
    ]
  },
  {
    layer: 5,
    protocol: "SIP",
    standard: "RFC 3261",
    organization: "IETF",
    summary: "Protocolo de inicio de sesión para crear, modificar y terminar sesiones multimedia.",
    links: [{ label: "RFC 3261", url: "https://www.rfc-editor.org/info/rfc3261" }]
  },
  {
    layer: 5,
    protocol: "SMB",
    standard: "MS-SMB2",
    organization: "Microsoft Open Specifications",
    summary: "Especificación abierta de SMB 2 y SMB 3 para compartir archivos e impresoras.",
    links: [
      {
        label: "MS-SMB2",
        url: "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb2/5606ad47-5ee0-437a-817e-70c366052962"
      }
    ]
  },
  {
    layer: 4,
    protocol: "TCP",
    standard: "RFC 9293",
    organization: "IETF",
    summary: "Especificación moderna del Transmission Control Protocol.",
    links: [{ label: "RFC 9293", url: "https://www.rfc-editor.org/info/rfc9293" }]
  },
  {
    layer: 4,
    protocol: "UDP",
    standard: "RFC 768 y RFC 8085",
    organization: "IETF",
    summary: "Datagramas sin conexión y guía actual de uso sobre Internet.",
    links: [
      { label: "RFC 768", url: "https://www.rfc-editor.org/info/rfc768" },
      { label: "RFC 8085", url: "https://www.rfc-editor.org/info/rfc8085" }
    ]
  },
  {
    layer: 4,
    protocol: "QUIC",
    standard: "RFC 9000, RFC 9001 y RFC 9002",
    organization: "IETF",
    summary: "Transporte seguro sobre UDP, integración con TLS y recuperación de pérdidas.",
    links: [
      { label: "RFC 9000", url: "https://www.rfc-editor.org/info/rfc9000" },
      { label: "RFC 9001", url: "https://www.rfc-editor.org/info/rfc9001" },
      { label: "RFC 9002", url: "https://www.rfc-editor.org/info/rfc9002" }
    ]
  },
  {
    layer: 4,
    protocol: "SCTP",
    standard: "RFC 9260",
    organization: "IETF",
    summary: "Transporte fiable con asociaciones, multihoming y entrega por streams.",
    links: [{ label: "RFC 9260", url: "https://www.rfc-editor.org/info/rfc9260" }]
  },
  {
    layer: 3,
    protocol: "IP",
    standard: "RFC 791 y RFC 8200",
    organization: "IETF",
    summary: "IPv4 e IPv6 como protocolos base de direccionamiento y entrega entre redes.",
    links: [
      { label: "RFC 791", url: "https://www.rfc-editor.org/info/rfc791" },
      { label: "RFC 8200", url: "https://www.rfc-editor.org/info/rfc8200" }
    ]
  },
  {
    layer: 3,
    protocol: "ICMP",
    standard: "RFC 792",
    organization: "IETF",
    summary: "Mensajes de control y errores integrados con IP.",
    links: [{ label: "RFC 792", url: "https://www.rfc-editor.org/info/rfc792" }]
  },
  {
    layer: 3,
    protocol: "OSPF",
    standard: "RFC 2328 y RFC 5340",
    organization: "IETF",
    summary: "Enrutamiento de estado de enlace para IPv4 y extensión OSPFv3 para IPv6.",
    links: [
      { label: "RFC 2328", url: "https://www.rfc-editor.org/info/rfc2328" },
      { label: "RFC 5340", url: "https://www.rfc-editor.org/info/rfc5340" }
    ]
  },
  {
    layer: 3,
    protocol: "BGP",
    standard: "RFC 4271",
    organization: "IETF",
    summary: "BGP-4 para intercambio de alcance entre sistemas autónomos.",
    links: [{ label: "RFC 4271", url: "https://www.rfc-editor.org/info/rfc4271" }]
  },
  {
    layer: 2,
    protocol: "Ethernet",
    standard: "IEEE 802.3",
    organization: "IEEE",
    summary: "MAC y PHY para redes Ethernet cableadas.",
    links: [
      { label: "IEEE 802.3 WG", url: "https://www.ieee802.org/3/" },
      { label: "IEEE 802.3 Standards", url: "https://technav.ieee.org/topic/ieee-8023-standards/" }
    ]
  },
  {
    layer: 2,
    protocol: "Wi-Fi",
    standard: "IEEE 802.11",
    organization: "IEEE",
    summary: "MAC y PHY para redes WLAN en bandas no licenciadas.",
    links: [
      { label: "IEEE 802.11 WG", url: "https://www.ieee802.org/11/" },
      { label: "IEEE 802.11 Standards", url: "https://technav.ieee.org/topic/ieee-80211-standards/" }
    ]
  },
  {
    layer: 2,
    protocol: "ARP",
    standard: "RFC 826",
    organization: "IETF",
    summary: "Resolución de direcciones IPv4 a direcciones de hardware en redes locales.",
    links: [{ label: "RFC 826", url: "https://www.rfc-editor.org/info/rfc826" }]
  },
  {
    layer: 2,
    protocol: "PPP",
    standard: "RFC 1661",
    organization: "IETF",
    summary: "Protocolo punto a punto para transportar datagramas multiprotocolo.",
    links: [{ label: "RFC 1661", url: "https://www.rfc-editor.org/info/rfc1661" }]
  },
  {
    layer: 1,
    protocol: "Cableado UTP",
    standard: "ANSI/TIA-568 e ISO/IEC 11801",
    organization: "TIA e ISO",
    summary: "Cableado estructurado de par trenzado y clases de canal.",
    links: [
      { label: "TIA-568", url: "https://tiaonline.org/standard/tia-568/" },
      { label: "ISO/IEC 11801-1", url: "https://www.iso.org/standard/66182.html" }
    ]
  },
  {
    layer: 1,
    protocol: "Fibra óptica",
    standard: "ITU-T G.652",
    organization: "ITU-T",
    summary: "Características de fibras y cables ópticos monomodo.",
    links: [{ label: "ITU-T G.652", url: "https://www.itu.int/rec/T-REC-G.652-202408-I/en" }]
  },
  {
    layer: 1,
    protocol: "Radio WLAN",
    standard: "IEEE 802.11 PHY",
    organization: "IEEE",
    summary: "Especificaciones físicas de radio usadas por redes inalámbricas IEEE 802.11.",
    links: [{ label: "IEEE 802.11 WG", url: "https://www.ieee802.org/11/" }]
  },
  {
    layer: 1,
    protocol: "Conectores Ethernet",
    standard: "IEEE 802.3",
    organization: "IEEE",
    summary: "Interfaces físicas, medios y parámetros eléctricos u ópticos para Ethernet.",
    links: [{ label: "IEEE 802.3 WG", url: "https://www.ieee802.org/3/" }]
  }
];

const quizzes = [
  {
    question: "¿Qué capa usa direcciones IP para mover paquetes entre redes?",
    options: ["Red", "Enlace", "Transporte", "Sesión"],
    answer: "Red",
    reason: "La capa de red trabaja con direccionamiento lógico y rutas."
  },
  {
    question: "¿Qué PDU se asocia de forma habitual a la capa de transporte?",
    options: ["Segmento", "Trama", "Bits", "Paquete"],
    answer: "Segmento",
    reason: "TCP trabaja con segmentos. UDP suele llamarse datagrama, pero se estudia en transporte."
  },
  {
    question: "¿Dónde encaja Ethernet dentro del modelo OSI?",
    options: ["Enlace", "Aplicación", "Sesión", "Presentación"],
    answer: "Enlace",
    reason: "Ethernet define tramas y uso de direcciones MAC en una red local."
  },
  {
    question: "¿Qué capa se asocia con cifrado, compresión y formato?",
    options: ["Presentación", "Red", "Física", "Transporte"],
    answer: "Presentación",
    reason: "La presentación adapta cómo se codifican y protegen los datos."
  },
  {
    question: "¿Qué dispositivo se relaciona de forma clásica con la capa 3?",
    options: ["Router", "Cable", "Switch L2", "Navegador"],
    answer: "Router",
    reason: "El router decide rutas entre redes usando información de capa 3."
  },
  {
    question: "¿En qué capa aparecen señales eléctricas, ópticas o de radio?",
    options: ["Física", "Aplicación", "Red", "Sesión"],
    answer: "Física",
    reason: "La capa física convierte bits en señales que viajan por el medio."
  }
];

let selectedLayer = 7;
let simulationMode = "send";
let simulationStep = 0;
let quizIndex = 0;
let quizScore = 0;
let answered = false;
let stackObserver;
let graphResizeObserver;
let referenceLayerFilter = "all";
let osiGraph;
let selectedGraphNodeId = "layer-7";
let graphViewMode = "layers";

const graphViewLabels = {
  layers: "Capas",
  standards: "Estándares",
  complete: "Completo"
};

const byId = (id) => document.getElementById(id);

function setLayerColor(element, layerNumber) {
  element.style.setProperty("--layer-color", layerColors[layerNumber]);
}

function selectLayer(layerNumber, graphNodeId = `layer-${layerNumber}`) {
  selectedLayer = layerNumber;
  selectedGraphNodeId = graphNodeId;
  renderLayerSelector();
  renderLayerStack();
  renderLayerDetail();
  renderLayerMap();
}

function getLayerReferences(layerNumber) {
  return officialReferences.filter((reference) => reference.layer === layerNumber);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getLayerNodeId(layerNumber) {
  return `layer-${layerNumber}`;
}

function getProtocolNodeId(reference) {
  return `protocol-${reference.layer}-${slugify(reference.protocol)}`;
}

function getStandardNodeId(label) {
  return `standard-${slugify(label)}`;
}

function getOrganizationNodeId(name) {
  return `org-${slugify(name)}`;
}

function resolveCssColor(value) {
  const probe = document.createElement("span");
  probe.style.color = value;
  document.body.appendChild(probe);
  const color = getComputedStyle(probe).color;
  probe.remove();
  return color;
}

function parseRgbColor(color) {
  const rgbMatch = color.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch) {
    const separator = rgbMatch[1].includes(",") ? "," : " ";
    return rgbMatch[1]
      .split(separator)
      .filter((part) => part !== "/" && part.trim() !== "")
      .slice(0, 3)
      .map((part) => Number.parseFloat(part.trim()));
  }

  const srgbMatch = color.match(/color\(srgb\s+([^)]+)\)/);
  if (srgbMatch) {
    return srgbMatch[1]
      .split(/[ /]+/)
      .filter(Boolean)
      .slice(0, 3)
      .map((part) => Number.parseFloat(part) * 255);
  }

  return [0, 0, 0];
}

function getRelativeLuminance(color) {
  const [red, green, blue] = parseRgbColor(color).map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function getContrastRatio(colorA, colorB) {
  const light = Math.max(getRelativeLuminance(colorA), getRelativeLuminance(colorB));
  const dark = Math.min(getRelativeLuminance(colorA), getRelativeLuminance(colorB));
  return (light + 0.05) / (dark + 0.05);
}

function getReadableTextColor(background) {
  const ink = resolveCssColor("var(--palette-ink)");
  const light = resolveCssColor("var(--palette-light)");
  return getContrastRatio(background, ink) >= getContrastRatio(background, light) ? ink : light;
}

function getGraphPalette() {
  return {
    text: resolveCssColor("var(--text)"),
    muted: resolveCssColor("var(--muted)"),
    line: resolveCssColor("var(--line)"),
    surface: resolveCssColor("var(--surface)"),
    accent: resolveCssColor("var(--accent)"),
    protocol: resolveCssColor("var(--palette-red)"),
    standard: resolveCssColor("var(--palette-muted)"),
    organization: resolveCssColor("var(--accent-strong)")
  };
}

function getLayerGraphColor(layerNumber) {
  return resolveCssColor(layerColors[layerNumber]);
}

function addGraphEdge(edges, id, source, target, label, classes = "") {
  if (edges.has(id)) return;

  edges.set(id, {
    data: { id, source, target, label },
    classes
  });
}

function mergeNodeData(node, reference, link) {
  const layersForNode = node.data.layers || [];
  if (!layersForNode.includes(reference.layer)) layersForNode.push(reference.layer);
  node.data.layers = layersForNode;

  const protocols = node.data.protocols || [];
  if (!protocols.includes(reference.protocol)) protocols.push(reference.protocol);
  node.data.protocols = protocols;

  if (link) {
    const links = node.data.links || [];
    if (!links.some((item) => item.url === link.url)) links.push(link);
    node.data.links = links;
  }
}

function buildGraphElements() {
  const palette = getGraphPalette();
  const nodes = new Map();
  const edges = new Map();

  layers.forEach((layer) => {
    const layerColor = getLayerGraphColor(layer.number);

    nodes.set(getLayerNodeId(layer.number), {
      data: {
        id: getLayerNodeId(layer.number),
        label: `L${layer.number} ${layer.name}`,
        type: "layer",
        layer: layer.number,
        layers: [layer.number],
        color: layerColor,
        textColor: getReadableTextColor(layerColor)
      },
      classes: "type-layer"
    });
  });

  officialReferences
    .filter((reference) => reference.layer > 0)
    .forEach((reference) => {
      const protocolId = getProtocolNodeId(reference);
      const protocolNode = {
        data: {
          id: protocolId,
          label: reference.protocol,
          type: "protocol",
          layer: reference.layer,
          layers: [reference.layer],
          referenceProtocol: reference.protocol,
          color: palette.protocol,
          textColor: palette.text
        },
        classes: "type-protocol"
      };

      nodes.set(protocolId, protocolNode);
      addGraphEdge(
        edges,
        `edge-${getLayerNodeId(reference.layer)}-${protocolId}`,
        getLayerNodeId(reference.layer),
        protocolId,
        "usa",
        "type-layer-protocol"
      );

      reference.links.forEach((link) => {
        const standardId = getStandardNodeId(link.label);
        const standardNode =
          nodes.get(standardId) ||
          {
            data: {
              id: standardId,
              label: link.label,
              type: "standard",
              layers: [],
              protocols: [],
              links: [],
              color: palette.standard,
              textColor: palette.text
            },
            classes: "type-standard"
          };

        mergeNodeData(standardNode, reference, link);
        nodes.set(standardId, standardNode);

        addGraphEdge(
          edges,
          `edge-${protocolId}-${standardId}`,
          protocolId,
          standardId,
          "definido en",
          "type-protocol-standard"
        );

        const organizationId = getOrganizationNodeId(reference.organization);
        const organizationNode =
          nodes.get(organizationId) ||
          {
            data: {
              id: organizationId,
              label: reference.organization,
              type: "organization",
              layers: [],
              protocols: [],
              color: palette.organization,
              textColor: palette.text
            },
            classes: "type-organization"
          };

        mergeNodeData(organizationNode, reference);
        nodes.set(organizationId, organizationNode);

        addGraphEdge(
          edges,
          `edge-${standardId}-${organizationId}`,
          standardId,
          organizationId,
          "publica",
          "type-standard-organization"
        );
      });
    });

  return [...nodes.values(), ...edges.values()];
}

function renderHeroStack() {
  const heroStack = byId("heroStack");
  heroStack.innerHTML = layers
    .map(
      (layer) => `
        <div class="mini-layer" style="--layer-color: ${layerColors[layer.number]}">
          <span>L${layer.number}</span>
          <span>${layer.name}</span>
        </div>
      `
    )
    .join("");
}

function renderLayerSelector() {
  const selector = byId("layerSelector");
  selector.innerHTML = "";

  layers.forEach((layer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `layer-button${layer.number === selectedLayer ? " is-active" : ""}`;
    button.setAttribute("aria-pressed", String(layer.number === selectedLayer));
    setLayerColor(button, layer.number);
    button.innerHTML = `
      <span class="layer-button__number">L${layer.number}</span>
      <span>
        <span class="layer-button__name">${layer.name}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      selectLayer(layer.number);
    });
    selector.appendChild(button);
  });
}

function renderLayerStack() {
  const stack = byId("layerStack");
  stack.innerHTML = "";

  layers.forEach((layer) => {
    const row = document.createElement("div");
    row.className = `stack-layer${layer.number === selectedLayer ? " is-active" : ""}`;
    row.dataset.layer = String(layer.number);
    setLayerColor(row, layer.number);
    row.innerHTML = `
      <span class="stack-layer__num">L${layer.number}</span>
      <span>
        <span class="stack-layer__name">${layer.name}</span><br>
        <small>${layer.pdu}</small>
      </span>
    `;
    stack.appendChild(row);
  });

  requestAnimationFrame(syncStackMarker);
}

function syncStackMarker() {
  const activeRow = document.querySelector(".stack-layer.is-active");
  const panel = document.querySelector(".stack-panel");
  if (!activeRow || !panel) return;

  const top = activeRow.offsetTop + activeRow.offsetHeight / 2;
  panel.style.setProperty("--marker-top", `${top}px`);
}

function renderLayerDetail() {
  const detail = byId("layerDetail");
  const layer = layers.find((item) => item.number === selectedLayer);
  detail.style.setProperty("--layer-color", layerColors[layer.number]);
  detail.innerHTML = `
    <span class="detail-kicker">Capa ${layer.number}</span>
    <div>
      <h3>${layer.name}</h3>
      <p class="detail-lede">${layer.subtitle}</p>
    </div>
    <p>${layer.role}</p>
    <div class="detail-grid">
      <div class="fact">
        <span>PDU</span>
        <strong>${layer.pdu}</strong>
      </div>
      <div class="fact">
        <span>Dispositivos o piezas</span>
        <strong>${layer.devices}</strong>
      </div>
    </div>
    <ul class="tag-list" aria-label="Ejemplos de la capa ${layer.name}">
      ${layer.examples.map((example) => `<li>${example}</li>`).join("")}
    </ul>
    <div class="fact">
      <span>Pista de memoria</span>
      <strong>${layer.tip}</strong>
    </div>
  `;
}

function renderLayerMap() {
  const diagram = byId("osiDiagram");
  if (!diagram) return;

  if (typeof window.cytoscape !== "function") {
    renderStaticLayerMap(diagram);
    renderMapDetail();
    return;
  }

  diagram.classList.remove("is-fallback");

  if (!diagram.querySelector("#cyGraph")) {
    if (osiGraph) {
      osiGraph.destroy();
      osiGraph = undefined;
    }

    renderGraphShell(diagram);
  }

  syncGraphToolbar(diagram);
  renderMapDetail();

  if (!osiGraph) {
    createOsiGraph();
  } else {
    refreshGraphTheme();
  }

  updateGraphView();
}

function renderStaticLayerMap(diagram) {
  if (!selectedGraphNodeId.startsWith("layer-")) selectedGraphNodeId = getLayerNodeId(selectedLayer);

  diagram.classList.add("is-fallback");
  diagram.innerHTML = `
    <div class="diagram-labels" aria-hidden="true">
      <span>Host origen</span>
      <span>Host destino</span>
    </div>
    ${layers
      .map(
        (item) => `
          <button
            class="map-layer${item.number === selectedLayer ? " is-active" : ""}"
            type="button"
            data-layer="${item.number}"
            style="--layer-color: ${layerColors[item.number]}"
            aria-pressed="${item.number === selectedLayer}"
          >
            <span class="map-layer__number">L${item.number}</span>
            <span class="map-layer__body">
              <span class="map-layer__name">${item.name}</span>
              <span class="map-layer__pdu">${item.pdu}</span>
            </span>
            <span class="map-layer__protocols">${item.examples.slice(0, 3).join(" / ")}</span>
          </button>
        `
      )
      .join("")}
  `;

  diagram.querySelectorAll(".map-layer").forEach((button) => {
    button.addEventListener("click", () => selectLayer(Number(button.dataset.layer)));
  });
}

function renderGraphShell(diagram) {
  diagram.innerHTML = `
    <div class="graph-toolbar">
      <div class="graph-view-toggle" role="group" aria-label="Vista del gráfico">
        ${Object.entries(graphViewLabels)
          .map(
            ([mode, label]) => `
              <button
                class="graph-view-button"
                type="button"
                data-graph-view="${mode}"
                aria-pressed="${mode === graphViewMode}"
              >
                ${label}
              </button>
            `
          )
          .join("")}
      </div>
      <button class="graph-fit-button" type="button" id="fitGraph">Centrar</button>
    </div>
    <div class="graph-canvas" id="cyGraph" role="img" aria-label="Grafo de capas, protocolos, estándares y organismos oficiales"></div>
    <div class="graph-legend" aria-hidden="true">
      <span><i class="legend-dot is-layer"></i>Capa</span>
      <span><i class="legend-dot is-protocol"></i>Protocolo</span>
      <span><i class="legend-dot is-standard"></i>Estándar</span>
      <span><i class="legend-dot is-organization"></i>Organismo</span>
    </div>
  `;

  diagram.querySelectorAll(".graph-view-button").forEach((button) => {
    button.addEventListener("click", () => {
      graphViewMode = button.dataset.graphView;
      selectedGraphNodeId = getLayerNodeId(selectedLayer);
      syncGraphToolbar(diagram);
      renderMapDetail();
      updateGraphView();
    });
  });

  byId("fitGraph").addEventListener("click", () => {
    if (!osiGraph) return;
    osiGraph.fit(osiGraph.elements().not(".is-hidden"), 32);
  });
}

function syncGraphToolbar(diagram) {
  diagram.querySelectorAll(".graph-view-button").forEach((button) => {
    const active = button.dataset.graphView === graphViewMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function createOsiGraph() {
  const container = byId("cyGraph");
  if (!container) return;

  osiGraph = cytoscape({
    container,
    elements: buildGraphElements(),
    style: getCytoscapeStyle(),
    minZoom: 0.45,
    maxZoom: 2.2,
    wheelSensitivity: 0.18,
    boxSelectionEnabled: false,
    layout: { name: "preset" }
  });

  osiGraph.on("tap", "node", (event) => {
    const node = event.target;
    const layerNumber = getPreferredLayerForGraphData(node.data());
    if (!layerNumber) return;
    selectLayer(layerNumber, node.id());
  });

  osiGraph.on("tap", (event) => {
    if (event.target !== osiGraph) return;
    selectedGraphNodeId = getLayerNodeId(selectedLayer);
    renderMapDetail();
    updateGraphSelection();
  });
}

function getCytoscapeStyle() {
  const palette = getGraphPalette();

  return [
    {
      selector: "node",
      style: {
        "background-color": "data(color)",
        "border-color": "data(color)",
        "border-width": 2,
        color: "data(textColor)",
        content: "data(label)",
        "font-family": "Segoe UI, system-ui, sans-serif",
        "font-size": 12,
        "font-weight": 800,
        height: 46,
        label: "data(label)",
        "overlay-opacity": 0,
        shape: "round-rectangle",
        "text-halign": "center",
        "text-max-width": 92,
        "text-valign": "center",
        "text-wrap": "wrap",
        width: 96
      }
    },
    {
      selector: ".type-layer",
      style: {
        height: 54,
        "font-size": 13,
        "text-max-width": 104,
        width: 118
      }
    },
    {
      selector: ".type-protocol",
      style: {
        "background-color": palette.surface,
        color: palette.text,
        height: 44,
        shape: "ellipse",
        width: 74
      }
    },
    {
      selector: ".type-standard",
      style: {
        "background-color": palette.surface,
        color: palette.text,
        height: 40,
        "font-size": 11,
        "text-max-width": 86,
        width: 90
      }
    },
    {
      selector: ".type-organization",
      style: {
        "background-color": palette.surface,
        color: palette.text,
        height: 42,
        shape: "hexagon",
        "text-max-width": 86,
        width: 96
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "font-size": 10,
        "font-weight": 800,
        label: "",
        "line-color": palette.line,
        opacity: 0.8,
        "target-arrow-color": palette.line,
        "target-arrow-shape": "triangle",
        width: 2
      }
    },
    {
      selector: ".is-selected",
      style: {
        "border-color": palette.accent,
        "border-width": 4,
        "shadow-blur": 18,
        "shadow-color": palette.accent,
        "shadow-opacity": 0.28
      }
    },
    {
      selector: ".is-related",
      style: {
        "border-width": 3,
        opacity: 1
      }
    },
    {
      selector: ".is-related-edge",
      style: {
        color: palette.muted,
        label: "data(label)",
        "line-color": palette.accent,
        opacity: 1,
        "target-arrow-color": palette.accent,
        width: 3
      }
    },
    {
      selector: ".is-muted",
      style: {
        opacity: 0.24
      }
    },
    {
      selector: ".is-hidden",
      style: {
        display: "none"
      }
    }
  ];
}

function refreshGraphTheme() {
  if (!osiGraph) return;

  const palette = getGraphPalette();
  layers.forEach((layer) => {
    const node = osiGraph.$id(getLayerNodeId(layer.number));
    if (node.nonempty()) {
      const layerColor = getLayerGraphColor(layer.number);
      node.data("color", layerColor);
      node.data("textColor", getReadableTextColor(layerColor));
    }
  });

  osiGraph.nodes(".type-protocol").forEach((node) => {
    node.data("color", palette.protocol);
    node.data("textColor", palette.text);
  });
  osiGraph.nodes(".type-standard").forEach((node) => {
    node.data("color", palette.standard);
    node.data("textColor", palette.text);
  });
  osiGraph.nodes(".type-organization").forEach((node) => {
    node.data("color", palette.organization);
    node.data("textColor", palette.text);
  });
  osiGraph.style(getCytoscapeStyle());
}

function updateGraphView() {
  if (!osiGraph) return;

  const visibleNodeIds = getVisibleGraphNodeIds();
  if (!visibleNodeIds.has(selectedGraphNodeId)) selectedGraphNodeId = getLayerNodeId(selectedLayer);

  osiGraph.batch(() => {
    osiGraph.nodes().forEach((node) => {
      node[visibleNodeIds.has(node.id()) ? "removeClass" : "addClass"]("is-hidden");
    });

    osiGraph.edges().forEach((edge) => {
      const hidden = edge.source().hasClass("is-hidden") || edge.target().hasClass("is-hidden");
      edge[hidden ? "addClass" : "removeClass"]("is-hidden");
    });
  });

  updateGraphSelection();
  osiGraph.elements().not(".is-hidden").layout(getGraphLayout()).run();
}

function updateGraphSelection() {
  if (!osiGraph) return;

  const visibleElements = osiGraph.elements().not(".is-hidden");
  visibleElements.removeClass("is-selected is-related is-related-edge is-muted");

  const selected = osiGraph.$id(selectedGraphNodeId);
  if (selected.empty() || selected.hasClass("is-hidden")) return;

  selected.addClass("is-selected");
  const related = selected.closedNeighborhood().filter((element) => !element.hasClass("is-hidden"));
  related.nodes().not(selected).addClass("is-related");
  related.edges().addClass("is-related-edge");
  visibleElements.not(related).not(selected).addClass("is-muted");
}

function resizeGraph() {
  if (!osiGraph) return;
  osiGraph.resize();
  updateGraphView();
}

function getVisibleGraphNodeIds() {
  const visible = new Set();

  if (graphViewMode === "complete" && osiGraph) {
    osiGraph.nodes().forEach((node) => visible.add(node.id()));
    return visible;
  }

  if (graphViewMode === "standards") {
    visible.add(getLayerNodeId(selectedLayer));

    getLayerReferences(selectedLayer).forEach((reference) => {
      visible.add(getProtocolNodeId(reference));
      reference.links.forEach((link) => {
        visible.add(getStandardNodeId(link.label));
        visible.add(getOrganizationNodeId(reference.organization));
      });
    });

    return visible;
  }

  layers.forEach((layer) => visible.add(getLayerNodeId(layer.number)));
  officialReferences
    .filter((reference) => reference.layer > 0)
    .forEach((reference) => visible.add(getProtocolNodeId(reference)));

  return visible;
}

function getGraphLayout() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (graphViewMode === "complete") {
    return {
      name: "cose",
      animate: !reduceMotion,
      animationDuration: 420,
      componentSpacing: 80,
      fit: true,
      idealEdgeLength: 82,
      nodeRepulsion: 7200,
      padding: 34,
      randomize: false
    };
  }

  return {
    name: "preset",
    animate: !reduceMotion,
    animationDuration: 320,
    fit: true,
    padding: 34,
    positions: getGraphPositions()
  };
}

function getGraphPositions() {
  const container = byId("cyGraph");
  const width = Math.max(container?.clientWidth || 620, 320);
  const height = Math.max(container?.clientHeight || 560, 380);

  if (graphViewMode === "standards") return getStandardGraphPositions(width, height);
  return getLayerProtocolGraphPositions(width, height);
}

function getLayerProtocolGraphPositions(width, height) {
  const positions = {};
  const top = 58;
  const bottom = 58;
  const gap = (height - top - bottom) / (layers.length - 1);

  layers.forEach((layer, index) => {
    const y = top + index * gap;
    positions[getLayerNodeId(layer.number)] = { x: width * 0.2, y };

    getLayerReferences(layer.number).forEach((reference, referenceIndex, references) => {
      const offset = (referenceIndex - (references.length - 1) / 2) * Math.min(34, gap / 2.6);
      positions[getProtocolNodeId(reference)] = {
        x: width * (0.56 + (referenceIndex % 2) * 0.24),
        y: y + offset
      };
    });
  });

  return positions;
}

function getStandardGraphPositions(width, height) {
  const positions = {};
  const references = getLayerReferences(selectedLayer);
  const organizationIds = [...new Set(references.map((reference) => getOrganizationNodeId(reference.organization)))];
  const standardEntries = [];

  positions[getLayerNodeId(selectedLayer)] = { x: width * 0.14, y: height / 2 };

  references.forEach((reference, referenceIndex) => {
    const y = (height * (referenceIndex + 1)) / (references.length + 1);
    positions[getProtocolNodeId(reference)] = { x: width * 0.39, y };
    reference.links.forEach((link) => {
      standardEntries.push({ id: getStandardNodeId(link.label) });
    });
  });

  [...new Map(standardEntries.map((entry) => [entry.id, entry])).values()].forEach((entry, index, entries) => {
    positions[entry.id] = {
      x: width * 0.66,
      y: (height * (index + 1)) / (entries.length + 1)
    };
  });

  organizationIds.forEach((id, index) => {
    positions[id] = {
      x: width * 0.9,
      y: (height * (index + 1)) / (organizationIds.length + 1)
    };
  });

  return positions;
}

function getPreferredLayerForGraphData(data) {
  if (typeof data.layer === "number") return data.layer;
  if (!Array.isArray(data.layers) || data.layers.length === 0) return selectedLayer;
  return data.layers.includes(selectedLayer) ? selectedLayer : data.layers[0];
}

function getReferenceByProtocolNodeId(nodeId) {
  return officialReferences.find((reference) => reference.layer > 0 && getProtocolNodeId(reference) === nodeId);
}

function getReferencesByStandardNodeId(nodeId) {
  return officialReferences.filter((reference) =>
    reference.links.some((link) => getStandardNodeId(link.label) === nodeId)
  );
}

function getReferencesByOrganizationNodeId(nodeId) {
  return officialReferences.filter(
    (reference) => reference.layer > 0 && getOrganizationNodeId(reference.organization) === nodeId
  );
}

function getUniqueLinks(links) {
  const seen = new Set();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

function renderReferenceAnchors(links) {
  return getUniqueLinks(links)
    .map(
      (link) => `
        <a href="${link.url}" target="_blank" rel="noreferrer">
          <strong>${link.label}</strong>
          <span>Documento oficial</span>
        </a>
      `
    )
    .join("");
}

function renderMapDetail() {
  const detail = byId("mapDetail");
  if (!detail) return;

  const protocolReference = getReferenceByProtocolNodeId(selectedGraphNodeId);
  if (protocolReference) {
    renderProtocolMapDetail(detail, protocolReference);
    return;
  }

  const standardReferences = getReferencesByStandardNodeId(selectedGraphNodeId);
  if (standardReferences.length > 0) {
    renderStandardMapDetail(detail, standardReferences);
    return;
  }

  const organizationReferences = getReferencesByOrganizationNodeId(selectedGraphNodeId);
  if (organizationReferences.length > 0) {
    renderOrganizationMapDetail(detail, organizationReferences);
    return;
  }

  renderLayerMapDetail(detail);
}

function renderLayerMapDetail(detail) {
  const layer = layers.find((item) => item.number === selectedLayer);
  const references = getLayerReferences(selectedLayer);

  detail.style.setProperty("--layer-color", layerColors[layer.number]);
  detail.innerHTML = `
    <span class="detail-kicker">Vista de capa ${layer.number}</span>
    <div>
      <h3>${layer.name}</h3>
      <p class="detail-lede">${layer.subtitle}</p>
    </div>
    <p>${layer.role}</p>
    <div class="map-facts">
      <div class="fact">
        <span>Unidad de datos</span>
        <strong>${layer.pdu}</strong>
      </div>
      <div class="fact">
        <span>Nodos de protocolo</span>
        <strong>${references.length} referencias</strong>
      </div>
    </div>
    <div class="map-reference-list">
      <span class="detail-kicker">Documentos oficiales</span>
      ${references
        .map(
          (reference) => `
            <a href="${reference.links[0].url}" target="_blank" rel="noreferrer">
              <strong>${reference.protocol}</strong>
              <span>${reference.standard}</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProtocolMapDetail(detail, reference) {
  const layer = layers.find((item) => item.number === reference.layer);

  detail.style.setProperty("--layer-color", layerColors[reference.layer]);
  detail.innerHTML = `
    <span class="detail-kicker">Capa ${reference.layer} / Protocolo</span>
    <div>
      <h3>${reference.protocol}</h3>
      <p class="detail-lede">${reference.standard}</p>
    </div>
    <p>${reference.summary}</p>
    <div class="map-facts">
      <div class="fact">
        <span>Capa OSI</span>
        <strong>L${layer.number} ${layer.name}</strong>
      </div>
      <div class="fact">
        <span>Organismo</span>
        <strong>${reference.organization}</strong>
      </div>
    </div>
    <div class="map-reference-list">
      <span class="detail-kicker">Documentos oficiales</span>
      ${renderReferenceAnchors(reference.links)}
    </div>
  `;
}

function renderStandardMapDetail(detail, references) {
  const selectedLink = references.flatMap((reference) => reference.links).find(
    (link) => getStandardNodeId(link.label) === selectedGraphNodeId
  );
  const protocols = [...new Set(references.map((reference) => reference.protocol))];
  const layerNumbers = [...new Set(references.map((reference) => reference.layer))].sort((a, b) => b - a);
  const preferredLayer = layerNumbers.includes(selectedLayer) ? selectedLayer : layerNumbers[0];
  const links = references.flatMap((reference) =>
    reference.links.filter((link) => getStandardNodeId(link.label) === selectedGraphNodeId)
  );

  detail.style.setProperty("--layer-color", layerColors[preferredLayer]);
  detail.innerHTML = `
    <span class="detail-kicker">Estándar oficial</span>
    <div>
      <h3>${selectedLink?.label || "Documento"}</h3>
      <p class="detail-lede">${protocols.join(", ")}</p>
    </div>
    <p>Este documento aparece conectado con ${protocols.length} protocolo${protocols.length === 1 ? "" : "s"} del mapa.</p>
    <div class="map-facts">
      <div class="fact">
        <span>Capas relacionadas</span>
        <strong>${layerNumbers.map((number) => `L${number}`).join(", ")}</strong>
      </div>
      <div class="fact">
        <span>Protocolos</span>
        <strong>${protocols.join(", ")}</strong>
      </div>
    </div>
    <div class="map-reference-list">
      <span class="detail-kicker">Enlace oficial</span>
      ${renderReferenceAnchors(links)}
    </div>
  `;
}

function renderOrganizationMapDetail(detail, references) {
  const organization = references[0].organization;
  const protocols = [...new Set(references.map((reference) => reference.protocol))];
  const layerNumbers = [...new Set(references.map((reference) => reference.layer))].sort((a, b) => b - a);
  const preferredLayer = layerNumbers.includes(selectedLayer) ? selectedLayer : layerNumbers[0];
  const links = references.flatMap((reference) => reference.links).slice(0, 10);

  detail.style.setProperty("--layer-color", layerColors[preferredLayer]);
  detail.innerHTML = `
    <span class="detail-kicker">Organismo oficial</span>
    <div>
      <h3>${organization}</h3>
      <p class="detail-lede">${protocols.length} protocolos conectados</p>
    </div>
    <p>Fuente oficial asociada a estándares, RFC o especificaciones incluidas en el grafo.</p>
    <div class="map-facts">
      <div class="fact">
        <span>Capas relacionadas</span>
        <strong>${layerNumbers.map((number) => `L${number}`).join(", ")}</strong>
      </div>
      <div class="fact">
        <span>Protocolos</span>
        <strong>${protocols.slice(0, 8).join(", ")}${protocols.length > 8 ? "..." : ""}</strong>
      </div>
    </div>
    <div class="map-reference-list">
      <span class="detail-kicker">Referencias conectadas</span>
      ${renderReferenceAnchors(links)}
    </div>
  `;
}

function getSimulationOrder() {
  return simulationMode === "send" ? layers : [...layers].reverse();
}

function getPacketChips(currentLayer) {
  const sendChips = [
    { label: "Datos", color: "var(--layer-7)" }
  ];

  if (currentLayer <= 4) sendChips.unshift({ label: "L4 puerto", color: "var(--layer-4)" });
  if (currentLayer <= 3) sendChips.unshift({ label: "L3 IP", color: "var(--layer-3)" });
  if (currentLayer <= 2) sendChips.unshift({ label: "L2 MAC", color: "var(--layer-2)" });
  if (currentLayer <= 1) sendChips.unshift({ label: "Señal", color: "var(--layer-1)" });

  if (simulationMode === "send") return sendChips;

  let receiveChips = [
    { label: "Señal", color: "var(--layer-1)" },
    { label: "L2 MAC", color: "var(--layer-2)" },
    { label: "L3 IP", color: "var(--layer-3)" },
    { label: "L4 puerto", color: "var(--layer-4)" },
    { label: "Datos", color: "var(--layer-7)" }
  ];

  if (currentLayer >= 2) receiveChips = receiveChips.filter((chip) => chip.label !== "Señal");
  if (currentLayer >= 3) receiveChips = receiveChips.filter((chip) => chip.label !== "L2 MAC");
  if (currentLayer >= 4) receiveChips = receiveChips.filter((chip) => chip.label !== "L3 IP");
  if (currentLayer >= 5) receiveChips = receiveChips.filter((chip) => chip.label !== "L4 puerto");

  return receiveChips;
}

function renderSimulationLayers() {
  const activeLayer = getSimulationOrder()[simulationStep];
  const container = byId("simulationLayers");
  container.innerHTML = "";

  layers.forEach((layer) => {
    const row = document.createElement("div");
    row.className = `simulation-layer${layer.number === activeLayer.number ? " is-active" : ""}`;
    setLayerColor(row, layer.number);
    row.innerHTML = `
      <span class="simulation-layer__num">L${layer.number}</span>
      <span>
        <span class="simulation-layer__name">${layer.name}</span><br>
        <small>${layer.encapsulation}</small>
      </span>
    `;
    container.appendChild(row);
  });
}

function renderSimulation() {
  const order = getSimulationOrder();
  const layer = order[simulationStep];
  const packetLabel = byId("packetLabel");
  const packetBody = byId("packetBody");
  const copy = byId("simulationCopy");
  const prev = byId("prevStep");
  const next = byId("nextStep");

  renderSimulationLayers();

  packetLabel.textContent = `${layer.pdu} en capa ${layer.number}`;
  packetBody.innerHTML = getPacketChips(layer.number)
    .map(
      (chip) => `
        <span class="packet-chip" style="--chip-color: ${chip.color}">
          ${chip.label}
        </span>
      `
    )
    .join("");

  copy.innerHTML = `
    <h3>${layer.name}</h3>
    <p>${layer.role}</p>
    <p><strong>En este paso:</strong> ${layer.encapsulation}.</p>
  `;

  prev.disabled = simulationStep === 0;
  next.disabled = simulationStep === order.length - 1;
}

function setSimulationMode(mode) {
  simulationMode = mode;
  simulationStep = 0;
  document.querySelectorAll(".mode-button").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderSimulation();
}

function renderGuide() {
  const grid = byId("guideGrid");
  grid.innerHTML = layers
    .map(
      (layer) => `
        <article class="guide-card" style="--layer-color: ${layerColors[layer.number]}">
          <span class="guide-number">L${layer.number}</span>
          <h3>${layer.name}</h3>
          <p>${layer.subtitle}</p>
          <dl>
            <dt>PDU</dt>
            <dd>${layer.pdu}</dd>
            <dt>Ejemplos</dt>
            <dd>${layer.examples.slice(0, 3).join(", ")}</dd>
          </dl>
        </article>
      `
    )
    .join("");
}

function renderReferenceFilters() {
  const filterWrap = byId("referenceFilters");
  const filters = [
    { label: "Todo", value: "all" },
    { label: "OSI", value: "0" },
    ...layers.map((layer) => ({ label: `L${layer.number}`, value: String(layer.number) }))
  ];

  filterWrap.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `reference-filter${referenceLayerFilter === filter.value ? " is-active" : ""}`;
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(referenceLayerFilter === filter.value));
    button.addEventListener("click", () => {
      referenceLayerFilter = filter.value;
      renderReferenceFilters();
      renderOfficialReferences();
    });
    filterWrap.appendChild(button);
  });
}

function renderOfficialReferences() {
  const grid = byId("referenceGrid");
  const searchInput = byId("referenceSearch");
  const query = searchInput.value.trim().toLowerCase();
  const filteredReferences = officialReferences.filter((reference) => {
    const matchesLayer = referenceLayerFilter === "all" || String(reference.layer) === referenceLayerFilter;
    const searchable = [
      reference.protocol,
      reference.standard,
      reference.organization,
      reference.summary,
      ...reference.links.map((link) => link.label)
    ]
      .join(" ")
      .toLowerCase();

    return matchesLayer && (!query || searchable.includes(query));
  });

  if (!filteredReferences.length) {
    grid.innerHTML = `
      <article class="empty-state">
        <h3>No hay resultados</h3>
        <p>Prueba con otra capa, protocolo u organismo de estandarización.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = filteredReferences
    .map((reference) => {
      const layerLabel = reference.layer === 0 ? "Modelo base" : `Capa ${reference.layer}`;
      const color = reference.layer === 0 ? "var(--accent)" : layerColors[reference.layer];

      return `
        <article class="reference-card" style="--layer-color: ${color}">
          <div class="reference-card__top">
            <span>${layerLabel}</span>
            <span>${reference.organization}</span>
          </div>
          <h3>${reference.protocol}</h3>
          <strong>${reference.standard}</strong>
          <p>${reference.summary}</p>
          <div class="reference-links">
            ${reference.links
              .map(
                (link) => `
                  <a href="${link.url}" target="_blank" rel="noreferrer">
                    ${link.label}
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderQuiz() {
  const card = byId("quizCard");

  if (quizIndex >= quizzes.length) {
    const percent = Math.round((quizScore / quizzes.length) * 100);
    card.innerHTML = `
      <div class="quiz-meta">
        <span>Resultado</span>
        <span>${quizScore} de ${quizzes.length}</span>
      </div>
      <h3>${percent >= 80 ? "Buen dominio del modelo" : "Buen repaso, toca reforzar"}</h3>
      <p class="detail-lede">
        Has completado el quiz. Vuelve a intentarlo para fijar capas, PDU y protocolos.
      </p>
      <div class="quiz-actions">
        <button class="button button-primary" type="button" id="restartQuiz">Repetir quiz</button>
      </div>
    `;
    byId("restartQuiz").addEventListener("click", () => {
      quizIndex = 0;
      quizScore = 0;
      answered = false;
      renderQuiz();
    });
    return;
  }

  const current = quizzes[quizIndex];
  card.innerHTML = `
    <div class="quiz-meta">
      <span>Pregunta ${quizIndex + 1} de ${quizzes.length}</span>
      <span>Puntos ${quizScore}</span>
    </div>
    <h3>${current.question}</h3>
    <div class="quiz-options">
      ${current.options
        .map(
          (option) => `
            <button class="quiz-option" type="button" data-option="${option}">
              ${option}
            </button>
          `
        )
        .join("")}
    </div>
    <div class="quiz-actions">
      <button class="button button-secondary" type="button" id="nextQuestion" disabled>
        Siguiente pregunta
      </button>
    </div>
  `;

  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(button.dataset.option));
  });

  byId("nextQuestion").addEventListener("click", () => {
    quizIndex += 1;
    answered = false;
    renderQuiz();
  });
}

function chooseAnswer(option) {
  if (answered) return;
  answered = true;

  const current = quizzes[quizIndex];
  const isCorrect = option === current.answer;
  if (isCorrect) quizScore += 1;

  document.querySelectorAll(".quiz-option").forEach((button) => {
    const value = button.dataset.option;
    button.disabled = true;
    button.classList.toggle("is-correct", value === current.answer);
    button.classList.toggle("is-wrong", value === option && !isCorrect);
  });

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";
  feedback.textContent = `${isCorrect ? "Correcto." : "No exactamente."} ${current.reason}`;
  byId("quizCard").insertBefore(feedback, document.querySelector(".quiz-actions"));
  byId("nextQuestion").disabled = false;
}

function setupTheme() {
  const savedTheme = localStorage.getItem("osi-theme");
  const toggle = document.querySelector(".theme-toggle");

  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  const syncToggle = () => {
    const activeTheme = document.documentElement.dataset.theme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = activeTheme ? activeTheme === "dark" : prefersDark;
    toggle.setAttribute("aria-pressed", String(isDark));
  };

  toggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = current ? (current === "dark" ? "light" : "dark") : prefersDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("osi-theme", nextTheme);
    syncToggle();
    renderLayerMap();
  });

  syncToggle();
}

function setupReveal() {
  const sections = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupEvents() {
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.addEventListener("click", () => setSimulationMode(button.dataset.mode));
  });

  byId("prevStep").addEventListener("click", () => {
    simulationStep = Math.max(0, simulationStep - 1);
    renderSimulation();
  });

  byId("nextStep").addEventListener("click", () => {
    const maxStep = getSimulationOrder().length - 1;
    simulationStep = Math.min(maxStep, simulationStep + 1);
    renderSimulation();
  });

  byId("resetStep").addEventListener("click", () => {
    simulationStep = 0;
    renderSimulation();
  });

  byId("referenceSearch").addEventListener("input", renderOfficialReferences);

  if ("ResizeObserver" in window) {
    stackObserver = new ResizeObserver(syncStackMarker);
    stackObserver.observe(document.querySelector(".stack-panel"));

    const graphCanvas = byId("cyGraph");
    if (graphCanvas) {
      graphResizeObserver = new ResizeObserver(resizeGraph);
      graphResizeObserver.observe(graphCanvas);
    }
  } else {
    window.addEventListener("resize", syncStackMarker);
    window.addEventListener("resize", resizeGraph);
  }
}

function init() {
  renderHeroStack();
  renderLayerMap();
  renderLayerSelector();
  renderLayerStack();
  renderLayerDetail();
  renderSimulation();
  renderGuide();
  renderReferenceFilters();
  renderOfficialReferences();
  renderQuiz();
  setupTheme();
  setupReveal();
  setupEvents();
}

document.addEventListener("DOMContentLoaded", init);
