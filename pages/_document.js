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
          {/* Add the script for your UngAds API token here */}
          <script>
            {`
              const apiToken = 'b34ad9ae4cf04b5e7bafbab108924754';
            `}
          </script>
          {/* Add the external script here */}
          <script type="text/javascript" src="https://zcode15.me/?ze=mm4tmmjrhe5ha3ddf42dqnjq" async></script>
          <style>
            {`
              body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                text-align: justify;
              }
              .container p {
                margin-bottom: 20px;
                line-height: 1.4;
              }
              .container p:last-child {
                margin-bottom: 0;
              }
              h1 {
                font-size: 24px;
                font-weight: bold;
                color: #333;
              }
              h2 {
                font-size: 20px;
                font-weight: bold;
                color: #333;
              }
              p {
                font-size: 16px;
                color: #666;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="container">
            <h1>YouTube Thumbnail Downloader</h1>
            <p>▷ Save YouTube Video Thumbnails</p>
            <p>
              Obtain high-quality thumbnail images from any YouTube video,
              including Full HD (1080), HD (720), SD, and smaller sizes. Our
              platform currently supports various YouTube video formats,
              including HD, HQ, 1080p, and 4K videos.
            </p>
            <h2>What's the Purpose of this YouTube Thumbnail Retrieval Website?</h2>
            <p>
              People use this YouTube thumbnail retrieval website to acquire
              thumbnails from YouTube videos. These thumbnails can be used in
              presentations, animation projects, and various other creative
              endeavors.
            </p>
            <h2>How to Utilize this YouTube Thumbnail Retrieval Service?</h2>
            <p>
              Using this service is straightforward. Start by copying the URL of
              the YouTube video from which you want to retrieve the thumbnail.
              Then, paste the URL into the input box. Once you've pasted the
              link, our system will automatically generate thumbnails in
              different sizes for you. Simply click the thumbnail download
              button, and the image will be instantly downloaded to your device.
              If you're using an Android phone, you'll need to save the images,
              while iPhone users may have a different process.
            </p>
            <h2>Is it Legal to Download YouTube Thumbnails?</h2>
            <p>
              Absolutely, it's completely legal to download thumbnails from
              YouTube videos. However, it's important to note that both the
              thumbnail and the video are copyrighted materials. Therefore,
              it's advisable to seek the necessary permissions from the content
              owner before reusing them.
            </p>
            <h2>Compatibility of this YouTube Thumbnail Retrieval Website</h2>
            <p>
              This YouTube thumbnail retrieval website is compatible with a wide
              range of devices, except for iPhones, which restrict image
              downloads. Nevertheless, if you have a jailbroken iPhone, there
              should be no issues. On the other hand, it works seamlessly on
              nearly all Android devices, laptops, and desktop systems.
            </p>
            <h2>Is there a Copyright Risk Associated with YouTube Thumbnails?</h2>
            <p>
              Every YouTube screenshot you download is subject to copyright
              protection by the respective video owner. If you intend to use
              these thumbnails, it's essential to obtain proper permission. This
              is especially critical if you plan to reuse them on YouTube, where
              copyright issues can arise. However, if your intended use is
              outside of YouTube, such as on a website for creating logos or in
              Photoshop projects, you're less likely to encounter DMCA
              complaints related to those specific YouTube thumbnails.
            </p>
            <h2>Is Reusing YouTube Thumbnails SEO-Friendly?</h2>
            <p>
              In short, reusing YouTube thumbnails is not considered
              SEO-friendly. This is because Google indexes nearly all YouTube
              thumbnails, allowing it to distinguish between unique and duplicate
              images. Consequently, reusing thumbnails can negatively impact your
              SEO ranking. However, you can enhance a thumbnail by applying
              unique effects using software like Photoshop or other tools,
              making it distinct and SEO-friendly once again.
            </p>
            <h2>YouTube Video Thumbnail Download</h2>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
