const fs = require('fs');
const readline = require('readline');
/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */


function makeLog(message) {

  var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


var i;
var count = 0;
fs.createReadStream("petrubot.log")
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) count++;
  })
  .on('end', function() {
    console.log(count);
    if(count == 20){
      fs.unlinkSync("petrubot.log");
    }else{
      fs.appendFile('petrubot.log', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
    }
  });



  var content = date + " | " + time + ": " + message + "\n";

 /* fs.appendFile('petrubot.log', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });*/
}


 module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  makeLog("Bot started");

try {

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.labeled", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for adding a label!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.unlabeled", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for removing a label!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.edited", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for editing this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.assigned", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for assigning this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.unassigned", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for unassigning this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.milestoned", async (context) => { 
    const issueComment = context.issue({
      body: "Thanks for adding a milestone!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.demilestoned", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for removing a milestone!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.renamed", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for renaming this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.locked", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for locking this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.unlocked", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for unlocking this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.transferred", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for transferring this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.edited", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for editing this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.labeled", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for adding a label!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.unlabeled", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for removing a label!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.assigned", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for assigning this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.unassigned", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for unassigning this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.review_requested", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for requesting a review!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.review_request_removed", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for removing a review request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.synchronize", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for updating this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.closed", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for closing this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.reopened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for reopening this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.merged", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for merging this pull request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.head_ref_deleted", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for deleting the head ref!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.head_ref_restored", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for restoring the head ref!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.head_ref_force_pushed", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for force pushing the head ref!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.review_requested", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for requesting a review!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  
  app.on("pull_request.review_request_removed", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for removing a review request!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

}
catch(err){
  makeLog("Error: " + err.message);
}



  // For more information on building apps:
  // https://probot.github.io/docs/


  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
