var winners = [];
var winnersQF = [];
var winnersSF = [];
var winnersF = [];
var tb;


function createQF()
{

  winners[0] = Number(document.getElementById('g0').value);
  winners[1] = Number(document.getElementById('g1').value);
  winners[2] = Number(document.getElementById('g2').value);
  winners[3] = Number(document.getElementById('g3').value);
  winners[4] = Number(document.getElementById('g4').value);
  winners[5] = Number(document.getElementById('g5').value);
  winners[6] = Number(document.getElementById('g6').value);
  winners[7] = Number(document.getElementById('g7').value);

  if (winners[0] == 1)
  {
    winners[0] = "Switzerland";
  }
  else {
    winners[0] = "Poland";
  }
  if (winners[1] == 1)
  {
    winners[1] = "Croatia";
  }
  else {
    winners[1] = "Portugal";
  }
  if (winners[2] == 1)
  {
    winners[2] = "Wales";
  }
  else {
    winners[2] = "Northern Ireland";
  }
  if (winners[3] == 1)
  {
    winners[3] = "Belgium";
  }
  else {
    winners[3] = "Hungary";
  }
  if (winners[4] == 1)
  {
    winners[4] = "Germany";
  }
  else {
    winners[4] = "Slovakia";
  }
  if (winners[5] == 1)
  {
    winners[5] = "Italy";
  }
  else {
    winners[5] = "Spain";
  }
  if (winners[6] == 1)
  {
    winners[6] = "France";
  }
  else {
    winners[6] = "Ireland";
  }
  if (winners[7] == 1)
  {
    winners[7] = "England";
  }
  else {
    winners[7] = "Iceland";
  }

  var text = '<table style="width:40%">'+
      '<tr>'+
        '<td>' + winners[0] + ' v ' +  winners[1] + '</td>' +
        '<td> <input id="q0" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
      '<tr>'+
        '<td>' + winners[2] + ' v ' +  winners[3] + '</td>' +
        '<td> <input id="q1" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
      '<tr>'+
        '<td>' + winners[4] + ' v ' +  winners[5] + '</td>' +
        '<td> <input id="q2" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
      '<tr>'+
        '<td>' + winners[6] + ' v ' +  winners[7] + '</td>' +
        '<td> <input id="q3" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
  '</table>' +

  '<br>' +
  '<input onclick="createSF(winners)" type="submit" value="Confirm" />' +
  '<br />' +
  '<p>';
  document.getElementById("qf").innerHTML = text;




}

function createSF()
{
  winnersQF[0] = Number(document.getElementById('q0').value);
  winnersQF[1] = Number(document.getElementById('q1').value);
  winnersQF[2] = Number(document.getElementById('q2').value);
  winnersQF[3] = Number(document.getElementById('q3').value);
  console.log(winners);
  if (winnersQF[0] == 1)
  {
    winnersQF[0] = winners[0];
  }
  else {
    winnersQF[0] = winners[1];
  }
  if (winnersQF[1] == 1)
  {
    winnersQF[1] = winners[2];
  }
  else {
    winnersQF[1] = winners[3];
  }
  if (winnersQF[2] == 1)
  {
    winnersQF[2] = winners[4];
  }
  else {
    winnersQF[2] = winners[5];
  }
  if (winnersQF[3] == 1)
  {
    winnersQF[3] = winners[6];
  }
  else {
    winnersQF[3] = winners[7];
  }
  var text = '<table style="width:40%">'+
      '<tr>'+
        '<td>' + winnersQF[0] + ' v ' +  winnersQF[1] + '</td>' +
        '<td> <input id="sf0" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
      '<tr>'+
        '<td>' + winnersQF[2] + ' v ' +  winnersQF[3] + '</td>' +
        '<td> <input id="sf1" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
  '</table>' +

  '<br>' +
  '<input onclick="createF()" type="submit" value="Confirm" />' +
  '<br />' +
  '<p>';
  document.getElementById("sf").innerHTML = text;




}

function createF()
{
  winnersSF[0] = Number(document.getElementById('sf0').value);
  winnersSF[1] = Number(document.getElementById('sf1').value);
  if (winnersSF[0] == 1)
  {
    winnersSF[0] = winnersQF[0];
  }
  else {
    winnersSF[0] = winnersQF[1];
  }
  if (winnersSF[1] == 1)
  {
    winnersSF[1] = winnersQF[2];
  }
  else {
    winnersSF[1] = winnersQF[3];
  }

  var text = '<table style="width:40%">'+
      '<tr>'+
        '<td>' + winnersSF[0] + ' v ' +  winnersSF[1] + '</td>' +
        '<td> <input id="f0" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
  '</table>' +

  '<br>' +
  '<input onclick="createChamp()" type="submit" value="Confirm" />' +
  '<br />' +
  '<p>';
  document.getElementById("f").innerHTML = text;



}

function createChamp()
{
  winnersF[0] = Number(document.getElementById('f0').value);
  if (winnersF[0] == 1)
  {
    winnersF[0] = winnersSF[0];
  }
  else {
    winnersF[0] = winnersSF[1];
  }

  var text = '<table style="width:40%">'+
      '<tr>'+
        '<td> Minute of first goal in final (1-120), 0 if no goal </td>' +
        '<td> <input id="tie" name="user" size="5" type="text" value="" /><br /> </td>'+
      '</tr>' +
  '</table>' +

  '<br>' +
  '<input onclick="createTieBreak()" type="submit" value="Confirm" />' +
  '<br />' +
  '<p>';
  document.getElementById("tb").innerHTML = text;
}

function createTieBreak()
{
  tb = Number(document.getElementById('tie').value);
  var ctrlText = randomString(8);
  var text = winners[0]+','+
  winners[1]+','+
  winners[2]+','+
  winners[3]+','+
  winners[4]+','+
  winners[5]+','+
  winners[6]+','+
  winners[7]+','+
  winnersQF[0]+','+
  winnersQF[1]+','+
  winnersQF[2]+','+
  winnersQF[3]+','+
  winnersSF[0]+','+
  winnersSF[1]+','+
  winnersF[0]+','+
  tb+","+ctrlText;
  var hashed = sha1(text);

  
  //document.getElementById("results").innerHTML = text + "<p>" + hashed;

  document.getElementById("tb2").innerHTML = "Text = " + text + "<p>" + "Hash = " + hashed + "<p>" + "ControlText = " + ctrlText;
}

function randomString(n)
{
  var allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var text = "";
  for (var i = 0; i < n; i++)
  {
    var idx = Math.floor(Math.random() * allowedChars.length);
    text += allowedChars.charAt(idx);
  }
  return text;
}
