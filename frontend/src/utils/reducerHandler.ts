export const inputHandler = (
  oldValue: string,
  action:
    | { type: 'set'; value: string }
    | { type: 'input'; event: React.ChangeEvent<HTMLInputElement> }
    | { type: 'clear' },
) => {
  if (action.type === 'set') {
    return action.value;
  }
  if (action.type === 'clear') {
    return '';
  }
  return action.event.target.value;
};
