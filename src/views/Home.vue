<template>
  <div class="home">
    <div class="wrap">
      <template v-for="item in cardListData">
       <Card :key="item.id" :title="item.title" :imgSrc="item.imgSrc" :city="item.city" :name="item.name" :content="item.content" @returnCardData="(e) => getCardData(e)">
         <template slot="favorite">
          <span class="title-icon">收藏</span>
         </template>
         <template slot="subContent">
          <span class="title-icon">副內容</span>
         </template>
       </Card>
      </template>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components:{
    Card
  },
  data(){
    return{
      cardListData: []
    }
  },
  mounted(){
    this.getAnimalData()
  },
  methods:{
    getCardData(e){
      console.log(e);
    },
    getAnimalData(){
      fetch('./mock.json')
        .then(res => res.json())
        .then(res => {
          this.cardListData = res
        })

    }
  }
}
</script>

<style lang="scss">
    .wrap{
  width: 960px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
}
</style>