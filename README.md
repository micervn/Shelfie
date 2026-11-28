# Shelfie

A cozy, offline reader for ebooks and PDFs. Runs as an installed web app on **iPhone, iPad and Android**.
Books, covers, highlights and reading stats are stored only on the device.

Reads: **EPUB, PDF, MOBI, AZW3, FB2 / FBZ, CBZ (comics), HTML and TXT**.
HTML books are split into chapters at their headings; pictures embedded in the file come along, pictures that were separate files don't. Books must be DRM-free
(books bought in Kindle, Google Play Books or Apple Books are usually copy-protected and won't open).

## Put it online (free, GitHub Pages)

1. Create a free account at github.com and make a new **public** repository, for example `shelfie`.
2. On the repository page choose **Add file > Upload files**, select **every file in this folder**, and commit.
3. Go to **Settings > Pages**. Pick **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. After a minute or two your app is live at `https://YOUR-USERNAME.github.io/shelfie/`.

## Install on iPhone / iPad

1. Open the address in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open Shelfie from the Home Screen and add your books there (books added in the Safari tab don't carry over).

## Install on Android

1. Open the address in **Chrome**.
2. Tap **Install Shelfie** on the welcome screen, or tap **⋮** (top right) > **Add to Home screen** / **Install app** > **Install**.
   Samsung Internet: **≡** > **Add page to** > **Home screen**. Firefox: **⋮** > **Install**.
3. Open Shelfie from your home screen or app drawer.

Adding books on Android: tap **+** in Shelfie and pick files, or, in the Files app (or a download notification, Drive, email…),
choose **Share > Shelfie**. The back button closes the open menu or book instead of leaving the app.

## Updating

Upload the new files to the same repository (**Add file > Upload files**, select all, commit). Same-named files are replaced.
Open Shelfie while online, close it fully, and open it again. Settings > Check for updates shows the version.
Your books and notes are not touched.

Built with foliate-js (MIT) and PDF.js (Apache 2.0). See LICENSES.txt.
