export const applyStyle = (name: string, style?: string) => {
  return !!style ? `${name}: ${style};` : undefined;
};
