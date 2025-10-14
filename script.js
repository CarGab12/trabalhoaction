document.addEventListener('DOMContentLoaded', () => {
  const dt = new Date();
  document.getElementById('datetime').textContent = dt.toLocaleString();
  document.getElementById('calcBtn').addEventListener('click', () => {
    const res = 2 + 2;
    document.getElementById('result').textContent = `2 + 2 = ${res}`;
  });
});
