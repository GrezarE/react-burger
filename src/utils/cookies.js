export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  console.log(name, value, props)
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    console.log(propName)
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    console.log(propValue)
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  console.log(updatedCookie)
  console.log(exp)
  // document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}
