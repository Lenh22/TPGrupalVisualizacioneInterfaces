# CovPlus 19

Sitio web informativo sobre COVID-19 desarrollado como Trabajo Práctico grupal para la materia **Visualización e Interfaces**, de la Tecnicatura en Desarrollo Web en la Universidad Nacional de la Matanza.

## 🌐 Demo en línea

**[Ver sitio desplegado](https://lenh22.github.io/TPGrupalVisualizacioneInterfaces/)**

---

## 📋 Descripción

**CovPlus 19** es una página web de una sola página que ofrece información sobre síntomas, prevención y estadísticas del COVID-19. Incluye un **test de autoevaluación** para ayudar a los usuarios a determinar si podrían necesitar realizarse un hisopado según sus síntomas y antecedentes de viaje.

### Funcionalidades principales

- **Síntomas**: Información sobre los síntomas más comunes del COVID-19 (fiebre, tos, dificultad respiratoria).
- **Prevención**: Medidas de prevención recomendadas (lavado de manos, ventilación, distanciamiento social, etc.).
- **Estadísticas**: Visualización de datos generales sobre contagios y vacunación.
- **Noticias**: Enlaces a artículos y fuentes de información actualizada.
- **Test de detección**: Formulario interactivo que evalúa síntomas y antecedentes de viaje para orientar al usuario.

---

## 🛠 Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura del documento |
| CSS3 | Estilos y diseño responsive |
| JavaScript | Interactividad y validación del formulario |
| [Bootstrap](https://getbootstrap.com/) | Framework CSS y componentes |
| [jQuery](https://jquery.com/) | Manipulación DOM y eventos |
| [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) | Carruseles |
| [Font Awesome](https://fontawesome.com/) | Iconos |
| [Linearicons](https://linearicons.com/) | Iconos adicionales |

---

## 📁 Estructura del proyecto

```
TPGrupalVisualizacioneInterfaces/
│
├── index.html                 # Página principal (SPA)
├── README.md                  # Documentación del proyecto
│
└── assets/
    ├── css/                   # Hojas de estilo
    │   ├── bootstrap.min.css
    │   ├── bootsnav.css
    │   ├── font-awesome.min.css
    │   ├── animate.css
    │   ├── style.css          # Estilos principales
    │   ├── responsive.css     # Diseño adaptable
    │   └── ...
    │
    ├── js/                    # Scripts JavaScript
    │   ├── jquery.js
    │   ├── bootstrap.min.js
    │   ├── custom.js          # Lógica general (scroll, carrusel, etc.)
    │   ├── enfermedad-detalle.js  # Lógica del test de COVID
    │   └── ...
    │
    ├── images/                # Imágenes del sitio
    │   ├── logo/
    │   ├── home/
    │   ├── service/
    │   ├── about/
    │   ├── counter/
    │   └── project/
    │
    └── fonts/                 # Fuentes (Font Awesome, Bootstrap)
```

---

## 🚀 Cómo ejecutar el proyecto

Es un proyecto **estático** (HTML, CSS y JavaScript). No requiere instalación de dependencias ni servidor backend.

### Opción 1: Abrir directamente en el navegador

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Lenh22/TPGrupalVisualizacioneInterfaces.git
   ```
2. Navega hasta la carpeta del proyecto:
   ```bash
   cd TPGrupalVisualizacioneInterfaces
   ```
3. Abre `index.html` con tu navegador:
   - Haz doble clic sobre `index.html`, o
   - Arrastra el archivo a una ventana del navegador.

### Opción 2: Usar un servidor local (recomendado)

Algunas funcionalidades pueden verse limitadas con `file://`. Para evitar problemas, usa un servidor local:

**Con Python (si está instalado):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js (si tienes `npx`):**
```bash
npx serve .
```

**Con PHP:**
```bash
php -S localhost:8000
```

Luego abre en el navegador: `http://localhost:8000`

### Opción 3: GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages. El sitio estará disponible en:

`https://<usuario>.github.io/TPGrupalVisualizacioneInterfaces/`

---

## 📄 Secciones del sitio

| Sección | ID | Descripción |
|---------|-----|-------------|
| Home | `#home` | Carrusel de bienvenida con llamados a la acción |
| Síntomas | `#info` | Síntomas generales del COVID-19 |
| Prevención | `#service` | Medidas de prevención recomendadas |
| Estadísticas | `#about` | Datos de contagios y visualización |
| Noticias | `#project` | Enlaces a noticias y fuentes |
| Test | `#test` | Formulario de autoevaluación COVID |

---

## 👥 Integrantes del equipo

- **Lenh22** — [GitHub](https://github.com/Lenh22)
- **González Gustavo** — [GitHub](https://github.com/Gustavo27Gonzalez)
- **Villafañe Nicolás** — [GitHub](https://github.com/VillafaneNicolas)

---

## 📜 Licencia

Todos los derechos reservados © Villafañe, González y Alonso.
