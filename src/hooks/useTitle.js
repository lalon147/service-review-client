import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - RISAN's CEREMONY`;
    }, [title])
};

export default useTitle;