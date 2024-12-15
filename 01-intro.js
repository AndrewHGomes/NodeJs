function c() {
  console.log("C");
  return;
}

function b() {
  console.log("B");
  return c();
}

function a() {
  b();
  console.log("A");
  return "Acabou!!!";
}

a();

//===================================

function z() {
  setTimeout(() => console.log("Z"), 0);
  return;
}

function y() {
  console.log("Y");
  return z();
}

function x() {
  y();
  console.log("X");
  return;
}

x();
