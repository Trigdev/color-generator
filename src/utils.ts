const componentToHex = (c: any): string => {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (
  r: string | number,
  g: string | number,
  b: string | number
): string => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default rgbToHex;
