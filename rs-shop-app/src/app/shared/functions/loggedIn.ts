export function warningToLoginOrRegister() {
  document.querySelector('.login-warning')?.classList.add('warning');
  setTimeout(
    () => document.querySelector('.login-warning')?.classList.remove('warning'),
    2000,
  );
}

export function resetLoginForm() {
  const menu: HTMLUListElement | null = <HTMLUListElement>(
    document.querySelector('.account')?.querySelector('.dropdown-menu')
  );
  menu.querySelectorAll('.form-input').forEach((inp) => {
    inp.querySelector('input')!.value = '';
    inp.classList.remove('warning');
  });
  menu.classList.remove('show');
  menu.querySelector('.wrong-data')?.classList.remove('warning');
}
