
// Result from 2015 election
// key: ["District_Name",[PSD, PS, CDS-PP, BE, PCP-PEV, PAN, LIVRE, ALI, IL , Chega], total_seats_in_district]

// Iniciativa Liberal, Aliança and Chega votes per district are based on the 2019 European elections

// Sep 23: updated number of MPs elected per electoral circle.

var old_districts = [["Nacional",[	31,	32.38,	7.57,	10.22,	8.27,	1.39, 0.72, 1.86, 0.88, 1.49], 230],
["Aveiro",[	37.3,	27.9,	10.8,	9.6,	4.4,	1, 0.45, 1.38, 0.75, 0.97], 16],
["Beja",[	15.4,	37.3,	4.7,	8.2,	25,	0.8, 0.36, 0.97, 0.32, 1.96], 3],
["Braga",[	36.2,	30.9,	9.4,	8.8,	5.2,	0.8, 0.49, 1.14, 0.65, 0.97], 19],
["Braganca",[	40.6,	34.1,	8.7,	5.5,	3.1,	0.6, 0.36, 1.14, 0.43, 1.16], 3],
["Castelo Branco",[	28.2,	38.9,	7.1,	10,	6,	0.8, 0.49, 1.85, 0.49, 1.58] , 4],
["Coimbra",[	29.9,	35.3,	7.3,	9.9,	7,	1, 0.59, 2.18, 0.63, 0.96], 9],
["Evora",[	18.2,	37.5,	5.8,	8.6,	21.9,	0.9, 0.42, 1.69, 0.52, 2.19], 3],
["Faro",[	23.5,	32.8,	8.0,	14.1,	8.7,	2, 0.75, 1.74, 0.63, 2.10], 9],
["Guarda",[	36.7,	33.8,	8.9,	7.4,	4,	0.9, 0.34, 1.64, 0.38, 1.38], 3],
["Leiria",[	38.0,	24.8,	10.4,	9.7,	5.1,	1.2, 0.75, 2.12, 0.70, 1.56], 10],
["Lisboa",[	24.7,	33.5,	10.0,	10.9,	9.8,	2, 1.27, 2.93, 1.29, 2.18], 48],
["Portalegre",[	21.0,	42.4,	6.6,	9.2,	12.2,	0.8, 0.32, 1.33, 0.38, 2.32], 2],
["Porto",[	31.5,	32.7,	8.1,	11.1,	6.8,	1.6, 0.52, 1.34, 1.16, 0.87], 40],
["Santarem",[	27.0,	32.9,	8.8,	10.8,	9.6,	1.2, 0.54, 1.84, 0.60, 1.97], 9],
["Setubal",[	15.3,	34.3,	7.3,	13.1,	18.8,	1.9, 1.01, 1.65, 0.63, 1.89], 18],
["Viana do Castelo",[	34.8,	29.8,	10.7,	8,	5.2,	0.9, 0.35, 1.25, 0.54, 1.04], 6],
["Vila Real",[	43.6,	33.1,	7.4,	5.2,	3,	0.6, 0.35,  1.4, 0.41, 1.04], 5],
["Viseu",[	40.7,	29.7,	10.4,	6.7,	3.5,	0.7, 0.53, 1.64, 0.46, 1.28], 8],
["Azores",[	36.1,	40.4,	3.9,	7.8,	2.5,	0.9, 0.35, 2.43, 0.46, 1.24], 5],
["Madeira",[	37.8,	20.9,	6.0,	10.7,	3.6,	1.8, 1.01, 1.62, 1.00, 1.34], 6],
["Abroad - Europe",[	33.0,	29.9,	6.1,	5.8,	5.9,	0.9, 1.82, 2.07, 2.63, 0.65], 2],
["Abroad - Rest of the world",[45.1,	10.8,	3.4,	1.6,	1.5,	1.8, 0.56, 2.29, 1.95, 0.96], 2]];

// d'Hondt method for seat allocation
function dHondt(votes, seats)
{
   var num_parties = votes.length;
   var allocation = [];
   var quotient = [];
   for (var i = 0; i < votes.length; i++)
   {
      quotient[i] = votes[i];
      allocation[i] = 0;
   }
   while (seats>0){
      var idx = indexOfMax(quotient);
      allocation[idx] = allocation[idx] + 1;
      quotient[idx] = votes[idx]/(allocation[idx]+1);
      seats--;
      }
  return allocation;
}


function sumVotes(votes)
{
  var sum = 0;
  for (var i=0; i < votes.length; i++)
  {
    sum += votes[i];
  }
  if (sum > 100)
  {
    alert("Sum = " + sum + "% (greater than 100%)");
    return false;
  }
  else if (sum < 85)
  {
    alert("Sum = " + sum + "% (less than 85%)");
    return false;
  }
  return true;
}

