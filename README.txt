By Esan Alvarez-Ghaffar

My Project GitHub Repository: https://github.com/EsanAlvarez/Password_Wallet_App

use this link to my GitHub Repository is anything goes wrong when downloading my project, because of the node modules increasing the size of the project files, i had to delete them when uploading it to GitHub. Below will be what you need to install to get these node modules back which are required to successfully run the password wallet (node modules contain packages to create different functions and components).


I use a Local database for my password wallet, since i can not send my local database i will provide steps to create one using MySQL Workbench 8.0 CE.

Step 1 - Install and setup MySQL Workbench 8.0 CE.

Step 2 - Open MySQL Workbench and create a local database, make sure the hostname and port details is your local instance connection, create a password, use 'TheFlash17' because it what i have used for the project, store the password in the vault and save local database connection.

Step 3 - On the Schemas, right click and choose create schema, name it 'passwordwallet' and apply.

Step 4 - look at the schema on the left and navigate to the table tab and right click and create table.

Step 5 - Name the table 'passwords'.

Step 6 - create Column 'ID', Datatype 'INT', tick boxes for ID row (PK, NN, AI).

Step 7 - create Column 'Website', Datatype 'VARCHAR(100)', tick boxes for Website row (NN).

Step 8 - create Column 'Password', Datatype 'VARCHAR(256)', tick boxes for Website row (NN).

Step 9 - create Column 'IV', Datatype 'VARCHAR(255)', tick boxes for Website row (NN).

Step 10 - Apply & Finish creating the table.

Step 11 - Navigate on schema to passwordwallet --> Tables --> passwords and right click 'passwords' and click 'Select Rows' and check if the table is created correctly.

Step 12 - Open the password wallet project and navigate using VCS (Visual Code Studio or whatever you use for programming that works) server_code --> index.js, make sure the mysql connection component details matches the same connection details as the local database you just created using my instructions. 


###These are quick steps to run the password wallet applications with no problems###

Step 1 - Navigate using Command Prompt ---> Password Wallet Folder ---> server_code, Type 'Yarn Start'

Step 2 - Navigate using Command Prompt ---> Password Wallet Folder ---> app_code, Type 'Yarn Start'

Step 3 - the application should work and open a broswer tab of the password wallet application having a successful connection the local database.

###If there is a problem because of missing packages and etc follow these steps below###

Step 1 - Navigate to server_code and make sure these packages are installed by using the command --> 'yarn add express' --> 'yarn add mysql' --> 'yarn add cors' --> 'yarn add nodemon'. 

These methods to install the required packages, have been done at the start of development for folder 'app_code', installing them again should fix it and double check if they are installed, im sure it shouldnt create any problems.

Step 1 - Navigate to app_code and use these commands to install the required packages if there are any problems or missing packages on your computer. Use these commands --> 'npx create-react-app .' this should work, the reason i am not sure is because this was the first command i used to create the ReachJS application and my guess is, it might overwrite some packages and etc, but it shouldnt create any problems or mess anything up by running this command.

Step 2 - If this doesnt work navigate ---> Password Wallet App ---> app_code ---> src ---> package.json, And check everything on that page is installed.

Step 3 - If this doesnt work navigate ---> Password Wallet App ---> server_code ---> package.json, And check everything on that page is installed.









