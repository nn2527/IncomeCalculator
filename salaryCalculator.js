var sld;
function leaveDeduct() {
  bs = document.getElementById("basesalary").value;
  l = document.getElementById("leaves").value;
  cl = document.getElementById("costofleave").value;
  sld = bs - l * cl;
  document.getElementById("afterleave").value = sld;
}
function salaryCalculator() {
  st = document.getElementById("salarytax").value;
  taxded = (st / 100) * sld; //tax deduction > tax on salary  divided by 100 X by salary-after-leave-deduction divided
  finalsalary = sld - taxded; //salary after leave deduction - tax deduction
  document.getElementById("finalsalary").value = finalsalary; //salary after both : leave & tax deduction
}