// Count votes and determine seat allocation in each district
function countVotes()
{
 // check and update coalitions selected with radio-buttons
  coalition = checkCoalitions();
  districts = updateVotes(old_districts);

  var votes = [];
  var allocation = [0,0,0,0,0,0,0,0,0,0];
  if (coalition == 0)
  {
      votes[0] = Number(document.getElementById('psd').value);
      votes[1] = Number(document.getElementById('ps').value);
      votes[2] = Number(document.getElementById('cds').value);
      votes[3] = Number(document.getElementById('be').value);
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      votes[6] = Number(document.getElementById('liv').value);
      votes[7] = Number(document.getElementById('ali').value);
      votes[8] = Number(document.getElementById('il').value);
      votes[9] = Number(document.getElementById('che').value);


      var parties = ["PSD","PS","CDS-PP","BE","PCP-PEV","PAN", "LIVRE", "Aliança", "IL", "Chega"];
  }
  if (coalition == 1)
  {
      votes[0] = Number(document.getElementById('psd').value)+ Number(document.getElementById('cds').value);
      votes[1] = Number(document.getElementById('ps').value);
      votes[2] = 0;
      votes[3] = Number(document.getElementById('be').value);
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      votes[6] = Number(document.getElementById('liv').value);
      votes[7] = Number(document.getElementById('ali').value);
      votes[8] = Number(document.getElementById('il').value);
      votes[9] = Number(document.getElementById('che').value);

      var parties = ["PSD-CDS","PS","---","BE","PCP-PEV","PAN", "LIVRE", "Aliança", "IL", "Chega"];
  }
  if (coalition == 2)
  {
      votes[0] = Number(document.getElementById('psd').value);
      votes[1] = Number(document.getElementById('ps').value) + Number(document.getElementById('be').value);;
      votes[2] = Number(document.getElementById('cds').value);
      votes[3] = 0;
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      votes[6] = Number(document.getElementById('liv').value);
      votes[7] = Number(document.getElementById('ali').value);
      votes[8] = Number(document.getElementById('il').value);
      votes[9] = Number(document.getElementById('che').value);

      var parties = ["PSD","PS-BE","CDS-PP","---","PCP-PEV","PAN", "LIVRE", "Aliança", "IL", "Chega"];
  }
  if (coalition == 3)
  {
      votes[0] = Number(document.getElementById('psd').value)+ Number(document.getElementById('cds').value);
      votes[1] = Number(document.getElementById('ps').value) + Number(document.getElementById('be').value);
      votes[2] = 0;
      votes[3] = 0;
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      votes[6] = Number(document.getElementById('liv').value);
      votes[7] = Number(document.getElementById('ali').value);
      votes[8] = Number(document.getElementById('il').value);
      votes[9] = Number(document.getElementById('che').value);

      var parties = ["PSD-CDS","PS-BE","---","---","PCP-PEV","PAN", "LIVRE", "Aliança", "IL", "Chega"];
  }
//  console.log(votes)


  if(sumVotes(votes))
  {
    var text2 = [];

    var table_res = document.getElementById("myTable");
    table_res.innerHTML = "";
    var row = table_res.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);
    var cell9 = row.insertCell(9);
    var cell10 = row.insertCell(10);

//    var cell7 = row.insertCell(7);

    cell0.style.width = '150px';
    cell1.style.width = '50px';
    cell2.style.width = '50px';
    cell3.style.width = '50px';
    cell4.style.width = '50px';
    cell5.style.width = '50px';
    cell6.style.width = '50px';
    cell7.style.width = '50px';
    cell8.style.width = '50px';
    cell9.style.width = '50px';
    cell10.style.width = '50px';

  
//    cell7.style.width = '150px';
    cell0.innerHTML = "District"
//    cell7.innerHTML = "Party with most votes"
    if (coalition == 0)
    {
        cell1.innerHTML = "PSD";
        cell2.innerHTML = "PS";
        cell3.innerHTML = "CDS-PP";
        cell4.innerHTML = "BE";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
        cell7.innerHTML = "LIVRE";
        cell8.innerHTML = "ALI";
        cell9.innerHTML = "IL";
        cell10.innerHTML = "CHE";
    }
    if (coalition == 1)
    {
        cell1.innerHTML = "PSD-CDS";
        cell2.innerHTML = "PS";
        cell3.innerHTML = "--";
        cell4.innerHTML = "BE";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
        cell7.innerHTML = "LIVRE";
        cell8.innerHTML = "ALI";
        cell9.innerHTML = "IL";
        cell10.innerHTML = "CHE";
    }
    if (coalition == 2)
    {
        cell1.innerHTML = "PSD";
        cell2.innerHTML = "PS-BE";
        cell3.innerHTML = "CDS-PP";
        cell4.innerHTML = "--";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
        cell7.innerHTML = "LIVRE";
        cell8.innerHTML = "ALI";
        cell9.innerHTML = "IL";
        cell10.innerHTML = "CHE";
    }
    if (coalition == 3)
    {
        cell1.innerHTML = "PSD-CDS";
        cell2.innerHTML = "PS-BE";
        cell3.innerHTML = "--";
        cell4.innerHTML = "--";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
        cell7.innerHTML = "LIVRE";
        cell8.innerHTML = "ALI";
        cell9.innerHTML = "IL";
        cell10.innerHTML = "CHE";
    }


    for(var j=1; j < (districts.length);j++)
    {
      row = table_res.insertRow(j);
      var cell = row.insertCell(0);
      cell.innerHTML = districts[j][0];
      var swing = [];
      var text3 = districts[j][0] + " - ";
      var seats = districts[j][2];
      for(var k=0; k < votes.length; k++)
      {
        if (votes[k]/districts[0][1][k] < 0.25 || k > 6)
        {
            swing[k] = districts[j][1][k]*votes[k]/districts[0][1][k]  ;
        }
        else
        {  
            swing[k] = Math.max(districts[j][1][k] + votes[k]-districts[0][1][k],
                districts[j][1][k]*votes[k]/districts[0][1][k]);
        }
      }
      var idx = indexOfMax(swing);
      var alloc = dHondt(swing,seats);
      allocation = add(allocation,alloc);
      for (var i=0; i<allocation.length; i++)
      {
        text3 += parties[i] + ": " + alloc[i] + " ";
        cell = row.insertCell(i+1);
        cell.innerHTML = alloc[i];
      }
//      cell = row.insertCell(i+1);
//      cell.innerHTML = parties[idx];

    }

  // Building table with district results
  text = [];
  row = table_res.insertRow(districts.length);
  cell = row.insertCell(0);
  cell.innerHTML = "<b> TOTAL </b>";

  var rank = [0,0,0,0,0,0,0,0,0,0];
  for (var i=0; i<allocation.length; i++)
  {
    rank[i] = allocation[i] + i/100
  }
var sorted = rank.slice().sort(function(a,b){return b-a})
var ranks = rank.slice().map(function(v){ return sorted.indexOf(v) });

  for (var i=0; i<allocation.length; i++)
  {
    var j = ranks.indexOf(i);
    if(parties[j] != "---")
    {
        if(allocation[j] > 115) flag = "*"
        else flag = " "
        text +=  parties[j] + ": "  +  (allocation[j]) + " seats" + flag + "</li> <br>";
    }
    cell = row.insertCell(i+1);
    cell.innerHTML = "<b>" + allocation[i] + "</b>";
  }
    document.getElementById("results").innerHTML = text;


  }

