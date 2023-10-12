export function getQueryParams(params: OptionalRecord<string, string>) {
    if (!Object.keys(params).length) {
        return '';
    }

    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
}

/**
 * Функция добавления параметров строки запроса в URL
 *
 * @param {Object} params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
