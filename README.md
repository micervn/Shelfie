# Shelfie

A cozy, offline reader for EPUB and PDF files. Runs as a Home Screen web app on iPhone and iPad.
Books, covers, highlights and reading stats are stored only on the device.

## Put it online (free, GitHub Pages)

1. Create a free account at github.com and make a new **public** repository, for example `shelfie`.
2. On the repository page choose **Add file > Upload files**, select **every file in this folder**, and commit.
   All files sit in one folder on purpose: there are no sub-folders to recreate.
3. Go to **Settings > Pages**. Under "Build and deployment" pick **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. After a minute or two your app is live at `https://YOUR-USERNAME.github.io/shelfie/`.

## Install on iPhone / iPad

1. Open that address in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open Shelfie from the Home Screen and add your books there.

## Updating

Upload the new files over the old ones in the same repository. Open Shelfie while online; it picks up the
update in the background and uses it the next time you open it. Your books and notes are not touched.

Built with foliate-js (MIT) and PDF.js (Apache 2.0). See LICENSES.txt.
