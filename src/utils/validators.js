const ua = navigator.userAgent;

export const mobile = {
  Android: () => /Android/i.test(ua),
  // https://stackoverflow.com/a/57924983/7768661
  iPadOS13plus: () => /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1,
  iOS: () => /iPhone|iPad|iPod/i.test(ua) || mobile.iPadOS13plus(),
  Opera: () => /Opera Mini/i.test(ua),
  Windows: () => /IEMobile/i.test(ua),
  any: () => (
    mobile.Android() ||
    mobile.iOS() ||
    mobile.Opera() ||
    mobile.Windows()
  ),
};

export const url = (url) => {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
};

export const is = {
  mobile,
  url,
};