return allocation;

}

/* function predictionTable()
{
    text = [];
    var table_res = document.getElementById("predictionHistory");
    row = table_res.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    cell0.innerHTML = "PSD";
    cell1.innerHTML = "CDS-PP";
    cell2.innerHTML = "PS";
    cell3.innerHTML = "BE";
    cell4.innerHTML = "PCP-PEV";
    cell5.innerHTML = "PAN";
    if (coalition == 0)
    {
        cell1.innerHTML = "PSD";
        cell2.innerHTML = "PS";
        cell3.innerHTML = "CDS-PP";
        cell4.innerHTML = "BE";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
    }
    if (coalition == 1)
    {
        cell1.innerHTML = "PSD-CDS";
        cell2.innerHTML = "PS";
        cell3.innerHTML = "--";
        cell4.innerHTML = "BE";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
    }
    if (coalition == 2)
    {
        cell1.innerHTML = "PSD";
        cell2.innerHTML = "PS-BE";
        cell3.innerHTML = "CDS-PP";
        cell4.innerHTML = "--";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
    }
    if (coalition == 3)
    {
        cell1.innerHTML = "PSD-CDS";
        cell2.innerHTML = "PS-BE";
        cell3.innerHTML = "--";
        cell4.innerHTML = "--";
        cell5.innerHTML = "PCP-PEV";
        cell6.innerHTML = "PAN";
    }

}
*/
// Auxiliary Functions

function add(a, b)
{
  var sum = [];
  if (a.length == b.length)
  {
    for (var i=0; i<a.length; i++)
    sum.push(a[i] + b[i]);
  }
  return sum;
}

function indexOfMax(arr)
{
    if (arr.length === 0)
    {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
