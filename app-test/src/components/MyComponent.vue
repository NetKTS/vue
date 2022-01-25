<template>
    <div id="test">
        {{ test }} <br>
        {{ IamNet }} <br>

        <p v-if="hours < 12">Good morning!</p>
        <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
        <p v-if="hours >= 18">Good evening!</p>

        <p v-for="dog in Dogs" :key="dog"> {{dog}}</p>
        <button v-on:click="test_alert()"> testalert </button>
        <br><br>
        <h1>{{ counter }}</h1>
        <button v-on:click="counter = plus(counter)">+</button>
        <button v-on:click="counter = minus(counter)">-</button>
        <br>

    </div>
</template> 

<script>
export default {
    name: 'MyComponent',
    props: {
    test: String
  },
    data:function(){
        
        return{
        IamNet:"helllo I am Net",
        hours : new Date().getHours(),
        Dogs : ['Rex', 'Rover', 'Henrietta', 'Alan'],
        counter:0,

        }
        
    },
    methods:{
        test_alert:function(){
            console.log("testalert");
            alert("hello");
        },
        plus:function(num){
            num++
            return num
        },
        minus:function(num){
            if(num>0){
                num--
            }
            return num
        }
        
    }
}
</script>

<style >

</style>