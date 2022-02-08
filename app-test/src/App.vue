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
  mounted(){
    this.getEmployees()
  },
  methods:{
    async getEmployees(){
      try {
        const response = await fetch("http://localhost:3000/parking")
        const data = await response.json();
        this.employeesInApp = data.data;
        console.log(data.data)
      } catch (error) {
        console.log("Error")
      }
    },
    async addEmployee(employee){
      const newEmployee = {
        id: this.findNewId(this.employeesInApp),
        name: employee.name,
        description: employee.description
      }
      this.employeesInApp.push(newEmployee);
      const response = await fetch("http://localhost:3000/parking/add",{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(newEmployee)
        
      })
      return response.json()
    },
    async deleteEmployee(employee){
      this.employeesInApp = this.employeesInApp.filter((em) => em.id !== employee.id)
      const response = await fetch(`http://localhost:3000/parking/delete/${employee.id}`,{
        method:'DELETE',
        mode:'cors',
        headers:{
          'Content-Type': 'application/json'
        },
        // body:JSON.stringify(employee.id)
        
      })
      return response.json()
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
      this.employeeForEditInApp.description = employee.description;
      this.isEditInApp = true;
    },
    async EditInApp(employee){
      this.employeesInApp.forEach(em =>{
        if(em.id == employee.id){
          em.name = employee.name;
          em.description = employee.description;
        }
      })
      this.isEditInApp = false;
      const response = await fetch(`http://localhost:3000/parking/update/${employee.id}`,{
        method:'PUT',
        mode:'cors',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(employee)
        
      })
      return response.json()
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
