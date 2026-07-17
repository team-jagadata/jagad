/* Formatter angka gaya Indonesia (pemisah ribuan titik, desimal koma). */

const nfInteger = new Intl.NumberFormat("id-ID");
const nfDesimal1 = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/** 1546349 -> "1.546.349" */
export const formatAngka = (n: number) => nfInteger.format(n);

/** 20.7 -> "20,7%" */
export const formatPersen = (n: number) => `${nfDesimal1.format(n)}%`;

/** 9.1 -> "9,1 T" */
export const formatTriliun = (n: number) => `${nfDesimal1.format(n)} T`;

/** 9.1 -> "Rp 9,1 Triliun" */
export const formatRupiahTriliun = (n: number) =>
  `Rp ${nfDesimal1.format(n)} Triliun`;
