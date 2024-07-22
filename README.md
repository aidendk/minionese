# minionese

Hey! thanks for checking out this project :) I'm building this as a fun way to improve my mobile app development skills, and hoping to show others how cool mobile development is with Expo and React Native. Maybe you'll learn a thing or two about minionese while you take a look.

This project is built using TypeScript with Expo and React Native, along with Tamagui for styling.

This is still a work in progress and I'm still deciding what I want to do this project- Eventually I may attempt connecting it to a backend like MongoDB Realm, or experiment with self-hosting a backend server to learn how to do that. Some buttons currently have no functionality, while others will lead to other pages / modals (ex. "More Stats" button opens up a modal, and each unit has separate pages for Grammar and Dialogue, but the "Extra Credit" and "Activity" sections currently have no functionality).

<h2>Installation Instructions</h2>

If you're interested in testing this project out, here's some instructions to get started. <br/>
(I'm going to assume you have node + npm or some other variation like yarn or bun installed)

- Download the ZIP file of the respository.
- Open it your code IDE of choice, for example VS Code.
- Open a new terminal and install the package dependencies (ex. if you're using npm, type npm install)
- Download the Expo Go app on your phone, no need to log in or create an account.
- Type npm run start in the terminal, and wait a bit.
- Once it's done loading, there will be a QR code in the terminal- you might have to scroll up in the terminal a bit to see it.
- Scan the QR code with your camera, and open it in the Expo Go app.
- ** Make sure the device you are running the code on and the device you are using to test the code are connected to the same WiFi network.
- ** You will also receive a prompt from Expo Go requesting access to your local network, accept this. This is what allows you to run your code on your phone without having to plug it into the device running the code. You may have to scan the QR code again after doing this.
- If you still can't get your phone to connect, you can use an emulator to display the project. In the terminal, using the keyboard and pressing "a" will open an android emulator and prompt you to download the dependencies required for this. Pressing "i" will open an iOS emulator and prompt you to download the dependencies for this (You will need a Mac for this, as it requires XCode).
- After that, you're done! You can make changes to the code and once the file is saved, the project updates in real time, displaying your changes immediately. Have fun! :)

<h3>Getting Started</h3>

To start, try editing some text in the **src/app/(drawer)/(index)/index.tsx** file. This file is like the home page, where all of the smaller components of the page come together. Try changing the text on line 29 and save the file, and see what happens. You should see the updates you made to the text appear on your phone!

<h3>Editing the JSON Data</h3>

Look into the units.json file **(the path is: "src/assets/data/units.json")**. 
Each object represents a different unit, each with its own info.

The Unit displayed under Today's Studies is determined by the **"unitCompleted"** value of each unit. A function called **getCurrentUnit()** in the file **src/assets/data/currentUnit.ts** runs a for loop that checks each unit the JSON file to see if "unitCompleted" is true or false. In sequential order, the first unit that has "unitCompleted" as false will be displayed. So, if you want to display Unit 3 instead of 2, edit the file to make sure that every unit before Unit 3 has "unitCompleted" set to true.

You can change other values as well and see them update, such as changing the **"grammarCompleted** value. When this is changed between true and false, you can see the color of the corresponding icon change in "My Path", and in the Today's Studies section if you're changing the values for the current unit displayed there.

<h3>Final Notes</h3>

Feel free to continue exploring and trying new things with this project! If you're still interested in learning more about Expo / React Native, check out this tutorial by NotJust.Dev: [Build a Local First Trello Clone with React Native & Realm](https://www.youtube.com/watch?v=WiXs0JbA3_k&list=LL&index=3)
He does a great job explaing every step of the project, and you'll even get to work with some backend stuff using MongoDB Realm :)

If you have any questions about the project, feel free to reach out to me! I'd be happy to answer any questions you have.
