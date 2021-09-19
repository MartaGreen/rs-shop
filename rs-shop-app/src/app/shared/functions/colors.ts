export function getColor(amountOfItems: number) {
  let color: string = '';

  if (amountOfItems >= 20) color = 'yellowgreen';
  else if (amountOfItems >= 5) color = '#ffbe00';
  else if (amountOfItems < 5) color = 'red';

  return color;
}
