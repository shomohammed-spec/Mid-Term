(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const root = document.documentElement;
  document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
    btn.addEventListener('click', () => {
      root.setAttribute('data-bs-theme', btn.getAttribute('data-bs-theme-value'));
    });
  });

  const input = document.getElementById('numberInput');
  const output = document.getElementById('output');
  const enterBtn = document.getElementById('enterBtn');


  if (output) output.textContent = "";

  function factorial(n) {
    let result = 1n;
    for (let i = 1n; i <= BigInt(n); i++) result *= i;
    return result;
  }

  function calculate() {
    const raw = input?.value ?? "";
    if (raw === "") {
      output.textContent = "";
      return;
    }
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 0) {
      output.textContent = "Enter a non-negative whole number.";
      return;
    }
    output.textContent = `${n}! = ${factorial(n).toString()}`;
  }

  enterBtn?.addEventListener('click', calculate);
  input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') calculate(); });
})();
