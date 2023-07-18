import React from 'react';
import { Arista } from '../Interfaces/Interfaces';

interface Props {
  arista: Arista;
  nodoInicioX: number;
  nodoInicioY: number;
  nodoFinX: number;
  nodoFinY: number;
}

const AristaGrafo: React.FC<Props> = ({ arista, nodoInicioX, nodoInicioY, nodoFinX, nodoFinY }) => {

  return (
    <React.Fragment>
      <line
        className="grafo-arista"
        x1={nodoInicioX}
        y1={nodoInicioY}
        x2={nodoFinX}
        y2={nodoFinY}
      />
      <text
        x={(nodoInicioX + nodoFinX) / 2}
        y={(nodoInicioY + nodoFinY) / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="arista-label"
        dy="-0.7em"
        dx="-0.8em"
      >
        {arista.costo}
      </text>
    </React.Fragment>
  );
};

export default AristaGrafo;