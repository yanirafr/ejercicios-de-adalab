function iva(price) {
  const iva = price * 0.25;
  const total = price + iva;
  return `Precio: ${price} IVA: ${iva} total: ${total}`;
}
ivaCode = iva(200);
console.log(ivaCode);
