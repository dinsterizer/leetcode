export function lengthOfLongestSubstring(s: string): number {
    let length = 0;
    let stringArr: string[] = [];

    [...s].forEach((char) => {
        const i = stringArr.findIndex((c) => c === char);
        if (i !== -1) {
            length = length < stringArr.length ? stringArr.length : length;
            stringArr = stringArr.slice(i + 1);
        }

        stringArr.push(char);
    });

    return length < stringArr.length ? stringArr.length : length;
}
