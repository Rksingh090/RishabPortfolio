import React, { createContext, useContext, useState } from 'react'

const homeCtx = createContext();

export const useHome = () => useContext(homeCtx);

const HomeContext = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    const onHoverStart = () => setHovered(true);
    const onHoverEnd = () => setHovered(false);
    return (
        <homeCtx.Provider
            value={{
                hovered, setHovered,
                onHoverStart,onHoverEnd
            }}
        >
            {children}
        </homeCtx.Provider>
    )
}

export default HomeContext