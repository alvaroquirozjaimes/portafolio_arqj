import React, { useMemo, useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
  title: 'EMPRESA - SDI Maquinarias S.A.C. — Ampliación y Automatización del Sistema ERP',
  image: './gif/sdi2.gif',
  alt: 'Ampliación del sistema ERP de SDI Maquinarias con nuevos módulos y automatizaciones',
  descriptionHTML: `
    <p style="text-align: justify;">
      Ampliación del sistema ERP previamente desarrollado para <strong>SDI Maquinarias S.A.C.</strong>,
      incorporando nuevos módulos y automatizaciones para ventas, producción, compras, logística, despacho,
      contabilidad y administración.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Cotizaciones:</strong> generación automática con reserva de productos en stock.</li>
      <li><strong>Producción por calendario:</strong> gestión de órdenes de trabajo con seguimiento de labores del personal.</li>
      <li><strong>Logística:</strong> reprogramaciones, solicitudes adicionales, envíos parciales y validación de guías de remisión.</li>
      <li><strong>Automatización de avances:</strong> procesos finalizados avanzan automáticamente sin aprobaciones manuales innecesarias.</li>
      <li><strong>Trazabilidad total:</strong> cada área mantiene control y visibilidad del flujo operativo completo.</li>
    </ul>
  `,
  tags: ['ERP', 'Automatización', 'Producción', 'Logística', 'Ventas', 'Compras', 'Contabilidad', 'React', 'Node.js', 'PostgreSQL'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA — Fibertel Valle S.C.R.L — Sistema de Gestión de Red e Internet',
  image: './gif/fibertel.gif',
  alt: 'Sistema web de gestión de red e internet para proveedor ISP',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema web completo para <strong>Fibertel Valle S.C.R.L</strong>, orientado a administrar clientes,
      técnicos e infraestructura de red de un proveedor de internet.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Control de clientes:</strong> activar, cortar y dar de baja conectado a servidor de administración de red en tiempo real.</li>
      <li><strong>Mapa interactivo de Cajas NAP:</strong> visualización de puertos ocupados, clientes asignados y alertas de averías activas.</li>
      <li><strong>Módulo de averías:</strong> flujo por rol — el administrador reporta y el técnico actualiza estados en campo.</li>
      <li><strong>Medición de tendido de cable:</strong> cálculo de distancia acumulada por tramo directamente sobre el mapa.</li>
      <li><strong>Control de pagos:</strong> registro por cliente, generación de tickets, envío por WhatsApp y reporte de pendientes.</li>
      <li><strong>Dashboard en tiempo real:</strong> KPIs de clientes, recaudación, averías y estado de servicios por sede.</li>
    </ul>
  `,
  tags: ['ISP', 'Gestión de Red', 'Mapa Interactivo', 'WhatsApp', 'Dashboard', 'Roles y Permisos', 'Tiempo Real', 'React', 'Node.js', 'PostgreSQL'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — Plataforma de Personalización Visual con IA',
  image: './gif/personalizacion.gif',
  alt: 'Plataforma de personalización visual asistida por inteligencia artificial',
  descriptionHTML: `
    <p style="text-align: justify;">
      Plataforma web de personalización visual asistida por <strong>Inteligencia Artificial</strong>,
      donde el usuario puede cargar su propia foto y visualizar de forma referencial cómo se vería
      un diseño aplicado sobre ella, teniendo una idea más cercana del resultado final antes de aprobarlo,
      descargarlo o seguir editándolo.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Vista previa visual con IA:</strong> el sistema muestra cómo quedaría el diseño sobre la foto del usuario.</li>
      <li><strong>Edición por instrucciones de texto:</strong> ajustes rápidos e intuitivos sobre la propuesta inicial.</li>
      <li><strong>Experiencia dinámica:</strong> personalización práctica y cercana al resultado real.</li>
      <li><strong>Descarga y aprobación:</strong> el usuario puede descargar o seguir iterando el diseño.</li>
    </ul>
  `,
  tags: ['Inteligencia Artificial', 'Personalización Visual', 'React', 'Node.js', 'IA Aplicada', 'Diseño', 'Proyecto Personal'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MISHEL — Asistente Virtual Inteligente con Avatar 3D',
  image: './gif/mishel.gif',
  alt: 'Asistente virtual inteligente con avatar 3D, voz e IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>MISHEL</strong> es una plataforma que integra avatar 3D, interacción por voz, conversación asistida con
      <strong>Inteligencia Artificial</strong> y automatización de acciones dentro de la computadora,
      ofreciendo una experiencia más natural, visual y funcional.
    </p>
    <p style="text-align: justify;">
      Evolución e integración de funcionalidades desarrolladas en proyectos previos. Mishel puede conversar de forma fluida,
      interpretar instrucciones por voz o texto, responder con expresiones visuales y ejecutar acciones locales
      como búsquedas, escritura, creación de carpetas y gestión de archivos.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Avatar 3D interactivo:</strong> presencia visual con expresiones dinámicas.</li>
      <li><strong>Interacción por voz y texto:</strong> conversación fluida y natural.</li>
      <li><strong>Automatización local:</strong> ejecuta acciones reales en el sistema.</li>
      <li><strong>IA integrada:</strong> respuestas inteligentes y contextuales.</li>
    </ul>
  `,
  tags: ['Asistente Virtual', 'Avatar 3D', 'Inteligencia Artificial', 'Voz', 'Automatización', 'Windows', 'Proyecto Personal'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA EDUCA.TE — Landing Page Corporativa',
  image: './gif/educate.gif',
  alt: 'Landing page corporativa para captación de alumnos y promoción de certificaciones',
  descriptionHTML: `
    <p style="text-align: justify;">
      Landing page desarrollada para <strong>EDUCA.TE</strong>, enfocada en la captación de nuevos usuarios interesados
      en cursos, diplomados y certificaciones con código QR de verificación. Su objetivo principal es presentar de forma clara
      los beneficios, áreas de formación, modelos de certificados y promociones disponibles.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Hero principal:</strong> enfoque visual en certificación profesional y conversión de leads.</li>
      <li><strong>Carruseles dinámicos:</strong> modelos de certificados y áreas/carreras de formación.</li>
      <li><strong>Convenios y respaldos:</strong> sección orientada a reforzar confianza institucional.</li>
      <li><strong>Promociones:</strong> planes y ofertas presentadas de forma clara y atractiva.</li>
      <li><strong>Diseño corporativo:</strong> identidad visual alineada a la marca con colores corporativos, fondos oscuros y tarjetas claras.</li>
      <li><strong>Tecnología moderna:</strong> implementada con <strong>React + Vite</strong>, lista para integrarse al ecosistema digital actual.</li>
    </ul>
  `,
  tags: [
    'Landing Page',
    'React',
    'Vite',
    'Educación',
    'Certificaciones',
    'QR',
    'Diseño Corporativo',
    'Captación de Leads',
    'UI/UX'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - SDI Maquinarias SAC — Sistema ERP Interno de Gestión Industrial',
  image: './gif/sdi.gif',
  alt: 'ERP interno para gestión industrial, logística, ventas y producción',
  descriptionHTML: `
    <p style="text-align: justify;">
      Plataforma desarrollada a medida para <strong>SDI Maquinarias SAC</strong>, orientada a reemplazar procesos manuales y centralizar
      la operación completa de la empresa en un solo sistema. La solución conecta áreas como almacén, producción, ventas y contabilidad,
      permitiendo mayor trazabilidad, control operativo y reducción de errores.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Módulo de logística:</strong> inventario, kardex, compras, reservas de almacén y productos observados.</li>
      <li><strong>Ciclo de ventas:</strong> cotizaciones, órdenes de venta, despachos y seguimiento de envíos.</li>
      <li><strong>Contabilidad operativa:</strong> emisión y gestión de guías de remisión y facturas.</li>
      <li><strong>Hojas de costo:</strong> cálculo de materia prima, manufactura, tratamientos y ruta de fabricación.</li>
      <li><strong>Producción:</strong> órdenes de trabajo, tiempos por operario y reportes de planta.</li>
      <li><strong>Panel operario:</strong> uso en tablet para registrar actividades en tiempo real desde planta.</li>
      <li><strong>Roles y accesos:</strong> control por perfil para Admin, Almacén, Compras, Ventas, Producción, RRHH y Operario.</li>
    </ul>
  `,
  tags: [
    'ERP',
    'Gestión Industrial',
    'Logística',
    'Inventario',
    'Kardex',
    'Ventas',
    'Producción',
    'Facturación',
    'Panel Operario',
    'Roles y Permisos'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — Plataforma de Mensajería Empresarial con IA Integrada',
  image: './gif/chat2.gif',
  alt: 'Plataforma de mensajería empresarial en tiempo real con inteligencia artificial',
  descriptionHTML: `
    <p style="text-align: justify;">
      Plataforma de mensajería empresarial desarrollada como proyecto personal, diseñada para ofrecer una experiencia
      moderna, intuitiva y familiar, inspirada en funcionalidades tipo <strong>WhatsApp</strong>, pero orientada a negocios
      que desean integrar comunicación en tiempo real con atención automatizada mediante <strong>Inteligencia Artificial</strong>.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Mensajería en tiempo real:</strong> chats con <strong>Socket.IO</strong>, estados online/offline y confirmación de lectura.</li>
      <li><strong>Gestión completa:</strong> búsqueda de mensajes, contactos y perfiles empresariales personalizados.</li>
      <li><strong>Experiencia familiar:</strong> interfaz inspirada en WhatsApp para facilitar el uso y la adopción.</li>
      <li><strong>IA entrenable por negocio:</strong> cada empresa puede alimentar su asistente con información propia para responder de forma más precisa.</li>
      <li><strong>Atención automatizada:</strong> recomendaciones de productos y respuestas según las necesidades del cliente.</li>
      <li><strong>Catálogo integrado:</strong> visualización de productos dentro de la misma plataforma.</li>
      <li><strong>Estados y privacidad:</strong> publicación de estados con control de visibilidad.</li>
      <li><strong>Interacción flexible:</strong> el cliente puede elegir si conversar con el negocio o con su agente inteligente.</li>
    </ul>
  `,
  tags: [
    'Mensajería en Tiempo Real',
    'Socket.IO',
    'Inteligencia Artificial',
    'Chat Empresarial',
    'Catálogo de Productos',
    'Estados',
    'Privacidad',
    'Proyecto Personal',
    'WhatsApp-like UI'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - Visión Sur Televisión 12.1 — Sistema Web de Noticias y Gestión de Contenido',
  image: './gif/vision.gif',
  alt: 'Sistema web de noticias, programación y gestión de contenido audiovisual',
  descriptionHTML: `
    <p style="text-align: justify;">
      Plataforma desarrollada para <strong>Visión Sur Televisión 12.1</strong>, orientada a fortalecer su presencia digital y optimizar
      la gestión de contenido informativo y audiovisual. La solución integra un sitio público para noticias, videos, programación
      y señal en vivo, junto con un panel administrativo para la gestión interna del contenido.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Módulo de noticias:</strong> publicación y actualización de contenido informativo.</li>
      <li><strong>Contenido multimedia:</strong> gestión de videos y recursos audiovisuales.</li>
      <li><strong>Panel administrativo:</strong> control interno de publicaciones y contenido.</li>
      <li><strong>Programación televisiva:</strong> configuración y actualización de la parrilla del canal.</li>
      <li><strong>Señal en vivo:</strong> integración para transmisión online.</li>
      <li><strong>Usuarios y accesos:</strong> gestión de cuentas y permisos según rol.</li>
    </ul>
  `,
  tags: [
    'Sistema Web',
    'Noticias',
    'Gestión de Contenido',
    'CMS',
    'Panel Administrativo',
    'Streaming',
    'Programación TV',
    'Usuarios y Permisos'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - COOPAC San Francisco — Sistema de Cartera Legal',
  image: './gif/csf2.gif',
  alt: 'Sistema web para control de cartera judicial y gestión legal',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema web desarrollado para <strong>COOPAC San Francisco</strong>, orientado a centralizar y controlar la cartera judicial del área legal,
      facilitando la consulta, actualización y seguimiento de casos de manera más segura, ordenada y eficiente.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Búsqueda avanzada:</strong> filtros por agencia, analista, estados, fechas y responsables.</li>
      <li><strong>Gestión por roles:</strong> control de usuarios, permisos y acceso según perfil.</li>
      <li><strong>Flujo de aprobaciones:</strong> validación de cambios antes de aplicarlos en el sistema.</li>
      <li><strong>Auditoría completa:</strong> registro de quién cambió, qué modificó y cuándo lo hizo.</li>
      <li><strong>Reportes y exportación:</strong> seguimiento de modificaciones con exportación a Excel.</li>
      <li><strong>Optimización de rendimiento:</strong> uso de vista materializada y procedimientos almacenados para mejorar carga y reportes.</li>
    </ul>
  `,
  tags: [
    'Sistema Legal',
    'Cartera Judicial',
    'Búsquedas Avanzadas',
    'Roles y Permisos',
    'Auditoría',
    'Reportes',
    'Excel',
    'Vista Materializada',
    'Procedimientos Almacenados',
    'Optimización'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - HIDROMAX S.A.C. — ERP de Manufactura y Facturación Electrónica',
  image: './gif/hidromax.gif',
  alt: 'ERP de manufactura, inventario y facturación electrónica',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema ERP desarrollado a medida para <strong>HIDROMAX S.A.C.</strong>, diseñado para ordenar y agilizar
      toda la operación empresarial integrando <strong>Almacén, Compras, Ventas, Producción, Planta y Facturación</strong>
      en una sola plataforma centralizada.
    </p>

    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Catálogo centralizado:</strong> gestión de categorías y productos como base estructural del sistema.</li>
      <li><strong>Inventario con Kardex:</strong> control de stock real por movimientos (entradas, salidas y ajustes).</li>
      <li><strong>Requerimientos automáticos:</strong> generación de solicitudes cuando el stock es insuficiente desde Ventas o Producción.</li>
      <li><strong>Compras integradas:</strong> flujo completo desde requerimiento → orden de compra → recepción con ingreso automático a almacén.</li>
      <li><strong>Producción:</strong> órdenes de trabajo (OT), consumo de materiales, control de tiempos por trabajador y cierre técnico.</li>
      <li><strong>Módulo Planta:</strong> aprobación de horas y producción antes del ingreso final a stock.</li>
      <li><strong>Facturación electrónica:</strong> emisión de guías y comprobantes, gestión de pendientes por facturar (flujo preparado para integración real).</li>
      <li><strong>Usuarios y permisos:</strong> control de roles, accesos por perfil y rutas protegidas.</li>
    </ul>

    <p style="text-align: justify; margin:0;">
      Actualmente el sistema continúa evolucionando con nuevas automatizaciones, reportes personalizados
      y adecuaciones específicas al flujo operativo real de la empresa.
    </p>
  `,
  tags: [
    'ERP',
    'Manufactura',
    'Inventario',
    'Kardex',
    'Compras',
    'Producción',
    'Facturación Electrónica',
    'Roles y Permisos',
    'Dashboard',
    'Sistema Empresarial'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - IESCO GROUP — Sistema Integral de Control de Ingresos, Acreditación y Gestión de Contratistas con IA',
  image: './gif/iesco.gif',
  alt: 'Gestión documentaria con inteligencia artificial para control de contratistas',
  descriptionHTML: `
    <p style="text-align: justify;">
      Proyecto desarrollado para <strong>IESCO GROUP</strong>, enfocado en la modernización del control de contratistas
      y la gestión de accesos mediante <strong>Inteligencia Artificial</strong>. Esta versión inicial se trabaja de forma
      independiente y experimental, con el objetivo de integrarse posteriormente al sistema principal de acreditación,
      seguridad y control de ingresos de la empresa.
    </p>

    <p style="text-align: justify; margin-bottom:.3rem;"><strong>Versión 1 — Gestión Documentaria con IA</strong></p>

    <ul style="text-align: justify; padding-left: 1.2rem; margin:.2rem 0 .8rem; line-height:1.5;">
      <li><strong>Lectura automatizada:</strong> análisis y validación de documentos clave (DNI, SCTR, Vida Ley, antecedentes, entre otros).</li>
      <li><strong>Reducción de tiempos:</strong> disminuye revisión manual y errores humanos en la verificación documental.</li>
      <li><strong>Plantillas IA configurables:</strong> estandarización de categorías de documentos según reglas definidas por el usuario.</li>
      <li><strong>Memoria documental:</strong> creación de historial inteligente por persona, reutilizable sin necesidad de releer los PDFs.</li>
      <li><strong>Base para integración futura:</strong> preparado para conectarse al sistema integral de acreditación y control de accesos.</li>
    </ul>
  `,
  tags: [
    'Inteligencia Artificial',
    'Gestión Documentaria',
    'OCR',
    'Automatización',
    'Control de Contratistas',
    'Seguridad Empresarial',
    'Sistema de Acreditación',
    'IA Aplicada'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — Agenda Inteligente + Automatización (WhatsApp/Email)',
  image: './gif/agenda.gif',
  alt: 'Sistema web de agenda con automatización de mensajes y chatbot',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema web desarrollado para uso personal, enfocado en la gestión inteligente de agenda y la automatización
      de comunicaciones vía <strong>Email y WhatsApp</strong>. Permite programar mensajes para enviarse automáticamente
      en una fecha y hora específicas, optimizando la organización y evitando olvidos.
    </p>
    <p style="text-align: justify;">
      El sistema ayuda a controlar disponibilidad, prevenir choques de horarios y automatizar recordatorios o mensajes
      sin perder contexto ni seguridad.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Gestión de agenda:</strong> control de eventos con validación de solapamientos.</li>
      <li><strong>Programación automática:</strong> envío de mensajes por Email o WhatsApp en fecha y hora definida.</li>
      <li><strong>Chatbot orientado a tareas:</strong> interpreta solicitudes, propone acciones y solicita confirmación antes de ejecutar.</li>
      <li><strong>Control y seguridad:</strong> ejecución validada para evitar envíos accidentales.</li>
    </ul>
  `,
  tags: [
    'Agenda Inteligente',
    'Automatización',
    'WhatsApp API',
    'Email',
    'Chatbot',
    'Programación de Tareas',
    'Sistema Web',
    'Proyecto Personal'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — Asistente Inteligente para Windows (Multi-Versión)',
  image: './gif/prueba.gif',
  alt: 'Asistente inteligente local para Windows con automatizaciones por lenguaje natural',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>Proyecto personal de gran escala.</strong> Por la magnitud del sistema, no se incluyen todas las imágenes ni funcionalidades.
      Para ver el funcionamiento completo, demostraciones y avances, se puede acceder a mi perfil de <strong>LinkedIn</strong>.
    </p>
    <p style="text-align: justify;">
      Asistente inteligente local para <strong>Windows</strong> capaz de interpretar instrucciones en lenguaje natural y ejecutar acciones
      del sistema de forma segura, controlada y progresiva.
    </p>

    <p style="text-align: justify; margin-bottom:.2rem;"><strong>Versión 3 (actual)</strong></p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.2rem 0 .6rem; line-height:1.5;">
      <li><strong>Modo Chatbot:</strong> automatizaciones usando lenguaje normal (“abre”, “copia”, “haz…”).</li>
      <li><strong>Ejecución por tareas:</strong> instrucciones numeradas desde bloc de notas y ejecución por comando.</li>
      <li><strong>Modo Asistente:</strong> lectura de código o texto seleccionado para explicar, optimizar, corregir bugs o proponer mejoras.</li>
      <li><strong>Sesión persistente:</strong> el asistente mantiene contexto hasta recibir el comando <em>“SALIR”</em>.</li>
    </ul>

    <p style="text-align: justify; margin-bottom:.2rem;"><strong>Versión 2</strong></p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.2rem 0 .6rem; line-height:1.5;">
      <li>Apertura de programas y carpetas por nombre.</li>
      <li>Copiado y movimiento de archivos mediante texto o voz.</li>
      <li>Escritura automática en la ventana activa.</li>
      <li>Búsquedas en Google y reproducción de música en YouTube.</li>
      <li>Control de volumen del sistema.</li>
      <li>Respuestas en español e inglés.</li>
    </ul>

    <p style="text-align: justify; margin-bottom:.2rem;"><strong>Seguridad y control</strong></p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.2rem 0 .6rem; line-height:1.5;">
      <li>Confirmación previa antes de ejecutar acciones.</li>
      <li>Restricción por rutas permitidas.</li>
      <li>Protección contra operaciones no autorizadas o accidentales.</li>
    </ul>

    
  `,
  tags: [
    'Asistente IA',
    'Automatización',
    'Lenguaje Natural',
    'Windows',
    'Chatbot',
    'Seguridad',
    'Control del Sistema',
    'Proyecto Personal'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - COOPAC San Francisco — Sistema de Cartera Legal (SF Legal)',
  image: './gif/csf.gif',
  alt: 'Sistema web para gestión y control de cartera judicial',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>SF Legal</strong> es un sistema web desarrollado para el área legal de <strong>COOPAC San Francisco</strong>, orientado a centralizar,
      controlar y dar seguimiento a la cartera judicial, facilitando la consulta, actualización y auditoría de casos de forma segura y ordenada.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Búsqueda avanzada:</strong> filtros por agencia, analista, estado, fechas y responsables.</li>
      <li><strong>Edición controlada:</strong> modificación de campos según rol del usuario.</li>
      <li><strong>Auditoría completa:</strong> registro de quién modificó, qué cambió y cuándo.</li>
      <li><strong>Reportes:</strong> módulo de seguimiento con exportación de modificaciones.</li>
      <li><strong>Roles y dashboard:</strong> accesos diferenciados (admin, editor, vista) y navegación rápida.</li>
    </ul>
    <p style="text-align: justify; margin:0;">
      <em>En desarrollo:</em> módulo para el área de Recuperaciones e integración con el Core Financiero actual y el nuevo Core Financiero,
      garantizando continuidad de datos y procesos entre sistemas.
    </p>
  `,
  tags: [
    'Sistema Legal',
    'Cartera Judicial',
    'Búsquedas Avanzadas',
    'Auditoría',
    'Reportes',
    'Roles y Permisos',
    'Dashboard',
    'Integración de Sistemas'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - FERRETERÍA GAMARRA — Sistema de Ventas y Facturación',
  image: './gif/gamarra.gif',
  alt: 'Sistema de ventas, cotizaciones y facturación electrónica para ferretería',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema desarrollado a medida para <strong>Ferretería Gamarra</strong>, orientado a agilizar la atención al cliente desde el catálogo hasta la
      cotización o facturación, integrando herramientas clave en una sola plataforma. Incluye versión de <strong>escritorio con Electron</strong> y un
      <strong>chatbot</strong> para guiar al usuario ante dudas del sistema.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Catálogo centralizado:</strong> productos, categorías y control interno.</li>
      <li><strong>Búsqueda y carrito:</strong> filtros y armado rápido de pedidos.</li>
      <li><strong>Cotizaciones:</strong> generación imprimible y envío directo por <strong>WhatsApp</strong>.</li>
      <li><strong>Facturación electrónica:</strong> emisión de <strong>boletas y facturas</strong> con <strong>Nubefact</strong>.</li>
      <li><strong>Validación de clientes:</strong> consultas a <strong>RENIEC/SUNAT</strong> para autocompletar y verificar datos.</li>
      <li><strong>Panel administrativo:</strong> dashboard para gestión de ventas y operaciones.</li>
      <li><strong>Chatbot integrado:</strong> asistencia rápida para resolver dudas dentro del sistema.</li>
    </ul>
  `,
  tags: [
    'Ventas',
    'Catálogo',
    'Cotizaciones',
    'WhatsApp',
    'Facturación Electrónica',
    'Nubefact',
    'RENIEC',
    'SUNAT',
    'Dashboard',
    'Electron',
    'Chatbot'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - CLÍNICA DR. VITOR — Sistema Integral de Gestión Clínica',
  image: './gif/vitor.gif',
  alt: 'Sistema integral para gestión clínica: pacientes, citas, historias, caja e inventario',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema desarrollado a medida para la <strong>Clínica Dr. Vitor</strong>, con el objetivo de organizar de forma centralizada la operación diaria:
      registro de pacientes, atención médica, cobranza y control de medicamentos. Nace para reemplazar procesos manuales, reducir errores de facturación
      y mantener la información clínica ordenada, segura y accesible para todo el equipo (administración, asistentes, médicos y caja).
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Centralización total:</strong> pacientes, historias clínicas, citas y pagos en un solo lugar.</li>
      <li><strong>Flujo optimizado:</strong> asistente → doctor → caja, reduciendo tiempos de espera y errores humanos.</li>
      <li><strong>Facturación electrónica:</strong> emisión automatizada de boletas y facturas.</li>
      <li><strong>Inventario médico:</strong> control de medicamentos/productos vinculados a las atenciones.</li>
      <li><strong>Paneles y reportes:</strong> métricas para decisiones administrativas y financieras.</li>
    </ul>
  `,
  tags: [
    'Sistema Clínico',
    'Gestión de Pacientes',
    'Historias Clínicas',
    'Citas Médicas',
    'Caja y Cobranza',
    'Facturación Electrónica',
    'Inventario',
    'Reportes y Dashboard'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL - MAZE BOT — Asistentes IA para negocios y proyectos',
  image: './gif/mazebot.gif',
  alt: 'Plataforma web para crear y gestionar asistentes virtuales con IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      MAZE BOT es una plataforma web que permite crear y administrar <strong>asistentes virtuales con IA</strong> 
      para distintos negocios y proyectos desde un solo lugar. La idea nace de la necesidad de tener un “cerebro central” 
      que responda dudas de clientes, explique servicios y atienda consultas frecuentes sin depender siempre de una persona.
    </p>
    <p style="text-align: justify;">
      Desde un panel administrativo puedes configurar asistentes para diferentes marcas, cargar información que deben conocer 
      (servicios, horarios, políticas, etc.) y probar cómo responden antes de publicarlos. Luego, cada asistente se puede 
      integrar en la web del cliente mediante un pequeño código de inserción, funcionando como un chat flotante 
      o embebido en la página.
    </p>
    
  `,
  tags: [
    'IA', 'Chatbot', 'Asistentes virtuales', 'Atención al cliente',
    'Automatización', 'Plataforma web', 'Multi-negocio'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Más detalles del proyecto' },
  ],
},

  {
  title: 'EMPRESA APRENDE PERÚ - LANDING PAGE',
  image: './gif/landingapp.gif',
  alt: 'Landing page de Aprende Perú para promoción de cursos y certificados con QR',
  descriptionHTML: `
    <p style="text-align: justify;">
      Esta landing de <strong>APRENDE PERÚ</strong> está diseñada como página principal de captación 
      para una corporación de educación especializada en cursos, diplomados y certificaciones con 
      <strong>código QR de verificación</strong>. El objetivo es mostrar de forma clara los beneficios, 
      modelos de certificados, áreas de formación y promociones para motivar al usuario a solicitar información.
    </p>
    <p style="text-align: justify;">
      La estructura combina un hero enfocado en certificación profesional, carruseles de 
      <strong>modelos de certificados</strong> y <strong>carreras por área</strong>, una sección de 
      <strong>convenios y respaldos institucionales</strong>, planes promocionales y un footer completo con datos legales. 
      Todo el diseño respeta la identidad visual de Aprende Perú (rojos corporativos, fondos oscuros y tarjetas blancas) 
      y está implementado con <strong>React + Vite</strong>, listo para integrarse con el ecosistema actual de la marca.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
     
    </ul>
  `,
  tags: [
    'Landing page',
    'Educación',
    'Certificados con QR',
    'React',
    'Vite',
    'UI/UX',
    'Marketing educativo'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver código del proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL - MAZE DB — Chat con tu Base de Datos usando IA',
  image: './gif/ia_bd.gif',
  alt: 'Sistema web para consultar y gestionar bases de datos con IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      MAZE DB es una herramienta web que permite <strong>conectarse a bases de datos PostgreSQL</strong> y 
      consultarlas usando <strong>lenguaje natural</strong>. Nació de la necesidad de explorar y modificar datos 
      de proyectos como MAZE TOUR sin depender siempre de clientes SQL tradicionales o recordar consultas complejas.
    </p>
    <p style="text-align: justify;">
      El sistema integra <strong>IA (Gemini)</strong> para transformar lo que escribes en español (o inglés) 
      en <strong>consultas SQL reales</strong>, mostrando tanto el código generado como los resultados en una 
      interfaz clara y visual. Ideal para desarrolladores, analistas y equipos que quieren trabajar sus datos 
      de forma más rápida, intuitiva y controlada.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Conexión dinámica a PostgreSQL:</strong> Configuración de host, puerto, base de datos, usuario y contraseña directamente desde la interfaz.</li>
      <li><strong>Chat con la base de datos:</strong> Escribe preguntas como <em>“qué tablas tengo”</em> o 
          <em>“muéstrame los hoteles con más reservas”</em> y la IA genera el <strong>SQL correspondiente</strong>.</li>
      <li><strong>Consultas avanzadas:</strong> Soporta <strong>JOINs</strong>, filtros, agregaciones, subconsultas y 
          lógica compleja para análisis de datos reales.</li>
      <li><strong>Modo lectura y modo escritura:</strong> Permite trabajar solo con <strong>SELECT</strong> 
          o habilitar de forma controlada <strong>INSERT / UPDATE / DELETE</strong>, con validaciones de seguridad.</li>
      <li><strong>SQL visible y copiable:</strong> Cada respuesta muestra la <strong>consulta generada</strong> 
          y un botón para copiarla y reutilizarla en otros entornos o clientes SQL.</li>
      <li><strong>Detección inteligente de tablas:</strong> La IA puede entender peticiones en español aunque las 
          tablas y columnas estén en inglés, apoyándose en el catálogo de <code>information_schema</code>.</li>
      <li><strong>Arquitectura moderna:</strong> Frontend en <strong>React + Vite</strong> con interfaz tipo chat, 
          y backend en <strong>Node.js + Express</strong> integrado con <strong>PostgreSQL</strong> y la API de <strong>Gemini</strong>.</li>
    </ul>
  `,
  tags: [
    'React', 'Node.js', 'PostgreSQL', 'Inteligencia Artificial', 'SQL',
    'Gemini', 'Fullstack', 'Herramienta interna', 'Productividad', 'Data'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA - SALFER CRÉDITOS – SISTEMA INTEGRAL DE CRÉDITOS Y COBRANZA',
  image: './gif/salfer.gif',
  alt: 'Panel interno de gestión de créditos y cobranzas de SALFER CRÉDITOS',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>SALFER CRÉDITOS</strong> es un sistema interno para la gestión completa del ciclo de 
      préstamos personales: desde el registro del cliente y la creación del crédito, hasta el seguimiento 
      de cuotas, pagos, estados y reportes para el área de cobranzas. Incluye un 
      <strong>panel administrativo moderno</strong> con tarjetas de resumen, listado de préstamos recientes, 
      últimos pagos y métricas clave de la cartera activa.
    </p>
    <p style="text-align: justify;">
      El sistema permite gestionar clientes, préstamos, cronogramas de pago e historial de cobranzas con 
      <strong>roles y permisos</strong> (ADMIN, OPERADOR, CLIENTE), generación de 
      <strong>PDFs profesionales</strong> para resúmenes de cliente y cronogramas, filtros y paginación en 
      tablas, así como un portal cliente para consultar sus créditos y registrar pagos. Toda la interfaz 
      está diseñada con un estilo <strong>financiero nocturno</strong> (fondos oscuros, acentos dorados) y se 
      integra con un backend seguro y escalable.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li>Panel interno con dashboard de cartera, préstamos recientes y últimos pagos.</li>
      <li>Módulo de clientes con filtros, paginación y exportación de resumen en PDF.</li>
      <li>Gestión de préstamos con generación automática de cronogramas de cuotas.</li>
      <li>Exportación de cronogramas de pago en PDF por préstamo, con diseño tipo estado de cuenta.</li>
      <li>Portal cliente para consultar préstamos, cuotas y registrar pagos con distintos métodos.</li>
      <li>Backend con Node.js, Express y Sequelize (PostgreSQL/MySQL) y frontend en React + Vite.</li>
      <li>Autenticación JWT, middleware de roles y diseño UI/UX adaptado al rubro financiero.</li>
    </ul>
  `,
  tags: [
    'Sistema interno',
    'Finanzas',
    'Gestión de créditos',
    'Cronogramas de pago',
    'React',
    'Node.js',
    'Express',
    'Sequelize',
    'UI/UX'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver código del proyecto' },
  ],
},

  {
  title: ' PROYECTO PERSONAL - MAZE COMPRESS — Optimización de imágenes DE 3 MB A 30 KB',
  image: './gif/compress.gif',
  alt: 'Sistema web para comprimir y optimizar imágenes',
  descriptionHTML: `
    <p style="text-align: justify;">
      Herramienta web diseñada para <strong>comprimir y optimizar imágenes</strong> de forma rápida, sencilla y sin perder calidad percibida. 
      Ideal para desarrolladores, emprendedores y creadores de contenido que necesitan reducir el peso de sus archivos para 
      usarlos en webs, apps o campañas digitales.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Compresión configurable:</strong> Control del nivel de calidad para encontrar el equilibrio ideal entre peso y definición.</li>
      <li><strong>Vista previa en tiempo real:</strong> Comparación antes y después, mostrando tamaño original versus tamaño optimizado.</li>
      <li><strong>Soporte para múltiples formatos:</strong> Procesamiento de imágenes en <strong>JPG</strong>, <strong>PNG</strong> y <strong>WEBP</strong>, entre otros.</li>
      <li><strong>Subida simple:</strong> Carga mediante <em>drag &amp; drop</em> o selección de archivos, con manejo de múltiples imágenes.</li>
      <li><strong>Arquitectura moderna:</strong> Frontend en <strong>React</strong> y backend en <strong>Node.js</strong> con procesamiento en servidor, 
          pensado para integrarse en otros proyectos o paneles administrativos.</li>
    </ul>
  `,
  tags: [
    'React', 'Node.js', 'Optimización de imágenes', 'Frontend', 'Compresión',
    'Performance web', 'Herramienta interna', 'Productividad'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'PROYECTO PERSONAL - MAZE BOOK — Historias, tráilers y aventuras a tu estilo',
  image: './gif/mazebook.gif',
  alt: 'Plataforma digital de historias, tráilers y aventuras interactivas',
  descriptionHTML: `
    <p style="text-align: justify;">
      Historias cortas, tráilers y aventuras para todos los gustos. Creamos este espacio para que leer sea simple, cómodo y entretenido, 
      y para descubrir las películas más recomendadas según tu estilo. 
      <br /><br />
      <strong>MAZE BOOK</strong> no se limita solo a cuentos infantiles: reúne relatos breves, leyendas, adaptaciones de clásicos, 
      reseñas y tráilers para disfrutar desde cualquier dispositivo.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Biblioteca variada:</strong> Historias cortas, fábulas, leyendas, reseñas y contenido para diferentes edades y gustos.</li>
      <li><strong>Tráilers y películas:</strong> Sección para descubrir tráilers y fichas de películas con sinopsis, géneros y recomendaciones.</li>
      <li><strong>Experiencia de lectura cómoda:</strong> Modo lectura, navegación fluida, organización por categorías y duración.</li>
      <li><strong>Interacción con el usuario:</strong> Sistema de favoritos, vista detallada de cada historia y enfoque en usabilidad móvil y desktop.</li>
      <li><strong>Arquitectura moderna:</strong> Desarrollado con <strong>React</strong> y <strong>Node.js</strong> (API REST), preparado para escalar en número de historias, tráilers y usuarios.</li>
    </ul>
  `,
  tags: [
    'React', 'Node.js', 'Express', 'Historias cortas', 'Tráilers',
    'Películas', 'Storytelling', 'UI/UX', 'Responsive'
  ],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA GR MINING COMPONENTS — Sistema de Control de Inventarios',
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
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    { type: 'github', href: '#', label: 'Ver Código' },
  ],
},

  {
  title: 'EMPRESA HUÁNUCO DE BOLETO - QUE SUERTE — Plataforma Digital de Sorteos y Premios',
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
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' }, // Agrega el enlace al video de demostración o presentación
    { type: 'github', href: '#', label: 'Ver Código' }, // Agrega el enlace al repositorio si está disponible
  ],
},

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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
      { type: 'github', href: '#', label: 'Ver Código' },
    ],
  },

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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
      { type: 'github', href: 'https://github.com/alvaroquirozjaimes/BuscarGif', label: 'Ver Código' },
    ],
  }
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
          {(() => {
            const pages = [];
            const delta = 2;
            const left = Math.max(1, page - delta);
            const right = Math.min(totalPages, page + delta);
            if (left > 1) {
              pages.push(<button key={1} onClick={() => setPage(1)}>1</button>);
              if (left > 2) pages.push(<span key="l-dots" className="page-dots">…</span>);
            }
            for (let n = left; n <= right; n++) {
              pages.push(
                <button key={n} className={n === page ? 'active' : ''} onClick={() => setPage(n)}>{n}</button>
              );
            }
            if (right < totalPages) {
              if (right < totalPages - 1) pages.push(<span key="r-dots" className="page-dots">…</span>);
              pages.push(<button key={totalPages} onClick={() => setPage(totalPages)}>{totalPages}</button>);
            }
            return pages;
          })()}
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
