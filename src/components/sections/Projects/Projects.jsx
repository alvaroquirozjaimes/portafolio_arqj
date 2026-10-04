import { useEffect, useMemo, useState } from 'react'
import mishelMazeIntegracionImg from '../../../assets/projects/mishel-maze-integracion.png';
import mazeBotAvanceImg from '../../../assets/projects/maze-bot-avance.png';
import mishelVisionTiempoRealImg from '../../../assets/projects/mishel-vision-tiempo-real.png';
import apexStProImg from '../../../assets/projects/apex-st-pro.png';
import fibertelLandingImg from '../../../assets/projects/fibertel-landing.png';
import mazeBotLandingImg from '../../../assets/projects/maze-bot-landing.png';
import controlAsistenciaQrImg from '../../../assets/projects/control-asistencia-qr.png';
import sdiAutomatizacionProcesosImg from '../../../assets/projects/sdi-automatizacion-procesos.png';
import sherlyMoralesLandingImg from '../../../assets/projects/sherly-morales-landing.png';
import erpGeneralImg from '../../../assets/projects/erp-general.png';
import whatsappIaChatbotImg from '../../../assets/projects/whatsapp-ia-chatbot.png';
import mazeTourImg from '../../../assets/projects/maze-tour.png';
import ordenesMedicasImg from '../../../assets/projects/ordenes-medicas.png';
import astradePortfolioImg from '../../../assets/projects/astrade-portfolio.png';
import smartpro360PortfolioImg from '../../../assets/projects/smartpro360-portfolio.png';
import graziaSpaPortfolioImg from '../../../assets/projects/grazia-spa-portfolio.png';
import styles from './Projects.module.css'

