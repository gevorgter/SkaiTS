<script setup lang="ts">
import * as Vue from 'vue';
import AppSubmenu from '@/App/AppSubmenu.vue';
import { G } from "@/G";

import type { MenuItem } from 'primevue/menuitem';

const $emit = defineEmits(['menuitem-click']);

const onMenuItemClick = (event: MouseEvent) => {
    $emit('menuitem-click', event);
}

let menuArray: MenuItem[] = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
        }]
    },
    {
        label: 'Food', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Tags', icon: 'pi pi-fw pi-id-card', to: '/Tags' },
            { label: 'Inventory', icon: 'pi pi-fw pi-id-card', to: '/Inventory' },
            { label: 'MealTemplates', icon: 'pi pi-fw pi-check-square', to: '/MealTemplates' },
            { label: 'Manufacturers', icon: 'pi pi-fw pi-check-square', to: '/Manufacturers' },
        ]
    },
    {
        label: 'Clients',
        items: [
            { label: 'Upload Insurance File', icon: 'pi pi-fw pi-check-square', to: '/UploadInsuranceFile' },
            { label: 'Clients', icon: 'pi pi-fw pi-id-card', to: '/Clients' },
            { label: 'PackingLists', icon: 'pi pi-fw pi-check-square', to: '/PackingLists' },
            { label: 'Deliveries', icon: 'pi pi-fw pi-check-square', to: '/Deliveries' },
            { label: 'Insurances', icon: 'pi pi-fw pi-check-square', to: '/Insurances' },
        ]
    },
    {
        label: 'Routes',
        items: [
            { label: 'Routes', icon: 'pi pi-fw pi-check-square', to: '/Routes' },
            { label: 'Deliveries', icon: 'pi pi-fw pi-id-card', to: '/GenerateDelivery' },
        ]
    },
    {
        label: 'Reports',
        items: [
            { label: 'Billing', icon: 'pi pi-fw pi-check-square', to: '/Billing' },
        ]
    },
    {
        label: 'Settings',
        items: [
            { label: 'Settings', icon: 'pi pi-cog' },
            { label: 'Users', icon: 'pi pi-users', to: '/Users' },
            { label: 'Log Out', icon: 'pi pi-fw pi-id-card' },
        ]
    },

];

const menu = Vue.ref(menuArray);


</script>

<template>
    <div class="layout-menu-container">
        <AppSubmenu :items="menu" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
    </div>
</template>

