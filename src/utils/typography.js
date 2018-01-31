import Typography from "typography";
import bootstrapTheme from "typography-theme-stow-lake";

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
