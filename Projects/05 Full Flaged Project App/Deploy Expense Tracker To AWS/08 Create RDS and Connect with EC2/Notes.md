## Step 1: Creating an RDS Instance (big picture)

When you create an RDS database in AWS, you need to decide a few things:

- Engine: e.g., MySQL, PostgreSQL, or Oracle (commonly MySQL or Postgres for beginners).

- Instance size: how powerful your DB server is (for practice → db.t3.micro or db.t2.micro).

- Storage: allocated disk space.

- Connectivity:

    - Which VPC it will live in,

    - Whether it is publicly accessible,

    - And what security group rules allow who can connect.

👉 Quick question for you: if your EC2 instance is supposed to talk to the RDS, what’s one network setting that must match between them? (Hint: it’s about where they “live” in AWS).

## Step 2: RDS Instance States

Once you hit Create, your RDS instance doesn’t instantly become usable. It goes through states like:

- Creating → AWS is provisioning it.

- Available → ready for connections.

- Backing-up → automated backups running.

- Modifying → if you change settings.

- Stopped → you paused it (to save cost).

⚠️ The key one to watch for before connecting is Available.

👉 Can you tell me why it’s important to wait for Available before trying to connect?

## Step 3: Connecting EC2 to RDS

Now that you have both:

1. Launch EC2 instance (Ubuntu or Amazon Linux is fine).

2. Make sure EC2 and RDS are in the same VPC.

3. Configure Security Groups:

    - On the RDS security group, add an inbound rule for port 3306 (MySQL) or 5432 (Postgres).

    - Source should be the EC2’s security group (safer) or 0.0.0.0/0 (not secure).

4. SSH into your EC2:

```bash
ssh -i my-key.pem ubuntu@<EC2-Public-IP>
```

5. Install client (for MySQL):

```bash
sudo apt update
sudo apt install mysql-client -y
```

6. Connect using RDS endpoint:

```bash
mysql -h <RDS-ENDPOINT> -u <USERNAME> -p
```

(RDS endpoint is found in AWS console under your DB instance details.)

## ✅ Deliverables you’ll achieve:

- You’ll have an RDS instance created.

- You’ll understand the RDS lifecycle states.

- You’ll connect EC2 to RDS and actually query data.

---


# Creating RDS and Connecting with EC2 (Step-by-Step Guide)

## 1. Create an RDS Instance
1. **Log in** to the AWS Management Console.
2. Go to **RDS** service.
3. Click **Create Database**.
4. Choose **Standard Create**.
5. Select **Engine** (commonly MySQL or PostgreSQL).
6. Choose **Free Tier** if practicing.
7. Configure DB instance:
   - DB identifier (e.g., `mydbinstance`)
   - Master username & password (save them securely)
8. Choose **Instance type** (db.t3.micro for free tier).
9. Configure **Storage** → Enable Auto Scaling (optional).
10. Set **Connectivity**:
    - VPC: Choose default or custom VPC.
    - Public access: Enable (if you want external connection).
    - VPC security group: Allow access from EC2.
11. Click **Create Database**.

⚠️ Wait until status = **Available**.

---

## 2. Modify Security Group (RDS)
1. Go to **EC2 → Security Groups**.
2. Edit inbound rules for RDS security group:
   - Add rule: **MySQL/Aurora (3306)**
   - Source: Choose EC2 security group (recommended) or `0.0.0.0/0` (not safe for production).

---

## 3. Launch an EC2 Instance
1. Go to **EC2** → Launch Instance.
2. Choose Ubuntu or Amazon Linux.
3. Select **t2.micro** (Free tier).
4. Configure networking → Ensure it's in same VPC as RDS.
5. Launch and connect via SSH.

```bash
ssh -i my-key.pem ubuntu@<EC2-Public-IP>
```

---

## 4. Install MySQL Client on EC2
```bash
sudo apt update
sudo apt install mysql-client -y
```

---

## 5. Connect EC2 to RDS
Get the **RDS endpoint** from RDS console.

```bash
mysql -h <RDS-ENDPOINT> -u <MASTER-USERNAME> -p
```
Enter your password when prompted.

✅ Now your EC2 is connected to RDS.

---

## 6. Test Database Connection
Inside MySQL shell:
```sql
SHOW DATABASES;
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));
INSERT INTO users (name) VALUES ("Alice"), ("Bob");
SELECT * FROM users;
```

---

## Summary
- **RDS**: Managed database service.
- **EC2**: Compute instance to connect and use the DB.
- **Security Groups**: Must allow EC2 → RDS traffic.
- **MySQL Client**: Required for communication.

This setup is the foundation of hosting applications where **EC2 runs the app** and **RDS stores the data**.
