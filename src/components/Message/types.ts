// Initially, I set "no-undef": "warn" in .eslintrc.json. However,
// that caused ESlint to warn us when using React.CSSProperties,
// indicating that React was not defined. It's better to NOT set
// "no-undef". Typescript will still warn us about undefined values,
// but not things that are globally available like window and React.
export interface IMessage {
  className?: string
  message?: string
  style?: React.CSSProperties
}
