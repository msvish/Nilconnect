# Nilconnect is a video conferencing application built in collaboration with NilAdvantage

### The web-app is built with Reactjs, firebase and Jitsi Meets' open sourced tools as the backend code

execute the following commands in the terminal:
```bash
npx create-react-app nilconnect  # to create a react app (when you create a react app delete the default files except node modules)

cd nilconnect

yarn add react-router-dom firebase # for adding react router and firebase

yarn add react-icons 

npm install --save react-google-pay-button # for adding google pay functionality
```
### copy/clone the code into the folder 

### Create a new project in your firebase account, navigate to authentication-> sign-in method and enable sign in with google option
### Go to the services -> firebase.js file and enter your API key credentials

Execute the following command in the terminal:
```bash
cd ~  # come out of all the directories 
```
### Now let's install all the Jitsi Meets' packages
Enter the following commands in the terminal:
```bash
sudo apt-get install gnupg2

sudo apt-get install nginx-full

sudo apt update 

sudo apt install apt-transport-https

sudo apt-add-repository universe

sudo apt update

sudo apt-get install openjdk-8-jdk

sudo hostnamectl set-hostname server1  # you will need to set up a hostname and FQDN to your system. You can do this by running this command 

###Next, open /etc/hosts file and add FQDN: 
sudo nano /etc/hosts
```
Add the following line: 
```bash
127.0.1.1 server1.example.com server1
```
check if it has been implemented successfully 
```bash
hostname -f
```
if the output is server1.example.com then continue executing with the following commands in the terminal: 
```bash
curl https://download.jitsi.org/jitsi-key.gpg.key | sudo sh -c 'gpg --dearmor > /usr/share/keyrings/jitsi-keyring.gpg'

echo 'deb [signed-by=/usr/share/keyrings/jitsi-keyring.gpg] https://download.jitsi.org stable/' | sudo tee /etc/apt/sources.list.d/jitsi-stable.list > /dev/null

### update all package sources 

sudo apt update

### enable firewall and ports 

sudo ufw allow 80/tcp

sudo ufw allow 443/tcp

sudo ufw allow 10000/udp

sudo ufw allow 22/tcp

sudo ufw allow 3478/udp

sudo ufw allow 5349/tcp

sudo ufw enable

sudo ufw status verbose # check firewall status 

sudo apt install jitsi-meet

# You will also be asked to enter the hostname of the Jitsi Meet instance, enter server1.example.com 

 now change to your nilconnect directory and execute yarn start or npm start 
```
References:

https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart

https://vitux.com/how-to-install-jitsi-meet-video-conference-platform-on-ubuntu/

https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/

#Licence
[MIT](https://choosealicense.com/licenses/mit/)
