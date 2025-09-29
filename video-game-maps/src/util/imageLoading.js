// useImagesLoaded.js
import { useEffect, useState } from 'react';

function preloadOne(src) {
    return new Promise((resolve) => {
        if (!src) return resolve();
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        if ('decode' in img) {
            img.src = src;
            img.decode().then(resolve).catch(resolve);
        } else {
            img.src = src;
        }
    });
}

export default function useImagesLoaded(urls) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const uniqueUrls = Array.from(new Set(urls.filter(Boolean)));
                await Promise.all(uniqueUrls.map(preloadOne));
            } finally {
                if (!cancelled) setReady(true);
            }
        })();
        return () => { cancelled = true; };
    }, [JSON.stringify(urls)]);

    return ready;
}
