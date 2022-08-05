var log=function(x){
    console.log(x)
}
var tryagain=function(){
    log(`if you wanna try again press f5`)
}
var exam=function(){
    // debugger
    // make arrays
    let id=[[],]; let answer=[[],[]]
    //end make arrays
    //make variable
    let firstname; let lastname; let gender;
    let q1=Number; let q2=Number; let q3=Number; let q4=Number;
    let point=0;
    // end make variable
    firstname=prompt(`enter yor firstname`,`eiliya`)
    if(firstname){
        id[0][0]=firstname;
        lastname=prompt(`enter your lastname`,`rezaie`)
        if(lastname){
            id[0][1]=lastname;
            for(let i=1;i<=10;i++){
                gender=prompt(`enter your gender ( male or female )`,`male`)
                if(gender===`male`){ log(`ok mr ${firstname} ${lastname}`); break; }
                else if(gender===`female`){ log(`ok mrs ${firstname} ${lastname}`); break; }
                else{ log(`please try again`);continue; }
            }
            for(let i=1;i<10;i++){
                q1=Number(prompt(`2 + 9 = ?  ( 1-11  2-12 )`))
                if(q1===1){
                    point++;
                    answer[0][0]=true;
                    break;
                }else if(q1===2){
                    answer[0][0]=false;
                    break;
                }else{
                    log(`try again`)
                    continue;
                }
            }
            for(let i=1;i<10;i++){
                q2=Number(prompt(`47 - 23 = ?  ( 1-23   2-24 )`))
                if(q2===1){
                    answer[0][1]=false;
                    break;
                }else if(q2===2){
                    point++;
                    answer[0][1]=true;
                    break;
                }else{
                    log(`answer was wrong , enter again`)
                    continue;
                }
            }
            for(let i=1;i<10;i++){
                q3=Number(prompt(`7 * 5 = ?  ( 1-35  2-34 )`));
                if(q3===1){
                    point++;
                    answer[1][0]=true;
                    break;
                }else if(q3===2){
                    answer[1][0]=false;
                    break;
                }else{
                    log(`answer was wrong , try again`)
                    continue;
                }
            }
            for(let i=1;i<10;i++){
                q4=Number(prompt(`99 / 3 = ?  ( 1-32  2-33 )`))
                if(q4===1){
                    answer[1][1]=false;
                    break;
                }else if(q4===2){
                    point++
                    answer[1][1]=true;
                    break;
                }else{
                    log(`answer was wrong , please try again`)
                }
            }
            // log(point);log(`1 ${answer[0]}`);log(`2 ${answer[1]}`)
            switch(point){
                case 1:
                    log(` your point is 1/4 ( it's big trouble )`)
                    break;
                case 2:
                    log(`your point is 2/4 not bad`)
                    break;
                case 3:
                    log(` your point is 3/4 good `)
                    break;
                case 4:
                    log(` your point is 4/4 nice!`)
                    break;
            }
        }
        if(answer[0][0]===false){
            log(`you need to learning about + `)
        }
        if( answer[0][1]===false){
            log(`you need to learning about - `)
        }
        if(answer[1][0]===false){
            log(`you need to learning about *`)
        }
        if(answer[1][1]===false){
            log(`you need to learning about / `)
        }
    }else{
        tryagain()
    }
    let fullname=[firstname,lastname];
    let iduser=[,];iduser.unshift(fullname);iduser[1]=answer;log(`${iduser[0]}`);log(`firs and second answer ${iduser[1][0]} `);log(`third and fourth anwser ${iduser[1][1]}`)
}
exam();