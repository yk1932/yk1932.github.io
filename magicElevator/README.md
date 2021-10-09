#  Sound-Assignment
 
# Project Description: 

For our project, we wanted to create a website where we allow the user to immerse themselves in a realistic situation where they would experience the different activities when they are taking an elevator everyday. During the whole process of riding the elevator from the first floor to the fifth floor, the user will be able to hear the various sounds that are going on around them. The most important concept of this project is for the user to hear and learn more about this ongoing gossip about a CEO of a company,  Sebastian Walker, who is secretly dating his rival company’s boss’s secretary, Karen. So as the user navigates through the five different floors, the user is expected to have a clear idea of what the gossip that is going on is about by the end, which would be the fifth floor, and with a little twist as well. 

# Process: 

# Visuals:
The main visuals of the website were made using illustrator. Individual components of the svg files - the character, speech bubble, elevator door, etc - were separated into layers to make the coding process easier. The main color scheme of the website was kept consistent, leaning towards a more pastel and soft color palette to match the light-hearted  story line. The style of the illustrations were kept simple and minimalistic to give a playful feeling. 

# Sound Design: 

We wanted all of the conversations to be made by us so we decided to try our hand at doing some voice acting. We got together and recorded the speech audio for the gossip in a quiet room with an iPhone. One of the concepts for the audio was the focus on specific people. This meant that we could afford to have the microphone close to the speaker and have the audio be really clear. We did multiple recordings for each dialogue until we found one which fit the sound aesthetic we were looking for. Aside from recording the conversations that the different characters will be having with each other about the gossip, we also used Audacity to mix together sounds that we might be hearing within an elevator as the background audio when the user is not listening in on the gossip. We thought of different ideas for what could be happening in the background such as typing on a phone, setting an alarm, eating a snack, etc. We then mixed these various sounds together through Audacity to create a background audio that would be playing at the back to create a more immersive experience for the user. As for the sounds of the elevator such as the elevator ding when it arrives on a new floor and the sound of the elevator doors opening and the pressing of buttons, we recorded all of these sounds ourselves by merely placing the phone near the elevator of our dormitories and recording the sounds. We also had to use some features of Audacity like noise reduction of any background noises within those audio clips in order to get a clearer sound. 

# Code: 
The main interaction of the website was moving around the SVG images and triggering the audio to play when hovering and clicking above the speaking characters. The SVG file was embedded in the html file and the javascript functions were called when the user hovered over a specific id, representing a person. The classes of the SVG files were edited in the html file to change the colors of the svgs. In particular, to make speech bubbles appear and disappear, the colors were changed from visible to transparent.
 To make sure the users listened to all the dialogues, essential to moving the narrative forward, the elevator moved on to the next floor only after the user interacted and listened to all the dialogues through using a boolean variable. The background sound of the elevator is triggered immediately after the user interacts with the website, through a click, and moves the mouse around and is played during the entirety of the interaction, under the dialogues. 
 
 # Reflection: 
 
Looking back on our expectations and goals, I think the final working version fulfilled all the requirements we have set initially. Many of the decisions regarding the interaction of the website came in the creation process. Small details such as the animation, how to enable the audio, etc came through trial and error in the process. Similar with the case for the sound design. Once we had the script written and all recordings done, most of the design choices were made in the editing process, using audacity to tweak it into something that matched our initial concept. We had multiple feedback sessions within the group. After every version was done, we looked for small improvements and made them accordingly which contributed to a more polished final working version. 


