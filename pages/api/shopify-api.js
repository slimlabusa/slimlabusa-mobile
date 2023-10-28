export default async function saveCustomerDetails(req, res) {
  // Your Shopify store credentials
  const storeDomain = process.env["STORE-DOMAIN"];
  const accessToken = process.env["X-Shopify-Access-Token"];

  try {
    const response = await fetch(
      `${storeDomain}/admin/api/2023-10/customers.json`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": accessToken,
        },
        body: JSON.stringify(req.body),
      }
    );

    if (response.ok) {
      const customer = await response.json();
      res.status(200).json(customer);
    } else {
      const errorMessage = await response.text();
      res.status(200).json({
        error: "An error occurred while creating the customer.",
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ error: "An error occurred while creating the customer.", error });
  }
}
