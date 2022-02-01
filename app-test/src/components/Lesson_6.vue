<template>
  <div>
      <h1>hello</h1>
      <center>
        <table border="1">
            <thead>
                <th>Id</th>
                <th>employee name</th>
                <th>employee email</th>
                <th width="50">edit</th>
                <th>delete</th>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id" >
                    <td>{{ employee.id }}</td>
                    <td >
                        <input type="text" :id="'name'+employee.id" disabled v-model="employee.name">
                    </td>
                    <td><input type="text" :id="'email'+employee.id" disabled v-model="employee.email"></td>
                    <td ><center><button :id="'EditBtn'+employee.id" @click="sendEmployeeToEdit(employee)">edit</button></center></td>
                    <td><center>
                        <button v-if="editModeId != employee.id" :id="'DeleteBtn'+employee.id" @click="$emit('delete:employeeBtn',employee)">delete</button>
                        <button v-if="editModeId == employee.id" :id="'CancleBtn'+employee.id" @click="cancleSave(employee.id)">Cancle</button>
                        </center></td>
                </tr>
            </tbody>
        </table>
      </center>
  </div>
</template>

<script>
export default {
    name:"Lesson_6",
    props:{
        employees:Array,
        
    },
    data:function(){
        return{
            editModeId:false

        }
    },
    methods:{
        editEmployee(employee){
            if(document.getElementById('EditBtn'+employee.id).textContent == "edit"){
                document.getElementById('name'+employee.id).disabled = false;
                document.getElementById('email'+employee.id).disabled = false;
                document.getElementById('EditBtn'+employee.id).textContent = "save";
                this.editModeId = employee.id;
            }
            else{
                this.$emit('edit:employeeBtn',employee);
                document.getElementById('name'+employee.id).disabled = true;
                document.getElementById('email'+employee.id).disabled = true;
                document.getElementById('EditBtn'+employee.id).textContent = "edit";
                console.log("save");
                this.editModeId = false;
            }
        },
        cancleSave(employeeId){
            document.getElementById('name'+employeeId).disabled = true;
            document.getElementById('email'+employeeId).disabled = true;
            document.getElementById('EditBtn'+employeeId).textContent = "edit";
            this.editModeId = false;
        },
        sendEmployeeToEdit(employee){
            this.$emit('send:Employee',employee);
        }
    },
}
</script>

<style>

</style>