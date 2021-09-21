export function warningToLoginOrRegister() {
  document.querySelector('.login-warning')?.classList.add('warning');
  setTimeout(
    () => document.querySelector('.login-warning')?.classList.remove('warning'),
    2000,
  );
}
