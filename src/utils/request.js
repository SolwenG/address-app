const getRequest = async (url, headers = {}) => {
    const resp = await fetch(url, {
        method: 'GET',
        headers: headers
    });

    if (resp.ok) {
        return await resp.json();
    }
    throw new Error("Problème de serveur.")
}

export {
    getRequest
};

