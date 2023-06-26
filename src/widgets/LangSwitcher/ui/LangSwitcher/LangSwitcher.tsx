import { LanguageType } from './LangOption/LangOption'
import { LangSelect } from './LangSelect/LangSelect'

export const LangSwitcher = () => {
  const options: LanguageType[] = ['english', 'russian']
  const initialLanguage = options[1]

  return <LangSelect options={options} value={initialLanguage} />
}
