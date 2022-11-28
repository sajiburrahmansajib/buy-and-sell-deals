import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | S & B Deals`;
    }, [title])
}

export default useTitle;