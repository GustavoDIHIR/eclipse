(() => {
  'use strict';
  const sizes = new Map([
    ['RN', 0], ['PPP', 1], ['XXS', 1], ['PP', 2], ['XS', 2],
    ['P', 3], ['S', 3], ['M', 4], ['G', 5], ['L', 5],
    ['GG', 6], ['XL', 6], ['XG', 7], ['XGG', 7], ['GGG', 7], ['XXL', 7],
    ['XXG', 8], ['XXGG', 8], ['2XGG', 8], ['3XL', 8],
    ['G1', 9], ['G2', 10], ['G3', 11], ['G4', 12], ['G5', 13]
  ]);
  const natural = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });
  function compareSizes(a, b) {
    const left = String(a).trim(), right = String(b).trim();
    const first = sizes.get(left.toUpperCase()), second = sizes.get(right.toUpperCase());
    if (first !== undefined || second !== undefined) {
      return (first ?? Infinity) - (second ?? Infinity) || natural.compare(left, right);
    }
    return natural.compare(left, right);
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = compareSizes;
  else window.eclipseCompareSizes = compareSizes;
})();
