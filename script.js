
const day = "thursday";
switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break //code will continue to execute without this
    case 'tuesday': 
        console.log('Prepare theory videos');
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break
    default:
        console.log('Not a valid day');   
}

// CODING CHALLENGE USING IF/ELSE

const day1 = "shema";


if(day1 === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day1 === "tuesday") {
    console.log('Prepare theory videos');
} else if(day1 === "wednesday" || day1 === "thursday") {
    console.log('Write code examples');
} else if(day1 === "friday") {
    console.log('Record videos');
} else if(day1 === "saturday" || day1 === "sunday") {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}