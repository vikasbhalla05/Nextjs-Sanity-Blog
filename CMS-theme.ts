const props = {
  "--my-white": "#FFF",
  "--my-black": "#1a1a1a",
  "--vikas-brand": "#6254f3",
  "--my-red": "#db4437",
  "--my-blue": "#6254f3",
  "--my-green": "#0f9d58",
};

export const myTheme = {
  // Base theme colors
  "—-black": props["--my-black"],

  "--white": props["--my-white"],
  "--grey": "#666",
  "--gray—base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // Brand
  "--brand-primary": props["--vikas-brand"],

  // Default button
  "--default-button-color": "#666",
  "—default—button—primary—color": props["--vikas-brand"],
  "—default—button—success-color": props["--my-green"],
  "—default—button—warning-color": props["--my-blue"],
  "—default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--vikas-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-blue"],
  "--state-danger-color": props["--my-red"],

  // Navbar
  "——main—navigation—color": props["--my-black"],
  "——main—navigation—color—inverted": props["--my-white"],
  "—focus—color": props["--vikas-brand"],
};
