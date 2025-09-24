# CI/CD Pipeline with Jenkins - Setup & Configuration Notes

---

## Overview

This document explains how to set up **Jenkins** on an **AWS EC2 instance** and build a **CI/CD pipeline** for your Node.js application (e.g., Expense Tracker project). The pipeline automates build, test, and deployment steps.

Additionally, it includes **AWS resource management best practices** to avoid unnecessary billing and **security precautions** to protect credentials.

---

# Section 1: Introduction to Jenkins

### What is Jenkins?

- **Jenkins** is an open-source automation server.
- Helps automate:

  - **Building** applications.
  - **Testing** code.
  - **Deploying** projects.

- Widely used for **CI/CD pipelines**.

### Why Use Jenkins for CI/CD?

- Automates repetitive tasks.
- Ensures faster delivery.
- Provides integration with Git, Docker, AWS, and other tools.
- Enables teams to collaborate effectively.

---

# Section 2: Installing Jenkins on Ubuntu (EC2)

### Step 1: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Java (Jenkins dependency)

```bash
sudo apt install -y openjdk-11-jdk
```

Verify:

```bash
java -version
```

### Step 3: Add Jenkins Repository Key

```bash
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
```

### Step 4: Add Jenkins Repo

```bash
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
```

### Step 5: Install Jenkins

```bash
sudo apt update
sudo apt install -y jenkins
```

### Step 6: Start Jenkins

```bash
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

### Step 7: Open Jenkins in Browser

- Go to `http://<EC2-PUBLIC-IP>:8080`
- Get initial password:

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

- Paste password in browser → Install recommended plugins → Setup admin user.

---

# Section 3: Setting Up Jenkins for CI/CD

### Step 1: Install Plugins

- Git
- NodeJS
- Pipeline
- AWS-related plugins (if needed)

### Step 2: Configure Jenkins Global Tools

- Go to **Manage Jenkins → Global Tool Configuration**.
- Add **Git** and **NodeJS** installations.

### Step 3: Create a New Job

1. Select **New Item** → Enter job name.
2. Choose **Pipeline**.
3. Configure **Git Repository URL**.
4. Choose branch (e.g., `main`).

### Step 4: Write a Jenkins Pipeline Script

Example `Jenkinsfile` for Node.js app:

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/expense-tracker.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart myapp || pm2 start app.js --name myapp'
            }
        }
    }
}
```

### Step 5: Build the Pipeline

- Click **Build Now** in Jenkins.
- Pipeline stages will execute.
- Check logs for errors.

---

# Section 4: Connecting Jenkins with AWS EC2

### Prerequisites

- Node.js app already deployed on EC2 with PM2 + Nginx (from previous task).
- Jenkins installed on EC2.

### Steps

1. SSH into EC2.
2. Ensure Git, Node.js, and PM2 are installed.
3. Configure pipeline to pull from **GitHub**.
4. Jenkins automatically deploys updates on **code push**.

---

# Section 5: Hosting Expense Tracker Project

Once the Jenkins pipeline successfully deploys your project:

1. Ensure Nginx reverse proxy is configured.
2. Test by visiting: `http://<your-domain>` or `http://<EC2-public-IP>`.
3. Verify the app works as expected.

✅ Add this **hosted URL** to your **resume** and this **document**.

Example:

```
Hosted Expense Tracker URL: http://ec2-3-120-150-100.compute-1.amazonaws.com
```

---

# Section 6: Security Best Practices

### Do NOT expose unnecessary ports

- Keep only **80 (HTTP)** and **443 (HTTPS)** open.
- Remove **3000** or **8080** from inbound rules.

### Do NOT commit `.env` files

- Never push AWS credentials or `.env` files to GitHub.
- Use `.gitignore` to exclude sensitive files.

### Use IAM Roles and Secrets Manager

- Store credentials in **AWS IAM** or **Secrets Manager**.
- Rotate keys regularly.

---

# Section 7: AWS Resource Termination

⚠️ Important to avoid AWS billing issues.

After testing CI/CD pipeline:

1. **Terminate EC2 Instances**

```bash
aws ec2 terminate-instances --instance-ids <instance-id>
```

Or via AWS Console → EC2 → Instances → Terminate.

2. **Delete RDS Instances**

- Go to RDS → Select DB → Delete.

3. **Remove Security Groups, Subnets, VPCs if created manually.**

4. **Check Billing Dashboard** for unused resources.

---

# Section 8: Jenkins Commands Summary

| Command                                                  | Description          |
| -------------------------------------------------------- | -------------------- |
| `sudo systemctl start jenkins`                           | Start Jenkins        |
| `sudo systemctl stop jenkins`                            | Stop Jenkins         |
| `sudo systemctl restart jenkins`                         | Restart Jenkins      |
| `sudo systemctl status jenkins`                          | Check status         |
| `sudo cat /var/lib/jenkins/secrets/initialAdminPassword` | Get initial password |

---

# Section 9: Workflow Summary

1. Install Jenkins on Ubuntu EC2.
2. Configure Jenkins with Git + Node.js + PM2.
3. Create Jenkins pipeline.
4. Automate build, test, deploy steps.
5. Access hosted Expense Tracker app.
6. Add hosted URL to resume.
7. Terminate AWS resources after demo.

---

# Section 10: Recap

- **Jenkins** automates CI/CD pipeline.
- **Pipeline stages**: clone → install → test → build → deploy.
- Hosted app URL is proof of deployment.
- Avoid AWS overbilling → **terminate unused resources**.
- Keep secrets secure, never push `.env`.

---

✅ **Deliverables Completed:**

1. Jenkins installed & configured.
2. Pipeline created for Expense Tracker.
3. Hosted project URL noted.
4. AWS termination checklist included.
5. Security best practices mentioned.

---

# End of Notes
