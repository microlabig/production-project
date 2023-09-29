/**
 * Функция копирования текста в буфер обмена
 *
 * @param {string} text строка для копирования
 */
export function copyTextToClipboard(text: string) {
    if (!text) {
        return;
    }

    if (window.navigator.clipboard) {
        window.navigator.clipboard.writeText(text);
    } else {
        const input = document.createElement('input');

        input.value = text;
        input.setAttribute(
            'style',
            `
        position: absolute;
        top: -9999px;
        left: -9999px;
        opacity: 0;
        color: transparent;
        background-color: transparent;
        z-index: -100;
      `
        );
        document.body.appendChild(input);

        input.select();
        input.setSelectionRange(0, 99999); /* For mobile devices */

        document.execCommand('copy');
        document.body.removeChild(input);
    }
}
