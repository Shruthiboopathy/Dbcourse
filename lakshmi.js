function stu_data_retrive(){
//alert("hai");
let stu_details=[
    {s_name:"Abi", grade:"A"},
    {s_name:"Ahalya", grade:"A"},
    {s_name:"Banu", grade:"C"},
    {s_name:"Chithra", grade:"B"},
    {s_name:"Divya", grade:"C"},
    {s_name:"Diya", grade:"D"},
    {s_name:"Elakkiya", grade:"A"},
    {s_name:"Fatima", grade:"A"},
    {s_name:"Greeta", grade:"B"},
    {s_name:"Helen", grade:"B"}
]
let student_name=document.getElementById("stu_name").value;
let student_grade=document.getElementById("stu_grade").value;


let grade=stu_details.filter(get_grade);

function get_grade(){
    
    for(let i=0;i<stu_details.length;i++){
    if(student_name==stu_details[i].s_name){
        return stu_details[i].grade;
    }
        //console.log(stu_details[i].grade);        
    }
    
}

let st_name=stu_details.filter(get_name);
function get_name(){
    
    for(let i=0;i<stu_details.length;i++){
    if(student_grade==stu_details[i].grade){
        return stu_details[i].s_name;
    }
        //console.log(stu_details[i]);            
    }
    
}

document.getElementById("s_name").innerText = grade;
document.getElementById("grade").innerText = st_name;
}
