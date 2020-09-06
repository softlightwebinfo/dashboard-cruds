import React from "react";

export const LimpiarFiltros = () => {
    const onClick = (e) => {
        e.preventDefault();
        alert("Limpìando filtros")
    };
    return (
        <a className={"FilterClear"} href="#" onClick={onClick}>Limpiar filtros</a>
    )
}