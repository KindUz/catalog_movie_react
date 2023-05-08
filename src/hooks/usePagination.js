import { useMemo } from "react"

const usePagination = (pages) => {
    return useMemo(() => {
        let result = [];
        for (let i = 0; i < pages; i++) {
            result.push(i+1);
        }
        return result;
    }, [pages]);
}

export default usePagination;