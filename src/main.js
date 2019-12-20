import Vue from 'vue';
import {Header} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import { TabContainer, TabContainerItem } from 'mint-ui';

// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);

import App from './App.vue';



new Vue({
  el: '#app',
  render: h => h(App),
});