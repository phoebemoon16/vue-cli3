<style>
    .di{
        position: relative;
        cursor: pointer;
    }
    .tip-context {
        position: absolute;
        right: -245px;
        top: -5px;
        background-color: #00adb5;
        color:white;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        border-radius: 3px;
        width: 300px;
        min-height: 30px;
        padding: 3px;
        word-break: break-all;
        /* /* display: inline-block; */
        display: none; 
        z-index: 9999;
    }
</style>
<template>
    <div class="di">
        <i :class="icon" id="test" @click="showModal" @mouseover="showTip" @mouseout="hideTip"></i>
        <div class="tip-context" :style="style">{{context}}</div>
    </div>
</template>
<script>
    export default {
        // 'top', 'right', 'bottom', 'left', 'rightTop', 'rightBottom', 'leftTop', 'leftBottom'  direction 的参数,控制tip框显示的方位, 不要同时传两种方位

        props: ['context', 'callback', 'direction', "icon"],
        data() {
            return {
                style: ''
            }
        },
        methods: {
            showModal () {
                console.log('l am tip')
            },
            showTip () {
                document.getElementsByClassName("tip-context")[0].style.display = "block"
                document.getElementById("test").style.color = "blue"
            },
            hideTip () {
                document.getElementById("test").style.color = "black"
                document.getElementsByClassName("tip-context")[0].style.display = "none";
            }
        },
        mounted() {
            let obj = {
                top: "top:20px;right:-120px;",
                bottom: "top:20px;right:-120px;",
                left: "top:-5px;right:25px;",
                rightTop: "top:-20px;right:245px;",
                rightBottom: "top:20px;right:-245px;",
                leftTop: "top:-20px;right:850px;",
                leftBottom: "top:20px;right:25px;"
            }
            this.style = obj[this.direction]
        }
    }
</script>

