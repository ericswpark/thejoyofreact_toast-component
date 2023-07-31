import React from "react";

function useEscapeKey(callback) {
    React.useEffect(() => {
        window.addEventListener('keydown', callback);

        return () => {
            window.removeEventListener('keydown', callback);
        }
    }, [callback]);
}

export default useEscapeKey;