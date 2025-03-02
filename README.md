# 🎶 Instrumentos Virtuales - Aplicación Web Interactiva

## 📌 Descripción del Proyecto
Esta es una aplicación web interactiva que permite a los usuarios tocar y grabar música utilizando diversos instrumentos virtuales, seguir canciones predefinidas y visualizar los resultados de sus grabaciones.

## IN PROGRESS ⏳

Los usuarios podrán:
- Interactuar con instrumentos como teclado, guitarra y batería.
- Grabar y reproducir sus interpretaciones.
- Seguir canciones con distintos niveles de dificultad.
- Configurar sus preferencias de sonido e instrumentos.

El **frontend** está desarrollado con **React, HTML, CSS y JavaScript**, mientras que el **backend** está implementado en **Java (sin frameworks)** con persistencia en **archivos JSON o H2 en memoria**.

## 🚀 Tecnologías Utilizadas
### **Frontend:**
- React
- HTML5
- CSS3
- JavaScript

### **Backend:**
- Java (puro, sin frameworks)
- JSON / H2 Database (según configuración)
- Servidor HTTP en Java

### **Herramientas de Desarrollo:**
- **Diseño:** Figma
- **Gestor de Tareas:** Jira
- **Control de Versiones:** Git / GitHub
- **Metodología:** Scrum (Sprints de 1 semana)

## 📂 Estructura del Proyecto

```plaintext
instrumentos-app/
├── backend/                 # Lógica del servidor en Java
│   ├── src/
│   │   ├──main/java/com/f5
│   │   │   ├── controllers/     # Controladores
│   │   │   ├── models/          # Modelos de datos 
│   │   │   ├── services/        # Lógica de negocio
│   │   │   ├── repositories/    # Manejo de persistencia en JSON o H2
│   │   ├──test/java/com/f5
│   ├── target/              # Archivos compilados
│   ├── pom.xml              # Archivo de dependencias Maven
│   ├── .gitignore             
│
├── frontend/                # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes React reutilizables
│   │   ├── pages/           # Páginas principales 
│   │   ├── services/        # Conexión con el backend
│   │   ├── App.js           # Componente principal
│   │   ├── AppRouter.js     # Definición de rutas con React Router
│   ├── public/              # Recursos estáticos
│   ├── package.json         # Dependencias del proyecto
│   ├── index.html
│   ├── vite.config.js       
│   ├── node_modules/        # Dependencias de npm 
│   ├── eslint.config.js
│   ├── .gitignore
│
```

### 1️⃣ Clonar el repositorio:
```bash
git clone https://github.com/emmalanza/instrumentos-app.git
```

## 🔄 Integración Frontend - Backend
El frontend se comunica con el backend a través de llamadas HTTP utilizando **fetch** o **Axios**.

## 🎯 Funcionalidades Clave
✅ **Interacción con instrumentos** 
✅ **Reproducción y grabación** 
✅ **Seguimiento de canciones** 
✅ **Almacenamiento de configuraciones** 

## 👥 Autores

- **Marta** - [GitHub](https://github.com/MartaBernardoZamora) 
- **Ana Belén** - [GitHub](https://github.com/AnaBHernandez) 
- **Celia** - [GitHub](https://github.com/celiagarridoherrera)
- **Patricia** - [GitHub](https://github.com/PFBregon)
- **Alberto** - [GitHub](https://github.com/berto9675)
- **Emma** - [GitHub](https://github.com/emmalanza)

## 📜 Licencia
Este proyecto está bajo la **Licencia MIT**.

## 📂 Documentación
- [Figma](https://www.figma.com/design/ALbWWPaN0ZJjH84Z3uloeS/InstrumentosApp?node-id=0-1&t=OfQCWYtqUn0J6e9J-1)
- [Jira](https://emmalanza.atlassian.net/jira/software/projects/EQ2IM/boards/4/backlog?atlOrigin=eyJwIjoiaiIsImkiOiIyNjBkYzJjOGFhYWY0NzllOTljMTQxZGZhMTE2ODIzNiJ9&cloudId=07b08350-4067-4a33-8587-933e2f18950c&epics=visible)
- [Confluence](https://emmalanza.atlassian.net/wiki/spaces/EQ2IM/pages/196609/Estrategia+de+Ramas+en+Git?atlOrigin=eyJpIjoiZTk4MGY3Y2VjYWI1NGYyYjg1ZTRjYWU3ZTE3Y2Y3MTUiLCJwIjoiaiJ9)
- [Diagrama de clases](https://drive.google.com/file/d/1y7p86_KyZyZbVvd4TKHxRs5PaO8v5l1Y/view?usp=sharing)
- [Userflow](https://drive.google.com/file/d/19_nNBklOnWrQqxUZcisW3BeR6jQziKml/view?usp=sharing)
- [Canva](https://www.canva.com/design/DAGger76quo/iLLJUtngD6I3RpJggyMXSg/edit?utm_content=DAGger76quo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)



## 🤝 Contribuciones
Si quieres contribuir, sigue estos pasos:
1. Haz un **fork** del repositorio.
2. Crea una nueva rama (**git checkout -b feature-nueva-funcionalidad**).
3. Haz **commit** de tus cambios (**git commit -m 'Añadir nueva funcionalidad'**).
4. Sube los cambios a tu fork (**git push origin feature-nueva-funcionalidad**).
5. Abre un **Pull Request**.

