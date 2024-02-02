switch (new Date().getDay()) {
    case 0:
        console.log(`Sunday`);
        break;
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
}

switch (new Date().getMonth()) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31);
        break;
    case 2:
        console.log(`28 or 29`);
        break
    default: 
        console.log(30);
}