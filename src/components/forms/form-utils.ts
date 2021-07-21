type FormattedFormElement = {
  [key in string]: string;
};

export const getFormattedFormElements = (e: React.FormEvent<HTMLFormElement>) => {
  const formValues = {};
  const targetedElements = e.currentTarget
    ? e.currentTarget.elements
    : (e.target as EventTarget & HTMLFormElement).elements;
  const formElements = Array.from(targetedElements) as unknown as HTMLElement[];
  for (let element of formElements) {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      if (element.value === element.defaultValue || !element.value) {
        continue;
      }
      formValues[element.name] = element.value;
    } else if (element instanceof HTMLSelectElement) {
      formValues[element.name] = element.options[element.selectedIndex].value;
    }
  }
  delete formValues["tags"];
  return formValues as FormattedFormElement;
};
