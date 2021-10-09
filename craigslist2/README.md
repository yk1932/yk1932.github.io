# Redesigning Craigslist #2

## Making the website responsive

For this assignment, I added three breaking points for small, medium, and large width sizes to make the website responsive. 

There were some parts in the website that didn't need adjusting because I made use of viewport width for the outer margins. These were 

1. The very top header with the language button and sign in button
2. The second header ontaining the craigslist logo, favorites 
4. The table containing the job information


The parts that needed adjustment were 

1. header with the search bar
2. menu bar
3. footer 

The width of the componenets exceeded the width once they were condensed into mobile width. Hence,I made the search bar and post button stack up with each other for the smaller width ports. 

The three breaking points I assigned were 

1. Phones (320px ~ 480px)

<!-- @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
} 
 -->
2. iPad (portrait + landscape - 768px ~ 1024px)

<!-- @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
} -->

3. Desktop

<!-- @media only screen  and (min-width : 1224px) {
/* Styles */
}

 -->