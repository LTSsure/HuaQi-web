<template>
    <div class="picture">
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">
                <p>这里放图片1</p>
                <br>
                <br>
                <br>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <p>这里放图片2</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <p>这里放图片3</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <p>这里放图片4</p>
            </div>
        </CarouselItem>
    </Carousel>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 0
    }
  }
}
</script>
