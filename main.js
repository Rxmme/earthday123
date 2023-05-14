for ( var i = 10; i >= 0 ; i--) {
    console.log(i);
    document.write(i +"<br>");
}

for (var i = 0 ; i < 10; i++) {
    console.log((i+1) +".hello world" );
    document.write((i+1) +"hello world" +"<br>");
}

//for (var i =1; i <=10 ; i++){
    //console.log("bảng cửu chương " + i);
    //for( var g = 1; g <= 10; g++) {
        //console.log(i +"x"+ g + "=" + i * g );
    //}
//}

var i = 0;
while( i < 10) {
    console.log ( i);
    document.write(i + "<br>");
    i++;
}

var a = 5
//while( a < 5) {
    //console.log("vòng lặp while");
    //a++;
//}

do {
    console.log (a);
    a++;
}while ( a< 5);