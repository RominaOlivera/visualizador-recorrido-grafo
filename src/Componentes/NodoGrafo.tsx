import React, { Dispatch } from 'react';
import { Nodo, Arista } from '../Interfaces/Interfaces';

interface Props {
  nodo: Nodo;
  onClick: (nodoId: string) => void;
  isNodoVisitado: (nodoId: string) => boolean;
  isNodoActual: boolean;
  isNodoInicial: boolean;
  Adyacente: Arista[] | null;
  nodoInicial: string;
  AdyacenteInicial: Arista[] | null;
  setAdyacenteInicial: Dispatch<Arista[] | null>
  setCostoParcial: Dispatch<number>
  setCostoTotal: Dispatch<number>
  costoTotal: number
}

const NodoGrafo: React.FC<Props> = ({ nodo, onClick, isNodoVisitado, isNodoActual, isNodoInicial, Adyacente, nodoInicial, AdyacenteInicial, setAdyacenteInicial, setCostoParcial, costoTotal, setCostoTotal }) => {

  const handleNodoClick = () => {
    if (nodoInicial === "") {
      onClick(nodo.id);
    }
    if (Array.isArray(Adyacente) && Array.isArray(AdyacenteInicial)) {
      let costoNovisitados
      let adyacenteIniciales = AdyacenteInicial.find((e => e.nodoLLegada === nodo.id))
      if (adyacenteIniciales) {
        if (!adyacenteIniciales.visitado) {
          adyacenteIniciales.visitado = true
          setAdyacenteInicial([...AdyacenteInicial])
        }

      } else {
        let noVisitados = AdyacenteInicial.filter(e => e.visitado === false)
        costoNovisitados = noVisitados.reduce((prev, current) => {
          return prev += current.costo
        }, 0)

      }
      if (Adyacente.find(e => e.nodoLLegada === nodo.id)) {
        let aristaActual = Adyacente.find(e => e.nodoLLegada === nodo.id)
        if (typeof aristaActual === "object" && aristaActual.hasOwnProperty("costo")) {
          let costoParcialArista = aristaActual.costo
          setCostoParcial(costoParcialArista)
          let nuevoCostoTotal
          if (costoNovisitados) {
            nuevoCostoTotal = (costoTotal + costoParcialArista) + (costoNovisitados * 2)
          } else {
            nuevoCostoTotal = costoTotal + costoParcialArista
          }
          setCostoTotal(nuevoCostoTotal)
          onClick(nodo.id);
        }
      }

    }
  };


  return (
    <g>
      <circle
        cx={nodo.x}
        cy={nodo.y}
        r={15}
        className={`grafo-nodo ${isNodoVisitado(nodo.id) ? 'nodoVisitado' : ''} ${isNodoActual ? 'activo' : ''
          } ${isNodoInicial ? 'inicial' : ''}`}
        onClick={handleNodoClick}
      />
      <text
        x={nodo.x}
        y={nodo.y}
        textAnchor="middle"
        dominantBaseline="central"
        className={`nodo-label ${isNodoInicial ? 'inicial' : ''}`}
      >
        {nodo.label}
      </text>
    </g>
  );
};

export default NodoGrafo;