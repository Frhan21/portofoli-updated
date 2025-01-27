export const getData = async () => {
    try {
        const res = await fetch('/api/project', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        
    } catch {

    }

}