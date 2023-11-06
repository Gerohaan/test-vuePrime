import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Axios } from 'axios'
import App from './App.vue'

import PrimeVue from 'primevue/config'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primeicons/primeicons.css' 
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/primeflex.css'

import Panel from 'primevue/panel'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import AutoComplete from 'primevue/autocomplete'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import Inplace from 'primevue/inplace'
import InputText from 'primevue/inputtext'
import Editor from 'primevue/editor'
import Chips from 'primevue/chips'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Rating from 'primevue/rating'
import ProgressBar from 'primevue/progressbar'
import Listbox from 'primevue/listbox'
import Tooltip from 'primevue/tooltip'
import DataTable from 'primevue/datatable'
import OrderList from 'primevue/orderlist';
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const axios = new Axios
const app = createApp(App)

app.use(PrimeVue)

app.component('Panel', Panel)
app.component('Toolbar', Toolbar)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('AutoComplete', AutoComplete)
app.component('Card', Card)
app.component('Tag', Tag)
app.component('Dialog', Dialog)
app.component('Inplace', Inplace)
app.component('InputText', InputText)
app.component('Editor', Editor)
app.component('Chips', Chips)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('DataViewLayoutOptions', Rating)
app.component('ProgressBar', ProgressBar)
app.component('Listbox', Listbox)
app.component('DataTable', DataTable)
app.component('OrderList', OrderList)
app.directive('tooltip', Tooltip)
app.use(pinia)
app.use(axios)
app.mount('#app')