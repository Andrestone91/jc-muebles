import { Router } from '@vaadin/router';

const router = new Router(document.querySelector(".root"));
router.setRoutes([
    { path: '/pages/item/index.html:query', component: 'item-custom' },
    { path: '/pages/index.html:query', component: 'pruebas-custom' },
    // { path: '/', component: 'pruebas-custom' },
]);