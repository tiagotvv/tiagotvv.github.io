
// Result from 2015 election
// key: ["District_Name",[PSD, PS, CDS-PP, BE, PCP-PEV, PAN], total_seats_in_district]

var old_districts = [["Nacional",[	29.5,	32.38,	9.0,	10.22,	8.27,	1.39], 230],
["Aveiro",[	37.3,	27.9,	10.8,	9.6,	4.4,	1], 16],
["Beja",[	15.4,	37.3,	4.7,	8.2,	25,	0.8], 3],
["Braga",[	36.2,	30.9,	9.4,	8.8,	5.2,	0.8], 19],
["Braganca",[	40.6,	34.1,	8.7,	5.5,	3.1,	0.6], 3],
["Castelo Branco",[	28.2,	38.9,	7.1,	10,	6,	0.8], 4],
["Coimbra",[	29.9,	35.3,	7.3,	9.9,	7,	1], 9],
["Evora",[	18.2,	37.5,	5.8,	8.6,	21.9,	0.9], 3],
["Faro",[	23.5,	32.8,	8.0,	14.1,	8.7,	2], 9],
["Guarda",[	36.7,	33.8,	8.9,	7.4,	4,	0.9], 4],
["Leiria",[	38.0,	24.8,	10.4,	9.7,	5.1,	1.2], 10],
["Lisboa",[	24.7,	33.5,	10.0,	10.9,	9.8,	2], 47],
["Portalegre",[	21.0,	42.4,	6.6,	9.2,	12.2,	0.8], 2],
["Porto",[	31.5,	32.7,	8.1,	11.1,	6.8,	1.6], 39],
["Santarem",[	27.0,	32.9,	8.8,	10.8,	9.6,	1.2], 9],
["Setubal",[	15.3,	34.3,	7.3,	13.1,	18.8,	1.9], 18],
["Viana do Castelo",[	34.8,	29.8,	10.7,	8,	5.2,	0.9], 6],
["Vila Real",[	43.6,	33.1,	7.4,	5.2,	3,	0.6], 5],
["Viseu",[	40.7,	29.7,	10.4,	6.7,	3.5,	0.7], 9],
["Azores",[	36.1,	40.4,	3.9,	7.8,	2.5,	0.9], 5],
["Madeira",[	37.8,	20.9,	6.0,	10.7,	3.6,	1.8], 6],
["Abroad - Europe",[	33.0,	29.9,	6.1,	5.8,	5.9,	0.9], 2],
["Abroad - Rest of the world",[45.1,	10.8,	3.4,	1.6,	1.5,	1.8], 2]];

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
  var allocation = [0,0,0,0,0,0];
  if (coalition == 0)
  {
      votes[0] = Number(document.getElementById('psd').value);
      votes[1] = Number(document.getElementById('ps').value);
      votes[2] = Number(document.getElementById('cds').value);
      votes[3] = Number(document.getElementById('be').value);
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      var parties = ["PSD","PS","CDS-PP","BE","PCP-PEV","PAN"];
  }
  if (coalition == 1)
  {
      votes[0] = Number(document.getElementById('psd').value)+ Number(document.getElementById('cds').value);
      votes[1] = Number(document.getElementById('ps').value);
      votes[2] = 0;
      votes[3] = Number(document.getElementById('be').value);
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      var parties = ["PSD-CDS","PS","---","BE","PCP-PEV","PAN"];
  }
  if (coalition == 2)
  {
      votes[0] = Number(document.getElementById('psd').value);
      votes[1] = Number(document.getElementById('ps').value) + Number(document.getElementById('be').value);;
      votes[2] = Number(document.getElementById('cds').value);
      votes[3] = 0;
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      var parties = ["PSD","PS-BE","CDS-PP","---","PCP-PEV","PAN"];
  }
  if (coalition == 3)
  {
      votes[0] = Number(document.getElementById('psd').value)+ Number(document.getElementById('cds').value);
      votes[1] = Number(document.getElementById('ps').value) + Number(document.getElementById('be').value);
      votes[2] = 0;
      votes[3] = 0;
      votes[4] = Number(document.getElementById('pcp').value);
      votes[5] = Number(document.getElementById('pan').value);
      var parties = ["PSD-CDS","PS-BE","---","---","PCP-PEV","PAN"];
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
    cell0.style.width = '150px';
    cell1.style.width = '50px';
    cell2.style.width = '50px';
    cell3.style.width = '50px';
    cell4.style.width = '50px';
    cell5.style.width = '50px';
    cell6.style.width = '50px';
    cell0.innerHTML = "District"
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
        swing[k] = Math.max(districts[j][1][k] + votes[k]-districts[0][1][k],0);
      }
      var alloc = dHondt(swing,seats);
      allocation = add(allocation,alloc);
      for (var i=0; i<allocation.length; i++)
      {
        text3 += parties[i] + ": " + alloc[i] + " ";
        cell = row.insertCell(i+1);
        cell.innerHTML = alloc[i];
      }

    }

  // Building table with district results
  text = [];
  row = table_res.insertRow(districts.length);
  cell = row.insertCell(0);
  cell.innerHTML = "<b> TOTAL </b>";
  for (var i=0; i<allocation.length; i++)
  {
    if(parties[i] != "---")
    {
        if(allocation[i] > 115) flag = " (majority)"
        else flag = " "
        text += "<li>" + parties[i] + ": " + allocation[i] + flag + "</li> <br>";
    }
    cell = row.insertCell(i+1);
    cell.innerHTML = "<b>" + allocation[i] + "</b>";
  }
    document.getElementById("results").innerHTML = text;


  }

}

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
