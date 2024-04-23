---
title: Discord Mail
layout: default
parent: Projects
nav_order: 1
---

# Discord Mail!
{:.no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Discord Mail
A small webhook that connects Gmail (only Gmail) to Discord. This uses the Google Apps Scripts and Google Analytics. 

{: .note }
To use this bot, make sure to first make a webhook in the server you are connecting to. This could be in any channel, as long as you have access to it (and the webhooks themselves). I would recommend only using this webhook if you know that it is safe to use. NEVER share the webhook keys with anyone. 


## Information about the Project
### Steps To Reproduce:
1. Create a Webhook in your Discord Server
	2. Go to Settings -> Integrations -> Webhooks
![Webhook Integration](/assets/images/image1.PNG)
	3. View Webhooks -> New Webhooks
![New Webhook](/assets/images/image2.PNG)
	4. Select a Channel from your Server, and then Copy Webhook URL (this is important)
![Copy Webhook URL](/assets/images/image3.PNG)
2. Go to [Google Apps Script](https://script.google.com/home)
	3. Click on Create a New Project -> Name it whatever you want
![Create a New Project](/assets/images/image4.PNG)
	4. Click on the Cog Icon to to to Project Settings
![Project Settings](/assets/images/image5.PNG)
	5. Scroll down to Script Properties -> Add Script Property
![Add Script Property](/assets/images/image6.PNG)
	6. Add two Properties -> TOKEN and WEBHOOKS (spell it the same way)
![TOKEN and WEBHOOKS](/assets/images/image7.PNG)
3. Click on the Clock to Setup Triggers (we only need 1, even for 2 functions)
	4. Click Add Trigger
![Add Trigger](/assets/images/image8.PNG)
	5. Make it look the exact same as this image below... (Or change the time if applicable)
![Edit Trigger](/assets/images/image9.PNG)
4. CODING TIME!!!!!! Please refer to the code below...
	5. Paste your channel in `const channel= '📫mail';` 
	6. Notice `const checkSpan = 60;` 
		7. That entails that every 60 minutes, the command sendMailsToDiscord() will be run
		8. I would not advise doing any sooner than that, as your email quota may run out. (100/day for free users)

# Coding Time!!!!
---

     function  postDiscord(postMsg) {// this posts the emails gathered to Discord
        const  props = PropertiesService.getScriptProperties();
        const  webhooks = props.getProperty("WEBHOOKS"); // get value from project properties
        const  token = props.getProperty("TOKEN");
        const  channel = '📬mail'; // channel name 
	    const  parse = 'full'; 
        const  method = 'post';
        const  payload = {
          'token': token,
          'channel': channel,
          'content': postMsg,
          'parse': parse,
        };
        const  params = {
          'method': method,
          'payload': payload,
          'muteHttpExceptions': true,
        };
        response = UrlFetchApp.fetch(webhooks, params);
      }

    function  sendMailsToDiscord() {
    // this collects the emails that are unread
    var  emailQuotaRemaining = MailApp.getRemainingDailyQuota();
    Logger.log("Remaining Email Quota: " + emailQuotaRemaining);
    const  searchQuery = 'is:unread';
    const  dt = new  Date();
    const  checkSpan = 60;
    dt.setMinutes(dt.getMinutes() - checkSpan);
    const  threads = GmailApp.search(searchQuery);
    const  msgs = GmailApp.getMessagesForThreads(threads);
    const  amount = GmailApp.getInboxUnreadCount();
    Logger.log("Current Unread Count: " + amount);
    for(let  i =0; i<msgs.length; i++) {
      const  lastMsgDt = threads[i].getLastMessageDate();
      if(lastMsgDt.getTime() < dt.getTime()) {
        console.log('No New Mail!!');
        // postDiscord('No New Mail!!');
        return;
      }
    for(let  j =0; j<msgs[i].length; j++) {
	    const  msgDate = msgs[i][j].getDate();
	    const  msg = msgs[i][j];
	    const  msgSender = msgs[i][j].getFrom();
	    const  msgSubject = msgs[i][j].getSubject();
	    //const msgBody = msgs[i][j].getPlainBody();
	    let  postMsg = "You've got " + amount + " new email(s)!!"+ "\n" + "From: " + msgSender + "\n" + Utilities.formatDate(msgDate, 'PST', 'MM/DD/YYYY | hh:mm a') + "\n" + "Title of Email: " + msgSubject;
	    console.log(`chars: ${postMsg.length}`);
	    // The limit is 2000 characters
	    if(postMsg.length > 2000) {
		    const  stopPos = 1900; //
		    const  errorMsg = "Title of Email: " + msgSubject + "`This message is more than 2000 chars so I cannot post the entire message. Please refer to the email box here: https://myaccount.google.com/notifications`";
		    postMsg = postMsg.substring(0, stopPos) + "\n" + errorMsg;
        }
	    console.log(postMsg);
	    console.log('===================================');
	    console.log(`chars: ${postMsg.length}`);
	    console.log('===================================');
	    postDiscord(postMsg);
	    GmailApp.markMessageRead(msg);
      }   
     }
    }