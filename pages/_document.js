import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {/* Ajoutez le script pour votre API token de UngAds ici */}
          <script>
            {`
              const apiToken = 'b34ad9ae4cf04b5e7bafbab108924754';
            `}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Your provided text */}
          <div>
            <p>
              YouTube Thumbnail Downloader
              ▷ Save YouTube Video Thumbnails
            </p>
            <p>
              Obtain high-quality thumbnail images from any YouTube video, including Full HD (1080), HD (720), SD, and smaller sizes. Our platform currently supports various YouTube video formats, including HD, HQ, 1080p, and 4K videos.
            </p>
            <p>
              What's the Purpose of this YouTube Thumbnail Retrieval Website?
            </p>
            {/* Add the rest of your text here */}
            {/* ... */}
            <p>
              YouTube Video Thumbnail Download
            </p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
