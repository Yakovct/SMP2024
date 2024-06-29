const express= require('express');
const myApp= express();
myApp.use(express.json());

myApp.listen(3000, function(){
    console.log("API running on port 3000")
});
myApp.get('/', function(request, response){
    response.send("Hello User!") ;
});

myApp.get('/sui', function(request, response){
    response.send(" muchas gracias aficion esta es para vosotros SUUUIIIIII") ;
});
let profList = [];
let studentList = [];
myApp.post('/prof', function(req, res){ 
    const user = req.body.name;
    profList.push(user);
    res.send(user + ' was created sucessfully');
});
myApp.get('/profs', function(req, res){ 
    res.send(profList);
});
myApp.put('/prof/:name', (req, res) => {
    const oldName = req.params.name;
    const index = profList.indexOf(oldName);
    if(index > -1){
        const newName = req.body.newName;
        profList[index] = newName;
        res.send(`${oldName} was updated to ${newName}`);
    }
    else{
        res.status(404).send(`${oldName} not found!`);
    }
});

myApp.delete('/prof/:name', function(req, res) {
    const name = req.params.name;
    const index = profList.indexOf(name);
    if(index > -1) {
        profList.splice(index, 1);
        res.send(`User ${name} has been deleted!`);
    }
    else{
        res.status(404).send(`User ${name} not found`);
    }
});
myApp.post('/student', function(req, res){ 
    const user = req.body.name;
    studentList.push(user);
    res.send(user + ' was created sucessfully');
});
myApp.get('/students', function(req, res){ 
    res.send(studentList);
});
myApp.put('/student/:name', (req, res) => {
    const oldName = req.params.name;
    const index = studentList.indexOf(oldName);
    if(index > -1){
        const newName = req.body.newName;
        studentList[index] = newName;
        res.send(`${oldName} was updated to ${newName}`);
    }
    else{
        res.status(404).send(`${oldName} not found!`);
    }
});

myApp.delete('/student/:name', function(req, res) {
    const name = req.params.name;
    const index = studentList.indexOf(name);
    if(index > -1) {
        studentList.splice(index, 1);
        res.send(`User ${name} has been deleted!`);
    }
    else{
        res.status(404).send(`User ${name} not found`);
    }
});