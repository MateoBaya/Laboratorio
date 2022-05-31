 const textos = (function() {
  const PI = 3.1416;

  function sumar(a, b) {
    return a + b +1;
  }
  function supCircunferencia(r) {
    return r * r * PI;
  }
  const multiplicar = (a, b) => {
    return a * b;
  };

  return {
    sumar: sumar,
    supCircunferencia,
    multiplicar,
  };
})();


