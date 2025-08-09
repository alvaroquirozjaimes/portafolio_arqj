import React, { useMemo, useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'TIENDA STYLEHUB - E-Commerce con Visualizador 3D de Productos',
    image: './gif/e-commerce2.gif',
    alt: 'E-commerce con visualizador 3D',
    descriptionHTML: `
      <p style="text-align: justify;">
        <strong>E-Commerce 3D</strong> es una plataforma moderna que combina la venta online de productos con la posibilidad de visualizarlos en <strong>modelos 3D interactivos</strong>, ofreciendo una experiencia de compra inmersiva y realista.
      </p>
      <p style="text-align: justify;">
        <strong>🛒 Funcionalidades principales:</strong><br>
        - Catálogo dinámico de productos con filtros por categoría.<br>
        - Carga de productos desde el panel admin con imágenes y modelos <code>.glb</code>.<br>
        - Visualizador 3D interactivo con rotación automática y zoom.<br>
        - Carrito de compras con persistencia de datos y cálculo de totales.<br>
        - Proceso de checkout para registrar órdenes en la base de datos.<br>
        - Panel de administración con reportes de ventas y gestión de stock.
      </p>
      <p style="text-align: justify;">
        <strong>💳 Proceso de compra:</strong><br>
        - Añade productos al carrito y selecciona variantes u opciones.<br>
        - Completa la información de envío y selecciona método de pago.<br>
        - El sistema guarda la orden y actualiza el panel de reportes.
      </p>
      <p style="text-align: justify;">
        <strong>📊 Dashboard de administración:</strong><br>
        - Resumen de ventas totales y por categoría.<br>
        - Listado de pedidos recientes.<br>
        - Integración con endpoints optimizados para estadísticas.
      </p>
      <p style="text-align: justify;">
        <strong>🔐 Inicio de sesión con Google:</strong><br>
        - Acceso rápido y seguro con OAuth 2.0.<br>
        - Creación automática de perfil de usuario.<br>
        - Roles para administración y clientes.
      </p>
      <p style="text-align: justify;">
        <strong>🚀 Impacto:</strong> Esta plataforma moderniza la experiencia de compra, mejora la conversión al permitir visualizar los productos en 3D y ofrece herramientas de gestión eficientes para vendedores.
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
        <strong>Viaja y Explora</strong> es una plataforma web moderna que ayuda a los viajeros a descubrir <strong>lugares turísticos</strong>, <strong>hoteles</strong> y <strong>restaurantes</strong> con toda la información que necesitan: imágenes, precios, filtros avanzados y contacto directo.
      </p>
      <p style="text-align: justify;">
        <strong>🗺️ Funcionalidades principales:</strong><br>
        - Explora destinos y negocios turísticos de forma organizada y atractiva.<br>
        - Filtra resultados por categoría, ciudad, precio o popularidad.<br>
        - Marca tus lugares favoritos con likes para apoyar a los mejores.<br>
        - Accede a fichas completas con horarios, descripciones, galería de fotos, habitaciones o menús.<br>
        - Módulo de avisos para que los negocios publiquen promociones o noticias.
      </p>
      <p style="text-align: justify;">
        <strong>🤖 Asistente Inteligente:</strong><br>
        - Un chatbot con IA te acompaña durante tu navegación.<br>
        - Puedes consultarle sobre hoteles, actividades, restaurantes o cómo usar la plataforma.<br>
        - Mejora la experiencia del usuario actuando como guía personalizada en tiempo real.
      </p>
      <p style="text-align: justify;">
        <strong>🔐 Inicio de sesión con Google:</strong><br>
        - Accede rápidamente usando tu cuenta de Google sin necesidad de registrar un nuevo usuario.<br>
        - Autenticación segura e integrada con OAuth 2.0.<br>
        - Tu perfil se crea automáticamente con tu nombre y correo.
      </p>
      <p style="text-align: justify;">
        <strong>💚 Impacto:</strong> Esta plataforma impulsa la visibilidad de negocios turísticos, promueve el turismo local y ayuda a los viajeros a planificar experiencias únicas con comodidad y seguridad.
      </p>
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
        Sistema web desarrollado para gestionar de forma integral cursos virtuales de la empresa Aprende Perú. Desde la publicación del curso hasta la emisión y validación de certificados, la plataforma automatiza y centraliza todo el proceso educativo en línea. Este sistema cuenta con 3 usuarios: Estudiante, asesor y administrador, cada uno con diferentes accesos y permisos.
      </p>
      <p style="text-align: justify;">
        <strong>Funcionalidades:</strong> Gestión completa de cursos, módulos y paquetes, asignación personalizada de contenidos a estudiantes, generación automática de certificados PDF con código QR validable y almacenamiento seguro en Google Drive. Además, cuenta con inscripción y pagos en línea, validación pública de certificados por nombre o DNI y contacto directo vía WhatsApp.
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
        Este módulo complementa el sistema desarrollado para Aprende Perú, integrando nuevas capacidades basadas en inteligencia artificial. Ahora, el sistema puede generar automáticamente temarios personalizados y agregar datos completos del estudiante en los certificados emitidos.
      </p>
      <p style="text-align: justify;">
        <strong>¿Qué incluye el certificado generado?</strong><br>
        - Nombre del estudiante<br>
        - Curso realizado<br>
        - Nota final<br>
        - Duración y modalidad<br>
        - Temario detallado generado por IA<br>
        - Firma digital, código único, DNI<br>
        - Código QR para validación pública
      </p>
      <p style="text-align: justify;">
        <strong>☁️ Almacenamiento en la nube:</strong> Una vez generado, el certificado PDF se guarda automáticamente en Google Drive mediante la API oficial y autenticación con cuentas de servicio. Esto asegura una gestión centralizada y segura.
      </p>
      <p style="text-align: justify;">
        <strong>🛠️ Beneficios:</strong> Esta integración optimiza la generación de certificados, minimiza errores humanos y ofrece una personalización más profunda para cada estudiante.
      </p>
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
        Este proyecto fue desarrollado como parte de mi colaboración con Inmobiliaria Matisse, con el objetivo de implementar una plataforma web eficiente para la gestión integral de sus propiedades. El sistema se encuentra actualmente en fase funcional avanzada, y continúa evolucionando según nuevos requerimientos de la empresa.
      </p>
      <p style="text-align: justify;">
        <strong>Funcionalidades Implementadas:</strong><br>
        - Gestión de Inmuebles (CRUD completo)<br>
        - Subida de imágenes con vista previa<br>
        - Filtros y búsqueda avanzada por múltiples criterios<br>
        - Propiedades destacadas en la página principal<br>
        - Página de detalle con galería interactiva<br>
        - Autenticación segura con roles (admin, agente, cliente)<br>
        - Dashboards personalizados por tipo de usuario<br>
        - Formulario de contacto validado con anti-spam<br>
        - Diseño totalmente responsivo<br>
        - Mapa de sedes con información de contacto
      </p>
      <p style="text-align: justify;">
        <strong>⚙️ Estado:</strong> En funcionamiento, con nuevas funcionalidades en desarrollo según las necesidades de la empresa.
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
        “Recicla y Gana” es una plataforma ecológica que conecta a <strong>recicladores</strong> con <strong>ayudantes</strong> (dueños de tiendas o negocios locales) para fomentar un sistema de recompensas sostenibles mediante el reciclaje.
      </p>
      <p style="text-align: justify;">
        <strong>♻️ ¿Cómo funciona?</strong><br>
        - El reciclador sube fotos de residuos recolectados (botellas, latas, etc.) mediante el chat.<br>
        - El ayudante verifica el material recibido y asigna puntos escribiendo mensajes como <code>+10</code>.<br>
        - Los puntos acumulados se muestran en el perfil del reciclador.<br>
        - El reciclador puede canjear puntos por productos en la tienda del ayudante.
      </p>
      <p style="text-align: justify;">
        <strong>👤 Perfiles personalizados:</strong><br>
        - Registro con rol: Reciclador o Ayudante.<br>
        - Subida de foto de perfil (galería o cámara).<br>
        - Visualización de puntos acumulados (solo para recicladores).<br>
        - Edición de nombre y foto.
      </p>
      <p style="text-align: justify;">
        <strong>💬 Chat en tiempo real:</strong><br>
        - Interacción fluida y directa entre ambos roles.
      </p>
      <p style="text-align: justify;">
        <strong>💚 Impacto:</strong> Esta app promueve el reciclaje responsable, fortalece vínculos comunitarios y recompensa acciones ecológicas.
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
        Aplicación web creada a medida para organizar de forma eficiente mis actividades diarias y mensuales. Diseñé esta herramienta desde cero, integrando inteligencia artificial para mejorar la planificación y productividad personal.
      </p>
      <p style="text-align: justify;">
        <strong>Funcionalidades:</strong> Autenticación segura con JWT, gestión completa de tareas (crear, editar, eliminar, completar), vistas por fecha (hoy, semana, atrasadas), calendario interactivo, barra de progreso diaria, y un asistente IA llamado <strong>ZENDO</strong>.
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
        Es una aplicación web que permite a los usuarios consultar de forma segura sus cuentas y movimientos desde cualquier dispositivo. Está integrada con la app de cobranza, mostrando en tiempo real los pagos registrados por los trabajadores en campo.
      </p>
      <p style="text-align: justify; margin-bottom: 0.1rem; line-height: 1.4;"><strong>Características Principales:</strong></p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top: 0; line-height: 1.4;">
        <li>Inicio de sesión seguro con tipo y número de documento (JWT).</li>
        <li>Registro de nuevos usuarios con credenciales personales.</li>
        <li>Consulta de cuentas y movimientos actualizados.</li>
        <li>Interfaz moderna y responsive para móviles y escritorios.</li>
      </ul>
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
        Aplicación web desarrollada para optimizar el proceso de cobranza en campo. Permite a los cobradores autenticar su sesión, gestionar zonas asignadas, buscar socios, registrar movimientos y visualizar resúmenes detallados diarios y mensuales.
      </p>
      <p style="text-align: justify;"><strong>Características Principales:</strong></p>
      <ul style="text-align: justify; padding-left: 1.5rem;">
        <li>Autenticación segura con JWT y Bcrypt.</li>
        <li>Gestión de socios y zonas por cobrador.</li>
        <li>Registro de movimientos con cálculo automático del total a cobrar.</li>
        <li>Resumen diario y mensual de cobranza por zona.</li>
        <li>Diseño responsivo adaptado a dispositivos móviles.</li>
        <li>Arquitectura modular separada en frontend y backend.</li>
      </ul>
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
      <p style="text-align: justify; margin-bottom: 0.5rem;">
        Proyecto full-stack compuesto por dos aplicaciones integradas para la gestión y visualización de movimientos financieros.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin-top: 0; margin-bottom: 0.8rem; line-height: 1.5;">
        <li><strong>APP Consulta Socios:</strong> consulta de cuentas y movimientos en tiempo real.</li>
        <li><strong>APP Cobranza:</strong> registra pagos y transacciones, sincronizados con la app de socios.</li>
      </ul>
      <p style="text-align: justify; margin-top: 0;">
        <strong>Logros:</strong> Arquitectura modular, APIs seguras, UI responsive, sincronización en tiempo real y unificación de la base de datos para ambas apps.
      </p>
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
        Sistema web completo desarrollado para gestionar eficientemente libros de una biblioteca. Facilita el registro, búsqueda, edición y eliminación de ejemplares mediante una interfaz moderna, clara y totalmente responsiva.
      </p>
      <p style="text-align: justify;">
        <strong>Funcionalidades:</strong> Gestión integral de libros (título, autor, año, ISBN), búsqueda rápida en tiempo real, eliminación con confirmación, validaciones completas y control de errores tanto en el frontend como en el backend.
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
        Aplicación de mensajería en tiempo real con experiencia fluida, segura y dinámica.
      </p>
      <p style="text-align: justify;"><strong>Arquitectura:</strong> Backend en Node.js/Express y comunicación en tiempo real con Socket.IO.</p>
      <ul style="text-align: justify; padding-left: 1.5rem;">
        <li>Firebase Authentication</li>
        <li>Chat global y privado, indicador de escritura y lectura</li>
        <li>Modo claro/oscuro, emojis y notificaciones</li>
      </ul>
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
        Este es el portafolio personal que estás visualizando, diseñado y desarrollado desde cero para mostrar mis habilidades, experiencia y proyectos de desarrollo web.
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
        App que consume una API externa para listar Pokémons con búsqueda y filtros por nombre o tipo.
      </p>
      <p style="text-align: justify;">
        Enfatiza integración con APIs REST y rendimiento sin frameworks.
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
        Página moderna y responsiva con menú, contacto y galería de imágenes.
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
        Plataforma con catálogo, carrito y gestión de pedidos para una tienda de ropa.
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
        App para controlar presupuesto mensual y servicios de suscripción.
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
        CRUD de películas con backend Node.js y MySQL, manejo de rutas y persistencia.
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
  const [expanded, setExpanded] = useState({}); // { [index]: true|false }
  const [openProject, setOpenProject] = useState(null); // ← modal

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

  // Cerrar con Esc y bloquear scroll del body cuando el modal está abierto
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

        {/* Controles de paginación arriba */}
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
                {/* Imagen clickeable para abrir modal */}
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

        {/* Controles de paginación abajo (opcional) */}
        
      </div>

      {/* MODAL */}
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

              {/* Descripción completa sin 'collapsed' */}
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
