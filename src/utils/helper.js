export function numberToBLR(numero) {
  if (numero) {
    var numero = numero.toFixed(2).split(".");
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
    return numero.join(",");
  }
  return "R$ 0,00";
}
