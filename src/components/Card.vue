<template>
  <div class="card-wrap" @click="returnText">
    <div class="card-top-wrapper">
      <div class="card-title">{{ title }}</div>
      <slot name="favorite">預設收藏標題</slot>
    </div>
    <div class="card-content">
      <img class="card-img" :src="imgSrc">
      <div class="card-textwrap">
        <div class="card-city">{{ city }}</div>
        <div class="card-name">{{ name }}</div>
        <div class="card-text">{{ content }}</div>
        <slot name="subContent">預設副內容</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods:{
    returnText(){
      var text = this.name + ":" + this.content;
     this.$emit('returnCardData',text)
    }
  },
  props:{
    title:{
      type:String,
      default:""
    },
    imgSrc:{
      type:String
    },
    city:{
      type:String,
      default:""
    },
    name:{
      type:String,
      default:""
    },
    content:{
      type:String,
      default:""
    }
  }
}
</script>

<style lang="scss">

  .card-wrap{
    width: 400px;
    border: 1px solid gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
    .card-top-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      .card-title{
        font-weight: 500;
        font-size: 24px;
        color: orange;
        margin-bottom: 10px;
        margin-right: 20px;
      }
      .title-icon{
        font-weight: 500;
        font-size: 18px;
        color: gray;
        margin-bottom: 10px;
      }
    }
    .card-content{
      width: 100%;
      display: flex;
      .card-img{
        width: 50%;
        margin-right: 15px;
      }
      .card-textwrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .card-city{
          font-weight: 500;
          font-size: 20px;
        }
        .card-text{
          text-align: left;
          font-size: 16px;
        }
      }
    }
  

  }
</style>