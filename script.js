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
mean(12, 48); 

//func 3
function sign(n) {
  if (n > 0) return 1;
  else if (n < 0) return -1;
  else return 0;
}
console.log("Func3:", sign(10)); 
console.log("Func3:", sign(-5)); 
console.log("Func3:", sign(0));

//func 4
function numberOfRoots(A, B, C) {
  let D = B * B - 4 * A * C;
  if (D > 0) return 2;
  else if (D === 0) return 1;
  else return 0;
}
console.log("Func4:", numberOfRoots(1, -6, 9)); 

//func 5
function areaCircle(R) {
  return Math.PI * R * R;
}
console.log("Func5:", areaCircle(3)); 

//func 6
function sumRange(A, B) {
  if (A > B) return 0;
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
}
console.log("Func6:", sumRange(8, 10)); 

//func 7
function calc(A, B, S) {
  if (S === "+") return A + B;
  else if (S === "-") return A - B;
  else if (S === "*") return A * B;
  else if (S === "/") return B !== 0 ? A / B : "Error (0 ga bo‘linmaydi)";
  else return 0;
}
console.log("Func7:", calc(10, 15, "*")); 
console.log("Func7:", calc(7, 8, "+")); 

//func 8
function isEven(K) {
  return K % 2 === 0;
}
console.log("Func8:", isEven(10)); 

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
sortABC(10, 5, 8); 

//func 10
function isPowerN(K, N) {
  let p = 1;
  while (p < K) {
    p *= N;
  }
  return p === K;
}
console.log("Func10:", isPowerN(27, 3)); 

//func 11
function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
console.log("Func11:", isPrime(7)); 
console.log("Func11:", isPrime(10)); 

//func 12
function numberOfPrime(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}
console.log("Func12:", numberOfPrime(10)); 

//func 13
function digitNth(K, N) {
  let str = K.toString();
  if (N > str.length) return -1;
  return parseInt(str[N - 1]);
}
console.log("Func13:", digitNth(105782, 5)); 
console.log("Func13:", digitNth(1057, 5));   

//func 14
function inverseNumber(N) {
  let str = N.toString().split('').reverse().join('');
  return parseInt(str);
}
console.log("Func14:", inverseNumber(56814)); 

//func 15
function isPalindrom(N) {
  return N === inverseNumber(N);
}
console.log("Func15:", isPalindrom(1678761)); 

//func 16
function factorial(N) {
  if (N < 0) return 1;
  let result = 1;
  for (let i = 1; i <= N; i++) {
    result *= i;
  }
  return result;
}
console.log("Func16:", factorial(5)); 

//func 17
function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) sum += i;
  }
  return sum;
}
console.log("Func17:", getSum3(15)); 

//func 18
function sumOddEven(N) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) evenSum += i;
    else oddSum += i;
  }
  console.log("Func18:", "Juft =", evenSum, "Toq =", oddSum);
}
sumOddEven(10); 

//func 19
function invertTime(H, M, S) {
  return H * 3600 + M * 60 + S;
}
console.log("Func19:", invertTime(0, 6, 40)); 

//func 20
function decTime(H, M, S) {
  let total = invertTime(H, M, S);
  total--;
  let h = Math.floor(total / 3600);
  let m = Math.floor((total % 3600) / 60);
  let s = total % 60;
  console.log("Func20:", `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
}
decTime(0, 6, 40); 

//func 21
function isLeapYear(Y) {
  return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
}
console.log("Func21:", isLeapYear(2020)); 

//func 22
function monthDays(M, Y) {
  let days = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[M - 1];
}
console.log("Func22:", monthDays(2, 2020));

//func 23
function prevDate(D, M, Y) {
  D--;
  if (D === 0) {
    M--;
    if (M === 0) {
      M = 12;
      Y--;
    }
    D = monthDays(M, Y);
  }
  console.log("Func23:", `${String(D).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`);
}
prevDate(10, 3, 2022); 

//func 24
function nextDate(D, M, Y) {
  D++;
  if (D > monthDays(M, Y)) {
    D = 1;
    M++;
    if (M > 12) {
      M = 1;
      Y++;
    }
  }
  console.log("Func24:", `${String(D).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`);
}
nextDate(10, 3, 2022); 

//func 25
function getDividersNumberAndSum(N) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      count++;
      sum += i;
    }
  }
  console.log("Func25:", "Bo‘luvchilar soni:", count, "| Yig‘indisi:", sum);
}
getDividersNumberAndSum(12); 

