
// Result from 2015 election
// key: ["District_Name",[PSD, PS, CDS-PP, BE, PCP-PEV, PAN], total_seats_in_district]


// Count votes and determine seat allocation in each district
function generatePayment()
{
 var price = Number(document.getElementById('buy').value);
 var rate = Number(document.getElementById('rate').value);
 var N = Number(document.getElementById('dur').value);

    var table_res = document.getElementById("myTable");
    table_res.innerHTML = "";
    var row = table_res.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

//    var cell7 = row.insertCell(7);

    cell0.style.width = '150px';
    cell1.style.width = '150px';
    cell2.style.width = '150px';
    cell3.style.width = '150px';
//    cell7.style.width = '150px';
    cell0.innerHTML = "Ano"
        cell1.innerHTML = "Juros";
        cell2.innerHTML = "Principal";
        cell3.innerHTML = "Total";

    for(var j=1; j <= N;j++)
    {
      row = table_res.insertRow(j);
      var cell = row.insertCell(0);

      for(var k=0; k <= 3; k++)
      {
          if(k == 0)
          {
              cell.innerHTML = j
              var cell = row.insertCell(k+1);

          }
          if(k == 1)
          {
              cell.innerHTML = rate.toFixed(2)
              console.log(rate)
              var cell = row.insertCell(k+1);

          }
          if(k == 2)
          {
              if(j == N)
              {
                  var x = 100
                  cell.innerHTML = x.toFixed(2)
              }
              else
              {
                   var x = 0
                   cell.innerHTML = x.toFixed(2)
              }
              var cell = row.insertCell(k+1);

          }
          if (k == 3)
          {
              cell.innerHTML = (rate + x).toFixed(2)
          }

      }
    }
    row = table_res.insertRow(N+1);
var cell = row.insertCell(0);
var cell = row.insertCell(1);
    var cell = row.insertCell(2);
        var cell = row.insertCell(3);
        row = table_res.insertRow(N+2);
        var cell = row.insertCell(0);
        var cell = row.insertCell(1);
            var cell = row.insertCell(2);
    cell.innerHTML = "<b> Total Recebido </b>"
    var cell = row.insertCell(3);
    var total =  (N*rate + 100).toFixed(2)
    cell.innerHTML = "<b>" + total + "</b>"



        row = table_res.insertRow(N+3);

var cell = row.insertCell(0);
var cell = row.insertCell(1);
    var cell = row.insertCell(2);
    cell.innerHTML = "<b> Preço Compra </b>"
    var cell = row.insertCell(3);
    var total2 =  (price).toFixed(2)
    cell.innerHTML = "<b>" + total2 + "</b>"
    row = table_res.insertRow(N+4);
var cell = row.insertCell(0);
var cell = row.insertCell(1);
    var cell = row.insertCell(2);
    cell.innerHTML = "<b> Lucro </b>"
    var cell = row.insertCell(3);
    var total3 =  (total-price).toFixed(2)
    cell.innerHTML = "<b>" + total3 + "</b>"
    row = table_res.insertRow(N+5);
var cell = row.insertCell(0);
var cell = row.insertCell(1);
    var cell = row.insertCell(2);
    cell.innerHTML = "<b> Juro Efetivo(yield) </b>"
    var cell = row.insertCell(3);
//    var total4 =  ((Math.pow(1+total3/price,1/N)-1)*100).toFixed(2)
    var total4 = ((total3/price/N) * 100).toFixed(2)
    cell.innerHTML = "<b>" + total4 + "% aa</b>"
    var det = document.getElementById("results");
    det.innerHTML = "<p> Obs.:A taxa de juro efetiva assume juros simples <br> Não há capitalização ou reinvestimento dos juros<br>recebidos anualmente."

  }
