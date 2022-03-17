
export interface IField {
  type: string,
  placeholder: string,
  className?: string
  value?: string,
  onChange?: () => void,
  error?: string,
}