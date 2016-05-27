/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = readline().toString();
var C = readline();
var S = parseInt(readline());
var digitMap = ["1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"];
var output = [];
var tmpLine = "";

printErr("Debug: " + N + " | " + C + " | " + S);

for (var line = 0 ; line < (3+(2*S)) ; line++) {
    for (var num = 0 ; num < N.length ; num++) {
        
        // first line = 0
        if (line === 0) {
            // 0 = A
            if (digitMap[N.substr(num,1)].substr(0,1) == "1") {
                tmpLine += " " + [...Array(S)].map(ret => C).join("") + " "; 
            } else {
                tmpLine += " " + [...Array(S)].map(ret => " ").join("") + " "; 
            }
            
            if (N.length-1 != num) {
                tmpLine += " ";
            }
        }
        
        // top
        if (line > (0) && line <= (S) ) {
            // 5 = F / 1 = B
            if (digitMap[N.substr(num,1)].substr(5,1) == "1") {
                tmpLine += C;
            } else {
                tmpLine += " ";
            }
            
            if (digitMap[N.substr(num,1)].substr(1,1) == "1") {
                tmpLine += [...Array(S)].map(ret => " ").join("") + C;
            } else {
                tmpLine += [...Array(S+1)].map(ret => " ").join(""); 
            }
            
            if (N.length-1 != num) {
                tmpLine += " ";
            }
        }
        
        // middle
        if (line === (1+S)) {
            // 6 = G
            if (digitMap[N.substr(num,1)].substr(6,1) == "1") {
                tmpLine += " " + [...Array(S)].map(ret => C).join("") + " ";   
            } else {
                tmpLine += " " + [...Array(S)].map(ret => " ").join("") + " ";   
            }
            
            if (N.length-1 != num) {
                tmpLine += " ";
            }
        }
        
        // bottom
        if (line > (1+S) && line < (2+(2*S)) ) {
            // 4 = E / 2 = C
            if (digitMap[N.substr(num,1)].substr(4,1) == "1") {
                tmpLine += C;
            } else {
                tmpLine += " ";
            }
            
            if (digitMap[N.substr(num,1)].substr(2,1) == "1") {
                tmpLine += [...Array(S)].map(ret => " ").join("") + C;
            } else {
                tmpLine += [...Array(S+1)].map(ret => " ").join(""); 
            }
            
            if (N.length-1 != num) {
                tmpLine += " ";
            }
        }
        
        // last line = 3+(2*S)
        if (line === (2+(2*S))) {
            // 3 = D
            if (digitMap[N.substr(num,1)].substr(3,1) == "1") {
                tmpLine += " " + [...Array(S)].map(ret => C).join("") + " ";
            } else {
                tmpLine += " " + [...Array(S)].map(ret => " ").join("") + " ";   
            }
            
            if (N.length-1 != num) {
                tmpLine += " ";
            }
        }
    }
    
    var ok = false;
    while (!ok) {
        if (tmpLine.substr(tmpLine.length-1,1) == " ") {
            tmpLine = tmpLine.substr(0,tmpLine.length-1);
        } else {
         ok = true;   
        }
    }
    
    
    output.push(tmpLine);
    tmpLine = "";
}

print(output.join("\n"));

/*
_a_
f_b
_g_
e_c
_d_
*/
