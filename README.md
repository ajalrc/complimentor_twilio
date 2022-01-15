# complimentor_twilio
In the past year of 2020, everyone has struggled during the pandemic. Many lost their loved one and all of us has to stay inside our home for a long time. This application main aim is
compliment our loved ones to support them and motivate them to stay strong. 
#To run the application
**Installing the packages from package.json**
```
npm install
```
**Create ".env" file and add these credentials**
To get the credentials, you have to set up a Twilio account. You can use the free tier version, then grab then get your self a free Twilio number, Twilio Auth Token, and Twilio Account SID. More more info on how to get it, look here:
https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-How-to-Change-Them#:~:text=Access%20the%20Account%20%2D%3E%20General%20Settings,update%20your%20existing%20Twilio%20applications.
https://support.twilio.com/hc/en-us/articles/223134387-What-is-a-Message-SID-#:~:text=To%20find%20the%20SID%20for,details%20page%20for%20that%20message.
```
TWILIO_NUMBER="Your twilio number"
TWILIO_AUTH_TOKEN="Your twilio token"
TWILIO_ACCOUNT_SID="Your twilio sid"
```
**Run the application**
```
npm start app.js
```
**Go to your browser and type "http://localhost:5000/"**
   
