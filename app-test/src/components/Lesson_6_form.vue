<template>
  <div id="employee-form"></div>
  <h1>form</h1>
  <form v-if="!isEdit" @submit.prevent="addEmployeeBtn">
      <label >Employee name</label><br>
      <input v-model="employee.name" type="text"><br>
      <label >Employee email</label><br>
      <input v-model="employee.email" type="text"><br>
      <button>Add Employee</button>
  </form>

  <form v-if="isEdit" @submit.prevent="EditEmployeeBtn">
      <label >Employee name</label><br>
      <input id="EditName" :value="employeeForEdit.name" type="text"><br>
      <label >Employee email</label><br>
      <input id="EditEmail" :value="employeeForEdit.email" type="text"><br>
      <button @click="EditEmployeeBtn()">save</button>
      <button>cancle</button>
  </form>
</template>

<script>
export default {
    name:"employee-form",
    props:{
        employeeForEdit:Object,
        isEdit:Boolean,
    },
    data:function(){
        return{
            employee:{
                name:'',
                email:''
            },
            forEdit:{
                name:this.employeeForEdit.name,
                email:this.employeeForEdit.email
            }
        }
    },
    methods:{
        addEmployeeBtn(){
            this.$emit('add:EmployeeBtn',this.employee)
            this.employee.name = ""
            this.employee.email = ""
        },
        EditEmployeeBtn(){
            const edit = {
                id:this.employeeForEdit.id,
                name: document.getElementById("EditName").value,
                email: document.getElementById("EditEmail").value
            }
            this.$emit('editInForm:Employee',edit)
            document.getElementById("EditName").value = "";
            document.getElementById("EditEmail").value = "";

        }
    }
    
}
</script>

<style>

</style>