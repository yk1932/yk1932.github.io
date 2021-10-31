// Program 1: Musketeers

    // create array
    const musketeers = ["Athos", "Porthos", "Aramis"];

    // for loop
    for (let i = 0; i < musketeers.length; i++) {
      console.log('start');
        console.log(musketeers[i]);}

    //add element
    musketeers.push("D'Artagnan");

    //for each loop
    musketeers.forEach(musketeer => {
        console.log(musketeer);
    });

    // remove poor aramis
    musketeers.splice(2,1);

    //for-of loop
    for (const musketeer of musketeers) {
        console.log(musketeer);
    }

// Program 2: Sum of Values

const values = [3,11,7,2,9,10];

let sum = 0;

for (i=0; i <= values.length; i++) {
    sum = sum + values[i];
    console.log(sum);
}
