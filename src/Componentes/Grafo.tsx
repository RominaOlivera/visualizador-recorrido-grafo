import React, { useState } from 'react';
import NodoGrafo from './NodoGrafo';
import AristaGrafo from './AristaGrafo';
import InformacionGrafo from './InformacionGrafo';
import { Nodo, Arista } from '../Interfaces/Interfaces';

const Grafo: React.FC = () => {
  const [nodosVisitados, setNodosVisitados] = useState<string[]>([]);
  const [nodoActual, setNodoActual] = useState('');
  const [costoParcial, setCostoParcial] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);
  const [nodoInicial, setNodoInicial] = useState('');
  const [adyacenteActual, setAdyacenteActual] = useState<Arista[] | null>(null)
  const [adyacenteInicial, setAdyacenteInicial] = useState<Arista[] | null>(null)

  const nodos: Nodo[] = [
    { id: 'A', label: 'A', x: 140, y: 60, nodoVisitado: false, activo: false, inicial: false },
    { id: 'B', label: 'B', x: 130, y: 130, nodoVisitado: false, activo: false, inicial: false },
    { id: 'C', label: 'C', x: 250, y: 90, nodoVisitado: false, activo: false, inicial: false },
    { id: 'D', label: 'D', x: 250, y: 200, nodoVisitado: false, activo: false, inicial: false },
    { id: 'E', label: 'E', x: 150, y: 230, nodoVisitado: false, activo: false, inicial: false },
  ];

  const aristas: Arista[] = [
    { nodoActual: 'A', nodoLLegada: 'B', costo: 13, visitado: false },
    { nodoActual: 'A', nodoLLegada: 'C', costo: 11, visitado: false },
    { nodoActual: 'B', nodoLLegada: 'A', costo: 13, visitado: false },
    { nodoActual: 'B', nodoLLegada: 'C', costo: 9, visitado: false },
    { nodoActual: 'C', nodoLLegada: 'B', costo: 9, visitado: false },
    { nodoActual: 'C', nodoLLegada: 'A', costo: 11, visitado: false },
    { nodoActual: 'C', nodoLLegada: 'E', costo: 4, visitado: false },
    { nodoActual: 'E', nodoLLegada: 'C', costo: 4, visitado: false },
    { nodoActual: 'C', nodoLLegada: 'D', costo: 20, visitado: false },
    { nodoActual: 'D', nodoLLegada: 'C', costo: 20, visitado: false },
    { nodoActual: 'D', nodoLLegada: 'E', costo: 15, visitado: false },
    { nodoActual: 'E', nodoLLegada: 'D', costo: 15, visitado: false },
  ];


  const handleNodoClick = (nodoId: string) => {
    setNodosVisitados((prevVisitados) => [...prevVisitados, nodoId]);
    setNodoActual(nodoId);

    if (nodoInicial === '') {
      setNodoInicial(nodoId);
      const adyacentes = aristas.filter(arista => arista.nodoActual === nodoId)
      setAdyacenteInicial(adyacentes)
    }
    const adyacentes = aristas.filter(arista => arista.nodoActual === nodoId)
    setAdyacenteActual(adyacentes)
    nodos.forEach((nodo) => (nodo.nodoVisitado = false));
    aristas.forEach((arista) => (arista.visitado = false));

    
  };

  const isNodoVisitado = (nodoId: string): boolean => {
    return nodosVisitados.includes(nodoId);
  };

  return (
    <div className="grafo-wrapper">
      <div className="grafo-contenedor">
        <svg className="grafo-svg" viewBox="0 0 330 330">
          {aristas.map((arista, index) => {
            const nodoInicio = nodos.find((nodo) => nodo.id === arista.nodoActual);
            const nodoFin = nodos.find((nodo) => nodo.id === arista.nodoLLegada);
            return (
              <AristaGrafo
                key={index}
                arista={arista}
                nodoInicioX={nodoInicio?.x || 0}
                nodoInicioY={nodoInicio?.y || 0}
                nodoFinX={nodoFin?.x || 0}
                nodoFinY={nodoFin?.y || 0}
              />
            );
          })}
          {nodos.map((nodo) => (
            <NodoGrafo
              key={nodo.id}
              nodo={nodo}
              onClick={handleNodoClick}
              isNodoVisitado={isNodoVisitado}
              isNodoActual={nodo.id === nodoActual}
              isNodoInicial={nodo.id === nodoInicial}
              nodoInicial={nodoInicial}
              Adyacente={adyacenteActual}
              AdyacenteInicial={adyacenteInicial}
              setAdyacenteInicial={setAdyacenteInicial}
              setCostoParcial={setCostoParcial}
              costoTotal={costoTotal}
              setCostoTotal={setCostoTotal}

            />
          ))}
        </svg>
      </div>
      <InformacionGrafo
        nodoInicial={nodoInicial}
        nodoActual={nodoActual}
        nodosVisitados={nodosVisitados}
        costoParcial={costoParcial}
        costoTotal={costoTotal}
      />
    </div>
  );
};

export default Grafo;