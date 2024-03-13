export function toMS(s) {
  return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);
}
