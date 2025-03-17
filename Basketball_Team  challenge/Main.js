
//let $ begin john scores and __ for Mike


var ja =89;
var jb =120;
var jc =103;
var ma= 116;
var mb= 94;
var mc= 124;
var johnTTScore = ja + jb + jc;
var mikeTTScore = ma + mb + mc; 

if (johnTTScore > mikeTTScore){
  console.log("John win with " + johnTTScore + " score");
}else if (johnTTScore < mikeTTScore){
  console.log("Mike win with " + mikeTTScore);
} else {
  console.log ( "both team draw");
}
