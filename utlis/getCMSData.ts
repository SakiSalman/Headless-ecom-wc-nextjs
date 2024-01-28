const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const api = new WooCommerceRestApi({
    url: `${process.env.NEXT_PUBLIC_URL}`,
    consumerKey: `${process.env.WOO_CONSUMER}`,
    consumerSecret: `${process.env.WOO_SECRET}`,
    version: "wc/v3"
  });


export const getData = async (url:string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/` + "wp-json/rae/v1/" + url)
    return response.json()
}


export const getWoocommerData = async (endPoint:string) => {

  const res =  await api.get(endPoint, {
        per_page: 12,
    }).then((response:any) => {
        // Successful request
        return response
      })
      .catch((error:any) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error);
      })
      .finally(() => {
        // Always executed.
      });

      return res

}