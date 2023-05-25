function solution(s) {
    return s.toLowerCase().split(' ')
    .map(str => str.charAt(0).toUpperCase().concat(str.slice(1, str.length)))
    .join(' ');
}