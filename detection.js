function toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(
                0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            utf8.push(
                0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
    }
    return utf8;
}

export const isNormalText = (inputString) => {
    let bytes;
    if (inputString instanceof Uint8Array) {
        bytes = inputString;
    } else {
        if (inputString && typeof inputString !== 'string') {
            return false;
        }
        bytes = toUTF8Array(inputString);
    }
    for (let i = 0; i < bytes.length; i++) {
        const byteValue = bytes[i];

        if (
            (byteValue < 32 && byteValue !== 9 && byteValue !== 10 && byteValue !== 13) ||
            byteValue == 127 ||
            byteValue >= 254
        ) {
            return false;
        }
    }

    return true;
};
