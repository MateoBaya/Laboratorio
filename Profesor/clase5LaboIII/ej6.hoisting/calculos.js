 const calculos = (function() {
  const PI = 3.1416;

  function sumar(a, b) {
    return a + b;
  }
  function supCircunferencia(r) {
    return r * r * PI;
  }
  const multiplicar = (a, b) => {
    return a * b;
  };

  return {
    sumar,
    supCircunferencia,
    multiplicar,
  };
})();


