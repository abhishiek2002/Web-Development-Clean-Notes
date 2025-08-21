<!-- -----Only for premium users------ -->

The user should be able to download a file containing all of his expenses.

Add this premium feature to the expense tracker project.

We are going to use AWS S3 bucket for this task

## Deliverable:

- Check whether the user is a premium user or not. If not a premium user return status code 401 - Unauthorized

- Make the backend API which queries all the expenses which the user has made and returns to the user as a file.

- Follow this playlist to understand the right way of doing this task [Why we should not store files in Servers The problem S3 solves](https://www.youtube.com/watch?v=cTFt2_8Fgd8&list=PL4dunL3FOEk0XNSrauPcapBXdyojKlM9x&t=1s)

copy this URL if the about link is showing error: https://www.youtube.com/watch?v=cTFt2_8Fgd8&list=PL4dunL3FOEk0XNSrauPcapBXdyojKlM9x&t=1s

- Please watch all the 11 videos and if you have an existing IAM user, simply add the S3 Full Access permission to it.

- Integrate it with frontend.

- When the user clicks on download file on the frontend, a S3 file URL containing his expense should be shown on the screen

## Bonus Task

- Show the list of files that the user has downloaded in the past with the date he downloaded on, so that he can download the old data as well.

- (Hint -Save the file URLs in a new table - watch this [video link](https://www.youtube.com/watch?v=eavHAlBNOXU) to understand how to do this)

`Answer the given question and upload the commit ID once done`
