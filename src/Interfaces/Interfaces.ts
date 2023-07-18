export interface Nodo {
    id: string;
    label: string;
    x: number;
    y: number;
    nodoVisitado: boolean;
    activo: boolean;
    inicial: boolean;
  }

 export interface Arista {
    nodoActual: string;
    nodoLLegada: string;
    costo: number;
    visitado: boolean;
  }