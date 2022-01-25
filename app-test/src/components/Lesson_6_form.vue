<template>
  <div id="employee-form"></div>
  <h1>form</h1>
  <form @submit.prevent="addEmployeeBtn">
      <label >Employee name</label><br>
      <input v-model="employee.name" type="text"><br>
      <label >Employee email</label><br>
      <input v-model="employee.email" type="text"><br>
      <button>Add Employee</button>
  </form>
</template>

<script>
export default {
    name:"employee-form",
    data:function(){
        return{
            employee:{
                name:'',
                email:''
            },
        }
    },
    methods:{
        addEmployeeBtn(){
            this.$emit('add:EmployeeBtn',this.employee)
            this.employee.name = ""
            this.employee.email = ""
        }
    }
    
}
</script>

<style>

</style>