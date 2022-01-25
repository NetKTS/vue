<template>
  <div>
      <h1>hello</h1>
      <center>
        <table border="1">
            <thead>
                <!-- <th>Id</th> -->
                <th>employee name</th>
                <th>employee email</th>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id" >
                    <!-- <td>{{ employee.id }}</td> -->
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.email }}</td>
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
            

        }
    },
    methods:{

    },
}
</script>

<style>

</style>