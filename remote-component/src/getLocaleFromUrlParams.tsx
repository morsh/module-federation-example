export function getLocaleFromUrlParams(x: string) {
  const urlParams = new URLSearchParams(x);
  return urlParams.get('locale') || 'en';
}
