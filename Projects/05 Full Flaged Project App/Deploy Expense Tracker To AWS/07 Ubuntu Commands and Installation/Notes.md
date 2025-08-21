# Essential Ubuntu Commands for DevOps Engineers

In the life of a DevOps engineer, Ubuntu/Linux commands are the foundation for managing servers, automating tasks, and troubleshooting. Below is a categorized list of essential commands with explanations, usages, and examples.

---

## 1. **System Information & Monitoring**

- `uname -a` → Show system/kernel details. _(Usage: `uname -a` to check OS & kernel version)_
- `lsb_release -a` → Display Ubuntu version. _(Usage: Verify which Ubuntu release is installed)_
- `top` / `htop` → Monitor running processes and resource usage. _(Usage: `top` for CPU/memory usage, press `q` to quit)_
- `free -h` → Show memory usage in human-readable format. _(Usage: Check RAM availability)_
- `df -h` → Show disk usage. _(Usage: `df -h` to see free/used space)_
- `uptime` → Show how long the system has been running. _(Usage: Identify server uptime)_

---

## 2. **User & Permission Management**

- `whoami` → Show current logged-in user. _(Usage: Identify which user you are logged in as)_
- `id` → Display user ID and group. _(Usage: Check user privileges and groups)_
- `adduser username` → Create new user. _(Usage: `sudo adduser devops`)_
- `passwd username` → Change password. _(Usage: `sudo passwd devops`)_
- `usermod -aG group username` → Add user to group. _(Usage: Add a user to sudo group)_
- `sudo` → Run commands as superuser (admin).

  - **Why is it used?** → `sudo` (SuperUser DO) allows a normal user to run commands with root (admin) privileges temporarily, without logging in as root.

- `chmod 755 file` → Change file permissions. _(Usage: Allow read/write/execute for owner, read/execute for others)_
- `chown user:group file` → Change file ownership. _(Usage: `sudo chown ubuntu:ubuntu file.txt`)_

---

## 3. **File & Directory Management**

- `ls -l` → List files with details. _(Usage: `ls -l` to see permissions, size, owner)_
- `pwd` → Show current working directory. _(Usage: Know where you are in filesystem)_
- `cd /path` → Change directory. _(Usage: `cd /var/log`)_
- `mkdir folder` → Create new directory. _(Usage: `mkdir backups`)_
- `rm file` → Remove file. _(Usage: `rm temp.txt`)_
- `rm -rf folder` → Remove directory and contents. _(Usage: `rm -rf old_logs`)_
- `cp source dest` → Copy file/folder. _(Usage: `cp file.txt /tmp/`)_
- `mv source dest` → Move/rename file/folder. _(Usage: `mv old.txt new.txt`)_
- `touch file.txt` → Create empty file. _(Usage: `touch notes.txt`)_
- `nano file.txt` / `vim file.txt` → Edit files. _(Usage: `nano config.yaml` to open in Nano editor)_

**Nano Editor:**

- `nano filename` → Open or create file in Nano editor.
- Inside Nano:

  - `Ctrl + O` → Save changes.
  - `Ctrl + X` → Exit editor.
  - `Ctrl + K` → Cut line.
  - `Ctrl + U` → Paste line.

---

## 4. **Networking Commands**

- `ifconfig` / `ip addr` → Show network interfaces. _(Usage: Check IP address)_
- `ping google.com` → Check connectivity. _(Usage: Troubleshoot network issues)_
- `curl http://example.com` → Fetch URL response. _(Usage: Test APIs or endpoints)_
- `wget url` → Download file. _(Usage: `wget http://file.com/file.zip`)_
- `netstat -tulnp` → Show open ports. _(Usage: Check services listening on ports)_
- `ss -tulnp` → Modern alternative to netstat.
- `scp file user@server:/path` → Securely copy file to another server.
- `ssh user@server` → Connect to remote server via SSH.

---

## 5. **Package Management (APT)**

- `sudo apt update` → Refresh package list. _(Always run before installing new packages)_
- `sudo apt upgrade` → Upgrade installed packages.
- `sudo apt install package-name` → Install package. _(Usage: `sudo apt install nginx`)_
- `sudo apt remove package-name` → Remove package.
- `dpkg -l` → List installed packages.

---

## 6. **Process & Service Management**

- `ps aux` → List running processes. _(Usage: Identify process IDs)_
- `kill -9 PID` → Kill process by PID. _(Usage: `kill -9 1234`)_
- `systemctl status service` → Check service status. _(Usage: `systemctl status nginx`)_
- `systemctl start service` → Start service.
- `systemctl stop service` → Stop service.
- `systemctl restart service` → Restart service.
- `journalctl -u service` → View logs for a service.

---

## 7. **Logs & Debugging**

- `tail -f /var/log/syslog` → Continuously monitor logs.
- `tail -n 50 file.log` → View last 50 lines.
- `less /var/log/auth.log` → Read logs with scrolling.
- `dmesg` → Kernel-related logs.

---

## 8. **Disk & Storage Management**

- `lsblk` → List block storage devices.
- `mount /dev/sdX /mnt` → Mount a drive.
- `umount /mnt` → Unmount drive.
- `du -sh folder/` → Show folder size.
- `fdisk -l` → Show partitions.

---

## 9. **Archiving & Compression**

- `tar -cvf file.tar folder/` → Create tar archive.
- `tar -xvf file.tar` → Extract tar archive.
- `tar -czvf file.tar.gz folder/` → Create compressed archive.
- `gzip file` / `gunzip file.gz` → Compress/Decompress.
- `zip -r file.zip folder/` → Create zip archive.
- `unzip file.zip` → Extract zip archive.

