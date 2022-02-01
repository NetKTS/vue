<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <MyComponent test="Hello By NetKTS" />
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <employee-form @add:EmployeeBtn="addEmployee" :employeeForEdit="employeeForEditInApp" :isEdit="isEditInApp" @editInForm:Employee="EditInApp" @cancle="cancleBth" />
  <Lesson_6 :employees="employeesInApp" @delete:employeeBtn="deleteEmployee" @send:Employee="SendToForm"/>
  <!-- <br>
  {{employeesInApp}} -->
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
      employeesInApp:[
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
      ],
      employeeForEditInApp:{
        
      },
      isEditInApp:false
            
    }
  },
  methods:{
    addEmployee(employee){
      const newEmployee = {
        id: this.findNewId(this.employeesInApp),
        name: employee.name,
        email: employee.email
      }
      this.employeesInApp.push(newEmployee);
    },
    deleteEmployee(employee){
      this.employeesInApp = this.employeesInApp.filter((em) => em.id !== employee.id)
    },
    
    findNewId(allEmployee){
      var theMostId = 0;
      allEmployee.forEach((em)=>{
        if(em.id > theMostId){
          theMostId = em.id;
        }
      });
      return theMostId + 1;
    },
    SendToForm(employee){
      this.employeeForEditInApp.id = employee.id;
      this.employeeForEditInApp.name = employee.name;
      this.employeeForEditInApp.email = employee.email;
      this.isEditInApp = true;
    },
    EditInApp(employee){
      this.employeesInApp.forEach(em =>{
        if(em.id == employee.id){
          em.name = employee.name;
          em.email = employee.email;
        }
      })
      this.isEditInApp = false;
    },
    cancleBth(){
      this.isEditInApp = false;
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
