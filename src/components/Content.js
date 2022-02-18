import React from 'react';
import './Content.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Content() {
  return (
    <>
      <header className="cabecalho" />
      <div className="conteudo">
        <h1 className="titulo">Dashboard</h1>
        <button type="button" className="button">
          <FilterAltIcon size="small" color="tertiary" />
          Filtrar
        </button>
      </div>
      <p className="paragrafo">Desafio Técnico Frontend</p>
    </>
  );
}

export default Content;
