import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const listener = (e: MediaQueryListEvent): void => setMatches(e.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

//#region Media queries management

export type ResponsiveCSSProperties<T> = [T?, T?, T?, T?, T?];
/**
 * Selects the last breakpoint where the media query matches
 * @param value CSS property responsive values
 * @returns Matching responsive value
 */
export const MediaQuerySelector = <T,>(value: ResponsiveCSSProperties<T> | T): T | undefined => {
    const list = [
        useMediaQuery('(min-width: 80em)'),
        useMediaQuery('(min-width: 62em)'),
        useMediaQuery('(min-width: 48em)'),
        useMediaQuery('(min-width: 30em)'),
        useMediaQuery('(min-width: 0em)'),
    ];
    const safeValue = Array.isArray(value) ? value : [value];

    let result: T | undefined = undefined;
    for (let i = 0; i < 5; i++) {
        if (!safeValue[i] || !list[4 - i]) continue;
        result = safeValue[i];
    }

    return result;
};