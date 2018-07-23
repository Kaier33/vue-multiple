<template>
    <div class="container">
        <p>{{receive}}</p>
        <p class="fourteen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit amet rem maiores, harum iusto, error laudantium consectetur fugiat eveniet illum cum enim a provident. Dignissimos, explicabo? Non, magnam quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste exercitationem quos harum culpa quia reprehenderit magni totam ducimus quibusdam architecto numquam repellat aspernatur nihil, at, officiis cum nesciunt voluptatum.</p>
        <br>
        <p class="sixteen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit amet rem maiores, harum iusto, error laudantium consectetur fugiat eveniet illum cum enim a provident. Dignissimos, explicabo? Non, magnam quasi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quia commodi quidem molestiae? Molestiae, dolor possimus dolore saepe nobis ea nihil. Repudiandae rem odit quibusdam perferendis facere consectetur culpa necessitatibus?</p>
        <br>
        <br>
        <p class="eighteen">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit quidem quia sit recusandae accusamus odio porro cupiditate! Saepe maiores quos omnis fugit sequi aliquid iure commodi, ad repellat officiis dolores quod nesciunt vero expedita perferendis, suscipit deserunt similique! Culpa dolorum omnis natus. Laborum similique est accusamus, repellat blanditiis explicabo!
        </p>
        <div class="box">
            <div class="car">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531995250468&di=2ce3e5c87445ede3309a997eb4d3ecc2&imgtype=0&src=http%3A%2F%2Fimage.bitautoimg.com%2Fappimage%2Fmedia%2F20171207%2Fw640_h379_93724b53cdc54bc1af496dd34488fa55.jpeg">
            </div>
            <div class="car">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531995250468&di=2ce3e5c87445ede3309a997eb4d3ecc2&imgtype=0&src=http%3A%2F%2Fimage.bitautoimg.com%2Fappimage%2Fmedia%2F20171207%2Fw640_h379_93724b53cdc54bc1af496dd34488fa55.jpeg">
            </div>
        </div>


    </div>
</template>
<script>
import appMixins from "@/assets/js/appMixins.js";
export default {
  name: "test2",
  mixins: [appMixins],
  data() {
    return {
      receive: "默认没传",
      sendApp:'H5给你的',
    };
  },
  methods: {
    appSendData(data) {
      this.receive = JSON.parse(data);
    },

  }
};
</script>
<style scoped lang='less'>
.container {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid transparent; /*no*/
  font-size: 16px; /*px*/
  margin-top: 30px;
  background: #ffffff;
  height: auto;

  .fourteen{
    font-size: 14px;
  }
  .sixteen{
    font-size: 16px;    
  }
  .eighteen{
    font-size: 18px;
  }

}

.box {
  .car {
    display: inline-block;
    img {
      width: 120px;
      height: 136px;
      margin-right: 16px;
    }
  }
}


</style>

