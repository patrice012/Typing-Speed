export function moveElement(el) {
  let _x = 0;
  let _y = 0;
//   while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
      console.log(el, 'el')
//   }
  return {top: _y, left: _x};
}