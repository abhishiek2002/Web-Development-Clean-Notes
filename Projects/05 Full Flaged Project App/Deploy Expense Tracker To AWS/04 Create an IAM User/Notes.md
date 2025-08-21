# AWS IAM: Understanding and Creating IAM Users

## What is IAM?

**IAM (Identity and Access Management)** is a service in AWS that helps you securely control access to AWS resources. It allows you to manage **who can access** (authentication) and **what actions they can perform** (authorization) on your AWS environment.

### Key Features of IAM:

* **Users**: Represents an individual with credentials (username, password, access keys).
* **Groups**: A collection of IAM users. Permissions assigned to a group apply to all users in that group.
* **Roles**: Used to delegate permissions to AWS services or users temporarily.
* **Policies**: JSON documents that define permissions (allow/deny actions on resources).

### Why Use IAM?

* **Granular Security**: Control access at user, group, or role level.
* **Least Privilege Principle**: Give only the required permissions, nothing more.
* **Secure Resource Management**: Ensure that sensitive resources are accessible only by authorized users.
* **Scalability**: Manage permissions for multiple users and services efficiently.

---

## Types of Access in IAM

When creating a user, AWS gives you two main options for access:

### 1. **Programmatic Access**

* Provides **Access Key ID** and **Secret Access Key**.
* Used for AWS **CLI, SDKs, or APIs**.
* Example: A developer writing code to interact with **S3** or **DynamoDB** would need programmatic access.

### 2. **AWS Management Console Access**

* Provides a **username** and **password** for the AWS Console.
* Allows users to log in to the **AWS web interface**.
* Example: An administrator who manages services via the AWS Console would need this access.

---

## Steps to Create an IAM User in AWS

### 1. **Sign in to AWS Management Console**

* Log in using your **root account** or an **IAM user** with admin privileges.
* Navigate to **IAM** service.

### 2. **Go to IAM Users Section**

* In the left navigation pane, click **Users**.
* Click **Add users**.

### 3. **Enter User Details**

* Provide a **username**.
* Select the **type of access**:

  * **Programmatic access** → Creates Access Key ID & Secret Access Key for CLI/SDK/API use.
  * **AWS Management Console access** → Creates a password for logging into AWS Console.

### 4. **Set Permissions**

You have three options:

* **Add user to group** → Assigns policies attached to a group.
* **Copy permissions from existing user**.
* **Attach policies directly** → Attach predefined policies (e.g., `AmazonS3FullAccess`).

### 5. **Configure Optional Settings**

* Add **tags** for better identification (e.g., `Department: DevOps`).

### 6. **Review and Create**

* Review all details.
* Click **Create user**.

### 7. **Save Credentials**

* Download or copy the **Access Key ID** and **Secret Access Key** (if programmatic access is enabled).
* Share credentials securely with the user.

---

## Best Practices for IAM Users

* **Do not use Root Account** for daily tasks.
* **Enable MFA (Multi-Factor Authentication)** for extra security.
* **Grant Least Privilege** → Only give necessary permissions.
* **Rotate Credentials** regularly.
* **Use IAM Roles** instead of long-term access keys when possible.

---

## Practical Use Case Example

* Suppose you hire a **developer** who only needs access to **S3 buckets**.

  * You create an **IAM user** with programmatic access.
  * Attach a policy: `AmazonS3FullAccess`.
  * Share the **Access Key & Secret Key** with the developer.
  * Developer can now interact with S3 using AWS CLI/SDK securely.

---

✅ With IAM, you can manage **secure access control** for your AWS environment and follow **security best practices** for your infrastructure.
