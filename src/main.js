import { createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Aos from 'aos'
import 'aos/dist/aos.css'
import router from './components/Navbar/Screenroute/router'

const app = createApp(App)

app.use(router)
app.use(Aos.init());

app.mount('#app')
