import { useEffect, useState } from 'react';

export default function useRequest(request) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        setIsLoading(true);
        request()
            .then(response => setData(response.rows))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, [])
    return [data, isLoading, error];
}
