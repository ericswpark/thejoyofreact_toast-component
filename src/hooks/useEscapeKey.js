import React from "react";

function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKey(event) {
            if (event.key === "Escape") {
                callback(event);
            }
        }
        window.addEventListener('keydown', handleKey);

        return () => {
            window.removeEventListener('keydown', handleKey);
        }
    }, [callback]);
}

export default useEscapeKey;