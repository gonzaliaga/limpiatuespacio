import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav style={{ backgroundColor: 'yellow', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                {/* Agrega aquí el código para el logo */}
            </div>
            <ul style={{ display: 'flex', justifyContent: 'center' }}>
                <li><a href="/" style={{ color: 'black' }}>Inicio</a></li>
                <li><a href="/contacto" style={{ color: 'black' }}>Contacto</a></li>
                <li><a href="/contrata" style={{ color: 'black' }}>Contrata</a></li>
            </ul>
            <button style={{ color: 'black' }}>Contrata</button>
        </nav>
    );
}

export default Navbar;