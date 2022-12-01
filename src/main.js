import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {  Container, Aside, Main, Table, TableColumn, Dialog, Popconfirm, Button, Popover, Form, FormItem, Input } from 'element-ui';

Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dialog.name, Dialog);
Vue.component(Popconfirm.name, Popconfirm);
Vue.component(Button.name, Button);
Vue.component(Popover.name, Popover);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
