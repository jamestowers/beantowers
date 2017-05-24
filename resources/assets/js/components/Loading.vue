<template>
    <div class="row loading">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    }
</script>

<style lang="scss">
    
    @import "../../sass/_variables.scss";
    
    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        height:100%;
        width: 100%;
    }

    .mask-loading {
      width: 100%;
    }
    .spinner {
      width: 50px;
      height: 50px;
      position: relative;
      margin: 0 auto;
    }

    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: $color-primary;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
      animation-delay: -1.0s;
    }

    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
      }
    }
</style>