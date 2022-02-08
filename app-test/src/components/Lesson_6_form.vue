<template>
  <div id="employee-form"></div>
  <h1>form</h1>
  <form v-if="!isEdit" @submit.prevent="addEmployeeBtn">
      <label >name</label><br>
      <input v-model="employee.name" type="text"><br>
      <label >description</label><br>
      <input v-model="employee.description" type="text"><br>
      <button>Add Employee</button>
  </form>

  <form v-if="isEdit" @submit.prevent="">
      <label >name</label><br>
      <input id="EditName" :value="employeeForEdit.name" type="text"><br>
      <label >description</label><br>
      <input id="EditEmail" :value="employeeForEdit.description" type="text"><br>
      <button @click="EditEmployeeBtn()">save</button>
      <button @click="cancleBtn()">cancle</button>
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
                description:''
            },
            forEdit:{
                name:this.employeeForEdit.name,
                description:this.employeeForEdit.description
            }
        }
    },
    methods:{
        addEmployeeBtn(){
            this.$emit('add:EmployeeBtn',this.employee)
            this.employee.name = ""
            this.employee.description = ""
        },
        EditEmployeeBtn(){
            const edit = {
                id:this.employeeForEdit.id,
                name: document.getElementById("EditName").value,
                description: document.getElementById("EditEmail").value
            }
            this.$emit('editInForm:Employee',edit)
            document.getElementById("EditName").value = "";
            document.getElementById("EditEmail").value = "";
        },
        cancleBtn(){
            document.getElementById("EditName").value = "";
            document.getElementById("EditEmail").value = "";
            this.$emit('cancle')
        }
    }
    
}
</script>

<style>

</style>