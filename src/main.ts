import '@unocss/reset/tailwind.css'
import 'uno.css'
import "@fontsource/inter/variable.css";
import "./styles.css"
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
