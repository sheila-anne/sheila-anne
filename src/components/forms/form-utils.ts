type FormattedFormElement = {
  [key in string]: string;
};

export const getFormattedFormElements = (e: React.FormEvent<HTMLFormElement>) => {
  const formValues = {};
  const formElements = Array.from(e.currentTarget.elements) as unknown as HTMLElement[];
  for (let element of formElements) {
    if (element instanceof HTMLInputElement) {
      if ((element.value === element.defaultValue && element.id !== "tags") || !element.value) {
        continue;
      }
      formValues[element.name] = element.value;
    } else if (element instanceof HTMLSelectElement) {
      formValues[element.name] = element.options[element.selectedIndex].value;
    }
  }
  return formValues as FormattedFormElement;
};
