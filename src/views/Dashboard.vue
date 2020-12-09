<template>
  <div class="dashboard">
    <DashboardNavbar/>
    <div class="container-fluid">
      <div class="row">
        <DashboardSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        </main>
      </div>
    </div>
  </div>
</template>



<script>
import Card from '@/components/Card.vue'
import DashboardNavbar from '@/components/DashboardNavbar.vue';
import DashboardSidebar from '@/components/DashboardSidebar.vue';

export default {
  name:'Dashboard',
  components:{
    DashboardNavbar,
    DashboardSidebar
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/all";

</style>