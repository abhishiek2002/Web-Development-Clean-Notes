# PM2 and Nginx Setup & Configuration Notes

---

## Overview

This document explains the step-by-step process of setting up and configuring **PM2** and **Nginx** on an **EC2 instance** for deploying and managing Node.js applications. The instructions are derived from industry best practices and commonly used deployment strategies.

The setup involves:

1. Installing and configuring **PM2** to manage Node.js processes.
2. Configuring **Nginx** as a reverse proxy to route HTTP(S) traffic to your Node.js application.
3. Adjusting **security group rules** (removing unnecessary inbound ports).
4. Understanding **key commands** for both PM2 and Nginx.

These notes are designed to be comprehensive for exam preparation, practical deployment, and interview readiness.

---

# Section 1: Introduction to PM2

### What is PM2?

* **PM2 (Process Manager 2)** is a production process manager for Node.js applications.
* It allows applications to run continuously without manual restarts.
* Supports:

  * **Automatic restarts** on crashes.
  * **Load balancing** (clustering).
  * **Log management**.
  * **Startup scripts** for system reboots.

### Why use PM2?

* Keeps Node.js apps alive forever.
* Simplifies process management.
* Provides monitoring tools.
* Ideal for running multiple applications on one server.

---

# Section 2: Installing PM2

### Step 1: Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Node.js and NPM

```bash
sudo apt install -y nodejs npm
```

Verify installation:

```bash
node -v
npm -v
```

### Step 3: Install PM2 Globally

```bash
sudo npm install pm2 -g
```

Verify PM2 installation:

```bash
pm2 -v
```

---

# Section 3: Running Applications with PM2

### Start an Application

```bash
pm2 start app.js
```

Where `app.js` is your Node.js entry file.

### Start with a Name

```bash
pm2 start app.js --name myapp
```

### Start with Arguments

```bash
pm2 start app.js --name myapp --watch
```

* `--watch`: restarts app when file changes detected.

### View Running Applications

```bash
pm2 list
```

### Monitor Application Logs

```bash
pm2 logs myapp
```

### Stop an Application

```bash
pm2 stop myapp
```

### Restart an Application

```bash
pm2 restart myapp
```

### Delete an Application

```bash
pm2 delete myapp
```

### Save Running Applications

```bash
pm2 save
```

This ensures processes reload after reboot.

### Startup Script for Auto-Start

```bash
pm2 startup systemd
```

Follow the instructions given in the output to enable auto-start.

---

# Section 4: PM2 Commands Summary

| Command                         | Description         |
| ------------------------------- | ------------------- |
| `pm2 start app.js`              | Start app           |
| `pm2 start app.js --name myapp` | Start with name     |
| `pm2 list`                      | List running apps   |
| `pm2 stop myapp`                | Stop app            |
| `pm2 restart myapp`             | Restart app         |
| `pm2 delete myapp`              | Remove app from PM2 |
| `pm2 logs`                      | Show logs           |
| `pm2 save`                      | Save processes      |
| `pm2 startup systemd`           | Configure startup   |

---

# Section 5: Introduction to Nginx

### What is Nginx?

* **Nginx** is a high-performance web server and reverse proxy.
* It can:

  * Serve static files.
  * Act as a **reverse proxy** for Node.js applications.
  * Handle **load balancing**.
  * Terminate **SSL/TLS connections**.

### Why Use Nginx with Node.js?

* Node.js is not optimized to serve HTTP traffic directly at scale.
* Nginx:

  * Manages connections efficiently.
  * Provides **security** (e.g., hides Node.js server details).
  * Enables **domain-based routing**.
  * Supports **HTTPS (SSL certificates)**.

---

# Section 6: Installing Nginx

### Step 1: Install Nginx

```bash
sudo apt install nginx -y
```

### Step 2: Check Status

```bash
systemctl status nginx
```

### Step 3: Start and Enable Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 4: Verify Installation

Open EC2 public IP in a browser → Default Nginx page should load.

---

# Section 7: Configuring Nginx as Reverse Proxy

### Step 1: Remove Default Configuration

```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Step 2: Create a New Config File

```bash
sudo nano /etc/nginx/sites-available/myapp
```

### Step 3: Add Configuration

```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4: Enable Configuration

```bash
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
```

### Step 5: Test Configuration

```bash
sudo nginx -t
```

### Step 6: Restart Nginx

```bash
sudo systemctl restart nginx
```

---

# Section 8: Security Group Configuration (EC2)

* Open **AWS Management Console → EC2 → Security Groups**.
* Remove inbound rules for Node.js application port (e.g., **3000**).
* Keep **port 80 (HTTP)** and **port 443 (HTTPS)** open.
* Now traffic flows: **Client → Nginx (80/443) → Node.js app (3000)**.

---

# Section 9: Nginx Commands Summary

| Command                        | Description                    |
| ------------------------------ | ------------------------------ |
| `sudo systemctl start nginx`   | Start Nginx                    |
| `sudo systemctl stop nginx`    | Stop Nginx                     |
| `sudo systemctl restart nginx` | Restart Nginx                  |
| `sudo systemctl reload nginx`  | Reload config without downtime |
| `sudo systemctl enable nginx`  | Enable on boot                 |
| `sudo systemctl status nginx`  | Check status                   |
| `sudo nginx -t`                | Test config file syntax        |

---

# Section 10: Logs and Troubleshooting

### PM2 Logs

```bash
pm2 logs
```

### Nginx Logs

```bash
cat /var/log/nginx/error.log
cat /var/log/nginx/access.log
```

### Common Issues

1. **Port already in use** → Stop conflicting processes.
2. **Bad Gateway (502)** → Node.js app not running, restart with PM2.
3. **Nginx config error** → Run `nginx -t` before restarting.

---

# Section 11: Workflow Summary

1. **Deploy Node.js app** on EC2.
2. **Start app with PM2** (`pm2 start app.js`).
3. **Configure PM2 startup** (`pm2 save`, `pm2 startup`).
4. **Install Nginx**.
5. **Configure reverse proxy** in Nginx.
6. **Restart Nginx**.
7. **Remove Node.js app port** from inbound rules.

---

# Section 12: Best Practices

* Always use **PM2** for process management.
* Use **Nginx** for routing, SSL, and load balancing.
* Secure server with **UFW (firewall)**.
* Monitor apps with `pm2 monit`.
* Use **SSL certificates (Let’s Encrypt)** for HTTPS.
* Keep system updated.

---

# Section 13: Practical Example

### Application File: `app.js`

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js with PM2 and Nginx!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Start with PM2

```bash
pm2 start app.js --name myapp
pm2 save
```

### Nginx Config

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Restart Nginx

```bash
sudo systemctl restart nginx
```

Now `http://example.com` → routes to Node.js app.

---

# Section 14: Recap

* **PM2** ensures Node.js app stays alive and auto-starts.
* **Nginx** acts as a reverse proxy, improving security and scalability.
* Together, they create a production-ready deployment setup.

---

# Section 15: Next Steps

* Add **SSL Certificates** with **Certbot**.
* Configure **domain names** in DNS.
* Use **PM2 ecosystem files** for advanced config.
* Set up **load balancing** with Nginx.

---

✅ **Deliverables Completed:**

1. PM2 installed & configured.
2. Nginx reverse proxy set up.
3. Removed Node.js app port from inbound rules.
4. Notes & commands documented.

---

# End of Notes
