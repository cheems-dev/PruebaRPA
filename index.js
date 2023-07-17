import fetch from "node-fetch";
import "dotenv/config";

const URL_BASE = `https://api.${process.env.SITES}.arcpublishing.com`;

const headers = {
  Accept: "application/json",
  "Content-Type": "aplication/json",
  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
};

const response = async (id) => {
  try {
    const res = await fetch(
      `${URL_BASE}/draft/v1/story/${id}/revision/published`,
      { method: "GET",headers }
    );
    const ans = await res.json();
    console.log("res: ", ans);
  } catch (err) {
    console.log("error: ", err);
  }
};

console.log(response("UHK4GA4FNZHX3L6ELABUOGAY7Q"));
