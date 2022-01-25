<template>
    <div>
        <div>
            <h3 class="textred"> v-bind </h3>
            <input :disabled="seconds > 5" Test type="submit" value="click">
            <p>{{ seconds }} seconds since you opened this page </p>
        </div>
        {{test}}

        <br><br>

        <div>
            <h3 class="textred"> 2 way binding (v-model) </h3>
            <input type="text" v-model="seconds" >
            <h1> {{seconds}} </h1>
        </div>

        <br><br>

        <div>
            <h3 class="textred"> status </h3>
            <p>current status : {{  }}</p>
        </div>
        
        <div>
            <h3 class="textred">sum</h3>
                <div>
                <label>Please Enter 2 number</label><br>
                <input v-model.number="a" /><br>
                <input v-model.number="b" /><br>
                </div>
                <button @click="sum()">sum</button>
                <h1> {{ result }}</h1>
        </div>
        <br>
        <div>
            <h3 class="textred"> calculate fahrenheit</h3>
            <div>
                <label> temperature in celsius </label>
                <input v-model.number="celsius">
                <button @click="calfahrenheit()">convert</button>
                <h3> {{celsius}}c = {{fahrenheit}}f</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lesson_5',
    props: {
    test: String
  },
    created(){
        setInterval(() => {
        this.seconds++;
        },1000);
},
    data:function(){
        
        return{
        seconds: 0,
        text:"",
        result:0,
        a:0,
        b:0,
        
        fahrenheit:0
        }
        
    },
    methods:{
        sum(){
            this.result = this.a + this.b
        },
        calfahrenheit(){
            this.fahrenheit = this.celsius * (9 / 5) + 32;
        }
        
    }
}
</script>

<style>
.textred{
    color: red;
}
</style>