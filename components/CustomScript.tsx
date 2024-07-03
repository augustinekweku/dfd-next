import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script src="/js/jquery-3.5.1.min.js" type="text/javascript"></Script>
      <Script src="/js/bootstrap.min.js" type="text/javascript"></Script>
      <Script src="/js/main.js" type="text/javascript"></Script>
      <Script
        src="/js/custom.js"
        type="text/javascript
      "
      ></Script>
      <Script src="/js/aos.js" type="text/javascript"></Script>
    </>
  );
};

export default CustomScript;
