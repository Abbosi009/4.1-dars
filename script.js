//func 1
function power(a, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= a;
  }
  return result;
}
console.log("Func1:", power(3, 5));

//func 2
function mean(a, b) {
  let arifmetik = (a + b) / 2;
  let geometrik = Math.sqrt(a * b);
  console.log("Func2:", "Arifmetik =", arifmetik, "Geometrik =", geometrik);
}
mean(12, 48); // Arifmetik = 30, Geometrik = 24

//func 3
function sign(n) {
  if (n > 0) return 1;
  else if (n < 0) return -1;
  else return 0;
}
console.log("Func3:", sign(10)); // 1
console.log("Func3:", sign(-5)); // -1
console.log("Func3:", sign(0));

//func 4
function numberOfRoots(A, B, C) {
  let D = B * B - 4 * A * C;
  if (D > 0) return 2;
  else if (D === 0) return 1;
  else return 0;
}
console.log("Func4:", numberOfRoots(1, -6, 9)); // 1

//func 5
function areaCircle(R) {
  return Math.PI * R * R;
}
console.log("Func5:", areaCircle(3)); // 28.27...

//func 6
function sumRange(A, B) {
  if (A > B) return 0;
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
}
console.log("Func6:", sumRange(8, 10)); // 27

//func 7
function calc(A, B, S) {
  if (S === "+") return A + B;
  else if (S === "-") return A - B;
  else if (S === "*") return A * B;
  else if (S === "/") return B !== 0 ? A / B : "Error (0 ga bo‘linmaydi)";
  else return 0;
}
console.log("Func7:", calc(10, 15, "*")); // 150
console.log("Func7:", calc(7, 8, "+")); // 15

//func 8
function isEven(K) {
  return K % 2 === 0;
}
console.log("Func8:", isEven(10)); // true

//func 9
function sortABC(a, b, c) {
  let max, min, middle;
  if (a > b && a > c) max = a;
  else if (b > c) max = b;
  else max = c;

  if (a < b && a < c) min = a;
  else if (b < c) min = b;
  else min = c;

  middle = a + b + c - max - min;
  console.log("Func9:", min, middle, max);
}
sortABC(10, 5, 8); // 5 8 10

//func 10
function isPowerN(K, N) {
  let p = 1;
  while (p < K) {
    p *= N;
  }
  return p === K;
}
console.log("Func10:", isPowerN(27, 3)); // true

//func 11
function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
console.log("Func11:", isPrime(7)); // true
console.log("Func11:", isPrime(10)); // false

//func 12
function numberOfPrime(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}
console.log("Func12:", numberOfPrime(10)); // 4 (2, 3, 5, 7)

//func 13
function digitNth(K, N) {
  let str = K.toString();
  if (N > str.length) return -1;
  return parseInt(str[N - 1]);
}
console.log("Func13:", digitNth(105782, 5)); // 8
console.log("Func13:", digitNth(1057, 5));   // -1

//func 14
