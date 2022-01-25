<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <MyComponent test="Hello By NetKTS" />
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <employee-form @add:EmployeeBtn="addEmployee"/>
  <Lesson_6 :employees="employees" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyComponent from './components/MyComponent.vue'
// import Lesson_5 from './components/Lesson_5.vue'
import Lesson_6 from './components/Lesson_6.vue'
import EmployeeForm from './components/Lesson_6_form.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MyComponent,
    // Lesson_5
    Lesson_6,
    EmployeeForm
  },
  data(){
    return{
      employees:[
          {
              id:1,
              name:'Richard Hendricks',
              email:'richard@email.com'
          },
          {
              id:2,
              name:'Bertram Gilfoyle',
              email:'berram@email.com'
          },
          {
              id:3,
              name:'Kittisak Thamwattana',
              email:'kittisak@email.com'
          }
      ]
            
    }
  },
  methods:{
    addEmployee(employee){
      const newEmployee = {
        id: this.employees.length + 1,
        name: employee.name,
        email: employee.email
      }
      this.employees.push(newEmployee);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
