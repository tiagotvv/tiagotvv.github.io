/* var old_districts = [["Nacional",[	29.5,	32.38,	9.0,	10.22,	8.27,	1.39], 230],
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
*/
function checkCoalitions()
   {
       var c1 = document.getElementById('none'); // Checkbox 1
       var c2 = document.getElementById('right'); // Checkbox 1
       var c3 = document.getElementById('left'); // Checkbox 1
       var c4 = document.getElementById('both'); // Checkbox 1
       if (c1.checked) return 0; // If checked, add c1 value
       if (c2.checked) return 1; // If checked, add c1 value
       if (c3.checked) return 2; // If checked, add c1 value
       if (c4.checked) return 3;; // If checked, add c1 value
   }

function updateVotes(districts)
{
    var coalition = checkCoalitions();
    if (coalition == 0)
    {
        var new_districts = createArray();
        for(var j = 0; j < (districts.length);j++)
        {
            new_districts[j][0] = districts[j][0];
            new_districts[j][1] = districts[j][1].slice(0);
            new_districts[j][2] = districts[j][2];
            new_districts[j][1][0] = new_districts[j][1][0];
            new_districts[j][1][1] = new_districts[j][1][1];
            new_districts[j][1][2] = new_districts[j][1][2];
            new_districts[j][1][3] = new_districts[j][1][3];
            new_districts[j][1][4] = new_districts[j][1][4];
            new_districts[j][1][5] = new_districts[j][1][5];
        }
    }
    if (coalition == 1)
    {
        var new_districts = createArray();
        for(var j = 0; j < (districts.length);j++)
        {
            new_districts[j][0] = districts[j][0];
            new_districts[j][1] = districts[j][1].slice(0);
            new_districts[j][2] = districts[j][2];
            new_districts[j][1][0] = new_districts[j][1][0] + new_districts[j][1][2];
            new_districts[j][1][1] = new_districts[j][1][1];
            new_districts[j][1][2] = 0;
            new_districts[j][1][3] = new_districts[j][1][3];
            new_districts[j][1][4] = new_districts[j][1][4];
            new_districts[j][1][5] = new_districts[j][1][5];
        }
    }
    if (coalition == 2)
    {
        var new_districts = createArray();
        for(var j = 0; j < (districts.length);j++)
        {
            new_districts[j][0] = districts[j][0];
            new_districts[j][1] = districts[j][1].slice(0);
            new_districts[j][2] = districts[j][2];
            new_districts[j][1][0] = new_districts[j][1][0];
            new_districts[j][1][1] = new_districts[j][1][1]+new_districts[j][1][3];
            new_districts[j][1][2] = new_districts[j][1][2];
            new_districts[j][1][3] = 0;
            new_districts[j][1][4] = new_districts[j][1][4];
        }
    }
    if (coalition == 3)
    {
        var new_districts = createArray();
        //var new_districts = clone(districts);
        for(var j = 0; j < (districts.length);j++)
        {
            new_districts[j][0] = districts[j][0];
            new_districts[j][1] = districts[j][1].slice(0);
            new_districts[j][2] = districts[j][2];
            new_districts[j][1][0] = new_districts[j][1][0] + new_districts[j][1][2];
            new_districts[j][1][1] = new_districts[j][1][1] + new_districts[j][1][3];
            new_districts[j][1][2] = 0;
            new_districts[j][1][3] = 0;
            new_districts[j][1][4] = new_districts[j][1][4];
            new_districts[j][1][5] = new_districts[j][1][5];
        }
    }
    return new_districts;
}

function createArray()
{
    var district = new Array(23);
    for (var j = 0; j < district.length; j++)
    {
        district[j] = new Array(3);
        district[j][1] = new Array(6);
    }
    return district;
}

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
