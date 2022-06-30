<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-title">
                <span>主应用 sidebar</span>
            </div>
            <div class="sidebar-menus">
                <AMenu>
                    <AMenuItem key="app1">
                        <router-link to="/app1/">应用 - Vue3</router-link>
                    </AMenuItem>
                    <AMenuItem key="app2">
                        <router-link to="/app2/">应用 - Vue2</router-link>
                    </AMenuItem>
                    <AMenuItem key="app3">
                        <router-link to="/app3/">应用 - React</router-link>
                    </AMenuItem>
                </AMenu>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .sidebar {
        &-title {
            height: 64px;
            line-height: 64px;
            text-align: center;

            > span {
                color: white;
                font-size: 16px;
                font-weight: bold;
            }
        }
        &-menus {
            > ul {
                > li {
                    > a {
                        color: white;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>