---

## 10. **DevOps-Specific Useful Commands**

- `git clone repo-url` → Clone repository.
- `docker ps` → List running Docker containers.
- `docker images` → List Docker images.
- `kubectl get pods` → Get Kubernetes pods.
- `ansible all -m ping` → Test Ansible connection.

---

## Summary

- **System Monitoring:** `top`, `df -h`, `free -h`
- **User Management:** `adduser`, `chmod`, `chown`, `sudo`
- **File Management:** `ls`, `cd`, `mkdir`, `nano`
- **Networking:** `ssh`, `scp`, `ping`
- **Package Management:** `apt`
- **Services:** `systemctl`
- **Logs:** `tail`, `journalctl`
- **Storage:** `lsblk`, `du`
- **Compression:** `tar`, `zip`
- **DevOps Tools:** `git`, `docker`, `kubectl`, `ansible`

---

👉 Mastering these commands (with their usages) makes a DevOps engineer efficient at managing servers, troubleshooting, and automating tasks.


# Essential Ubuntu Commands for DevOps Engineers

Here’s a comprehensive list of Ubuntu commands that are essential in a DevOps engineer’s daily workflow, with explanations and usages.

---

## 1. `ls`

* **Usage:** Lists files and directories in the current directory.
* **Example:** `ls -l` shows details like permissions, owner, size, and date.

## 2. `cd`

* **Usage:** Changes the current working directory.
* **Example:** `cd /var/log` moves you to the log directory.

## 3. `pwd`

* **Usage:** Prints the current working directory path.
* **Example:** `pwd` → `/home/ubuntu`

## 4. `mkdir`

* **Usage:** Creates a new directory.
* **Example:** `mkdir new_project`

## 5. `rm`

* **Usage:** Removes files or directories.
* **Example:** `rm file.txt` deletes a file, `rm -r folder` deletes a folder.

## 6. `cp`

* **Usage:** Copies files or directories.
* **Example:** `cp file.txt /tmp/` copies file to `/tmp`.

## 7. `mv`

* **Usage:** Moves or renames files/directories.
* **Example:** `mv old.txt new.txt` renames a file.

## 8. `touch`

* **Usage:** Creates an empty file.
* **Example:** `touch app.log`

## 9. `cat`

* **Usage:** Concatenates and displays file contents.
* **Example:** `cat file.txt` shows the file’s contents.
* **Extra Use:** You can also combine files, e.g., `cat file1.txt file2.txt > combined.txt`.

## 10. `echo`

* **Usage:** Displays a line of text or writes to a file.
* **Example:** `echo "Hello World" > hello.txt`

## 11. `less` / `more`

* **Usage:** Views file content one screen at a time.
* **Example:** `less /var/log/syslog`

## 12. `head` & `tail`

* **Usage:** Shows the beginning (`head`) or end (`tail`) of a file.
* **Example:** `tail -f /var/log/syslog` (follow logs live).

## 13. `grep`

* **Usage:** Searches for patterns in files.
* **Example:** `grep error app.log` finds lines containing “error”.

## 14. `find`

* **Usage:** Searches for files and directories.
* **Example:** `find / -name app.log`

## 15. `chmod`

* **Usage:** Changes file permissions.
* **Example:** `chmod 755 script.sh`

## 16. `chown`

* **Usage:** Changes file ownership.
* **Example:** `chown ubuntu:ubuntu file.txt`

## 17. `ps`

* **Usage:** Displays running processes.
* **Example:** `ps aux | grep nginx`

## 18. `top` / `htop`

* **Usage:** Displays real-time system usage (CPU, memory, processes).
* **Example:** `top`

## 19. `df`

* **Usage:** Shows disk space usage.
* **Example:** `df -h`

## 20. `du`

* **Usage:** Shows file/directory size.
* **Example:** `du -sh /var/log`

## 21. `ifconfig` / `ip`

* **Usage:** Shows network interfaces and IPs.
* **Example:** `ip addr show`

## 22. `ping`

* **Usage:** Tests network connectivity.
* **Example:** `ping google.com`

## 23. `wget` / `curl`

* **Usage:** Downloads files or sends HTTP requests.
* **Example:** `wget https://example.com/file.zip`

## 24. `tar`

* **Usage:** Archives and extracts files.
* **Example:** `tar -czvf backup.tar.gz folder/`

## 25. `apt-get` / `apt`

* **Usage:** Installs, updates, and removes software packages.
* **Example:** `sudo apt update && sudo apt upgrade`

## 26. `systemctl`

* **Usage:** Manages system services.
* **Example:** `sudo systemctl restart nginx`

## 27. `journalctl`

* **Usage:** Views logs for systemd services.
* **Example:** `journalctl -u nginx`

## 28. `ssh`

* **Usage:** Connects to a remote server.
* **Example:** `ssh user@192.168.1.10`

## 29. `scp`

* **Usage:** Copies files between systems over SSH.
* **Example:** `scp file.txt user@server:/tmp/`

## 30. `nano`

* **Usage:** Opens files in the Nano text editor.
* **Example:** `nano file.txt`
* **Why:** Easy-to-use command-line editor.

---

### What is `sudo` and why is it used?

* **`sudo` (SuperUser DO):** Runs commands with administrative/root privileges.
* **Why:** Many system-level commands (like installing packages or modifying configs) require higher permissions. Instead of logging in as root, `sudo` gives temporary elevated rights.
* **Example:** `sudo apt install nginx`

---

✅ This set covers the **most essential commands** for a DevOps engineer.
