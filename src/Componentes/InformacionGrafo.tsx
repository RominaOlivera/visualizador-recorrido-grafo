import React from 'react';

interface Props {
  nodoInicial: string;
  nodoActual: string;
  nodosVisitados: string[];
  costoTotal: number;
  costoParcial:number
}

const InformacionGrafo: React.FC<Props> = ({ nodoInicial, nodoActual, nodosVisitados, costoTotal, costoParcial }) => {
  return (
    <div className="grafo-info-contenedor">
      <p className="grafo-info grafo-info-inicial">
        <span>
          <svg width="20" height="20" style={{ marginRight: '5px' }}>
            <circle cx="10" cy="10" r="8" fill="white" stroke="rgb(255, 174, 11)" />
          </svg>
        </span>
        Nodo inicial: <span>{nodoInicial}</span>
      </p>
      <p className="grafo-info grafo-info-actual">
        <span>
          <svg width="20" height="20" style={{ marginRight: '5px' }}>
            <circle cx="10" cy="10" r="8" fill="red" />
          </svg>
        </span>
        Nodo actual: <span>{nodoActual}</span>
      </p>
      <p className="grafo-info grafo-info-visitados">
        <span>
          <svg width="20" height="20" style={{ marginRight: '5px' }}>
            <circle cx="10" cy="10" r="8" fill="rgb(57, 211, 57)" />
          </svg>
        </span>
        Nodos visitados: <span>{nodosVisitados.join(', ')}</span>
      </p>
      <p className="grafo-info grafo-info-parcial">Costo parcial: {costoParcial}</p>
      <p className="grafo-info">Costo total: {costoTotal}</p>
    </div>
  );
};

export default InformacionGrafo;