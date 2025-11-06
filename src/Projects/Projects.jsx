import React, { useMemo, useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  /* =========================
     NUEVOS PROYECTOS
     ========================= */
{
  title: 'GR MINING COMPONENTS — Sistema de Control de Inventarios',
  image: './gif/mining.gif',
  alt: 'Sistema digital de control de inventarios y cotizaciones',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema desarrollado para <strong>GR MINING COMPONENTS S.A.C.</strong> con el propósito de optimizar la gestión de repuestos, cotizaciones y movimientos logísticos, brindando una plataforma moderna, centralizada y accesible para el equipo y los clientes.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Gestión automatizada:</strong> Control en tiempo real de inventarios, cotizaciones y pedidos.</li>
      <li><strong>Paneles visuales:</strong> Reportes y estadísticas dinámicas para una toma de decisiones eficiente.</li>
      <li><strong>Acceso para clientes:</strong> Consulta de stock y estado de pedidos en línea.</li>
      <li><strong>Arquitectura escalable:</strong> Desarrollado con <strong>React</strong>, <strong>Node.js</strong> y <strong>PostgreSQL</strong>, adaptado al flujo operativo de la empresa.</li>
    </ul>
  `,
  tags: [
    'React', 'Node.js', 'PostgreSQL', 'Express', 'Dashboard', 'Inventarios', 'Cotizaciones', 'Logística', 'B2B'
  ],
  links: [
    { type: 'demo', href: '#', label: 'Ver Plataforma' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

{
  title: 'QUE SUERTE — Plataforma Digital de Sorteos y Premios',
  image: './gif/suerte.gif',
  alt: 'Plataforma moderna para sorteos y premios en Perú',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>"QUE SUERTE"</strong> es una plataforma digital desarrollada para <strong>Huánuco de Boleto</strong>, enfocada en ofrecer sorteos seguros, divertidos y transparentes desde cualquier dispositivo.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Tecnología moderna:</strong> React, Node.js, Sequelize y PostgreSQL para alto rendimiento.</li>
      <li><strong>Pagos integrados:</strong> Participación mediante <strong>Yape</strong> y <strong>Plin</strong>.</li>
      <li><strong>Validación instantánea:</strong> Códigos únicos para verificar tickets en tiempo real.</li>
      <li><strong>Transparencia total:</strong> Sorteos transmitidos en <strong>YouTube Live</strong>.</li>
      <li><strong>Gestión completa:</strong> Dashboard administrativo para sorteos, pagos y ganadores.</li>
    </ul>
  `,
  tags: [
    'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Yape', 'Plin', 'Twilio API', 'YouTube Live', 'Dashboard'
  ],
  links: [
    { type: 'demo', href: 'https://www.quesuertee.com', label: 'Ver Plataforma' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},
     
{
  title: 'Empresa Boliviana - Sueños Tranquilos - Guía Digital para el Descanso Infantil',
  image: './gif/sueno.gif',
  alt: 'Guía paso a paso para mejorar el descanso nocturno infantil',
  descriptionHTML: `
    <p style="text-align: justify;">
      "Sueños Tranquilos" es una plataforma digital diseñada y desarrollada para una empresa de Bolivia, que tiene como objetivo ayudar a los padres a establecer rutinas nocturnas efectivas y saludables para sus bebés. Este sistema fue construido utilizando React y Vite para garantizar una experiencia de usuario rápida y fluida, y se integró con herramientas de marketing digital como el evento CAPI para el seguimiento de conversiones.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Plataforma interactiva:</strong> Desarrollada con React y Vite para asegurar un rendimiento óptimo y tiempos de carga rápidos.</li>
      <li><strong>Diseño responsivo:</strong> Uso de Tailwind CSS para garantizar que la página se adapte a diferentes tamaños de pantalla y dispositivos, brindando una experiencia agradable en móviles, tabletas y escritorios.</li>
      <li><strong>Eventos de marketing:</strong> Integración con Facebook CAPI, permitiendo el seguimiento preciso de conversiones y la mejora continua de las campañas publicitarias.</li>
      <li><strong>Botón de WhatsApp flotante:</strong> Implementación de un botón flotante para facilitar la comunicación directa con los usuarios interesados en la guía, creando una experiencia más interactiva y personalizada.</li>
      <li><strong>Acceso digital inmediato:</strong> Los usuarios pueden comprar y descargar la guía digital al instante, mejorando la experiencia de compra sin esperas innecesarias.</li>
    
  `,
  tags: ['React', 'Vite', 'Tailwind CSS', 'Facebook CAPI', 'WhatsApp API', 'Generación de leads', 'Landing Page', 'Tecnología Web', 'Empresa Boliviana'],
  links: [
    { type: 'demo', href: '#', label: 'Ver Demo' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},
{
  title: 'NASA SPACE APP CHALLENG - Hackatón - Ganadores Locales: Pensadores en Órbita – Perú',
  image: './gif/hackathon.gif',
  alt: 'Hackatón Pensadores en Órbita – Perú',
  descriptionHTML: `
    <p style="text-align: justify;">
      Participar por primera vez en una hackatón fue una experiencia emocionante y desafiante. En solo 48 horas, nuestro equipo interdisciplinario de 5 integrantes, formado por físicos, ingenieros agroindustriales, topógrafos y un ingeniero de sistemas, asumió el reto propuesto por la NASA: "Animation Celebration of Terra Data!", en conmemoración del 25.º aniversario del satélite Terra.
    </p>
    <p style="text-align: justify;">
      El desafío consistió en desarrollar un sistema interactivo con datos reales de la Tierra obtenidos por los cinco instrumentos del satélite Terra, con el objetivo de contar una historia científica que reflejara la relación entre el planeta, el medio ambiente y las comunidades humanas.
    </p>
    <p style="text-align: justify;">
      Nuestro sistema integró un chatbot inteligente, diseñado para responder exclusivamente sobre el tema del reto, junto con otras funcionalidades que pueden verse en el video de demostración. Gracias al esfuerzo y la sinergia del equipo, ganamos el concurso a nivel local y ahora representamos a Perú en la etapa global del desafío de la NASA. Fue una experiencia que combinó ciencia, tecnología y creatividad, demostrando el poder de la colaboración interdisciplinaria.
    </p>
    <p style="text-align: justify;">
      Tecnologías y Lenguajes utilizados:
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>React:</strong> Framework utilizado para construir la interfaz de usuario del sistema.</li>
      <li><strong>Vite:</strong> Herramienta de construcción y desarrollo utilizada para mejorar el rendimiento y la velocidad de la aplicación.</li>
      <li><strong>JavaScript:</strong> Lenguaje principal utilizado para la programación del proyecto y la integración de funcionalidades interactivas.</li>
      <li><strong>API de Gemini:</strong> Usada para integrar el procesamiento de datos y análisis de información, aportando potencia de procesamiento en tiempo real.</li>
      <li><strong>APIs de Terra MORDIS:</strong> Integración con los datos satelitales del satélite Terra para proporcionar información precisa sobre el medio ambiente y la relación con las comunidades humanas.</li>
      <li><strong>Google Forms:</strong> Utilizado para la recopilación de información y la gestión de respuestas durante el proceso de la hackatón.</li>
      <li><strong>Chatbot:</strong> Un sistema inteligente integrado en el proyecto para responder preguntas relacionadas con el reto de la NASA y proporcionar una experiencia interactiva.</li>
    </ul>
  `,
  tags: ['Hackatón', 'NASA', 'Interactividad', 'Datos Satelitales', 'Ciencia', 'Tecnología', 'Chatbot', 'Colaboración Interdisciplinaria', 'React', 'Vite', 'JavaScript', 'Gemini API', 'Terra MORDIS', 'Google Forms'],
  links: [
    { type: 'demo', href: '#', label: 'Ver Demo' }, // Agrega el enlace al video de demostración o presentación
    { type: 'github', href: '#', label: 'Ver Código' }, // Agrega el enlace al repositorio si está disponible
  ],
}
,

     {
    title: 'EMPRESA EDUCA.TE PERÚ - Plataforma de Gestión Integral',
    image: './gif/educate-peru.gif',
    alt: 'Plataforma de Gestión Integral Educa.te Perú',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma diseñada para la empresa <strong>Educa.te Perú</strong> con la <u>misma arquitectura y funcionalidades</u> que la solución de Aprende Perú.
        Mantiene certificación con PDF + QR y almacenamiento en Google Drive, gestión de cursos/módulos, roles y panel administrativo.
      </p>
        
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Certificación:</strong> PDF con QR validable y código único.</li>
        <li><strong>Google Drive:</strong> almacenamiento de certificados con cuenta de servicio.</li>
        <li><strong>Catálogo:</strong> cursos, módulos, paquetes y temarios autocompletables.</li>
        <li><strong>IA opcional:</strong> generación de temarios asistida por IA.</li>
        <li><strong>Operación:</strong> inscripción, pagos, validación por nombre/DNI, soporte por WhatsApp.</li>
        <li><strong>Admin:</strong> roles (admin/asesor/estudiante), métricas y seguridad con JWT.</li>
      </ul>

    `,
    tags: ['React','Tailwind','Node.js','Express.js','PostgreSQL','Sequelize','JWT','QRCode','Google Drive API','IA Generativa'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },
  {
    title: 'EMPRESA APRENDE PERÚ - Módulo de Certificación Inteligente',
    image: './gif/cert-inteligente.gif',
    alt: 'Módulo de Certificación Inteligente',
    descriptionHTML: `
      <p style="text-align: justify;">
        Sistema avanzado para gestión y generación de certificados: plantillas, emisión automática en PDF con QR, catálogo de cursos/temarios y autocompletado.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; line-height: 1.5; margin: .2rem 0 .8rem;">
        <li><strong>Plantillas personalizadas:</strong> sube múltiples plantillas y elige por curso.</li>
        <li><strong>PDF + QR:</strong> emisión automática con validación pública.</li>
        <li><strong>Catálogo y temarios:</strong> registra, guarda y autocompleta programas.</li>
        <li><strong>Optimización:</strong> al emitir basta cambiar el nombre del estudiante.</li>
        <li><strong>IA integrada:</strong> genera temarios con asistencia de IA e integra al módulo.</li>
      </ul>
      <p style="text-align: justify; margin:0;">
        <em>Reduce tiempos, evita errores y profesionaliza el proceso de certificación.</em>
      </p>
    `,
    tags: ['React','Node.js','Express.js','PostgreSQL','Sequelize','PDF-lib','QRCode','Google Drive API','IA Generativa'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'EMPRESA APRENDE PERÚ - Plataforma de Gestión Integral',
    image: './gif/e-learning-v2.gif',
    alt: 'Plataforma de Gestión Integral Aprende Perú',
    descriptionHTML: `
      <p style="text-align: justify;">
        Optimiza todo el ciclo de la formación virtual: desde el alta de cursos hasta la emisión/validación de certificados oficiales. UI y lógica de negocio renovadas.
      </p>
      <p style="text-align: justify; margin-bottom:.3rem;"><strong>Funcionalidades Clave</strong></p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top:0; line-height:1.5;">
        <li><strong>Cursos y Contenido:</strong> CRUD de cursos, módulos, paquetes y asignación a estudiantes.</li>
        <li><strong>Certificación:</strong> generación de PDF con QR validable; almacenamiento en Google Drive.</li>
        <li><strong>Experiencia:</strong> inscripción y pagos; validación por nombre/DNI; soporte por WhatsApp.</li>
        <li><strong>Administración:</strong> roles (admin, asesor, estudiante), panel con métricas.</li>
      </ul>
   
    `,
    tags: ['React','Tailwind','Node.js','Express.js','PostgreSQL','Sequelize','JWT','QRCode','Google Drive API'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'EMPRESA JG4 CONTRATISTAS GENERALES - Sitio Web Corporativo',
    image: './gif/jg4.gif',
    alt: 'Sitio Web Corporativo JG4',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma corporativa para el sector construcción: muestra servicios, proyectos y certificaciones; refuerza reputación y facilita el contacto comercial.
      </p>
      <p style="text-align: justify; margin-bottom:.3rem;"><strong>Objetivos</strong></p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top:0; line-height:1.5;">
        <li>Presentar servicios, proyectos y certificaciones de forma profesional.</li>
        <li>Acceso rápido a información clave para clientes y socios.</li>
        <li>Mejorar conversiones con CTAs claros a cotización y contacto.</li>
      </ul>

    `,
    tags: ['React','Vite','React Router','CSS Modules','SEO'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'EMPRESA DE TRANSPORTES MUÑOZ - Sistema de Gestión de Envíos',
    image: './gif/envios.gif',
    alt: 'Sistema de Gestión de Envíos',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma logística integral: registro de envíos, cálculo de tarifas por peso/destino, seguimiento, pagos y facturación electrónica (SUNAT).
      </p>
      <p style="text-align: justify; margin-bottom:.3rem;"><strong>Funciones clave</strong></p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top:0; line-height:1.5;">
        <li>Dashboard, gestión de guías, filtros por estado/fecha/sucursal.</li>
        <li>Registro de paquetes con costo automático; rastreo de estados.</li>
        <li>Pagos: efectivo, POS, Yape, Plin, transferencias; reportes.</li>
        <li>Factor peso y tarifas dinámicas.</li>
        <li>Facturación con <strong>Nubefact</strong>; operaciones gravadas/exoneradas/inafectas.</li>
        <li>Clientes con autocompletado RUC/DNI (APISNET), multi-sucursal y roles.</li>
      </ul>
    
    `,
    tags: ['React','Vite','Node.js','Express','PostgreSQL','Sequelize','Nubefact','APISNET','JWT'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'EMPRESA MEXICANA - Cotizaciones IA – Comparador inteligente de proveedores',
    image: './gif/cotizaciones-ia.gif',
    alt: 'Cotizaciones con IA',
    descriptionHTML: `
      <p style="text-align: justify;">
        Automatiza la comparación de precios entre proveedores desde PDF, imágenes y Excel. Estructura productos y resalta la opción más económica por item.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; line-height:1.5; margin:.2rem 0 .8rem;">
        <li>Ingesta multiformato con OCR.</li>
        <li>Extracción de nombre, cantidad, PU y total.</li>
        <li>Comparación por producto y buscador de mejor opción.</li>
        <li>Historial de cotizaciones y panel de resultados.</li>
      </ul>
      
      <p style="text-align: justify; margin:.2rem 0 0;">
        Desarrollado para una empresa en México; pensado para ferreterías y retail.
      </p>
    `,
    tags: ['React','Vite','Node.js','Express','PostgreSQL','Sequelize','OCR','PDF','Excel'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'PROYECTO PERSONAL - Asistente Inteligente de Desarrollo (Multi-IA)',
    image: './gif/asistente-dev.gif',
    alt: 'Asistente Inteligente de Desarrollo',
    descriptionHTML: `
      <p style="text-align: justify;">
        Analiza proyectos, detecta errores, documenta funciones y sugiere mejoras. Soporta múltiples proveedores de IA con fallback y <em>streaming</em> (SSE).
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; line-height:1.5; margin:.2rem 0 .8rem;">
        <li>Escaneo de carpeta local y vista árbol de archivos.</li>
        <li>Acciones: <strong>Errores</strong>, <strong>Documentar</strong>, <strong>Sugerencias</strong>.</li>
        <li>Análisis holístico entre archivos; explica razón, cambios y notas.</li>
        <li>Streaming SSE y <em>jobs</em> recientes.</li>
        <li>Agentes IA: OpenAI, Gemini, Claude con normalización de salida y reintentos.</li>
      </ul>
  
    `,
    tags: ['React','Vite','Node.js','Express','PostgreSQL','Sequelize','SSE','OpenAI','Gemini','Claude'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  /* =========================
     TUS PROYECTOS EXISTENTES
     ========================= */

  {
    id: 5,
    title: 'ACTUALIZACIÓN PORTAFOLIO - CAMBIO A REACT VITE',
    image: './gif/portafolio2.gif',
    alt: 'Portafolio Personal',
    descriptionHTML: `
      <p style="text-align: justify; margin-bottom: .5rem;">
        Portafolio personal con secciones de inicio, tecnologías, formación, experiencia, proyectos y contacto.
        Migrado de HTML/CSS a React + Vite manteniendo el estilo original.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin: .2rem 0 .8rem; line-height: 1.5;">
        <li>SPA con anclas (#) y scroll suave.</li>
        <li>Proyectos con buscador y paginación.</li>
        <li>Formulario de contacto (opcional) con Google Apps Script.</li>
      </ul>
    `,
    tags: ['React.js','Vite','CSS','JavaScript'],
    links: [
      { type: 'demo',   href: 'https://<tu-usuario>.github.io/<tu-repo>/',        label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/<tu-usuario>/<tu-repo>',        label: 'Ver en GitHub' },
    ],
  },

  {
    title: 'TIENDA STYLEHUB - E-Commerce con Visualizador 3D de Productos',
    image: './gif/e-commerce2.gif',
    alt: 'E-commerce con visualizador 3D',
    descriptionHTML: `
      <p style="text-align: justify;">
        <strong>E-Commerce 3D</strong> es una plataforma moderna que combina la venta online con visualización de <strong>modelos 3D interactivos</strong>.
      </p>
      <p style="text-align: justify;">
        <strong>🛒 Funcionalidades principales:</strong><br>
        - Catálogo con filtros, admin de productos con imágenes y <code>.glb</code>.<br>
        - Visualizador 3D (rotación y zoom).<br>
        - Carrito con persistencia y checkout a BD.<br>
        - Panel admin con reportes.<br>
        - Login con Google (OAuth 2.0) y roles.
      </p>
      <p style="text-align: justify;">
        <strong>🚀 Impacto:</strong> Mejora conversión al previsualizar en 3D y facilita la gestión.
      </p>
    `,
    tags: ['React','Vite','Node.js','Express.js','PostgreSQL','Sequelize','React Router','Axios','Three.js','@react-three/fiber','OAuth Google'],
    links: [
      { type: 'demo',   href: 'https://tu-demo-ecommerce3d.com', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/tuusuario/ecommerce-3d', label: 'Ver Código' },
    ],
  },

  {
    title: 'PROYECTO PERSONAL - Sistema de Gestión Turística – Viaja y Explora',
    image: './gif/turismo.gif',
    alt: 'Guía turística de hoteles y lugares',
    descriptionHTML: `
      <p style="text-align: justify;">
        <strong>Viaja y Explora</strong> ayuda a descubrir <strong>lugares</strong>, <strong>hoteles</strong> y <strong>restaurantes</strong> con filtros avanzados y un <strong>chatbot IA</strong>.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; line-height:1.5;">
        <li>Explora destinos con fichas completas y galería.</li>
        <li>Likes, filtros por ciudad/precio/popularidad.</li>
        <li>Bot IA como guía y ayuda contextual.</li>
        <li>Login con Google (OAuth 2.0).</li>
      </ul>
    `,
    tags: ['React','Vite','Node.js','Express.js','PostgreSQL','Sequelize','React Router','Axios','Chatbot IA','OAuth Google'],
    links: [
      { type: 'demo',   href: 'https://tu-demo-viaja-y-explora.com', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/tuusuario/viaja-y-explora', label: 'Ver Código' },
    ],
  },

  {
    title: 'Empresa Aprende Perú - Plataforma de Gestión Integral de cursos y Certificados',
    image: './gif/e-learning.gif',
    alt: 'Plataforma Aprende Perú',
    descriptionHTML: `
      <p style="text-align: justify;">
        Gestión integral de cursos virtuales: publicación, asignación a estudiantes y emisión de certificados PDF con QR y almacenamiento en Drive.
      </p>
    `,
    tags: ['React','Tailwind CSS','Node.js','Express.js','PostgreSQL','Sequelize','PDF-lib','QRCode','Google Drive API'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'Actualización - IA para Generación Inteligente de Certificados',
    image: './gif/chatia-e-learning.gif',
    alt: 'Integración de IA y certificados personalizados',
    descriptionHTML: `
      <p style="text-align: justify;">
        Genera temarios personalizados y completa datos de estudiante. Guarda PDF en Google Drive con autenticación de servicio y QR de validación.
      </p>
      <ul style="text-align: justify; padding-left:1.2rem; line-height:1.5;">
        <li>Nombre, curso, nota, duración, modalidad.</li>
        <li>Temario por IA, firma digital, DNI, código único y QR.</li>
      </ul>
    `,
    tags: ['IA Generativa','PDF-lib','QRCode','Google Drive API','Node.js','Express.js','React','Sequelize'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'Empresa Inmobiliaria Matisse - Plataforma de Gestión Inmobiliaria',
    image: './gif/matisse.gif',
    alt: 'Sistema de gestión inmobiliaria Matisse',
    descriptionHTML: `
      <p style="text-align: justify;">
        CRUD de inmuebles, subida de imágenes, búsquedas avanzadas, roles y dashboards personalizados. Diseño 100% responsivo.
      </p>
    `,
    tags: ['React.js','React Router DOM','Tailwind CSS','Axios','Lucide React','React Icons','Node.js','Express.js','PostgreSQL','Sequelize','JWT','Bcrypt','Multer','Dotenv','path','fs'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

  {
    title: 'FERIA DE INNOVACIÓN UNHEVAL - Recicla y Gana – Intercambio de Residuos por Puntos',
    image: './gif/reciclaje.gif',
    alt: 'Intercambio ecológico entre recicladores y ayudantes',
    descriptionHTML: `
      <p style="text-align: justify;">
        Conecta <strong>recicladores</strong> y <strong>ayudantes</strong> con puntos por residuos; chat, roles, perfiles y canje.
      </p>
    `,
    tags: ['React','Vite','Node.js','Express.js','Socket.IO','Multer','PostgreSQL','Sequelize','JWT'],
    links: [
      { type: 'demo', href: 'https://reciclapp-demo.netlify.app', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/tuusuario/recicla-y-gana', label: 'Ver Código' },
    ],
  },

  {
    title: 'Proyecto Personal - Aplicación de Gestión de Tareas Inteligente',
    image: './gif/zendo.gif',
    alt: 'Aplicación de Gestión de Tareas Inteligente',
    descriptionHTML: `
      <p style="text-align: justify;">
        Autenticación JWT, CRUD de tareas, vistas por fecha, calendario, progreso diario y asistente IA <strong>ZENDO</strong>.
      </p>
    `,
    tags: ['React.js','Tailwind CSS','JavaScript (ES6+)','React-datepicker','Moment.js','Axios','Node.js','Express.js','PostgreSQL','JWT','Bcrypt.js','Dotenv'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/INTELLIGENT-TASK-MANAGER', label: 'Ver Código' },
    ],
  },

  {
    title: 'Aplicación Web de Consulta Socios',
    image: './gif/consulta.gif',
    alt: 'APP Consulta Socios',
    descriptionHTML: `
      <p style="text-align: justify;">
        Consulta segura de cuentas y movimientos; integra en tiempo real la app de cobranza usada en campo.
      </p>
    `,
    tags: ['React.js','Vite','React Router DOM','Tailwind CSS','Axios/Fetch','Node.js','Express','JWT','PostgreSQL'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'ESTE CODIGO NO LO ESTOY SUBIENDO A GITHUB' },
    ],
  },

  {
    title: 'Aplicación Web de Gestión de Cobranza',
    image: './gif/cobranza.gif',
    alt: 'Aplicación Web de Gestión de Cobranza',
    descriptionHTML: `
      <p style="text-align: justify;">
        Gestión de zonas, socios, movimientos y resúmenes de cobranza diaria/mensual. Pensado para móviles.
      </p>
    `,
    tags: ['React.js','Tailwind CSS','JavaScript (ES6+)','Node.js','Express.js','PostgreSQL','JWT','Bcrypt.js','Dotenv'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'ESTE CODIGO NO LO ESTOY SUBIENDO A GITHUB' },
    ],
  },

  {
    title: 'Sistema de Gestión Financiera: APP Consulta Socios + APP Cobranza',
    image: './gif/cob_consul.gif',
    alt: 'Sistema de Gestión Financiera',
    descriptionHTML: `
      <p style="text-align: justify; margin-bottom: .5rem;">
        Dos apps integradas para visualizar y registrar movimientos financieros en tiempo real.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top: 0; margin-bottom: 0.8rem; line-height: 1.5;">
        <li><strong>Socios:</strong> consulta de cuentas y movimientos.</li>
        <li><strong>Cobranza:</strong> registro de pagos sincronizado.</li>
      </ul>
    `,
    tags: ['React.js','Vite','React Router DOM','Tailwind CSS','Axios/Fetch','Node.js','Express.js','JWT','PostgreSQL','Docker'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: '#', label: 'ESTE CODIGO NO LO ESTOY SUBIENDO A GITHUB' },
    ],
  },

  {
    title: 'Sistema de Gestión de Biblioteca',
    image: './gif/biblioteca.gif',
    alt: 'Sistema de Gestión de Biblioteca',
    descriptionHTML: `
      <p style="text-align: justify;">
        Gestión de libros con búsqueda en tiempo real, validaciones y control de errores frontend/backend.
      </p>
    `,
    tags: ['Java 17','Spring Boot','JDBC','MySQL','React','Axios','CSS Personalizado','Maven','DBngin'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/BIBLIOTECA', label: 'Ver Código' },
    ],
  },

  {
    title: 'Chat Pro',
    image: './gif/chat.gif',
    alt: 'Chat Pro',
    descriptionHTML: `
      <p style="text-align: justify;">
        Mensajería en tiempo real con Socket.IO, Firebase Auth, chat global/privado, modo oscuro y notificaciones.
      </p>
    `,
    tags: ['HTML5','CSS3','JavaScript (ESM)','emoji-picker-element','Node.js','Express','Socket.IO','MySQL','Firebase Authentication','DBngin'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/CHAT-PRO', label: 'Ver Código' },
    ],
  },

  {
    title: 'Mi Portafolio Personal',
    image: './gif/portafolio.gif',
    alt: 'Mi Portafolio Personal',
    descriptionHTML: `
      <p style="text-align: justify;">
        Portafolio diseñado y desarrollado desde cero para mostrar habilidades, experiencia y proyectos.
      </p>
    `,
    tags: ['HTML','CSS','JavaScript'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Portafolio' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/mi-portafolio', label: 'Ver Código' },
    ],
  },

  {
    title: 'Visor de Pokemons',
    image: './gif/pokemon.gif',
    alt: 'Visor de Pokemons',
    descriptionHTML: `
      <p style="text-align: justify;">
        Consumo de API pública para listar y filtrar Pokémons por nombre o tipo.
      </p>
    `,
    tags: ['HTML','CSS','JavaScript','API Externa (Pokemon API)'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/pokedex', label: 'Ver Código' },
    ],
  },

  {
    title: 'Sitio Web de Restaurante',
    image: './gif/restaurante.gif',
    alt: 'Sitio Web de Restaurante',
    descriptionHTML: `
      <p style="text-align: justify;">
        Landing moderna y responsiva con menú, contacto y galería.
      </p>
    `,
    tags: ['HTML','CSS','JavaScript'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/restaurante', label: 'Ver Código' },
    ],
  },

  {
    title: 'E-Commerce para Tienda de Ropa',
    image: './gif/e-commerce.gif',
    alt: 'E-Commerce para Tienda de Ropa',
    descriptionHTML: `
      <p style="text-align: justify;">
        Catálogo, carrito y gestión de pedidos base para retail.
      </p>
    `,
    tags: ['HTML','CSS','JavaScript'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/e-commerce', label: 'Ver Código' },
    ],
  },

  {
    title: 'Gestor de Presupuesto Mensual y Suscripciones',
    image: './gif/suscripcion.gif',
    alt: 'Gestor de Presupuesto Mensual y Suscripciones',
    descriptionHTML: `
      <p style="text-align: justify;">
        Control de presupuesto mensual y servicios de suscripción.
      </p>
    `,
    tags: ['Vite.js','React 18','Vercel'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/suscripciones-streaming', label: 'Ver Código' },
    ],
  },

  {
    title: 'Catálogo de Películas',
    image: './gif/peliculas.gif',
    alt: 'Catálogo de Películas',
    descriptionHTML: `
      <p style="text-align: justify;">
        CRUD de películas con Node.js y MySQL.
      </p>
    `,
    tags: ['Node.js','MySQL','HTML','CSS','JavaScript','DBngin'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/catalogo_peliculas', label: 'Ver Código' },
    ],
  },

  {
    title: 'Buscador de GIFs',
    image: './gif/gif.gif',
    alt: 'App Buscador de GIFs',
    descriptionHTML: `
      <p style="text-align: justify;">
        Búsqueda y visualización de GIFs en tiempo real con React.
      </p>
    `,
    tags: ['React','JavaScript','API de GIFs','HTML','CSS'],
    links: [
      { type: 'demo', href: '#', label: 'Ver Demo' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/BuscarGif', label: 'Ver Código' },
    ],
  },
];

const PAGE_SIZE = 3;

export default function Projects() {
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const [openProject, setOpenProject] = useState(null);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return projects.slice(start, start + PAGE_SIZE);
  }, [page]);

  const toggle = (globalIndex) => {
    setExpanded((prev) => ({ ...prev, [globalIndex]: !prev[globalIndex] }));
  };

  const renderLinkIcon = (type) =>
    type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt';

  const openModal = (project) => setOpenProject(project);
  const closeModal = () => setOpenProject(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = openProject ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openProject]);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div id="pagination" className="pagination-controls">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={n === page ? 'active' : ''}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Siguiente →
          </button>
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => {
            const globalIndex = (page - 1) * PAGE_SIZE + i;
            const isOpen = !!expanded[globalIndex];

            return (
              <div className="project-card" key={p.title}>
                <button
                  className="project-image-btn"
                  onClick={() => openModal(p)}
                  aria-label={`Ver ${p.title} completo`}
                  title="Ver completo"
                >
                  <img src={p.image} alt={p.alt} className="project-image" />
                </button>

                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>

                  <div
                    className={`project-description ${isOpen ? '' : 'collapsed'}`}
                    dangerouslySetInnerHTML={{ __html: p.descriptionHTML }}
                  />

                  <button
                    className="toggle-description-btn"
                    onClick={() => toggle(globalIndex)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Ver menos' : 'Ver más'}
                  </button>

                  <div className="project-tech">
                    {p.tags.map((t) => (
                      <span className="tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-btn ${l.type}`}
                        aria-label={l.label}
                      >
                        <i className={renderLinkIcon(l.type)} /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {openProject && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
              ✕
            </button>

            <img
              src={openProject.image}
              alt={openProject.alt || openProject.title}
              className="modal-image"
            />

            <div className="modal-body">
              <h3 className="project-title">{openProject.title}</h3>

              <div
                className="project-description"
                dangerouslySetInnerHTML={{ __html: openProject.descriptionHTML }}
              />

              <div className="project-tech">
                {openProject.tags.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {openProject.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-btn ${l.type}`}
                  >
                    <i className={renderLinkIcon(l.type)} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
