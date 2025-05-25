// --- Inputs ---
// Estes são os tipos 'type' nativos da tag <input>
export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
// Estes são os tipos 'type' nativos da tag <input> voltados para textos
export type InputTypeText =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url';
// --- Buttons ---
// Tipos 'type' nativos da tag <button>
export type ButtonType = 'button' | 'submit' | 'reset';
// Variantes visuais para componentes de botão personalizados
export type ButtonVariant = 'default' | 'golden' | 'golden-gradient' | 'ghost';
