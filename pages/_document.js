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
            <p>
              People use this YouTube thumbnail retrieval website to acquire thumbnails from YouTube videos. These thumbnails can be used in presentations, animation projects, and various other creative endeavors.
            </p>
            <p>
              How to Utilize this YouTube Thumbnail Retrieval Service?
            </p>
            <p>
              Using this service is straightforward. Start by copying the URL of the YouTube video from which you want to retrieve the thumbnail. Then, paste the URL into the input box. Once you've pasted the link, our system will automatically generate thumbnails in different sizes for you. Simply click the thumbnail download button, and the image will be instantly downloaded to your device. If you're using an Android phone, you'll need to save the images, while iPhone users may have a different process.
            </p>
            <p>
              Is it Legal to Download YouTube Thumbnails?
            </p>
            <p>
              Absolutely, it's completely legal to download thumbnails from YouTube videos. However, it's important to note that both the thumbnail and the video are copyrighted materials. Therefore, it's advisable to seek the necessary permissions from the content owner before reusing them.
            </p>
            <p>
              Compatibility of this YouTube Thumbnail Retrieval Website
            </p>
            <p>
              This YouTube thumbnail retrieval website is compatible with a wide range of devices, except for iPhones, which restrict image downloads. Nevertheless, if you have a jailbroken iPhone, there should be no issues. On the other hand, it works seamlessly on nearly all Android devices, laptops, and desktop systems.
            </p>
            <p>
              Is there a Copyright Risk Associated with YouTube Thumbnails?
            </p>
            <p>
              Every YouTube screenshot you download is subject to copyright protection by the respective video owner. If you intend to use these thumbnails, it's essential to obtain proper permission. This is especially critical if you plan to reuse them on YouTube, where copyright issues can arise. However, if your intended use is outside of YouTube, such as on a website for creating logos or in Photoshop projects, you're less likely to encounter DMCA complaints related to those specific YouTube thumbnails.
            </p>
            <p>
              Is Reusing YouTube Thumbnails SEO-Friendly?
            </p>
            <p>
              In short, reusing YouTube thumbnails is not considered SEO-friendly. This is because Google indexes nearly all YouTube thumbnails, allowing it to distinguish between unique and duplicate images. Consequently, reusing thumbnails can negatively impact your SEO ranking. However, you can enhance a thumbnail by applying unique effects using software like Photoshop or other tools, making it distinct and SEO-friendly once again.
            </p>
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
