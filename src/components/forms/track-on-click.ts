import { trackCustomEvent } from "gatsby-plugin-google-analytics";

type FormName = "Contact" | "Homepage Hubspot" | "The Grove Hubspot";

export const trackOnClick = (formName: FormName) => {
  trackCustomEvent({
    action: "Form Submit",
    category: `Form submission from: ${formName}`,
    label: "Form"
  });
};
