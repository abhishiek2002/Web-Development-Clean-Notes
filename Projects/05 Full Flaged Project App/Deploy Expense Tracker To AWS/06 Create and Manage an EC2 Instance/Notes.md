# Creating and Managing an EC2 Instance on AWS

## Overview

Amazon EC2 (Elastic Compute Cloud) allows you to run virtual servers (called instances) in the cloud. Developers use EC2 to deploy applications, test environments, and scale workloads. This guide explains **how to create and manage an EC2 instance step by step**.

---

## 1. Launching an EC2 Instance

### Step 1: Log in to AWS Console

- Go to [AWS Management Console](https://aws.amazon.com/console/).
- Navigate to **EC2 Dashboard**.

### Step 2: Choose “Launch Instance”

- Click on **Launch Instance**.
- Enter an **Instance Name** (e.g., `MyFirstEC2`).

### Step 3: Select an Amazon Machine Image (AMI)

- AMI is a pre-configured OS image.
- Common options:

  - Amazon Linux 2
  - Ubuntu Server
  - Windows Server

### Step 4: Choose Instance Type

- Defines the **CPU, memory, and performance**.
- Example:

  - `t2.micro` (Free-tier eligible, basic testing).

### Step 5: Configure Key Pair

- Create a **new key pair** (download the `.pem` file).
- This file is required for **SSH login** to the instance.

### Step 6: Configure Network Settings

- Choose a **VPC** and **Subnet**.
- Allow **SSH (port 22)**, **HTTP (port 80)**, and **HTTPS (port 443)** if required.

### Step 7: Launch

- Click **Launch Instance**.
- Wait until the status shows **Running**.

---

## 2. Connecting to EC2 Instance

### SSH (Linux/Mac)

```bash
ssh -i my-key.pem ec2-user@<Public-IP>
```

- `my-key.pem` → Your downloaded key file.
- `ec2-user` → Default user (depends on AMI).
- `<Public-IP>` → Instance public IP address.

### SSH (Windows)

- Use **PuTTY** and load `.pem` (converted to `.ppk`).

### EC2 Instance Connect (AWS Console)

- Select your instance → **Connect** → Use **EC2 Instance Connect** (browser-based SSH).

---

## 3. Managing EC2 Instance

### Start / Stop / Reboot

- Go to **EC2 Dashboard → Instances**.
- Select instance → **Instance State**:

  - **Start**: Boot up the instance.
  - **Stop**: Shut it down (data persists).
  - **Reboot**: Restart the instance.

### Terminate Instance

- Select instance → **Terminate**.
- This **deletes the instance and its data**.

### Monitor Instance

- Use **CloudWatch Metrics** for:

  - CPU Utilization
  - Network traffic
  - Disk activity

---

## 4. Best Practices

- Always use **key pairs** for secure login.
- Attach **Elastic IP** for a permanent IP.
- Use **Security Groups** to restrict access.
- Create **AMI backups** for disaster recovery.
- Use **IAM Roles** for secure access to other AWS services.

---

## Summary

Creating and managing an EC2 instance involves:

1. Launching instance with AMI + Instance Type.
2. Setting up key pair & security group.
3. Connecting via SSH or AWS Console.
4. Managing state (Start/Stop/Reboot/Terminate).
5. Following best practices for security & reliability.

With these steps, you can easily deploy and manage servers in AWS cloud.
