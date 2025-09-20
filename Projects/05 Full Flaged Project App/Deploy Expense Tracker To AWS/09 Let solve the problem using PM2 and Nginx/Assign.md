# Task: Set Up and Configure PM2 and Nginx

## Subtasks:

1. Install and Configure PM2:

   - Watch the video: [PM2 link](https://www.loom.com/share/01cc25eb604149d1aa79ba7b473e8c03?sid=43227527-cdfa-4e3d-b614-ab0265dc9bc8)

   - This video will guide you through installing and configuring PM2 on your EC2 instance.

2. Set Up Nginx as a Reverse Proxy:

   - Watch the video: [Nginx link](https://www.loom.com/share/c3596147e123471599525cac0d85c27b?sid=f75d890d-f015-4174-93b2-2ef3b41df2c5)

   - This video will guide you through configuring Nginx as a reverse proxy to route traffic to your Node.js application running on PM2.

**Notes:**

[PM2 commands link](https://docs.google.com/document/d/1EfOLvWiTLuxjXcxq2blWnrm2xXwnXp06rjvD66WTuTc/edit?usp=sharing)

[Nginx commands link](https://docs.google.com/document/d/1yplMdGsaMwz8U3IW4WQib3bY7Fvd-3Xy4RG278i0o6M/edit?usp=sharing)

## Deliverables:

    1. Successfully install and configure PM2 on your EC2 instance.

    2. Set up Nginx as a reverse proxy to your Node.js application.

    3. Remove the localhost port form your EC2 inbound rules

    4. Answer the given question then proceed to the next task.

**This task focuses on setting up the necessary infrastructure for deploying and managing your Node.js application using PM2 and Nginx.**

# Questions

1. According to the video, why is PM2 important for the Expense Tracker project?

   (Select all that apply)

   ✅ Correct Answers:

   A) It ensures the application runs continuously even if the terminal is closed.

   C) It helps keep the Node.js application online 24/7.

   E) It allows for global installation and management of the application.

   ❌ Not Correct:

   B) (Database connections are not managed by PM2, that’s up to your app or ORM)

   D) (PM2 is not a built-in web server, it’s a process manager)

2. What is the correct command to install PM2 globally as mentioned in the video?

3. Which PM2 commands can you use to manage your Node.js application for the Expense Tracker project? (Select all that apply)

   A) pm2 start app.js → Starts the app

   B) pm2 stop app → Stops the app

   C) pm2 list → Shows running processes

   D) pm2 restart all → Restarts all processes

   E) pm2 shutdown → Stops PM2 daemon and all apps

4. According to the video, what is the main problem with users accessing the Expense Tracker project using an IP address and port number?

   ✅ Correct Answer:

   B) Users must remember and correctly type the IP address and port number.

5. According to the video, what is the first step before installing Nginx on an Ubuntu server?

   ✅ Correct Answer:

   B) Update the package list.

   (Command: sudo apt update ensures you get the latest package info before installing.)

6. What is the purpose of the command sudo nginx -t in the Nginx configuration process? (Select all that apply)

   ✅ Correct Answers:

   A) It tests the Nginx service.

   D) It verifies if the Nginx configuration file is correct before applying changes.

   ❌ Not Correct:

   B) (It does not restart the service)

   C) (It does not reload the service, that’s sudo systemctl reload nginx)
