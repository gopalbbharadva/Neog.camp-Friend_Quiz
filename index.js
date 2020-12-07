var rls=require('readline-sync')
var ch=require('chalk')
var score=0;
var hscore=[
  {
    name:'Gopal',
    score:8
  },
  {
    name:'Vicky',
    score:6
  }
]
var q=[
  {
    question:"Which is my favourite movie?:",
    answer:"3 idiots"
  },
  {
    question:"What is my favourite sport?:",
    answer:"cricket"
  },
  {
    question:"Which is my favourite cricketer?:",
    answer:"rohitman sharma"
  },
  {
    question:"Which is my favourite programming language?:",
    answer:"java"
  },
  {
    question:"Who is my favourite actor?:",
    answer:"amir khan"
  },
  {
    question:"What is my favourite food?:",
    answer:"dhosa"
  },
  {
    question:"What is my hobby?:",
    answer:"app development"
  },
  {
    question:"Who is my best friend?:",
    answer:"jugal"
  }
]
var name=rls.question("Give your name?:");
console.log("\n")
for(var i=0;i<q.length;i++)
  {
    var cur_obj=q[i];
    ask(cur_obj)
  }

function ask(current)
{
  var ans=rls.question(ch.blue.underline(current.question))
  if(ans.toLowerCase()==current.answer.toLowerCase())
  {
      console.log(ch.green.bold("Awesome!u r right!!"))
      score++;
  }
  else
  {
    console.log(ch.red.bold("Oops!u r wrong!!"))
    console.log(ch.white("Answer is:"+current.answer))
  }
    console.log(ch.yellow("Your score:"+score));
    console.log("\n")
}
console.log(ch.magenta("****High Score****"))
for(var i=0;i<hscore.length;i++)
{
  if(score>hscore[i].score)
    hscore.push({name:name,score:score})
    console.log(ch.green.bold("Name:"+hscore[i].name))
    console.log(ch.yellow("Score:"+hscore[i].score))
}