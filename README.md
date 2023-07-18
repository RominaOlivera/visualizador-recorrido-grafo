
# Visualizador de Recorrido de Grafo

Elige tu ruta: este visualizador gráfico te permite tomar decisiones informadas mientras navegas por el grafo. Sigue el recorrido binario en tiempo real, selecciona los nodos adyacentes y observa cómo se construye la red paso a paso. Analiza estructuras complejas y optimiza tus análisis de redes con esta herramienta interactiva y fácil de usar.

## Instalación

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema.

1. Clona este repositorio en tu computadora:
   git clone https://github.com/RominaOlivera/visualizador-grafos.git

2. Navega al directorio del proyecto:
   cd visualizador-grafos

3. Instala las dependencias necesarias:
   npm install

## Uso

1. Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
   npm run start

2. Abre tu navegador y navega a la dirección http://localhost:3000/

3. Interactúa con el grafo seleccionando el nodo inicial y los nodos adyacentes hacia donde quieras recorrer la red. La aplicación mostrará los nodos visitados y el costo que ha tomado en cada recorrido binario.

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: 
    - `Grafo.tsx`: Componente que representa visualmente el grafo y maneja la lógica del recorrido.
    - `NodoGrafo.tsx`: Componente que representa visualmente un nodo en el grafo.
    - `AristaGrafo.tsx`: Componente que representa visualmente una arista en el grafo.
    - `InformacionGrafo.tsx`: Componente que muestra información relevante del recorrido binario.
  - `interfaces/`: 
      -`interfaces.ts` Archivo donde se definen las interfaces utilizadas para definir la estructura de datos en la aplicación.
  - `Styles/`:  Este directorio contiene los estilos del proyecto.
      -`Sryles.scss`: Archivo Sass que contiene los estilos utilizados en la aplicación.
  - `RecorridoGrafos.tsx`: Componente principal que contiene y renderiza el componente `Grafo`.
  - `index.tsx`: Archivo principal de la aplicación que renderiza el componente `RecorridoGrafos`.

## Tecnologías utilizadas

- React.js: Biblioteca JavaScript para construir interfaces de usuario.
- TypeScript: Superset de JavaScript que agrega tipado estático y otras características.
- Sass: Preprocesador de CSS para mejorar el manejo de estilos.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).