const projects = [


  {
    title: 'EMPRESA — CLÍNICA DR. SÁNCHEZ — Plataforma de Ventas Online y Gestión Comercial',
    image: './gif/dr-sanchez.gif',
    alt: 'Plataforma de ventas online para Clínica Dr. Sánchez con catálogo médico, inventario, pedidos, pagos y comprobantes',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma desarrollada para <strong>Clínica Dr. Sánchez</strong>, orientada a digitalizar la venta de productos médicos
        y centralizar la gestión comercial desde el catálogo hasta el pago y seguimiento de cada pedido.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Catálogo médico:</strong> organización de productos por categorías y subcategorías, con marcas, presentaciones, variantes e imágenes.</li>
        <li><strong>Inventario y stock:</strong> control de existencias, movimientos, lotes y fechas de vencimiento para mantener una gestión más precisa de los productos.</li>
        <li><strong>Compra online:</strong> carrito de compras, cupones, pedidos y seguimiento del proceso comercial desde una experiencia pensada para el cliente.</li>
        <li><strong>Pagos:</strong> integración del flujo de pago con tarjeta mediante Qulqi y alternativas como Yape o Plin con carga de comprobante.</li>
        <li><strong>Boletas y facturas:</strong> selección del tipo de comprobante y autocompletado de datos mediante DNI o RUC para agilizar el registro del cliente.</li>
        <li><strong>Medicamentos con receta:</strong> soporte para productos que requieren receta y validación dentro del flujo de compra.</li>
        <li><strong>Reseñas por producto:</strong> calificaciones y comentarios vinculados directamente a cada producto para mejorar la experiencia de compra.</li>
        <li><strong>Roles y administración:</strong> accesos diferenciados para cliente, vendedor y administrador, con gestión de catálogo, usuarios, pedidos e información comercial.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        La solución reúne comercio electrónico, inventario, pagos y administración en una sola plataforma adaptada al rubro de productos médicos.
      </p>
    `,
    tags: ['Clínica Dr. Sánchez', 'E-Commerce', 'Productos Médicos', 'Categorías y Subcategorías', 'Marcas', 'Inventario', 'Lotes', 'Pedidos', 'Qulqi', 'Yape y Plin', 'Boleta y Factura', 'DNI y RUC', 'Reseñas', 'Roles'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'EMPRESA — GRAZIA SPA — Sistema Integral de Ventas, Inventario y Facturación',
    image: graziaSpaPortfolioImg,
    alt: 'Sistema empresarial para GRAZIA SPA con ventas directas, clientes, inventario, facturación y control de caja',
    descriptionHTML: `
      <p style="text-align: justify;">
        Sistema desarrollado para <strong>GRAZIA SPA</strong>, orientado a centralizar la operación comercial del negocio y agilizar
        las ventas de productos y servicios desde una sola plataforma.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Venta directa:</strong> búsqueda del cliente, selección de productos o servicios y registro de la venta sin depender de una cita previa.</li>
        <li><strong>Clientes:</strong> registro y consulta de información con búsqueda de DNI o RUC para facilitar el llenado de datos.</li>
        <li><strong>Inventario:</strong> administración centralizada de productos, insumos, servicios, categorías y precios.</li>
        <li><strong>Facturación:</strong> emisión de boletas y facturas desde el mismo flujo de venta, con manejo del IGV según la operación.</li>
        <li><strong>Caja:</strong> consulta de ingresos y movimientos para llevar un mejor control de las operaciones realizadas.</li>
        <li><strong>Reportes:</strong> seguimiento de información comercial y acceso rápido al contacto del cliente mediante WhatsApp cuando corresponde.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        La solución reúne ventas, clientes, inventario, comprobantes y caja en un solo sistema para reducir procesos manuales y mantener la gestión del negocio organizada.
      </p>
    `,
    tags: ['GRAZIA SPA', 'Ventas', 'Clientes', 'Inventario', 'Productos y Servicios', 'Facturación', 'Caja', 'Reportes', 'DNI y RUC', 'WhatsApp'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'EMPRESA — ASTRADE — Sistema de Gestión Académica y Generación de Certificados con IA',
    image: astradePortfolioImg,
    alt: 'Sistema para ASTRADE con gestión de cursos, participantes, temarios, certificados PDF, códigos QR e integración con Google Drive',
    descriptionHTML: `
      <p style="text-align: justify;">
        Sistema implementado para <strong>ASTRADE</strong>, enfocado en centralizar la gestión de cursos, participantes, temarios y certificados,
        reduciendo tareas repetitivas dentro del proceso académico y administrativo.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Gestión académica:</strong> organización de cursos, participantes y contenidos desde un panel central.</li>
        <li><strong>Certificados inteligentes:</strong> generación de certificados a partir de plantillas y datos registrados en el sistema.</li>
        <li><strong>Temarios asistidos:</strong> apoyo de inteligencia artificial para crear y completar contenidos de cursos.</li>
        <li><strong>PDF con código QR:</strong> emisión de certificados preparados para validación y consulta.</li>
        <li><strong>Google Drive:</strong> almacenamiento y subida automática de los certificados generados.</li>
        <li><strong>Control y reportes:</strong> consulta de certificados emitidos, último código utilizado y seguimiento de información por fechas.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        Una plataforma orientada a mantener el proceso de certificación ordenado, trazable y mucho menos dependiente de tareas manuales.
      </p>
    `,
    tags: ['ASTRADE', 'Gestión Académica', 'Cursos', 'Participantes', 'Certificados', 'Inteligencia Artificial', 'Temarios', 'PDF', 'Código QR', 'Google Drive', 'Reportes'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'EMPRESA — SMARTPRO360 — Plataforma de Gestión Académica y Certificación con IA',
    image: smartpro360PortfolioImg,
    alt: 'Plataforma académica para SMARTPRO360 con cursos, clases, estudiantes, módulos, temarios y certificados con inteligencia artificial',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma desarrollada para <strong>SMARTPRO360</strong>, orientada a administrar la formación académica y el proceso de certificación
        desde una sola solución, con herramientas para organizar cursos, clases, estudiantes y contenidos.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Gestión de cursos:</strong> registro, organización y reutilización de cursos y contenidos académicos.</li>
        <li><strong>Clases y módulos:</strong> estructura de contenidos para mantener el avance formativo organizado.</li>
        <li><strong>Estudiantes:</strong> administración de participantes y relación con los cursos disponibles.</li>
        <li><strong>Certificados con IA:</strong> apoyo para generar certificados y crear temarios de manera más rápida.</li>
        <li><strong>PDF y código QR:</strong> generación de documentos con mecanismos de validación.</li>
        <li><strong>Google Drive:</strong> almacenamiento automático de certificados para facilitar su respaldo y consulta.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El objetivo es centralizar la gestión académica y reducir el trabajo manual asociado a cursos, contenidos y certificaciones.
      </p>
    `,
    tags: ['SMARTPRO360', 'Gestión Académica', 'Cursos', 'Clases', 'Estudiantes', 'Módulos', 'Certificados', 'Inteligencia Artificial', 'Temarios', 'Código QR', 'Google Drive'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'PROYECTO PERSONAL — MAZE TOUR — Plataforma turística para descubrir y organizar viajes',
    image: mazeTourImg,
    alt: 'Maze Tour, plataforma turística con destinos, mapas, hoteles, restaurantes, Full Days, favoritos y asistente inteligente multidioma',
    descriptionHTML: `
      <p style="text-align: justify;">
        Evolución integral de <strong>Maze Tour</strong>, una plataforma turística creada para que viajeros y visitantes puedan
        descubrir lugares, encontrar servicios cercanos y orientarse con mayor facilidad durante su recorrido por el Perú.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Destinos mejor organizados:</strong> navegación por departamentos y zonas para encontrar lugares turísticos de manera más clara y rápida.</li>
        <li><strong>Hoteles y restaurantes:</strong> fichas con información, imágenes y servicios para complementar la planificación del viaje.</li>
        <li><strong>Full Days:</strong> experiencias y recorridos turísticos presentados dentro de la misma plataforma.</li>
        <li><strong>Mapas y ubicaciones:</strong> visualización de puntos turísticos y servicios, con herramientas para facilitar la orientación y consulta de rutas.</li>
        <li><strong>Favoritos:</strong> posibilidad de guardar lugares, hoteles, restaurantes y experiencias para revisarlos después.</li>
        <li><strong>Asistente turístico inteligente:</strong> chatbot con soporte para múltiples idiomas, pensado para orientar a visitantes y responder consultas durante su viaje.</li>
        <li><strong>Experiencia móvil:</strong> interfaz renovada para que la plataforma sea más amigable, rápida e intuitiva también desde el celular.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        MAZE TOUR continúa evolucionando como una guía digital que reúne información turística, ubicación y asistencia en un solo lugar.
      </p>
    `,
    tags: ['Maze Tour', 'Turismo', 'Destinos', 'Mapas y Ubicaciones', 'Hoteles', 'Restaurantes', 'Full Days', 'Favoritos', 'Asistente Multidioma'],
    links: [
      { type: 'demo', href: 'https://peru.mazetour.com', label: 'Ver Proyecto' },
    ],
  },

  


  {
    title: 'EMPRESA — CLÍNICA DR. VITOR — Sistema de Gestión de Órdenes Médicas',
    image: ordenesMedicasImg,
    alt: 'Sistema de gestión de órdenes médicas con pacientes, centros, conceptos, estados, saldos y seguimiento de atención',
    descriptionHTML: `
      <p style="text-align: justify;">
        Sistema desarrollado para la <strong>Clínica Dr. Vitor</strong>, orientado al <strong>registro, control y seguimiento de órdenes médicas</strong>, centralizando la información
        del paciente, los conceptos asociados, el centro de atención, el estado de la orden y su seguimiento administrativo.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Registro de órdenes:</strong> creación y administración de órdenes con código, fecha, paciente, documento y centro correspondiente.</li>
        <li><strong>Conceptos por orden:</strong> consulta de los conceptos o servicios asociados desde el mismo listado.</li>
        <li><strong>Control de cobro:</strong> visualización del total y del saldo pendiente para facilitar el seguimiento administrativo.</li>
        <li><strong>Estados de atención:</strong> control del avance de cada orden y registro de la fecha de atención.</li>
        <li><strong>Búsqueda y filtros:</strong> consulta por código, paciente o documento, además de filtros por estado, cobro, centro y rango de fechas.</li>
        <li><strong>Gestión de centros:</strong> administración de los centros utilizados para organizar y clasificar las órdenes.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        La plataforma permite consultar rápidamente qué órdenes existen, a quién corresponden, en qué estado se encuentran y qué acciones quedan pendientes.
      </p>
    `,
    tags: ['Órdenes Médicas', 'Pacientes', 'Centros de Atención', 'Seguimiento', 'Estados', 'Control de Cobro', 'Filtros', 'Control Administrativo'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },


  {
    title: 'PROYECTO PERSONAL — MAZE BOT — Mejora de la landing: nuevo servicio de WhatsApp con IA y CRM',
    image: mazeBotLandingImg,
    alt: 'Landing de Maze Bot ampliada con la sección de WhatsApp con IA y una demo interactiva del panel de atención con CRM',
    descriptionHTML: `
      <p style="text-align: justify;">
        Mejora y adecuación de la landing de <strong>Maze Bot</strong> para incorporar el nuevo servicio del producto:
        el <strong>asistente de WhatsApp con IA y su panel de atención con CRM</strong>. El sitio pasó de presentar solo
        el asistente para páginas web a comunicar los dos servicios sin perder claridad ni volverse más pesado.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Nueva sección de WhatsApp:</strong> bloque propio con distintivo de <em>NUEVO</em> en el menú, que explica el servicio y muestra una conversación real de ejemplo, desde la consulta del cliente hasta la intención de compra.</li>
        <li><strong>Demo interactiva del panel:</strong> simulación navegable del CRM — bandeja de conversaciones, filtros por estado (pendiente / atendido), etiquetado automático del contacto, pausa del bot cuando entra un asesor y envío de imágenes, PDF, audios y stickers.</li>
        <li><strong>Empresas que confían:</strong> sección con los logos de los clientes del producto, en carrusel continuo.</li>
        <li><strong>FAQ ampliada:</strong> nuevas preguntas sobre el canal de WhatsApp — API oficial de Meta, notas de voz transcritas y el paso de la conversación a una persona sin que el cliente repita nada.</li>
        <li><strong>Rendimiento:</strong> las secciones pesadas se cargan de forma diferida, así la portada abre rápido aunque el sitio ahora tenga mucho más contenido.</li>
        <li><strong>Contenido centralizado:</strong> todos los textos, preguntas y logos viven en un solo archivo de datos, lo que permite actualizar el sitio sin tocar los componentes.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El resultado es una landing que ya no vende un chatbot de página web, sino una plataforma de atención al cliente con dos canales.
      </p>
    `,
    tags: ['Maze Bot', 'WhatsApp Business', 'CRM', 'Inteligencia Artificial', 'Panel de Atención', 'Demo Interactiva', 'Atención al Cliente', 'Integración Web', 'Rendimiento'],
    links: [
      { type: 'demo', href: 'https://mazebot.mazecompress.com/#inicio', label: 'Ver Proyecto' },
    ],
  },
{
    title: 'PROYECTO PERSONAL — ERP GENERAL MÓVIL — Gestión empresarial desde el celular',
    image: './gif/erp-movil.gif',
    alt: 'ERP General adaptado a dispositivos móviles para gestionar inventario, aprobaciones, compras, despacho e indicadores desde el celular',
    descriptionHTML: `
      <p style="text-align: justify;">
        Adecuación del <strong>ERP General a dispositivos móviles</strong>, pensada para que la operación no dependa de estar frente a una computadora.
        Desde el celular se pueden revisar tareas pendientes, consultar información y continuar procesos clave del negocio en el momento en que se necesitan.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Inventario en mano:</strong> consulta de stock, productos y ubicaciones desde el celular, en el mismo almacén.</li>
        <li><strong>Aprobaciones en el momento:</strong> solicitudes y órdenes de compra que se revisan y aprueban sin esperar a volver al escritorio.</li>
        <li><strong>Despacho y entregas:</strong> seguimiento de salidas, entregas pendientes y actualización de estados en ruta.</li>
        <li><strong>Comprobantes:</strong> consulta de documentos emitidos y su estado.</li>
        <li><strong>Dashboard móvil:</strong> los indicadores principales del negocio en una vista adaptada a pantallas pequeñas.</li>
        <li><strong>Misma base, otro dispositivo:</strong> comparte datos, usuarios, roles y permisos con el ERP de escritorio.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        La operación deja de detenerse porque alguien no está en su computadora: el proceso continúa desde el celular.
      </p>
    `,
    tags: ['ERP Móvil', 'Gestión Empresarial', 'Inventario', 'Aprobaciones', 'Compras', 'Despacho', 'Indicadores', 'Operación en Campo', 'Roles y Permisos'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },
  {
    title: 'EMPRESA — CLÍNICA DR. VITOR — Historia Clínica y Hoja de Evaluación en formato oficial',
    image: './gif/clinicavitor.gif',
    alt: 'Historia clínica y hoja de evaluación digitales que replican el formato pre-impreso de la Clínica Dr. Vitor',
    descriptionHTML: `
      <p style="text-align: justify;">
        Ampliación del sistema de la <strong>Clínica Dr. Vitor</strong> para que los documentos que emite la plataforma sean
        idénticos a los formatos pre-impresos que la clínica ya usaba en papel, de modo que el personal médico no tuviera
        que cambiar su forma de trabajar ni volver a llenar nada a mano.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Historia clínica imprimible:</strong> réplica del formato físico — recuadro de H.C., filiación, antecedentes, funciones vitales, relato, examen físico, exámenes auxiliares, diagnóstico, plan de trabajo y tratamiento, respetando la cantidad de renglones de cada sección.</li>
        <li><strong>Renglones con sentido:</strong> la numeración aparece solo donde hay contenido; el resto queda como línea punteada en blanco, tal como se ve una hoja llenada a mano.</li>
        <li><strong>Hoja de evaluación:</strong> el segundo formato de la clínica para los controles de seguimiento, con sus bloques de FECHA, HORA y P/A, el texto sobre renglones y la firma del médico en cada control.</li>
        <li><strong>Evaluaciones ligadas a su consulta:</strong> cada control queda asociado a la historia clínica que le corresponde, como en el papel, y se puede imprimir la hoja de evaluaciones de una consulta específica.</li>
        <li><strong>Historial del paciente:</strong> línea de tiempo con las consultas y sus evaluaciones anidadas, en tarjetas compactas que se expanden al abrirlas.</li>
        <li><strong>Receta y firma:</strong> los medicamentos recetados se anexan al tratamiento, y el pie lleva el nombre del médico, la especialidad y sus números de colegiatura.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El resultado: el sistema imprime y la hoja sale igual al formato oficial de la clínica, lista para archivarse en el file del paciente.
      </p>
    `,
    tags: ['Clínica Dr. Vitor', 'Historia Clínica', 'Hoja de Evaluación', 'Seguimiento de Pacientes', 'Receta Médica', 'Impresión de Formatos', 'Traumatología', 'Gestión Clínica'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'APLICACIÓN MÓVIL — COBRANZA EN CAMPO — Recaudación de socios desde el celular',
    image: './gif/cobranza-app.gif',
    alt: 'Aplicación móvil de cobranza en campo con zonas, búsqueda de socios, registro de depósitos y recaudado del día',
    descriptionHTML: `
      <p style="text-align: justify;">
        Aplicación móvil para los <strong>recaudadores que trabajan en campo</strong>: permite cobrar al socio en su propio
        domicilio o negocio y registrar el depósito en el sistema central en ese mismo momento, reemplazando el cuaderno
        y la hoja de ruta en papel.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Zonas de cobranza:</strong> pantalla inicial con las zonas asignadas y el acumulado cobrado del mes, separado en soles y dólares y dividido entre ahorros y aportes.</li>
        <li><strong>Búsqueda de socios:</strong> buscador por nombre o documento dentro de la zona, con resultados que se van cargando por demanda.</li>
        <li><strong>Registro del cobro:</strong> muestra las cuentas de ahorro del socio y permite ingresar el importe por cuenta; el depósito queda registrado al instante.</li>
        <li><strong>Recaudado del día:</strong> resumen diario de los movimientos hechos por el cobrador, con totales en ambas monedas y selector de fecha para revisar días anteriores.</li>
        <li><strong>Sesión segura:</strong> autenticación con token y cierre automático de sesión al expirar, más monitoreo de errores en producción.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El recaudador sale a campo solo con el celular: cobra, registra y cuadra su día sin volver a la oficina a transcribir nada.
      </p>
    `,
    tags: ['App Móvil', 'Cobranza en Campo', 'Recaudación', 'Zonas de Cobranza', 'Depósitos', 'Cuadre Diario', 'Socios', 'Multimoneda', 'Sincronización'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'APLICACIÓN MÓVIL — CONSULTA DE SOCIOS — Cuentas y movimientos en el celular',
    image: './gif/consulta-app.gif',
    alt: 'Aplicación móvil de consulta para socios con cuentas, saldos en soles y dólares, movimientos y detalle de operación',
    descriptionHTML: `
      <p style="text-align: justify;">
        Aplicación móvil que permite a cada <strong>socio revisar sus cuentas y movimientos desde su celular</strong>, sin
        acercarse a la agencia ni depender del horario de atención. Se conecta directamente con la base de datos central
        de la entidad, así que la información que ve el socio es la misma que maneja el sistema institucional.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Acceso por documento:</strong> ingreso con tipo y número de documento, con sesión protegida por token y rutas privadas.</li>
        <li><strong>Mis cuentas:</strong> listado de las cuentas del socio con su saldo individual y el saldo total consolidado en soles y dólares.</li>
        <li><strong>Movimientos por cuenta:</strong> historial con filtros rápidos por periodo y rango de fechas personalizado, con carga paginada.</li>
        <li><strong>Detalle de la operación:</strong> vista ampliada de cada movimiento con su tipo de operación, fecha, moneda e importe.</li>
        <li><strong>Pensada para el celular:</strong> lectura clara de importes, navegación de un solo toque y tiempos de respuesta cortos.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El socio consulta su saldo y sus últimos movimientos en cualquier momento, y la agencia reduce la atención presencial por consultas simples.
      </p>
    `,
    tags: ['App Móvil', 'Consulta de Socios', 'Cuentas y Saldos', 'Movimientos', 'Multimoneda', 'Historial Financiero', 'Acceso Seguro', 'Consulta en Tiempo Real'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'PROYECTO PERSONAL — MAZE WSP — CRM de WhatsApp con IA para atención de clientes',
    image: './gif/mazebot-wsp.gif',
    alt: 'CRM de WhatsApp con inteligencia artificial para centralizar y automatizar la atención de clientes',
    descriptionHTML: `
      <p style="text-align: justify;">
        <strong>CRM para WhatsApp con inteligencia artificial</strong>, pensado para que un negocio centralice toda su
        atención al cliente en una sola bandeja y deje de perder mensajes entre celulares y personas distintas.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Bandeja centralizada:</strong> todas las conversaciones de WhatsApp en un solo panel, con el historial completo de cada cliente.</li>
        <li><strong>Atención con IA:</strong> respuestas automáticas entrenadas con la información real del negocio — servicios, precios, horarios y preguntas frecuentes.</li>
        <li><strong>Gestión de contactos:</strong> ficha del cliente, seguimiento de sus consultas y estado de cada atención.</li>
        <li><strong>Paso a un asesor:</strong> cuando la consulta lo requiere, la conversación continúa con una persona sin perder el contexto.</li>
        <li><strong>Panel administrativo:</strong> configuración del negocio, datos de entrenamiento del asistente y seguimiento de las conversaciones.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        Convierte WhatsApp en un canal de atención ordenado y medible, en lugar de un teléfono lleno de mensajes sueltos.
      </p>
    `,
    tags: ['Maze WSP', 'CRM', 'WhatsApp', 'Inteligencia Artificial', 'Atención al Cliente', 'Automatización', 'Gestión de Contactos', 'Conversaciones', 'Panel Administrativo'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },


  {
    title: 'PROYECTO PERSONAL — ERP GENERAL — Sistema adaptable para cualquier empresa',
    image: erpGeneralImg,
    alt: 'ERP general adaptable para empresas con inventario, facturación, compras, despacho, kardex, roles y dashboard',
    descriptionHTML: `
      <p style="text-align: justify;">
        Desarrollo de un <strong>sistema ERP general</strong> pensado para adaptarse a distintos tipos de negocio,
        centralizando las áreas principales de operación, administración y control interno desde una sola plataforma.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Facturación electrónica:</strong> emisión de comprobantes SUNAT y control de documentos comerciales.</li>
        <li><strong>Guías de remisión:</strong> generación y seguimiento de guías electrónicas vinculadas al despacho.</li>
        <li><strong>Inventario y kardex:</strong> control de stock, movimientos, productos, ubicaciones y trazabilidad.</li>
        <li><strong>Compras y aprobaciones:</strong> solicitudes, órdenes de pedido, atención parcial y gestión de proveedores.</li>
        <li><strong>Despacho y entregas:</strong> seguimiento de salidas, entregas pendientes y estados operativos.</li>
        <li><strong>Administración:</strong> usuarios, roles, permisos, dashboard general y reportes para la toma de decisiones.</li>
      </ul>
      <p style="text-align: justify; margin: 0;">
        El sistema puede implementarse, venderse o alquilarse como base ERP, ajustándose a los procesos reales de cada empresa.
      </p>
    `,
    tags: ['ERP General', 'SUNAT', 'Guías Electrónicas', 'Inventario', 'Kardex', 'Compras', 'Despacho', 'Facturación', 'Roles y Permisos', 'Dashboard'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'PROYECTO PERSONAL — Chatbot WhatsApp IA — Atención automatizada para negocios',
    image: whatsappIaChatbotImg,
    alt: 'Chatbot para WhatsApp con inteligencia artificial, entrenamiento por negocio, productos, conversaciones y panel administrativo',
    descriptionHTML: `
      <p style="text-align: justify;">
        Plataforma de <strong>chatbot para WhatsApp con inteligencia artificial</strong>, orientada a automatizar la atención
        de clientes, responder consultas frecuentes y trabajar con información propia de cada negocio.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Integración con WhatsApp:</strong> recepción de mensajes mediante webhook y respuesta automática desde el backend.</li>
        <li><strong>IA entrenable por negocio:</strong> cada empresa puede cargar información para mejorar la precisión de las respuestas.</li>
        <li><strong>Catálogo y recomendaciones:</strong> permite responder sobre productos o servicios según la necesidad del cliente.</li>
        <li><strong>Conversaciones con contexto:</strong> historial de mensajes, control de sesiones y respuestas más coherentes.</li>
        <li><strong>Intención de compra o pago:</strong> detecta cuando el cliente desea comprar, pagar o continuar una atención manual.</li>
        <li><strong>Panel administrativo:</strong> configuración del negocio, productos, datos de entrenamiento y seguimiento de conversaciones.</li>
      </ul>
    `,
    tags: ['WhatsApp IA', 'Chatbot', 'Automatización', 'Atención al Cliente', 'Catálogo', 'Conversaciones', 'Intención de Compra', 'Panel Administrativo', 'IA Entrenable'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'LANDING PAGE — Sherly Morales — Sitio informativo con asistente IA',
    image: sherlyMoralesLandingImg,
    alt: 'Landing page informativa para Sherly Morales con noticias, propuestas, equipo de trabajo y asistente IA',
    descriptionHTML: `
      <p style="text-align: justify;">
        Landing page desarrollada para <strong>Sherly Morales</strong>, enfocada en presentar información pública de forma
        clara, ordenada y accesible para visitantes interesados en conocer su perfil, noticias, equipo y propuestas.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
        <li><strong>Diseño institucional:</strong> estructura visual limpia, moderna y orientada a confianza.</li>
        <li><strong>Contenido organizado:</strong> biografía, trayectoria, noticias, propuestas, equipo de trabajo y contacto.</li>
        <li><strong>Enfoque local:</strong> presentación adaptada al contexto de Huánuco y a comunicación ciudadana.</li>
        <li><strong>Asistente informativo:</strong> chatbot integrado para responder consultas usando la información del sitio.</li>
        <li><strong>Responsive:</strong> navegación optimizada para escritorio y dispositivos móviles.</li>
      </ul>
    `,
    tags: ['Landing Page', 'Sherly Morales', 'Huánuco', 'Asistente IA', 'Noticias', 'Propuestas', 'Diseño Institucional', 'Experiencia Móvil'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },


{
  title: 'EMPRESA — Hydromaq Solutions S.A.C. — ERP Industrial Automatizado',
  image: './gif/hydromaq2.gif',
  alt: 'ERP industrial automatizado para Hydromaq Solutions S.A.C.',
  descriptionHTML: `
    <p style="text-align: justify;">
      Desarrollo y adecuación de un <strong>ERP industrial para Hydromaq Solutions S.A.C.</strong>,
      tomando como base la arquitectura y experiencia del sistema implementado previamente para
      <strong>SDI Maquinarias S.A.C.</strong>, pero incorporando mejoras importantes en automatización,
      lógica de procesos, control operativo y gestión interna.
    </p>

    <p style="text-align: justify;">
      El objetivo principal fue transformar el sistema en una herramienta más completa y eficiente,
      permitiendo que los módulos trabajen de forma conectada y que muchas tareas que antes podían
      requerir cálculos o validaciones manuales sean gestionadas directamente por la plataforma.
    </p>

    <ul style="text-align: justify; padding-left: 1.2rem; margin: .3rem 0 .8rem; line-height: 1.5;">
      <li><strong>Ventas y cotizaciones:</strong> gestión de clientes, productos, cotizaciones, órdenes de pedido, estados y seguimiento comercial.</li>
      <li><strong>Hoja de costo:</strong> cálculo de materiales, procesos, mano de obra, tratamientos, costos operativos y estructura de fabricación.</li>
      <li><strong>Producción:</strong> generación y control de órdenes de trabajo, planificación de actividades y seguimiento del avance operativo.</li>
      <li><strong>Compras:</strong> control de requerimientos, solicitudes, atención de materiales y relación con el flujo de almacén.</li>
      <li><strong>Almacén e inventario:</strong> control de productos, stock, movimientos, disponibilidad y organización de materiales.</li>
      <li><strong>Logística y despacho:</strong> seguimiento de entregas, guías, estados de despacho y control de pendientes.</li>
      <li><strong>Administración:</strong> gestión de usuarios, permisos, maestros del sistema, reportes y control general de la información.</li>
      <li><strong>Automatización de procesos:</strong> cálculos, actualización de estados, conexión entre áreas y reducción de tareas manuales dentro del flujo operativo.</li>
    </ul>

    <p style="text-align: justify; margin: 0;">
      Esta mejora permite que Hydromaq Solutions S.A.C. trabaje con una plataforma más ordenada,
      escalable y adaptada a su operación real, optimizando tiempos, reduciendo errores y mejorando
      la coordinación entre ventas, producción, compras, almacén, logística, despacho y administración.
    </p>
  `,
  tags: ['Hydromaq Solutions', 'ERP Industrial', 'Automatización', 'Gestión Operativa', 'Ventas', 'Cotizaciones', 'Hoja de Costo', 'Producción', 'Compras', 'Logística'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ]
},

  {
  title: 'EMPRESA — APEX ST PRO — Plataforma de cursos y certificación digital con IA',
  image: apexStProImg,
  alt: 'Plataforma APEX ST PRO para cursos, estudiantes, certificados y temarios generados con IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema web desarrollado para <strong>APEX ST PRO</strong>, orientado a gestionar cursos virtuales,
      estudiantes, inscripciones, certificados y catálogo académico desde una sola plataforma.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Gestión de cursos:</strong> creación y edición de cursos, módulos, evaluaciones, precios, imágenes y paquetes.</li>
      <li><strong>Temarios inteligentes:</strong> al ingresar el nombre del curso, el sistema genera automáticamente un temario editable.</li>
      <li><strong>Catálogo reutilizable:</strong> cursos y módulos guardados para evitar crear plantillas repetidas.</li>
      <li><strong>Certificados en PDF:</strong> generación con plantillas seleccionables y código QR único de validación.</li>
      <li><strong>Portal del estudiante:</strong> búsqueda por nombre o DNI, visualización, validación y descarga de certificados.</li>
      <li><strong>Roles y diseño responsive:</strong> administración, aula virtual, catálogo público y adaptación a móvil.</li>
    </ul>
  `,
  tags: ['APEX ST PRO', 'E-learning', 'Certificados QR', 'IA', 'Temarios Automáticos', 'Google Drive', 'Cursos Virtuales', 'Portal del Estudiante', 'Certificación Digital'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'INSTITUCIÓN EDUCATIVA — I.E.E. Juan José Crespo y Castillo de Ambo — Control de Asistencia con QR',
  image: controlAsistenciaQrImg,
  alt: 'Sistema de control de asistencia escolar con QR para la Institución Educativa Emblemática Juan José Crespo y Castillo de Ambo',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema web desarrollado para la <strong>Institución Educativa Emblemática Juan José Crespo y Castillo de Ambo</strong>,
      orientado a registrar y consultar la asistencia de alumnos mediante escaneo de código QR desde fotocheck,
      con reportes por nivel, grado, sección, turno y fecha.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Marcación por QR:</strong> registro rápido de asistencia, tardanza o salida sin ingreso manual.</li>
      <li><strong>Niveles completos:</strong> gestión para inicial, primaria y secundaria, con grados, secciones y turnos.</li>
      <li><strong>Panel administrativo:</strong> alumnos, aulas, horarios, calendarios, justificaciones y usuarios.</li>
      <li><strong>Reportes filtrados:</strong> asistencia diaria e histórica por alumno, aula, fecha o rango de fechas.</li>
      <li><strong>Acceso para padres:</strong> consulta web del historial de asistencia del estudiante.</li>
      <li><strong>Arquitectura multiusuario:</strong> información centralizada, acceso simultáneo y control de usuarios para trabajar de forma segura desde distintos equipos.</li>
    </ul>
  `,
  tags: ['Control de Asistencia', 'Código QR', 'Institución Educativa', 'Reportes', 'Acceso para Padres', 'Alumnos y Aulas', 'Horarios', 'Justificaciones', 'Gestión Escolar'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MISHEL — Visión en tiempo real y control contextual',
  image: mishelVisionTiempoRealImg,
  alt: 'MISHEL observando la pantalla y apoyando tareas con visión en tiempo real',
  descriptionHTML: `
    <p style="text-align: justify;">
      Nueva capacidad de <strong>MISHEL</strong> enfocada en visión en tiempo real. El asistente puede observar
      la pantalla, interpretar el contexto y comprender mejor lo que el usuario necesita hacer, reduciendo la
      necesidad de explicar cada paso manualmente.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Visión de pantalla:</strong> lectura contextual de lo que ocurre en el entorno de trabajo.</li>
      <li><strong>Acciones por objetivo:</strong> el usuario indica qué quiere lograr y MISHEL guía el proceso.</li>
      <li><strong>Control local:</strong> apertura de aplicaciones, acceso a carpetas y ejecución de acciones con permisos.</li>
      <li><strong>Asistencia más autónoma:</strong> mejora la fluidez para apoyar actividades reales en tiempo real.</li>
    </ul>
  `,
  tags: ['MISHEL', 'Visión en Tiempo Real', 'Automatización', 'Asistente de Escritorio', 'IA', 'Control Contextual', 'Acciones por Objetivo', 'Windows'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MISHEL + MAZE BOT — Asistencia IA más natural e integrada',
  image: mishelMazeIntegracionImg,
  alt: 'MISHEL y MAZE BOT integrados para asistencia inteligente por texto, voz y avatar 3D',
  descriptionHTML: `
    <p style="text-align: justify;">
      Evolución de <strong>MISHEL</strong>, mi asistente personal con inteligencia artificial, junto con mejoras aplicadas a
      <strong> MAZE BOT</strong>, mi plataforma de asistentes virtuales para páginas web y negocios digitales.
      El objetivo fue lograr una experiencia más natural, rápida y útil en tiempo real.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Comprensión más fluida:</strong> MISHEL interpreta mejor instrucciones del usuario y se adapta al contexto de trabajo.</li>
      <li><strong>Interacción por voz y texto:</strong> respuestas más cercanas, naturales y útiles para tareas diarias.</li>
      <li><strong>Avatar 3D:</strong> presencia visual para una experiencia más humana e interactiva.</li>
      <li><strong>Integración con MAZE BOT:</strong> mejoras reutilizadas en asistentes web para atender negocios, landing pages y plataformas.</li>
      <li><strong>Escalabilidad:</strong> base preparada para que más usuarios puedan acceder a asistencia inteligente desde distintos entornos.</li>
    </ul>
  `,
  tags: ['MISHEL', 'MAZE BOT', 'Inteligencia Artificial', 'Avatar 3D', 'Voz', 'Asistente Virtual', 'Automatización', 'Interacción Natural'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},


  {
  title: 'EMPRESA - SDI Maquinarias S.A.C. — Automatización y mejora de procesos operativos',
  image: sdiAutomatizacionProcesosImg,
  alt: 'Automatización de procesos operativos para SDI Maquinarias con ventas, compras, producción, almacén y despacho',
  descriptionHTML: `
    <p style="text-align: justify;">
      Proyecto de mejora y automatización del sistema ERP de <strong>SDI Maquinarias S.A.C.</strong>, enfocado en
      ordenar los procesos internos, reducir tareas manuales y conectar el flujo entre ventas, almacén, compras,
      producción, despacho, facturación y administración.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Flujo ventas → operación:</strong> cotizaciones, órdenes de pedido, reservas de stock y seguimiento por estado.</li>
      <li><strong>Compras integradas:</strong> requerimientos, atención parcial, proveedores, ingreso a almacén y trazabilidad.</li>
      <li><strong>Producción conectada:</strong> órdenes de trabajo, hojas de costo, materiales, mano de obra y control de avances.</li>
      <li><strong>Despacho y documentos:</strong> guías, entregas parciales, pendientes, facturación y cobranza relacionada.</li>
      <li><strong>Administración:</strong> aprobación de nuevos materiales, maestro de artículos, reportes y control de datos.</li>
      <li><strong>Base de datos central:</strong> lógica migrada al backend para evitar dependencias de almacenamiento local y soportar trabajo multiusuario.</li>
    </ul>
  `,
  tags: ['SDI Maquinarias', 'ERP', 'Automatización', 'Procesos', 'Ventas', 'Compras', 'Producción', 'Almacén', 'Trazabilidad', 'Gestión Operativa'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MAZE BOT — Asistentes IA para sitios web',
  image: mazeBotAvanceImg,
  alt: 'MAZE BOT integrado en una landing page como asistente inteligente para negocios',
  descriptionHTML: `
    <p style="text-align: justify;">
      <strong>MAZE BOT</strong> es un asistente inteligente que puede integrarse en sitios web, portafolios,
      plataformas y proyectos digitales. Su objetivo es ayudar a que una empresa no solo muestre información,
      sino que también responda consultas, oriente visitantes y mejore la atención desde su propia página.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Integración web:</strong> asistente embebido como widget para páginas corporativas o landing pages.</li>
      <li><strong>Atención automatizada:</strong> responde dudas frecuentes y guía al usuario según la información del negocio.</li>
      <li><strong>Modo texto y voz:</strong> permite una comunicación más rápida, natural y cercana.</li>
      <li><strong>Multi-rubro:</strong> aplicable a turismo, financieras, internet, inmobiliarias, academias, tiendas y portafolios.</li>
      <li><strong>Valor comercial:</strong> puede funcionar como servicio adicional para desarrolladores o agencias.</li>
    </ul>
  `,
  tags: ['MAZE BOT', 'Chatbot IA', 'Widget Web', 'Atención al Cliente', 'Voz', 'SaaS', 'Integración Web', 'Multi-rubro', 'Atención Automatizada'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'EMPRESA — Fibertel Huánuco / Fibertel Valle — Landing Page comercial',
  image: fibertelLandingImg,
  alt: 'Landing page comercial de Fibertel Valle para internet de fibra óptica en Huánuco',
  descriptionHTML: `
    <p style="text-align: justify;">
      Landing page desarrollada para <strong>Fibertel Huánuco / Fibertel Valle</strong>, enfocada en presentar
      planes de internet de fibra óptica, cobertura, medios de pago y contacto directo por WhatsApp.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Hero comercial:</strong> mensaje claro para captar hogares interesados en internet de fibra óptica.</li>
      <li><strong>Planes visibles:</strong> estructura preparada para mostrar precios, beneficios y velocidad.</li>
      <li><strong>Conversión por WhatsApp:</strong> botones directos para consulta y contratación.</li>
      <li><strong>Identidad visual:</strong> diseño azul tecnológico alineado a la marca y a su mascota comercial.</li>
      <li><strong>Asistente integrado:</strong> espacio para chatbot de atención que refuerza la experiencia del visitante.</li>
      <li><strong>Diseño responsive:</strong> presentación adaptable para móvil y escritorio.</li>
    </ul>
  `,
  tags: ['Landing Page', 'Fibertel', 'Internet Fibra Óptica', 'WhatsApp', 'Chatbot', 'Diseño Comercial', 'Planes de Internet', 'Captación de Clientes'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MAZE BOT — Landing Page comercial del producto',
  image: mazeBotLandingImg,
  alt: 'Landing page de MAZE BOT para promocionar asistentes inteligentes para negocios',
  descriptionHTML: `
    <p style="text-align: justify;">
      Landing page creada para presentar <strong>MAZE BOT</strong> como producto digital: un asistente inteligente
      que puede agregarse a una página web para atender clientes, responder preguntas y generar confianza sin que
      el negocio tenga que estar disponible todo el tiempo.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Propuesta clara:</strong> comunicación enfocada en negocios que necesitan atención web 24/7.</li>
      <li><strong>Demostración visual:</strong> muestra el widget del asistente y sus estados de atención.</li>
      <li><strong>Flujo comercial:</strong> secciones de beneficios, funcionamiento, empresas, FAQ y contacto.</li>
      <li><strong>WhatsApp como CTA:</strong> contacto directo para contratar o solicitar información.</li>
      <li><strong>Diseño moderno:</strong> estética limpia, tecnológica y alineada al producto.</li>
    </ul>
  `,
  tags: ['Landing Page', 'MAZE BOT', 'Producto Digital', 'Chatbot IA', 'WhatsApp', 'Atención 24/7', 'Demo del Producto', 'Captación Comercial'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'EMPRESA - COOPAC San Francisco — Sistema Integrado de Gestión Judicial (Versión Ampliada)',
  image: './gif/csf3.gif',
  alt: 'Sistema Integrado de Gestión Judicial para COOPAC San Francisco con dashboard, cartera, reportes y módulos avanzados',
  descriptionHTML: `
    <p style="text-align: justify;">
      Versión ampliada del sistema de cartera legal para <strong>COOPAC San Francisco Ltda. 289</strong>,
      incorporando nuevos módulos, dashboards avanzados, gestión de garantías y rendición de gastos judiciales.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Dashboard Matriz de Créditos:</strong> KPIs de mora, cartera atrasada y TPC en tiempo real, con filtros multi-criterio y detalle exportable por tramo.</li>
      <li><strong>Reporte de Abogados:</strong> desglose por analista/agencia (judicial, protesto, sin acciones) con impresión PDF y reasignación de analista.</li>
      <li><strong>Cartera de Créditos:</strong> búsqueda y filtros avanzados sobre +10,000 registros con exportación completa o filtrada a Excel.</li>
      <li><strong>Gestión de Garantías:</strong> registro y actualización de garantías por crédito (tipo, propietario, partida, valor, tasador).</li>
      <li><strong>Liquidación de Cargos GJ:</strong> control de gastos judiciales con rendición en PDF por período, agencia y usuario.</li>
      <li><strong>Historial y Validaciones:</strong> auditoría completa de cambios, flujo de aprobación/rechazo por Gerencia Legal y exportación Excel/PDF.</li>
      <li><strong>Usuarios y Carga de Cartera:</strong> permisos granulares por módulo y ejecución del proceso Oracle por fecha de cierre.</li>
    </ul>
  `,
  tags: ['Sistema Legal', 'Cartera Judicial', 'Dashboard', 'Matriz de Créditos', 'Reporte de Abogados', 'Gastos Judiciales', 'Gestión de Garantías', 'Auditoría', 'Exportación Excel', 'Roles y Permisos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL — MISHEL — Nueva Funcionalidad: Biblioteca Local Inteligente',
  image: './gif/mishel2.gif',
  alt: 'MISHEL con funcionalidad de lectura, análisis y consulta de archivos locales',
  descriptionHTML: `
    <p style="text-align: justify;">
      Como parte de la evolución de <strong>MISHEL</strong>, nueva funcionalidad enfocada en la
      <strong>lectura, análisis y consulta de archivos locales</strong>.
      Ahora MISHEL puede revisar una carpeta local del usuario, identificar documentos como
      Excel, PDF, Word, TXT, entre otros, y responder preguntas basadas en la información encontrada.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Lectura de documentos locales:</strong> identifica y analiza archivos Excel, PDF, Word, TXT y más desde una carpeta del usuario.</li>
      <li><strong>Consulta inteligente:</strong> calcula montos desde hojas de cálculo, busca datos específicos, resume documentos y ubica fragmentos relevantes.</li>
      <li><strong>Registros administrativos:</strong> analiza y consulta información organizada de forma rápida y práctica.</li>
      <li><strong>Memoria local:</strong> la información revisada queda registrada en la memoria de MISHEL para reconocer documentos disponibles y responder con mayor rapidez en futuras consultas.</li>
      <li><strong>Multi-escenario:</strong> adaptable a facturación, gestión documental, análisis legal, registros internos o entornos clínicos.</li>
    </ul>
  `,
  tags: ['Asistente Virtual', 'Biblioteca Local', 'Lectura de Documentos', 'PDF', 'Excel', 'Word', 'IA Aplicada', 'Automatización', 'Consulta de Archivos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

{
  title: 'EMPRESA — Hydromaq Solutions S.A.C. — Adecuación y Ampliación de ERP Industrial',
  image: './gif/hydromaq.gif',
  alt: 'Adecuación y ampliación del ERP para Hydromaq Solutions S.A.C. con módulos de producción, ventas, compras y logística',
  descriptionHTML: `
    <p style="text-align: justify;">
      Adecuación y ampliación del ERP desarrollado inicialmente para <strong>SDI Maquinarias S.A.C.</strong>,
      adaptándolo al flujo operativo de <strong>Hydromaq Solutions S.A.C.</strong>
      El trabajo se enfocó en ajustar la lógica del sistema, incorporar nuevos módulos, mejorar funcionalidades
      existentes y automatizar procesos entre las áreas de producción, ventas, compras, logística, despacho y administración.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Adaptación del flujo operativo:</strong> lógica del sistema reajustada al modelo de trabajo propio de Hydromaq Solutions.</li>
      <li><strong>Nuevos módulos:</strong> incorporación de funcionalidades adicionales según las necesidades específicas de la empresa.</li>
      <li><strong>Automatización de procesos:</strong> reducción de tareas manuales y mejora de la coordinación entre áreas.</li>
      <li><strong>Producción, ventas y compras:</strong> flujos optimizados para mayor trazabilidad y control operativo.</li>
      <li><strong>Logística y despacho:</strong> seguimiento de envíos, guías y estados de entrega integrados al sistema.</li>
      <li><strong>Facturación:</strong> módulo de guías y facturas relacionadas con control de estado (emitido, cobrado) y acceso a documentos.</li>
    </ul>
    <p style="text-align: justify; margin:0;">
      <em>Pendiente:</em> adecuación completa de estilos visuales, colores, marca e identidad corporativa de la empresa.
      El objetivo principal fue optimizar procesos, reducir tareas manuales y mejorar la coordinación entre las diferentes áreas.
    </p>
  `,
  tags: ['ERP Industrial', 'Adaptación de Sistema', 'Automatización', 'Producción', 'Ventas', 'Compras', 'Logística', 'Despacho', 'Facturación', 'Gestión Operativa'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},
{
  title: 'EMPRESA — Explorer Perú — Sistema Integral de Atención Comercial Multiempresa con IA',
  image: './gif/explorerperu.gif',
  alt: 'Sistema multiempresa de atención al cliente, gestión comercial y control de pagos vía WhatsApp con IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      Sistema desarrollado para <strong>Explorer Perú</strong> que centraliza la atención al cliente,
      gestión comercial y control de pagos desde un solo número de <strong>WhatsApp</strong>.
      La plataforma permite operar múltiples unidades de negocio de forma independiente dentro de un mismo sistema,
      manteniendo separados clientes, conversaciones, respuestas automáticas y métricas, sin mezclar información.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Multi-empresa:</strong> cada unidad de negocio opera de forma independiente con sus propios clientes, conversaciones y métricas.</li>
      <li><strong>Respuestas automáticas:</strong> configuración de respuestas por empresa con prioridades y estados activo/inactivo.</li>
      <li><strong>Control y confirmación de pagos:</strong> flujo de validación de pagos con notificación automática al cliente una vez procesado.</li>
      <li><strong>Dashboards en tiempo real:</strong> KPIs y métricas por empresa actualizados en tiempo real.</li>
      <li><strong>Automatización de notificaciones:</strong> el cliente es informado automáticamente cuando su pago ha sido validado o procesado por el responsable.</li>
      <li><strong>IA Conversacional:</strong> integración de inteligencia artificial para ofrecer atención más fluida, contextual y orientada al cierre comercial.</li>
    </ul>
  `,
  tags: ['Atención Comercial', 'Multiempresa', 'WhatsApp', 'Inteligencia Artificial', 'Gestión Comercial', 'Control de Pagos', 'Respuestas Automáticas', 'Dashboard', 'Tiempo Real'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},
  {
  title: 'PROYECTO PERSONAL — MISHEL — Nueva Funcionalidad: Aprendizaje de Acciones',
  image: './gif/mishel1.gif',
  alt: 'MISHEL con funcionalidad de aprendizaje y repetición de flujos de trabajo del usuario',
  descriptionHTML: `
    <p style="text-align: justify;">
      Como parte de la evolución de <strong>MISHEL</strong>, nueva funcionalidad enfocada en el
      <strong>aprendizaje de acciones</strong>. MISHEL ya no solo puede conversar, interpretar instrucciones
      y ejecutar tareas dentro de la computadora. Ahora también puede <strong>aprender procesos realizados
      por el usuario</strong>, guardarlos como flujos reutilizables y ejecutarlos nuevamente cuando se le solicite.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Aprendizaje de flujos:</strong> MISHEL observa y registra una acción o flujo de trabajo realizado por el usuario una sola vez.</li>
      <li><strong>Reutilización inteligente:</strong> el flujo aprendido puede ejecutarse nuevamente cuando se solicite, de forma más práctica y autónoma.</li>
      <li><strong>Adaptación progresiva:</strong> el asistente se adapta poco a poco a la forma de trabajo del usuario.</li>
      <li><strong>Experiencia personalizada:</strong> acerca a MISHEL a una experiencia más autónoma, personalizada y funcional.</li>
    </ul>
  `,
  tags: ['Asistente Virtual', 'Aprendizaje de Acciones', 'Automatización', 'Avatar 3D', 'Inteligencia Artificial', 'Voz', 'Memoria de Acciones', 'Windows'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},


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
  tags: ['ERP', 'Automatización', 'Producción', 'Logística', 'Ventas', 'Compras', 'Contabilidad', 'Gestión Operativa', 'Flujos Integrados'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['ISP', 'Gestión de Red', 'Mapa Interactivo', 'WhatsApp', 'Dashboard', 'Roles y Permisos', 'Tiempo Real', 'Clientes', 'Infraestructura de Red'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Inteligencia Artificial', 'Personalización Visual', 'IA Aplicada', 'Diseño', 'Generación Visual', 'Experiencia de Usuario', 'Proyecto Personal'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Asistente Virtual', 'Avatar 3D', 'Inteligencia Artificial', 'Voz', 'Automatización', 'Windows', 'Interacción Natural', 'Control del Sistema'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Experiencia optimizada:</strong> navegación rápida, estructura moderna y adaptación a distintos dispositivos.</li>
    </ul>
  `,
  tags: ['Landing Page', 'Educación', 'Certificaciones', 'Código QR', 'Diseño Corporativo', 'Captación de Leads', 'UI/UX', 'Promociones', 'Experiencia Móvil'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['ERP', 'Gestión Industrial', 'Logística', 'Inventario', 'Kardex', 'Ventas', 'Producción', 'Facturación', 'Panel Operario', 'Roles y Permisos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Mensajería en Tiempo Real', 'Inteligencia Artificial', 'Chat Empresarial', 'Catálogo de Productos', 'Estados', 'Privacidad', 'Contactos', 'Perfiles de Negocio', 'Asistente IA'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Sistema Web', 'Noticias', 'Gestión de Contenido', 'CMS', 'Panel Administrativo', 'Streaming', 'Programación TV', 'Usuarios y Permisos', 'Medio Digital'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Sistema Legal', 'Cartera Judicial', 'Búsquedas Avanzadas', 'Roles y Permisos', 'Auditoría', 'Reportes', 'Excel', 'Optimización', 'Seguimiento Legal'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['ERP', 'Manufactura', 'Inventario', 'Kardex', 'Compras', 'Producción', 'Facturación Electrónica', 'Roles y Permisos', 'Dashboard', 'Gestión Empresarial'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Inteligencia Artificial', 'Gestión Documentaria', 'OCR', 'Automatización', 'Control de Contratistas', 'Seguridad Empresarial', 'Sistema de Acreditación', 'Control de Ingresos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Agenda Inteligente', 'Automatización', 'WhatsApp', 'Email', 'Chatbot', 'Programación de Tareas', 'Recordatorios', 'Disponibilidad', 'Organización Personal'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Asistente IA', 'Automatización', 'Lenguaje Natural', 'Windows', 'Chatbot', 'Seguridad', 'Control del Sistema', 'Ejecución de Acciones', 'Asistente Local'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Sistema Legal', 'Cartera Judicial', 'Búsquedas Avanzadas', 'Auditoría', 'Reportes', 'Roles y Permisos', 'Dashboard', 'Integración de Sistemas', 'Seguimiento de Casos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Ventas', 'Catálogo', 'Cotizaciones', 'WhatsApp', 'Facturación Electrónica', 'Nubefact', 'RENIEC', 'SUNAT', 'Dashboard', 'Chatbot'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['Sistema Clínico', 'Gestión de Pacientes', 'Historias Clínicas', 'Citas Médicas', 'Caja y Cobranza', 'Facturación Electrónica', 'Inventario', 'Reportes y Dashboard', 'Atención Médica'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
  tags: ['IA', 'Chatbot', 'Asistentes Virtuales', 'Atención al Cliente', 'Automatización', 'Plataforma Web', 'Multi-negocio', 'Entrenamiento por Empresa'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      y está preparado para integrarse con el ecosistema digital actual de la marca.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
     
    </ul>
  `,
  tags: ['Landing Page', 'Educación', 'Certificados con QR', 'Marketing Educativo', 'Captación de Leads', 'Cursos y Diplomados', 'Diseño Institucional', 'Promociones'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'PROYECTO PERSONAL - MAZE DB — Chat con tu Base de Datos usando IA',
  image: './gif/ia_bd.gif',
  alt: 'Sistema web para consultar y gestionar bases de datos con IA',
  descriptionHTML: `
    <p style="text-align: justify;">
      MAZE DB es una herramienta web que permite <strong>conectarse a bases de datos relacionales</strong> y 
      consultarlas usando <strong>lenguaje natural</strong>. Nació de la necesidad de explorar y modificar datos 
      de proyectos como MAZE TOUR sin depender siempre de herramientas técnicas externas ni recordar consultas complejas.
    </p>
    <p style="text-align: justify;">
      El sistema integra <strong>IA (Gemini)</strong> para transformar lo que escribes en español (o inglés) 
      en <strong>consultas estructuradas</strong>, mostrando tanto la consulta generada como los resultados en una 
      interfaz clara y visual. Ideal para desarrolladores, analistas y equipos que quieren trabajar sus datos 
      de forma más rápida, intuitiva y controlada.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Conexión dinámica:</strong> Configuración de host, puerto, base de datos, usuario y contraseña directamente desde la interfaz.</li>
      <li><strong>Chat con la base de datos:</strong> Escribe preguntas como <em>“qué tablas tengo”</em> o 
          <em>“muéstrame los hoteles con más reservas”</em> y la IA genera la <strong>consulta correspondiente</strong>.</li>
      <li><strong>Consultas avanzadas:</strong> Soporta <strong>JOINs</strong>, filtros, agregaciones, subconsultas y 
          lógica compleja para análisis de datos reales.</li>
      <li><strong>Modo lectura y modo escritura:</strong> Permite trabajar solo con <strong>SELECT</strong> 
          o habilitar de forma controlada <strong>INSERT / UPDATE / DELETE</strong>, con validaciones de seguridad.</li>
      <li><strong>Consulta visible y copiable:</strong> Cada respuesta muestra la <strong>consulta generada</strong> 
          y un botón para copiarla y reutilizarla en otros entornos o herramientas de datos.</li>
      <li><strong>Detección inteligente de tablas:</strong> La IA puede entender peticiones en español aunque las 
          tablas y columnas estén en inglés, apoyándose en la estructura interna de la base de datos.</li>
      <li><strong>Integración inteligente:</strong> interfaz tipo chat conectada con <strong>Gemini</strong> para interpretar preguntas y generar consultas sobre los datos.</li>
    </ul>
  `,
  tags: ['Inteligencia Artificial', 'Gemini', 'Consulta de Datos', 'Lenguaje Natural', 'Bases de Datos', 'Productividad', 'Herramienta Interna', 'Análisis de Datos', 'Consultas Inteligentes'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li>Arquitectura centralizada con base de datos relacional, roles y validaciones para una operación segura.</li>
      <li>Autenticación JWT, middleware de roles y diseño UI/UX adaptado al rubro financiero.</li>
    </ul>
  `,
  tags: ['Sistema Interno', 'Finanzas', 'Gestión de Créditos', 'Cronogramas de Pago', 'Cobranzas', 'Clientes', 'Portal del Cliente', 'Reportes', 'Roles y Permisos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Procesamiento optimizado:</strong> compresión ejecutada en servidor para reducir el peso de los archivos, 
          pensado para integrarse en otros proyectos o paneles administrativos.</li>
    </ul>
  `,
  tags: ['Optimización de Imágenes', 'Compresión', 'Reducción de Peso', 'Vista Previa', 'Procesamiento por Lotes', 'Rendimiento Web', 'Productividad', 'Herramienta Online'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Estructura escalable:</strong> preparada para crecer en número de historias, tráilers y usuarios sin perder organización.</li>
    </ul>
  `,
  tags: ['Historias Cortas', 'Tráilers', 'Películas', 'Storytelling', 'Biblioteca Digital', 'Recomendaciones', 'Lectura Online', 'Contenido Multimedia', 'Experiencia Móvil'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Arquitectura escalable:</strong> adaptada al flujo operativo de la empresa y preparada para crecer junto con el volumen de inventario y pedidos.</li>
    </ul>
  `,
  tags: ['Dashboard', 'Inventarios', 'Cotizaciones', 'Logística', 'B2B', 'Repuestos', 'Pedidos', 'Control de Stock', 'Reportes'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Experiencia ágil:</strong> navegación rápida, validación de tickets y gestión de sorteos desde una sola plataforma.</li>
      <li><strong>Pagos integrados:</strong> Participación mediante <strong>Yape</strong> y <strong>Plin</strong>.</li>
      <li><strong>Validación instantánea:</strong> Códigos únicos para verificar tickets en tiempo real.</li>
      <li><strong>Transparencia total:</strong> Sorteos transmitidos en <strong>YouTube Live</strong>.</li>
      <li><strong>Gestión completa:</strong> Dashboard administrativo para sorteos, pagos y ganadores.</li>
    </ul>
  `,
  tags: ['Sorteos Digitales', 'Yape', 'Plin', 'Twilio API', 'YouTube Live', 'Dashboard', 'Validación de Tickets', 'Pagos Digitales', 'Gestión de Ganadores'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
  ],
},

  {
  title: 'Empresa Boliviana - Sueños Tranquilos - Guía Digital para el Descanso Infantil',
  image: './gif/sueno.gif',
  alt: 'Guía paso a paso para mejorar el descanso nocturno infantil',
  descriptionHTML: `
    <p style="text-align: justify;">
      "Sueños Tranquilos" es una plataforma digital diseñada y desarrollada para una empresa de Bolivia, que tiene como objetivo ayudar a los padres a establecer rutinas nocturnas efectivas y saludables para sus bebés. El sistema prioriza una experiencia rápida y fluida, y se integró con herramientas de marketing digital como CAPI para el seguimiento de conversiones.
    </p>
    <ul style="text-align: justify; padding-left: 1.2rem; margin:.3rem 0 .8rem; line-height:1.5;">
      <li><strong>Plataforma interactiva:</strong> navegación simple, contenido guiado y tiempos de carga rápidos.</li>
      <li><strong>Diseño responsivo:</strong> adaptación a diferentes tamaños de pantalla para brindar una experiencia agradable en móviles, tabletas y escritorios.</li>
      <li><strong>Eventos de marketing:</strong> Integración con Facebook CAPI, permitiendo el seguimiento preciso de conversiones y la mejora continua de las campañas publicitarias.</li>
      <li><strong>Botón de WhatsApp flotante:</strong> Implementación de un botón flotante para facilitar la comunicación directa con los usuarios interesados en la guía, creando una experiencia más interactiva y personalizada.</li>
      <li><strong>Acceso digital inmediato:</strong> Los usuarios pueden comprar y descargar la guía digital al instante, mejorando la experiencia de compra sin esperas innecesarias.</li>
    
  `,
  tags: ['Guía Digital', 'Descanso Infantil', 'Rutinas Nocturnas', 'Facebook CAPI', 'WhatsApp', 'Generación de Leads', 'Landing Page', 'Marketing Digital', 'Experiencia Móvil'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
      <li><strong>Interfaz interactiva:</strong> experiencia visual diseñada para explorar información científica de forma clara y dinámica.</li>
      <li><strong>Rendimiento:</strong> navegación y carga optimizadas para una experiencia fluida durante la demostración.</li>
      <li><strong>Interactividad:</strong> visualizaciones, navegación y componentes dinámicos para comunicar los datos de forma atractiva.</li>
      <li><strong>API de Gemini:</strong> Usada para integrar el procesamiento de datos y análisis de información, aportando potencia de procesamiento en tiempo real.</li>
      <li><strong>APIs de Terra MORDIS:</strong> Integración con los datos satelitales del satélite Terra para proporcionar información precisa sobre el medio ambiente y la relación con las comunidades humanas.</li>
      <li><strong>Google Forms:</strong> Utilizado para la recopilación de información y la gestión de respuestas durante el proceso de la hackatón.</li>
      <li><strong>Chatbot:</strong> Un sistema inteligente integrado en el proyecto para responder preguntas relacionadas con el reto de la NASA y proporcionar una experiencia interactiva.</li>
    </ul>
  `,
  tags: ['Hackatón', 'NASA', 'Interactividad', 'Datos Satelitales', 'Ciencia', 'Chatbot', 'Colaboración Interdisciplinaria', 'Gemini API', 'Terra MODIS', 'Visualización de Datos'],
  links: [
    { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' }, // Agrega el enlace al video de demostración o presentación
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
    tags: ['Educación', 'Gestión de Cursos', 'Certificados QR', 'Google Drive', 'IA Generativa', 'Portal del Estudiante', 'Catálogo Académico', 'Roles y Permisos', 'Certificación Digital'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Certificación Inteligente', 'Certificados PDF', 'Código QR', 'Google Drive', 'IA Generativa', 'Plantillas', 'Temarios Automáticos', 'Validación Pública', 'Automatización'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Gestión de Cursos', 'Certificados QR', 'Google Drive', 'Catálogo Académico', 'Inscripciones', 'Pagos', 'Portal del Estudiante', 'Roles y Permisos', 'Certificación Digital'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Sitio Corporativo', 'Construcción', 'Servicios', 'Proyectos', 'Certificaciones', 'SEO', 'Contacto Comercial', 'Captación de Clientes'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Logística', 'Gestión de Envíos', 'Seguimiento', 'Tarifas', 'Pagos', 'Facturación Electrónica', 'Nubefact', 'APISNET', 'Guías', 'Sucursales'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Cotizaciones IA', 'Comparador de Proveedores', 'OCR', 'PDF', 'Excel', 'Comparación de Precios', 'Historial de Cotizaciones', 'Compras', 'Análisis de Proveedores'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Asistente de Desarrollo', 'Multi-IA', 'OpenAI', 'Gemini', 'Claude', 'Análisis de Proyectos', 'Detección de Errores', 'Documentación', 'Sugerencias de Mejora'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    id: 5,
    title: 'ACTUALIZACIÓN PORTAFOLIO — Rediseño y mejora de experiencia',
    image: './gif/portafolio2.gif',
    alt: 'Portafolio Personal',
    descriptionHTML: `
      <p style="text-align: justify; margin-bottom: .5rem;">
        Portafolio personal con secciones de inicio, tecnologías, formación, experiencia, proyectos y contacto.
        Rediseñado manteniendo el estilo original, pero con una navegación más fluida y una estructura más ordenada para presentar los proyectos.
      </p>
      <ul style="text-align: justify; padding-left: 1.2rem; margin: .2rem 0 .8rem; line-height: 1.5;">
        <li>SPA con anclas (#) y scroll suave.</li>
        <li>Proyectos con buscador y paginación.</li>
        <li>Formulario de contacto (opcional) con Google Apps Script.</li>
      </ul>
    `,
    tags: ['Portafolio Personal', 'Rediseño Web', 'Experiencia de Usuario', 'Buscador de Proyectos', 'Paginación', 'Navegación Fluida', 'Formulario de Contacto', 'Google Apps Script'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['E-Commerce', 'Visualizador 3D', 'Catálogo', 'Carrito', 'Checkout', 'Panel Administrativo', 'OAuth Google', 'Modelos 3D', 'Reportes'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Turismo', 'Lugares Turísticos', 'Hoteles', 'Restaurantes', 'Filtros Avanzados', 'Chatbot IA', 'Favoritos', 'OAuth Google', 'Guía Digital'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Cursos Virtuales', 'Certificados PDF', 'Código QR', 'Google Drive', 'Gestión de Estudiantes', 'Catálogo Académico', 'Certificación Digital', 'Validación de Certificados'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['IA Generativa', 'Certificados PDF', 'Código QR', 'Google Drive', 'Temarios Personalizados', 'Firma Digital', 'Validación Pública', 'Automatización'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Gestión Inmobiliaria', 'Inmuebles', 'Galería de Imágenes', 'Búsquedas Avanzadas', 'Roles y Permisos', 'Dashboard', 'Diseño Responsive', 'Administración de Propiedades'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Reciclaje', 'Sistema de Puntos', 'Chat en Tiempo Real', 'Roles', 'Perfiles', 'Canje de Puntos', 'Gestión de Residuos', 'Innovación Social'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Gestión de Tareas', 'Calendario', 'Progreso Diario', 'Asistente IA', 'Autenticación', 'Organización Personal', 'Prioridades', 'Productividad'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Consulta de Socios', 'Cuentas y Saldos', 'Movimientos', 'Historial Financiero', 'Acceso Seguro', 'Sincronización', 'Consulta en Tiempo Real', 'Servicios Financieros'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Cobranza', 'Zonas de Cobranza', 'Socios', 'Movimientos', 'Resumen Diario', 'Resumen Mensual', 'Experiencia Móvil', 'Recaudación', 'Gestión Financiera'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Gestión Financiera', 'Consulta de Socios', 'Cobranza', 'Movimientos en Tiempo Real', 'Registro de Pagos', 'Cuentas y Saldos', 'Sincronización', 'Apps Integradas'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Gestión de Biblioteca', 'Libros', 'Búsqueda en Tiempo Real', 'Validaciones', 'Control de Errores', 'Catálogo', 'Gestión de Registros'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Chat en Tiempo Real', 'Chat Global', 'Chat Privado', 'Notificaciones', 'Modo Oscuro', 'Autenticación', 'Mensajería', 'Usuarios'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Portafolio Personal', 'Proyectos', 'Experiencia', 'Formación', 'Habilidades', 'Contacto', 'Diseño Web'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Pokémon', 'Buscador', 'Filtros por Tipo', 'API Pública', 'Catálogo', 'Consulta en Tiempo Real'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Restaurante', 'Landing Page', 'Menú Digital', 'Galería', 'Contacto', 'Diseño Responsive', 'Experiencia Móvil'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['E-Commerce', 'Tienda de Ropa', 'Catálogo', 'Carrito', 'Pedidos', 'Retail', 'Experiencia de Compra'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
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
    tags: ['Presupuesto Mensual', 'Suscripciones', 'Finanzas Personales', 'Control de Gastos', 'Planificación', 'Seguimiento Mensual'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'Catálogo de Películas',
    image: './gif/peliculas.gif',
    alt: 'Catálogo de Películas',
    descriptionHTML: `
      <p style="text-align: justify;">
        Catálogo de películas con creación, edición, eliminación y consulta de registros.
      </p>
    `,
    tags: ['Catálogo de Películas', 'Gestión de Películas', 'Altas y Edición', 'Búsqueda', 'Catálogo', 'Administración de Contenido'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  },

  {
    title: 'Buscador de GIFs',
    image: './gif/gif.gif',
    alt: 'App Buscador de GIFs',
    descriptionHTML: `
      <p style="text-align: justify;">
        Búsqueda y visualización de GIFs en tiempo real mediante una API externa.
      </p>
    `,
    tags: ['Buscador de GIFs', 'GIFs', 'Búsqueda en Tiempo Real', 'API de GIFs', 'Galería', 'Contenido Multimedia'],
    links: [
      { type: 'demo', href: 'https://www.linkedin.com/in/%C3%A1lvaro-rafael-quiroz-jaimes-168a081a8/', label: 'Ver Proyecto' },
    ],
  }
];

const PAGE_SIZE = 3

export default function Projects() {
  const [page, setPage] = useState(1)
  const [expanded, setExpanded] = useState({})
  const [openProject, setOpenProject] = useState(null)
  const [zoom, setZoom] = useState(1)

  const totalPages = Math.ceil(projects.length / PAGE_SIZE)

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return projects.slice(start, start + PAGE_SIZE)
  }, [page])

  const toggle = (globalIndex) => {
    setExpanded((prev) => ({ ...prev, [globalIndex]: !prev[globalIndex] }))
  }

  const openModal = (project) => {
    setOpenProject(project)
    setZoom(1)
  }

  const closeModal = () => {
    setOpenProject(null)
    setZoom(1)
  }

  const zoomIn = () => setZoom((value) => Math.min(2.5, Number((value + 0.25).toFixed(2))))
  const zoomOut = () => setZoom((value) => Math.max(1, Number((value - 0.25).toFixed(2))))
  const resetZoom = () => setZoom(1)
  const toggleZoom = () => setZoom((value) => (value === 1 ? 1.75 : 1))

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = erpGeneralImg
  }

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') closeModal()
      if (!openProject) return
      if (event.key === '+' || event.key === '=') zoomIn()
      if (event.key === '-') zoomOut()
      if (event.key === '0') resetZoom()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = openProject ? 'hidden' : ''

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openProject])

  const pages = useMemo(() => {
    const output = []
    const delta = 2
    const left = Math.max(1, page - delta)
    const right = Math.min(totalPages, page + delta)

    if (left > 1) {
      output.push(1)
      if (left > 2) output.push('left-dots')
    }

    for (let number = left; number <= right; number += 1) output.push(number)

    if (right < totalPages) {
      if (right < totalPages - 1) output.push('right-dots')
      output.push(totalPages)
    }

    return output
  }, [page, totalPages])

  const changePage = (nextPage) => {
    setPage(Math.max(1, Math.min(totalPages, nextPage)))
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="proyectos" className={styles.section}>
      <div className="container">
        <header className={styles.heading} data-reveal>
          <h2>Proyectos</h2>
          <span className={styles.titleLine} aria-hidden="true" />
          <p>Una selección de soluciones desarrolladas para empresas, instituciones y nuevos proyectos digitales.</p>
        </header>

        <div className={styles.pagination} aria-label="Paginación de proyectos">
          <button type="button" onClick={() => changePage(page - 1)} disabled={page === 1}>
            ← Anterior
          </button>

          <div className={styles.pageNumbers}>
            {pages.map((item) =>
              typeof item === 'number' ? (
                <button
                  key={item}
                  type="button"
                  className={item === page ? styles.activePage : ''}
                  onClick={() => changePage(item)}
                  aria-current={item === page ? 'page' : undefined}
                >
                  {item}
                </button>
              ) : (
                <span key={item} className={styles.pageDots}>…</span>
              )
            )}
          </div>

          <button type="button" onClick={() => changePage(page + 1)} disabled={page === totalPages}>
            Siguiente →
          </button>
        </div>

        <div className={styles.grid}>
          {visible.map((project, index) => {
            const globalIndex = (page - 1) * PAGE_SIZE + index
            const isExpanded = !!expanded[globalIndex]

            return (
              <article key={project.title} className={styles.card} data-reveal style={{ transitionDelay: `${index * 0.06}s` }}>
                <button
                  type="button"
                  className={styles.imageButton}
                  onClick={() => openModal(project)}
                  aria-label={`Ver imagen ampliada de ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className={styles.cardImage}
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <span className={styles.imageHover}>
                    <span className={styles.zoomIcon}>⌕</span>
                    Ver completo
                  </span>
                </button>

                <div className={styles.cardBody}>
                  <h3>{project.title}</h3>

                  <div
                    className={`${styles.description} ${isExpanded ? styles.expanded : styles.collapsed}`}
                    dangerouslySetInnerHTML={{ __html: project.descriptionHTML }}
                  />

                  <button
                    type="button"
                    className={styles.moreButton}
                    onClick={() => toggle(globalIndex)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                  </button>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectButton}
                      >
                        <span aria-hidden="true">↗</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className={styles.pageInfo}>Página {page} de {totalPages} · {projects.length} proyectos</p>
      </div>

      {openProject && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label={openProject.title} onClick={closeModal}>
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span>Vista del proyecto</span>
                <strong>{openProject.title}</strong>
              </div>

              <button type="button" className={styles.closeButton} onClick={closeModal} aria-label="Cerrar">×</button>
            </div>

            <div className={styles.viewer}>
              <div className={styles.zoomBar}>
                <button type="button" onClick={zoomOut} disabled={zoom <= 1} aria-label="Alejar imagen">−</button>
                <button type="button" className={styles.zoomValue} onClick={resetZoom} title="Volver al 100%">
                  {Math.round(zoom * 100)}%
                </button>
                <button type="button" onClick={zoomIn} disabled={zoom >= 2.5} aria-label="Acercar imagen">+</button>
              </div>

              <div className={styles.imageViewport}>
                <img
                  src={openProject.image}
                  alt={openProject.alt || openProject.title}
                  className={`${styles.modalImage} ${zoom > 1 ? styles.zoomed : ''}`}
                  style={{ width: `${zoom * 100}%` }}
                  onClick={toggleZoom}
                  onError={handleImageError}
                  title={zoom === 1 ? 'Haz clic para acercar' : 'Haz clic para volver al 100%'}
                />
              </div>

              <div className={styles.viewerHint}>Haz clic sobre la imagen para acercar o usa los controles de zoom.</div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalDescription} dangerouslySetInnerHTML={{ __html: openProject.descriptionHTML }} />

              <div className={styles.tags}>
                {openProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className={styles.links}>
                {openProject.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                    <span aria-hidden="true">↗</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
