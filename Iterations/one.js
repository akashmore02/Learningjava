roll_no = 5
for (i=1; i<=5; i++)
{
    if(i==roll_no){
        console.log(`Roll No ${i} is Absent`);
    }
    else{
    console.log(`Roll No ${i} is present`);
    }
}


//break statement
roll_no = 5
for (i=1; i<=5; i++)
{
    if(i==roll_no){
        console.log(`Roll No ${i} is Absent`);
        break;
    }
    console.log(`Roll No ${i} is present`);
    }



//continue statement
roll_no = 5
for (i=1; i<=10; i++)
{
    if(i==roll_no){
        console.log(`Roll No ${i} is Absent`);
        continue;
    }
    console.log(`Roll No ${i} is present`);
    }

